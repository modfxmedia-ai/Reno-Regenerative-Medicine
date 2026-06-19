import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import Testimonials from "../components/Testimonials";
import JsonLd from "../components/JsonLd";
import { buildBreadcrumbSchema } from "../lib/jsonLd";

export const metadata: Metadata = {
  title: "Before & After — Real Men's Hair Transformations | ManHair Online",
  description:
    "See the difference a ManHair system makes. Real, natural-looking, non-surgical hair replacement transformations for men in Orange County, CA.",
  alternates: { canonical: "/before-after/" },
};

// Placeholder gallery cards — swap the gradient blocks for real photos on launch.
const cases = [
  { label: "Receding hairline", note: "Hairline rebuilt and styled in a single visit." },
  { label: "Crown thinning", note: "Full density restored with a custom system." },
  { label: "Diffuse thinning", note: "Natural, age-appropriate look, no surgery." },
  { label: "Alopecia (totalis)", note: "Full-coverage system, completely undetectable." },
  { label: "Slick-back style", note: "Cut in to the exact look he wanted." },
  { label: "Textured crop", note: "Modern style, real human hair." },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Before & After", path: "/before-after/" },
        ])}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Before & After"
          title="Real men. Real hair. Real confidence."
          subtitle="The best way to understand what a ManHair system can do is to see it. Here's a look at the kind of transformations we create every week."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Before & After" }]}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((c) => (
                <figure key={c.label} className="overflow-hidden rounded-2xl border border-line">
                  <div className="grid grid-cols-2">
                    <div className="aspect-square bg-gradient-to-b from-smoke to-line grid place-items-center">
                      <span className="text-xs uppercase tracking-wide text-steel">Before</span>
                    </div>
                    <div
                      className="aspect-square grid place-items-center"
                      style={{ background: "linear-gradient(180deg,#db2020,#7a0d0d)" }}
                    >
                      <span className="text-xs uppercase tracking-wide text-white/85">After</span>
                    </div>
                  </div>
                  <figcaption className="p-5">
                    <h3 className="font-slab font-bold text-ink">{c.label}</h3>
                    <p className="mt-1 text-sm text-steel">{c.note}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-steel">
              Photo gallery coming soon. Want to see real client results? Ask on your free
              discovery call and we&apos;ll walk you through examples like yours.
            </p>
          </div>
        </section>

        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
