import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ProcessSteps from "../components/ProcessSteps";
import CtaBanner from "../components/CtaBanner";
import JsonLd from "../components/JsonLd";
import { buildBreadcrumbSchema } from "../lib/jsonLd";

export const metadata: Metadata = {
  title: "How It Works — Non-Surgical Hair Replacement | ManHair Online",
  description:
    "See how ManHair Online restores your hair in four simple steps: free discovery call, consultation, fitting & cut-in, and easy maintenance. By appointment in Orange County, CA.",
  alternates: { canonical: "/how-it-works/" },
};

const experience = [
  { title: "Shave & prep", body: "We prepare the surface of your head for the best, most secure fit." },
  { title: "Apply the system", body: "Skin-safe adhesive and a precise application you'll learn to do yourself." },
  { title: "Cut-in & style", body: "We cut in and style the unit to the exact look you want." },
  { title: "Wash & condition", body: "Shampoo, condition, and blow-dry so your system always looks its best." },
  { title: "Scalp treatment", body: "A scalp treatment between services keeps everything healthy and fresh." },
  { title: "Re-charge facial", body: "We can clean up facial hair and condition your skin while you're in." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works/" },
        ])}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="How It Works"
          title="From thinning to a full head of hair — the simple way"
          subtitle="No surgery. No long waits. Just a clear, supportive process that gets your hair and your confidence back."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
            <p className="eyebrow text-red mb-3">What Is a ManHair System?</p>
            <h2 className="font-slab text-3xl font-extrabold text-ink">
              The highest-quality hair systems in the industry
            </h2>
            <p className="mt-4 text-steel body-base">
              Our hair replacement systems are made from 100% real human hair on a breathable,
              skin-safe base. Each unit is designed specifically for your head and the look you
              want, giving you an undetectable hairline and an ultra-realistic result no one
              will ever know about. Systems typically last 6 months to a year, with a quick
              maintenance session every 4–6 weeks.
            </p>
          </div>
        </section>

        <ProcessSteps eyebrow="The Process" heading="Four steps to your new hair" />

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <p className="eyebrow text-red mb-3">The ManHair Experience</p>
              <h2 className="font-slab text-3xl md:text-4xl font-extrabold text-ink">
                We keep it simple — and we keep it about you
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {experience.map((e) => (
                <div key={e.title} className="rounded-2xl border border-line p-6">
                  <h3 className="font-slab text-lg font-bold text-ink">{e.title}</h3>
                  <p className="mt-2 text-steel text-[0.93rem] leading-relaxed">{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
