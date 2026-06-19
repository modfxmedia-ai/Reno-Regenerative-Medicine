const reasons = [
  {
    title: "100% real human hair",
    body: "Sourced from high-end certified labs — non-toxic, skin-safe, and indistinguishable from your own.",
  },
  {
    title: "An undetectable hairline",
    body: "We design and cut in a natural, age-appropriate hairline. No one will know it isn't growing from your scalp.",
  },
  {
    title: "Live your life in it",
    body: "Shower, swim, work out, sleep — your hair stays put. No taking it off at night, no stand in a drawer.",
  },
  {
    title: "Way less than a transplant",
    body: "Get expert results without the $15k surgery. We even teach you to maintain it yourself and save more.",
  },
  {
    title: "Private & judgment-free",
    body: "One-on-one appointments in a discreet studio. No crowded salons, no pushy sales floor.",
  },
  {
    title: "Founded by someone who gets it",
    body: "ManHair was started by Justin, who lost his hair young — so every detail is built around how you actually feel.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-red mb-3">Why ManHair</p>
          <h2 className="font-slab text-3xl md:text-4xl font-extrabold text-ink">
            Because going bald isn&apos;t a choice — but staying bald is.
          </h2>
          <p className="mt-4 text-steel body-base">
            We obsess over the details most places skip, so the result looks and feels like
            the hair you were born with.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="border-t-2 border-red/80 pt-5">
              <h3 className="font-slab text-lg font-bold text-ink">{r.title}</h3>
              <p className="mt-2 text-steel text-[0.95rem] leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
