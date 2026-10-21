import { createHash } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { contactConfig } from "@/lib/contact-config";
import { validateInquiry } from "@/lib/contact";
import {
  deliverInquiry,
  deliveryReady,
  issueToken,
  RateLimiter,
  verifyToken,
} from "@/lib/contact-server";
import { site } from "@/data/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const limiter = new RateLimiter();
const globalLimiter = new RateLimiter(30);
const reply = (body: object, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
export async function GET() {
  const config = contactConfig();
  return deliveryReady(config)
    ? reply({ available: true, token: issueToken(config.secret!) })
    : reply({ available: false });
}
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const allowed = new Set([site.url]);
  if (process.env.NODE_ENV !== "production")
    allowed.add(request.nextUrl.origin);
  if (!origin || !allowed.has(origin))
    return reply(
      { message: "Please submit your inquiry from the Blynite website." },
      403,
    );
  const config = contactConfig();
  if (!deliveryReady(config))
    return reply(
      {
        message:
          "Online inquiries are not available yet. No information has been sent.",
      },
      503,
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return reply({ message: "Unsupported request format." }, 415);
  if (Number(request.headers.get("content-length")) > 16000)
    return reply({ message: "Your inquiry is too long." }, 413);
  // Read with a hard cap even if Content-Length is missing or incorrect.
  const reader = request.body?.getReader();
  if (!reader) return reply({ message: "An inquiry is required." }, 400);
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > 16000) {
      await reader.cancel();
      return reply({ message: "Your inquiry is too long." }, 413);
    }
    chunks.push(value);
  }
  let raw: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error();
    raw = parsed as Record<string, unknown>;
  } catch {
    return reply({ message: "Please check your inquiry and try again." }, 400);
  }
  if (raw.website || !verifyToken(raw.token, config.secret!))
    return reply(
      {
        message:
          "Please refresh the form and wait a moment before trying again.",
      },
      400,
    );
  const result = validateInquiry(raw);
  if (!result.data)
    return reply(
      {
        message: "Please check the highlighted fields.",
        errors: result.errors,
      },
      422,
    );
  const forwarded =
    process.env.RATE_LIMIT_TRUST_PROXY === "true"
      ? request.headers.get("x-forwarded-for")?.split(",")[0].trim()
      : undefined;
  const key = createHash("sha256")
    .update(forwarded || result.data.email.toLowerCase())
    .digest("hex");
  if (!limiter.allow(key) || !globalLimiter.allow("all"))
    return reply(
      {
        message:
          "Too many inquiries right now. Please try again in 15 minutes.",
      },
      429,
    );
  try {
    await deliverInquiry(result.data, config);
    return reply({
      message: "Your inquiry has been sent.",
    });
  } catch {
    return reply(
      {
        message:
          "We couldn't confirm delivery. Please try again later; your inquiry has not been saved by this website.",
      },
      502,
    );
  }
}
