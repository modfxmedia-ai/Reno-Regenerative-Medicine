import type { Metadata } from "next";
import ServiceTemplate, { type ServiceContent } from "../components/ServiceTemplate";

const content: ServiceContent = {
  serviceSlug: "alopecia-hair-loss",
  path: "/alopecia/",
  eyebrow: "Alopecia Hair Loss Solutions",
  h1: "Alopecia Hair Loss Solutions for Men",
  subtitle:
    "Full-coverage, natural human-hair systems that restore a complete head of hair — for alopecia areata, totalis, and universalis.",
  metaDescription:
    "Alopecia hair loss solutions for men in Orange County, CA. Full-coverage human-hair systems for areata, totalis, and universalis. By appointment in Lake Forest. Call (904) 673-7587.",
  intro:
    "Living with alopecia can be one of the hardest parts of hair loss — but you don't have to face it alone. ManHair Online creates full-coverage human-hair systems that restore a complete, natural head of hair, with a comfortable, breathable fit you can wear and trust every single day.",
  highlights: [
    { title: "Full-coverage systems", body: "Complete solutions for total hair loss, not just thinning areas." },
    { title: "Comfortable & breathable", body: "Skin-safe bases designed for all-day, everyday wear." },
    { title: "Natural hairline & crown", body: "Detailed front and crown work for a believable result." },
    { title: "Compassionate support", body: "One-on-one care through every step of your journey." },
  ],
  sections: [
    {
      heading: "Solutions for every type of alopecia",
      paragraphs: [
        "Whether you're dealing with alopecia areata (patchy loss), alopecia totalis (complete scalp hair loss), or alopecia universalis (loss of all body hair), our full-coverage systems are built to restore a natural, complete head of hair.",
        "Because there's little or no existing hair to blend into, the design of the hairline, density, and crown matters more than ever — and that precision is exactly what we focus on.",
      ],
    },
    {
      heading: "A fit you can forget you're wearing",
      paragraphs: [
        "Our systems use breathable, skin-safe bases and medically treated, certified adhesives, so they stay secure through your day while remaining comfortable against sensitive skin. You can shower, work, and stay active with confidence.",
      ],
    },
    {
      heading: "Care that goes beyond the hair",
      paragraphs: [
        "Alopecia is emotional as much as it is physical. You'll work one-on-one with a specialist who understands that, in a private setting built around your comfort — never a crowded salon or a hard sales floor.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can you help if I've lost all of my hair?",
      a: "Yes. Full-coverage systems are designed specifically for total hair loss, including alopecia totalis and universalis, restoring a complete and natural head of hair.",
    },
    {
      q: "Will it stay secure if I have no hair to attach to?",
      a: "Yes. Our systems attach safely to the scalp with skin-safe adhesives and stay secure through normal daily activity. We'll show you exactly how to wear and maintain it.",
    },
    {
      q: "Is it comfortable for sensitive skin?",
      a: "We use breathable, non-toxic, certified materials chosen for comfort and skin safety, so the system is comfortable for all-day wear.",
    },
    {
      q: "Do you serve all of Orange County?",
      a: "Yes — our Lake Forest studio welcomes men from across Orange County, California, by appointment.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Alopecia Hair Loss Solutions for Men | Orange County, CA",
  description: content.metaDescription,
  alternates: { canonical: content.path },
};

export default function Page() {
  return <ServiceTemplate content={content} />;
}
