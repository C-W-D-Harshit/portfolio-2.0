import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cleverdevloper.in",
      lastModified: new Date(),
    },
    {
      url: "https://cleverdevloper.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://cleverdevloper.in/projects",
      lastModified: new Date(),
    },
    {
      url: "https://cleverdevloper.in/skills",
      lastModified: new Date(),
    },
    {
      url: "https://cleverdevloper.in/contact",
      lastModified: new Date(),
    },
  ];
}
