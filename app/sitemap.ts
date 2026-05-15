import type { MetadataRoute } from "next";
import { ALL_PAGES } from "./lib/pageMeta";

const SITE = "https://renoregen.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ALL_PAGES.map((p) => ({
    url: `${SITE}${p.slug}`,
    lastModified: now,
    changeFrequency: p.changefreq ?? "monthly",
    priority: p.priority ?? 0.5,
  }));
}
