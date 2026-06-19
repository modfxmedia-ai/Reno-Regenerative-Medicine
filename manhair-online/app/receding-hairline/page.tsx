import type { Metadata } from "next";
import ServiceTemplate, { type ServiceContent } from "../components/ServiceTemplate";

const content: ServiceContent = {
  serviceSlug: "receding-hairline-restoration",
  path: "/receding-hairline/",
  eyebrow: "Receding Hairline Restoration",
  h1: "Receding Hairline Restoration for Men",
  subtitle:
    "Rebuild a natural, age-appropriate hairline that frames your face again — without surgery, and without the wait.",
  metaDescription:
    "Restore a receding hairline without surgery in Orange County, CA. Custom non-surgical hair systems that rebuild a natural hairline. By appointment in Lake Forest. Call (904) 673-7587.",
  intro:
    "A receding hairline is one of the most common forms of hair loss — and one of the most frustrating, because it changes how your whole face reads. ManHair Online rebuilds a full, natural-looking hairline that's designed to your face and your age, so the result looks like the hair you used to have.",
  highlights: [
    { title: "A hairline built for you", body: "Designed and cut in to frame your face naturally and age-appropriately." },
    { title: "Undetectable front", body: "Fine front detailing makes the hairline impossible to spot." },
    { title: "Same-day transformation", body: "No months of waiting like surgery — you see results immediately." },
    { title: "Discreet & judgment-free", body: "Private consultations focused entirely on you." },
  ],
  sections: [
    {
      heading: "Why a receding hairline happens",
      paragraphs: [
        "For most men, a receding hairline is driven by genetics and hormones, often starting at the temples and crown. It can begin in your twenties and progress for years. Creams, pills, and potions rarely deliver a full, dependable result — which is why so many men come to us looking for something that actually works.",
      ],
    },
    {
      heading: "How we restore your hairline",
      paragraphs: [
        "We design a custom system with a natural front hairline tailored to your face shape and age, then color- and density-match it to your existing hair. After a precise cut-in, the new hairline blends seamlessly with your own hair for a look that's completely undetectable.",
        "Best of all, it's reversible and adjustable — you're never locked into a single look the way you are with surgery.",
      ],
    },
    {
      heading: "Look years younger, instantly",
      paragraphs: [
        "Restoring your hairline reframes your face and can take years off your appearance. No more hiding under hats, avoiding photos, or styling around the thin spots — just confidence at work, on dates, and everywhere else.",
      ],
    },
  ],
  faqs: [
    {
      q: "Will the hairline look natural?",
      a: "Yes — designing a believable, age-appropriate hairline is exactly what we specialize in. We use fine front detailing so the hairline reads as your own.",
    },
    {
      q: "Is this better than a transplant for a receding hairline?",
      a: "It depends on your goals, but a non-surgical system gives you a full hairline the same day, with no surgery, no scarring, and no months of waiting — at a fraction of the cost.",
    },
    {
      q: "How soon can I get started?",
      a: "After your free discovery call, we'll book your consultation and fitting. Many men go from first call to a full new hairline in a short window.",
    },
    {
      q: "Do you serve my city in Orange County?",
      a: "Yes. Our Lake Forest studio serves men throughout Orange County, California — from Irvine and Newport Beach to Anaheim and Santa Ana.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Receding Hairline Restoration for Men | Orange County, CA",
  description: content.metaDescription,
  alternates: { canonical: content.path },
};

export default function Page() {
  return <ServiceTemplate content={content} />;
}
