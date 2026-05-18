import type { MetadataRoute } from "next";
import { ALL_PAGES } from "./lib/pageMeta";
import { getAllSlugs } from "./lib/pseo/combinations";

const SITE = "https://renoregen.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = ALL_PAGES.map((p) => ({
    url: `${SITE}${p.slug}`,
    lastModified: now,
    changeFrequency: p.changefreq ?? "monthly",
    priority: p.priority ?? 0.5,
  }));

  // Programmatic SEO combos (service × location), e.g. /spinal-decompression-sparks-nv/
  const pseoPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${SITE}/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...corePages, ...pseoPages];
}
