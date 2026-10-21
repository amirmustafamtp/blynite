import type { ReactNode } from "react";

export type AppPrivacyPolicy = {
  slug: string;
  name: string;
  platform: string;
  version: string;
  contactEmail: string;
  summary: string;
  sections: { id: string; title: string; content: ReactNode }[];
} & (
  | { status: "preview"; effectiveDate: null }
  | { status: "published"; effectiveDate: string }
);
