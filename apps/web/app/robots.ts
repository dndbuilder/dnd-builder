import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Disallow API routes
        "/_components/", // Disallow internal components
      ],
    },
    sitemap: "https://pagebuilder.example.com/sitemap.xml",
  };
}