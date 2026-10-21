import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Terms of Service — Draft",
  "Blynite's draft terms of service, pending review before launch.",
  "/terms",
  true,
);
export default function Terms() {
  return <LegalPage type="terms" />;
}
