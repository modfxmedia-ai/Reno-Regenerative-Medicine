import type { Metadata } from "next";
import ServiceTemplate, { type ServiceContent } from "../components/ServiceTemplate";

const content: ServiceContent = {
  serviceSlug: "non-surgical-hair-replacement",
  path: "/hair-systems/",
  eyebrow: "Non-Surgical Hair Replacement",
  h1: "Non-Surgical Hair Replacement for Men",
  subtitle:
    "Custom human-hair systems designed to your exact hairline. No surgery, no downtime — walk out the same day with a full head of hair.",
  metaDescription:
    "Premium non-surgical hair replacement for men in Orange County, CA. Custom, undetectable human-hair systems. No surgery. By appointment in Lake Forest. Call (904) 673-7587.",
  intro:
    "A ManHair system is the highest-quality non-surgical hair replacement available today — made from 100% real human hair and built specifically for your head and the look you want. The result is an undetectable hairline and an ultra-realistic look no one will ever know isn't your own.",
  highlights: [
    { title: "Real human hair", body: "Certified, non-toxic, skin-safe — and indistinguishable from natural hair." },
    { title: "Same-day results", body: "Walk in thinning, walk out with a full, styled head of hair." },
    { title: "No surgery, no scars", body: "Zero incisions, zero recovery time, zero risk of a failed graft." },
    { title: "Built for your life", body: "Shower, swim, train, and sleep in it. Your hair stays put." },
  ],
  sections: [
    {
      heading: "What exactly is a ManHair system?",
      paragraphs: [
        "Our hair systems are crafted to the absolute highest quality in the industry, using real human hair on a breathable, skin-safe base. Each unit is designed around your head shape and desired hairline, then cut in and styled to match the look you want.",
        "A typical system lasts around 6 months to a year with proper care, and a quick maintenance session every 4–6 weeks keeps the adhesive fresh and the hairline crisp. Systems can be worn with glue or tape — we'll recommend what fits your lifestyle best.",
      ],
    },
    {
      heading: "How it compares to a hair transplant",
      paragraphs: [
        "Hair transplant surgery is expensive, invasive, and takes months to show results — and not every man is a candidate. A non-surgical system gives you a full head of hair the very same day, at a fraction of the cost, with no surgery and no waiting.",
        "Because you keep coming back to the same density and style, you control your look completely — and you can change it whenever you want.",
      ],
    },
    {
      heading: "Learn to maintain it yourself",
      paragraphs: [
        "We personally walk you through the entire process so you can do your own maintenance at home and avoid expensive salon fees. Each at-home re-groom takes about 30–45 minutes. Prefer the white-glove route? Come into the studio and we'll handle it for you.",
      ],
    },
  ],
  faqs: [
    {
      q: "How long can I wear the hair for?",
      a: "Once attached, you can wear your system continuously for up to several weeks at a time. We recommend a maintenance session every 4–6 weeks to refresh the adhesive and keep everything looking its best.",
    },
    {
      q: "Can I shower, swim, and work out in it?",
      a: "Yes. You treat and feel it as if it were your own hair. If you're very active and sweat often, we may suggest more frequent maintenance to keep the hold secure.",
    },
    {
      q: "Will it damage my natural hair?",
      a: "No. All of our adhesives are medically treated, skin-safe, and from certified labs, allowing your scalp to breathe without affecting your existing hair.",
    },
    {
      q: "How much does it cost?",
      a: "Far less than a surgical transplant. Pricing depends on the system you choose, and we offer monthly payment options and buy-now-pay-later financing. Book a free discovery call for exact numbers.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Non-Surgical Hair Replacement for Men | Orange County, CA",
  description: content.metaDescription,
  alternates: { canonical: content.path },
};

export default function Page() {
  return <ServiceTemplate content={content} />;
}
