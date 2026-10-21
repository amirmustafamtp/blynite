import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Blynite — Engineering What's Next.",
    template: "%s | Blynite",
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              logo: `${site.url}/brand/logo-navy.svg`,
              slogan: site.tagline,
              description: site.description,
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
