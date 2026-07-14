import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://nityam.garurcs.in/sitemap.xml",

    host: "https://nityam.garurcs.in",
  };
}