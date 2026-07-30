const reviews = [
  {
    quote:
      "I'd been hiding under a hat for years. The hairline they built looks completely real — my own barber couldn't tell. Total game-changer for my confidence.",
    name: "Mike R.",
    city: "Irvine, CA",
  },
  {
    quote:
      "No surgery, no waiting months for results. I came in thinning and walked out with a full head of hair the same day. Wish I'd done this sooner.",
    name: "David T.",
    city: "Mission Viejo, CA",
  },
  {
    quote:
      "What sold me was how private and low-pressure it was. Justin and the team actually care. They taught me to maintain it myself and I've saved a fortune.",
    name: "Carlos M.",
    city: "Santa Ana, CA",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-smoke">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-red mb-3">Real Men, Real Results</p>
          <h2 className="font-slab text-3xl md:text-4xl font-extrabold text-ink">
            Confidence, restored
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col rounded-2xl bg-white border border-line p-7">
              <div className="text-red text-lg" aria-hidden>
                ★★★★★
              </div>
              <blockquote className="mt-4 flex-1 text-ink/85 leading-relaxed">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <span className="block font-semibold text-ink">{r.name}</span>
                <span className="block text-sm text-steel">{r.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-steel">
          Testimonials reflect individual experiences. Results vary from person to person.
        </p>
      </div>
    </section>
  );
}
