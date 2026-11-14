import { qrBarcodeToolkitPolicy } from "./qr-barcode-toolkit";
import { colorQuestPolicy } from "./color-quest";
import { hearthAndHuePolicy } from "./hearth-and-hue";
import type { AppPrivacyPolicy } from "./types";

export const appPrivacyPolicies: AppPrivacyPolicy[] = [
  qrBarcodeToolkitPolicy,
  colorQuestPolicy,
  hearthAndHuePolicy,
];

export function appPrivacyPath(slug: string) {
  return `/apps/${slug}/privacy`;
}

export const publishedAppPrivacyPolicies = appPrivacyPolicies.filter(
  (policy) => policy.status === "published",
);

// Public previews require explicit owner authorization; local previews stay private.
export const publicAppPrivacyPolicies = appPrivacyPolicies.filter(
  (policy) => policy.status !== "preview",
);
export function availableAppPrivacyPolicies() {
  return process.env.NODE_ENV === "development"
    ? appPrivacyPolicies
    : publicAppPrivacyPolicies;
}
