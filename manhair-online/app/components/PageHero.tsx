import Link from "next/link";
import { PHONE, PRIMARY_CTA } from "../lib/site";

export interface Crumb {
  label: string;
  href?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  showCta = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  showCta?: boolean;
}) {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg,#0c0c0c 0%,#2a0707 60%,#7a0d0d 100%)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24 text-center">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-xs text-white/55">
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span className="text-white/30">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="eyebrow text-red-bright mb-4">{eyebrow}</p>
        )}
        <h1 className="font-slab text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.08] max-w-3xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-white/75 max-w-2xl mx-auto body-base">{subtitle}</p>
        )}

        {showCta && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={PRIMARY_CTA.href}
              className="rounded-full bg-red px-7 py-3.5 font-semibold text-white hover:bg-red-bright transition-colors"
            >
              {PRIMARY_CTA.label}
            </Link>
            <a
              href={PHONE.href}
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call {PHONE.display}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
