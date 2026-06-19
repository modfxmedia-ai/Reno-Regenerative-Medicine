import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { getAllSlugs } from "./lib/pseo/combinations";

// Core canonical routes with their sitemap priority/frequency.
const CORE: { path: string; priority: number; changefreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/how-it-works/", priority: 0.8, changefreq: "monthly" },
  { path: "/hair-systems/", priority: 0.9, changefreq: "monthly" },
  { path: "/mens-hair-styles/", priority: 0.8, changefreq: "monthly" },
  { path: "/receding-hairline/", priority: 0.8, changefreq: "monthly" },
  { path: "/alopecia/", priority: 0.8, changefreq: "monthly" },
  { path: "/before-after/", priority: 0.7, changefreq: "monthly" },
  { path: "/pricing/", priority: 0.7, changefreq: "monthly" },
  { path: "/about/", priority: 0.6, changefreq: "monthly" },
  { path: "/areas-we-serve/", priority: 0.8, changefreq: "monthly" },
  { path: "/faq/", priority: 0.6, changefreq: "monthly" },
  { path: "/contact/", priority: 0.7, changefreq: "monthly" },
  { path: "/privacy-policy/", priority: 0.2, changefreq: "yearly" },
  { path: "/terms/", priority: 0.2, changefreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = CORE.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changefreq,
    priority: p.priority,
  }));

  // Programmatic city × service pages
  const pseoPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...corePages, ...pseoPages];
}
