import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Blynite",
    short_name: "Blynite",
    description: "Ignite What's Next.",
    start_url: "/",
    display: "standalone",
    background_color: "#061B34",
    theme_color: "#061B34",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
