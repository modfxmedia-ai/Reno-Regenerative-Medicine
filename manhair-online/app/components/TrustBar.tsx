const items = [
  "Undetectable Hairlines",
  "Real Human Hair",
  "No Surgery · No Scarring",
  "Shower · Swim · Train",
  "By Appointment Only",
  "Private 1-on-1 Service",
  "Serving All of Orange County",
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-smoke overflow-hidden">
      <div className="relative flex">
        <div className="marquee-track flex shrink-0 items-center gap-10 py-4 pr-10 whitespace-nowrap">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-semibold text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-red" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
