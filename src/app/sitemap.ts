import type { MetadataRoute } from "next";
import { navigation, site } from "@/data/site";
import { services } from "@/data/services";
import { publicCaseStudies, publicProducts } from "@/data/catalog";
import {
  appPrivacyPath,
  publishedAppPrivacyPolicies,
} from "@/data/app-policies";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/privacy",
    "/terms",
    "/apps/privacy",
    ...publishedAppPrivacyPolicies.map((policy) => appPrivacyPath(policy.slug)),
    ...navigation.map((item) => item.href),
    ...services.map((item) => `/services/${item.slug}`),
    ...publicProducts.map((item) => `/products/${item.slug}`),
    ...publicCaseStudies.map((item) => `/work/${item.slug}`),
  ].map((path) => ({ url: `${site.url}${path === "/" ? "" : path}` }));
}
