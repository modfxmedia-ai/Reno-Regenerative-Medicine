import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import FaqAccordion, { type Faq } from "../components/FaqAccordion";
import JsonLd from "../components/JsonLd";
import { buildBreadcrumbSchema, buildFaqSchema } from "../lib/jsonLd";

export const metadata: Metadata = {
  title: "FAQ — Men's Hair Replacement Questions Answered | ManHair Online",
  description:
    "Answers to the most common questions about non-surgical men's hair systems: wear time, showering, lifespan, maintenance, and more. Serving Orange County, CA.",
  alternates: { canonical: "/faq/" },
};

const faqs: Faq[] = [
  {
    q: "How long can I wear the hair for?",
    a: "Unlike a traditional wig or toupee, a ManHair system stays on — once attached you can wear it for weeks at a time. We recommend a maintenance session every 4–6 weeks to refresh the adhesive, though this varies with your lifestyle, activity, and natural oils. Sessions last about an hour to an hour and a half.",
  },
  {
    q: "Can I shower and swim in it?",
    a: "Yes. You feel and treat it as your own hair, so you can shower, swim, and enjoy vacations without worry. If you're very active and sweat often, we may suggest more frequent re-grooms.",
  },
  {
    q: "How long do systems last?",
    a: "Depending on the options you choose, the care you provide, and your lifestyle, every system averages 6 months to a year before a replacement is needed. Well-cared-for units can last even longer.",
  },
  {
    q: "Can I use styling products?",
    a: "Yes. We advise lightweight, water-based gels and hairsprays to hold shape. Avoid heavy waxes, and always wet or wash the hair before combing it out. We recommend products that are best suited for your system.",
  },
  {
    q: "Can I do the maintenance myself?",
    a: "Yes — we strongly encourage it. We'll teach you to complete maintenance at home in 30–45 minutes so you can avoid high salon costs. Prefer the white-glove route? Come into the studio and we'll handle it.",
  },
  {
    q: "Will it ever fall off?",
    a: "No. As long as you keep up with maintenance every 4–6 weeks, your hair stays securely fixed and won't come off without a solvent release spray. You can work out, shower, swim, and live a completely normal life.",
  },
  {
    q: "Will it damage my natural hair?",
    a: "No. All of our adhesives are medically treated, skin-safe, and from certified labs, allowing your scalp to breathe without affecting your existing hair growth.",
  },
  {
    q: "How do I clean it?",
    a: "You can shower as normal. We recommend a sulfate-free, color-safe shampoo and combing conditioner through on a semi-regular basis. Avoid scrubbing, which can dry out or mat the hair. A leave-in conditioning spray helps keep it fresh.",
  },
  {
    q: "What's the difference between stock and custom orders?",
    a: "A stock order uses our standard base shape with your measurements, while a custom order designs the base shape and hairline from a template for the best possible fit. Color, density, texture, and wave are fully customizable for both. Future replacements come at the reduced 'hair only' cost.",
  },
  {
    q: "Do you offer discounts or financing?",
    a: "Yes. We offer progress payments, larger discounts when you buy more than one system at a time, and a $100 referral bonus for you and a friend. Buy-now-pay-later financing is also available.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq/" },
          ]),
          buildFaqSchema(faqs),
        ]}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="FAQ"
          title="Your questions, answered"
          subtitle="Everything you want to know about non-surgical hair systems — and we're always here for the rest."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        />
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
            <FaqAccordion faqs={faqs} />
          </div>
        </section>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
