import Link from "next/link";
import { PHONE, PRIMARY_CTA, HOURS } from "../lib/site";

const points = [
  "Real human hair",
  "Undetectable hairline",
  "No surgery, same-day results",
];

export default function HomeHero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg,#0c0c0c 0%,#1c0404 55%,#7a0d0d 115%)" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px,#fff 1px,transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <p className="eyebrow text-red-bright mb-5">
            Men&apos;s Hair Replacement · Orange County, CA
          </p>
          <h1 className="font-slab text-4xl sm:text-5xl md:text-[3.4rem] font-extrabold leading-[1.04]">
            Get your hair back.
            <br />
            <span className="text-red-bright">Get your confidence back.</span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-xl body-base">
            ManHair Online builds custom, non-surgical hair systems from 100% real human
            hair — designed to your exact hairline for a look no one will ever detect. Walk
            in thinning, walk out with a full head of hair.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-white/85">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-red text-[11px] font-bold">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link
              href={PRIMARY_CTA.href}
              className="rounded-full bg-red px-8 py-4 text-center font-semibold text-white hover:bg-red-bright transition-colors"
            >
              {PRIMARY_CTA.label}
            </Link>
            <a
              href={PHONE.href}
              className="rounded-full border border-white/25 px-8 py-4 text-center font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call {PHONE.display}
            </a>
          </div>
          <p className="mt-4 text-sm text-white/45">
            {HOURS.note} · Private studio at 20 Heron, Lake Forest
          </p>
        </div>

        {/* Visual card */}
        <div className="relative">
          <div className="rounded-3xl border border-white/12 bg-white/[0.04] backdrop-blur p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-black/40 p-5 text-center">
                <p className="eyebrow text-white/45 mb-2">Before</p>
                <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-b from-white/10 to-transparent grid place-items-center text-white/30 text-xs">
                  thinning
                </div>
              </div>
              <div className="rounded-2xl p-5 text-center" style={{ background: "linear-gradient(180deg,#db2020,#7a0d0d)" }}>
                <p className="eyebrow text-white/80 mb-2">After</p>
                <div className="mx-auto h-28 w-28 rounded-full bg-white/15 grid place-items-center text-white text-xs font-semibold">
                  full head
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <Stat n="6 wks" l="between visits" />
              <Stat n="30–45m" l="maintenance" />
              <Stat n="100%" l="real human hair" />
            </div>
            <Link
              href="/before-after/"
              className="mt-6 block text-center text-sm font-semibold text-white/80 hover:text-white"
            >
              See real transformations →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-xl bg-white/[0.05] py-4">
      <div className="font-slab text-xl font-extrabold text-white">{n}</div>
      <div className="text-[0.7rem] uppercase tracking-wide text-white/50 mt-1">{l}</div>
    </div>
  );
}
