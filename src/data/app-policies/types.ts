import type { ReactNode } from "react";

export type AppPrivacyPolicy = {
  slug: string;
  name: string;
  platform: string;
  version: string;
  contactEmail: string;
  summary: string;
  hideDraftNotice?: boolean;
  hideDirectoryLink?: boolean;
  sections: { id: string; title: string; content: ReactNode }[];
} & (
  | { status: "preview" | "public-preview"; effectiveDate: null }
  | { status: "published"; effectiveDate: string }
);
