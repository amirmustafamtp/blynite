import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  noindex = false,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Blynite`,
      description,
      url: `${site.url}${path}`,
      type: "website",
      siteName: "Blynite",
      images: [
        {
          url: "/brand/social-cover.jpg",
          width: 1702,
          height: 630,
          alt: `Blynite — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Blynite`,
      description,
      images: ["/brand/social-cover.jpg"],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
