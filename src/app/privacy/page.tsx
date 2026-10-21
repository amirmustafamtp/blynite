import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Privacy Policy",
  "How Blynite handles personal information, project inquiries, hosting, and privacy requests.",
  "/privacy",
);
export default function Privacy() {
  return <LegalPage type="privacy" />;
}
