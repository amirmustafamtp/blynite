import { qrBarcodeToolkitPolicy } from "./qr-barcode-toolkit";
import type { AppPrivacyPolicy } from "./types";

export const appPrivacyPolicies: AppPrivacyPolicy[] = [qrBarcodeToolkitPolicy];

export function appPrivacyPath(slug: string) {
  return `/apps/${slug}/privacy`;
}

export const publishedAppPrivacyPolicies = appPrivacyPolicies.filter(
  (policy) => policy.status === "published",
);

// Unfinished policies can be reviewed locally but are never served in production.
export function availableAppPrivacyPolicies() {
  return process.env.NODE_ENV === "development"
    ? appPrivacyPolicies
    : publishedAppPrivacyPolicies;
}
