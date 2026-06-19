import Link from "next/link";
import { SERVICES } from "../lib/site";

export default function ServicesGrid({
  heading = "Your hair, your way",
  eyebrow = "What We Do",
  intro = "Every man's hair loss is different. We build the right solution around you — undetectable, comfortable, and built to fit your life.",
}: {
  heading?: string;
  eyebrow?: string;
  intro?: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-red mb-3">{eyebrow}</p>
          <h2 className="font-slab text-3xl md:text-4xl font-extrabold text-ink">{heading}</h2>
          <p className="mt-4 text-steel body-base">{intro}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group relative overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all hover:border-red/40 hover:shadow-[0_18px_40px_rgba(183,28,28,0.10)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-slab text-5xl font-extrabold text-smoke group-hover:text-red/15 transition-colors">
                  0{i + 1}
                </span>
                <span className="mt-2 text-red opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <h3 className="mt-2 font-slab text-xl font-bold text-ink group-hover:text-red transition-colors">
                {s.title}
              </h3>
              <p className="mt-2.5 text-steel text-[0.95rem] leading-relaxed">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
