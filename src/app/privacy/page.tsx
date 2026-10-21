import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Privacy Policy — Draft",
  "Blynite's draft privacy policy, pending review before launch.",
  "/privacy",
  true,
);
export default function Privacy() {
  return <LegalPage type="privacy" />;
}
