import Link from "next/link";
import { PHONE, PRIMARY_CTA, HOURS } from "../lib/site";

export default function CtaBanner({
  heading = "It's time. Get your hair back. Get your confidence back.",
  sub = "Book a 100% free, private discovery call with a ManHair specialist. No pressure, no pushy salesmen — just honest answers about your options.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="bg-jet text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 text-center">
        <h2 className="font-slab text-3xl md:text-4xl font-extrabold max-w-3xl mx-auto leading-tight">
          {heading}
        </h2>
        <p className="mt-5 text-white/70 max-w-2xl mx-auto body-base">{sub}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={PRIMARY_CTA.href}
            className="rounded-full bg-red px-8 py-4 font-semibold text-white hover:bg-red-bright transition-colors"
          >
            {PRIMARY_CTA.label}
          </Link>
          <a
            href={PHONE.href}
            className="rounded-full border border-white/25 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Call {PHONE.display}
          </a>
        </div>
        <p className="mt-5 text-sm text-white/45">
          {HOURS.note} · 20 Heron, Lake Forest, CA 92630
        </p>
      </div>
    </section>
  );
}
