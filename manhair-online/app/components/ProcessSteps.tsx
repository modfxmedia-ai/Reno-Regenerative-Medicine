const steps = [
  {
    n: "01",
    title: "Free Discovery Call",
    body: "It starts with a 100% free, private call with a ManHair specialist. We listen, answer every question, and figure out if we're the right fit — no pressure, ever.",
  },
  {
    n: "02",
    title: "Consultation & Selection",
    body: "We take your measurements and help you choose the base, color, density, and texture that match your hair and lifestyle — stock or fully custom.",
  },
  {
    n: "03",
    title: "Fitting & Cut-In",
    body: "We prep your scalp, apply your system with skin-safe adhesive, then cut in and style it to the exact look you want. You walk out with a full head of hair.",
  },
  {
    n: "04",
    title: "Maintenance Made Easy",
    body: "Come in every 4–6 weeks for a quick re-groom — or learn to do it yourself at home in 30–45 minutes and save thousands over a salon.",
  },
];

export default function ProcessSteps({
  eyebrow = "How It Works",
  heading = "A simple, four-step path to your hair",
}: {
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section className="bg-smoke">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow text-red mb-3">{eyebrow}</p>
          <h2 className="font-slab text-3xl md:text-4xl font-extrabold text-ink">{heading}</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl bg-white border border-line p-6">
              <span className="font-slab text-3xl font-extrabold text-red">{s.n}</span>
              <h3 className="mt-3 font-slab text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-steel text-[0.93rem] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
