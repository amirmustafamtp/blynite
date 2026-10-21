export type Publication = "draft" | "approved" | "published";
export type Product = {
  slug: string;
  name: string;
  logo?: string;
  description: string;
  screenshot?: { src: string; alt: string };
  category: string;
  url?: string;
  status: "In development" | "Early access" | "Available";
  publication: Publication;
  approvedForPublic: boolean;
  features: string[];
};
export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  technology: string[];
  screenshots: { src: string; alt: string }[];
  outcomes: { statement: string; evidenceReference: string }[];
  publication: Publication;
  approvedForPublic: boolean;
  confidential: boolean;
};

export const products: Product[] = [];
export const caseStudies: CaseStudy[] = [];
export function isPublic(entry: {
  publication: Publication;
  approvedForPublic: boolean;
}) {
  return entry.publication === "published" && entry.approvedForPublic;
}
export const publicProducts = products.filter(isPublic);
export const publicCaseStudies = caseStudies.filter(
  (entry) => isPublic(entry) && !entry.confidential,
);
