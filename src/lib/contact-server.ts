import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import type { Inquiry } from "./contact";

export type DeliveryConfig = {
  provider?: string;
  to?: string;
  from?: string;
  apiKey?: string;
  webhookUrl?: string;
  webhookToken?: string;
  secret?: string;
};
export function deliveryReady(config: DeliveryConfig) {
  if (
    !config.secret ||
    config.secret.length < 32 ||
    !config.to ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.to)
  )
    return false;
  if (config.provider === "resend")
    return Boolean(config.from && config.apiKey);
  if (config.provider === "webhook") {
    try {
      return (
        new URL(config.webhookUrl ?? "").protocol === "https:" &&
        Boolean(config.webhookToken)
      );
    } catch {
      return false;
    }
  }
  return false;
}
export function issueToken(secret: string, now = Date.now()) {
  const payload = `${now}.${randomBytes(16).toString("hex")}`;
  return `${payload}.${createHmac("sha256", secret).update(payload).digest("hex")}`;
}
export function verifyToken(token: unknown, secret: string, now = Date.now()) {
  if (
    typeof token !== "string" ||
    !/^\d{13}\.[a-f0-9]{32}\.[a-f0-9]{64}$/.test(token)
  )
    return false;
  const [timestamp, nonce, signature] = token.split(".");
  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${nonce}`)
    .digest();
  const age = now - Number(timestamp);
  return (
    age >= 2000 &&
    age <= 60 * 60 * 1000 &&
    timingSafeEqual(expected, Buffer.from(signature, "hex"))
  );
}
// Bounded, process-local protection. A production gateway must enforce a distributed limit.
export class RateLimiter {
  private entries = new Map<string, { count: number; expires: number }>();
  constructor(
    private max = 5,
    private window = 15 * 60 * 1000,
  ) {}
  allow(key: string, now = Date.now()) {
    for (const [id, entry] of this.entries)
      if (entry.expires <= now) this.entries.delete(id);
    const current = this.entries.get(key);
    if (current) {
      if (current.count >= this.max) return false;
      current.count++;
      return true;
    }
    if (this.entries.size >= 10000) return false;
    this.entries.set(key, { count: 1, expires: now + this.window });
    return true;
  }
}
export async function deliverInquiry(
  inquiry: Inquiry,
  config: DeliveryConfig,
  fetcher: typeof fetch = fetch,
) {
  if (!deliveryReady(config)) throw new Error("Delivery is not configured");
  const text = `New Blynite project inquiry\n\nName: ${inquiry.name}\nEmail: ${inquiry.email}\nCompany: ${inquiry.company || "Not supplied"}\nService: ${inquiry.service}\nBudget: ${inquiry.budget || "Not supplied"}\nConsent: Yes, contact about this inquiry\n\n${inquiry.description}`;
  const response = await fetcher(
    config.provider === "resend"
      ? "https://api.resend.com/emails"
      : config.webhookUrl!,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.provider === "resend" ? config.apiKey : config.webhookToken}`,
      },
      body: JSON.stringify(
        config.provider === "resend"
          ? {
              from: config.from,
              to: [config.to],
              reply_to: inquiry.email,
              subject: "New Blynite project inquiry",
              text,
            }
          : { event: "contact.inquiry", to: config.to, inquiry },
      ),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    },
  );
  if (!response.ok) throw new Error("Delivery provider rejected the inquiry");
  if (config.provider === "resend") {
    const result = (await response.json()) as { id?: unknown };
    if (typeof result.id !== "string" || !result.id)
      throw new Error("Delivery provider did not acknowledge the inquiry");
  }
}
