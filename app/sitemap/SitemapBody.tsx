"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { PageMeta } from "../lib/pageMeta";
import type { SitemapGroup } from "./page";

const ease = [0.22, 1, 0.36, 1] as const;

function labelFor(p: PageMeta): string {
  return (
    p.title.replace(/\s*\|\s*Reno Regenerative Medicine.*$/i, "").trim() ||
    p.title
  );
}

function Icon({ name }: { name: SitemapGroup["icon"] }) {
  const stroke = "currentColor";
  switch (name) {
    case "compass":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="m15 9-2 6-6 2 2-6 6-2Z" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" />
        </svg>
      );
    case "tag":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12V4h8l10 10-8 8L3 12Z" />
          <circle cx="7.5" cy="7.5" r="1.2" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z" />
        </svg>
      );
    case "more":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="1.4" />
          <circle cx="12" cy="12" r="1.4" />
          <circle cx="18" cy="12" r="1.4" />
        </svg>
      );
  }
}

type Props = {
  groups: SitemapGroup[];
  posts: PageMeta[];
  totalLinks: number;
};

export default function SitemapBody({ groups, posts, totalLinks }: Props) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g,
        pages: g.pages.filter(
          (p) =>
            labelFor(p).toLowerCase().includes(q) ||
            p.slug.toLowerCase().includes(q),
        ),
      }))
      .filter((g) => g.pages.length > 0);
  }, [groups, q]);

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => labelFor(a).localeCompare(labelFor(b))),
    [posts],
  );

  const filteredPosts = useMemo(() => {
    if (!q) return sortedPosts;
    return sortedPosts.filter(
      (p) =>
        labelFor(p).toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q),
    );
  }, [sortedPosts, q]);

  const visibleCount =
    filteredGroups.reduce((n, g) => n + g.pages.length, 0) +
    filteredPosts.length;

  return (
    <section className="bg-cream">
      {/* Stats / search bar */}
      <div className="border-b border-[#e8e4d9] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-[#3d7a52]">
                Site Directory
              </span>
              <h2 className="mt-3 font-serif-display text-3xl text-ink sm:text-4xl">
                Every page, in one place.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink/70">
                Use the search to jump to any service, condition, or article —
                or browse the sections below.
              </p>
            </div>

            <div className="flex flex-wrap items-stretch gap-3 lg:flex-nowrap">
              <Stat label="Total links" value={totalLinks} />
              <Stat label="Articles" value={posts.length} />
              <Stat label="Sections" value={groups.length} />
            </div>
          </div>

          <div className="mt-8">
            <label className="relative block">
              <span className="sr-only">Search the sitemap</span>
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, services, conditions, articles…"
                className="w-full rounded-full border border-[#e8e4d9] bg-cream/60 py-3.5 pl-12 pr-5 text-base text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-[#3d7a52] focus:bg-white"
              />
            </label>
            {q && (
              <p className="mt-3 text-sm text-ink/60">
                {visibleCount === 0
                  ? "No matches — try a different term."
                  : `${visibleCount} match${visibleCount === 1 ? "" : "es"} for “${query}”.`}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Group cards */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group, i) => (
            <motion.article
              key={group.heading}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.04 }}
              className="group relative flex flex-col rounded-2xl border border-[#e8e4d9] bg-white p-7 shadow-[0_1px_2px_rgba(10,18,13,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#c6b180] hover:shadow-[0_18px_40px_-24px_rgba(10,18,13,0.25)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3d99a]/30 text-[#3d7a52]">
                  <Icon name={group.icon} />
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink/40">
                  {group.pages.length} {group.pages.length === 1 ? "page" : "pages"}
                </span>
              </div>

              <h3 className="font-serif-display text-2xl text-ink">
                {group.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {group.description}
              </p>

              <ul className="mt-6 space-y-1.5 border-t border-[#e8e4d9]/70 pt-5">
                {group.pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={p.slug}
                      className="group/link flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-[15px] text-ink/80 transition-colors hover:bg-[#f6f3ea] hover:text-[#0a120d]"
                    >
                      <span className="truncate">{labelFor(p)}</span>
                      <span
                        aria-hidden
                        className="text-ink/30 opacity-0 transition-all group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Blog Articles */}
        {filteredPosts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-end justify-between border-b border-[#e8e4d9] pb-5">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#3d7a52]">
                  Journal
                </span>
                <h2 className="mt-2 font-serif-display text-3xl text-ink sm:text-4xl">
                  Blog Articles
                </h2>
              </div>
              <span className="hidden text-sm text-ink/50 sm:block">
                {filteredPosts.length} of {posts.length} · alphabetical
              </span>
            </div>

            <ul className="mt-8 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <li
                  key={post.slug}
                  className="border-b border-dashed border-[#e8e4d9]"
                >
                  <Link
                    href={post.slug}
                    className="flex items-start gap-3 py-3 text-[15px] leading-snug text-ink/80 transition-colors hover:text-[#3d7a52]"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#c6b180]"
                    />
                    <span>{labelFor(post)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-[120px] rounded-xl border border-[#e8e4d9] bg-cream/50 px-5 py-4 text-center">
      <div className="font-serif-display text-3xl text-ink">{value}</div>
      <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/55">
        {label}
      </div>
    </div>
  );
}
