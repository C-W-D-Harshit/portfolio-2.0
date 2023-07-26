import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/projects", "/skills", "/about", "/contact"],
      disallow: ["/"],
    },
    sitemap: "https://cleverdevloper.in/sitemap.xml",
  };
}
