import "server-only";
import type { DeliveryConfig } from "./contact-server";
export function contactConfig(): DeliveryConfig {
  return {
    provider: process.env.CONTACT_PROVIDER,
    to: process.env.CONTACT_TO_EMAIL,
    from: process.env.CONTACT_FROM_EMAIL,
    apiKey: process.env.RESEND_API_KEY,
    webhookUrl: process.env.CONTACT_WEBHOOK_URL,
    webhookToken: process.env.CONTACT_WEBHOOK_TOKEN,
    secret: process.env.CONTACT_FORM_SECRET,
  };
}
