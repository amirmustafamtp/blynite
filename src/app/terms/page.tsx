import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Terms of Service",
  "Terms for using Blynite’s website, accessing its content, and submitting project inquiries.",
  "/terms",
);
export default function Terms() {
  return <LegalPage type="terms" />;
}
