// Programmatic SEO service catalog for ManHair Online.
// Each entry maps to a canonical service page that already exists on the site
// and powers city × service landing pages, e.g.
//   /non-surgical-hair-replacement-irvine-ca/

export interface PseoService {
  slug: string;
  name: string;
  shortName: string;
  internalPageUrl: string;
  h1Template: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  features: string[];
  benefits: string[];
  keywords: string[];
}

const services: PseoService[] = [
  {
    slug: "non-surgical-hair-replacement",
    name: "Non-Surgical Hair Replacement",
    shortName: "Hair Replacement",
    internalPageUrl: "/hair-systems/",
    h1Template: "Non-Surgical Hair Replacement for Men in {city}, {state}",
    metaTitle: "Non-Surgical Hair Replacement in {city}, {state} | ManHair Online",
    metaDesc:
      "Custom, undetectable men's hair replacement near {city}, {state}. No surgery, instant results, real human hair. By appointment in Lake Forest. Call (904) 673-7587.",
    intro:
      "ManHair Online brings premium, non-surgical hair replacement to men in {city}, {state} and throughout {county} County. Our custom human-hair systems give you a completely natural, undetectable hairline with no surgery, no scarring, and no downtime — and you walk out the same day with a full head of hair.",
    features: [
      "100% real human-hair systems",
      "Custom hairline designed to your face",
      "Same-day, walk-out-with-hair results",
      "No surgery and no recovery time",
      "Private, one-on-one appointments",
    ],
    benefits: [
      "An undetectable, age-appropriate hairline",
      "Freedom to shower, swim, work out, and live normally",
      "A fraction of the cost of a hair transplant",
      "Learn to maintain it yourself and save thousands",
    ],
    keywords: [
      "non surgical hair replacement near me",
      "mens hair replacement {city}",
      "hair systems for men {city}",
      "hair replacement near me",
    ],
  },
  {
    slug: "mens-hair-systems",
    name: "Men's Hair Systems & Toupees",
    shortName: "Hair Systems",
    internalPageUrl: "/mens-hair-styles/",
    h1Template: "Men's Hair Systems & Toupees in {city}, {state}",
    metaTitle: "Men's Hair Systems & Toupees in {city}, {state} | ManHair Online",
    metaDesc:
      "Modern men's hair systems, toupees, and hair pieces near {city}, {state}. Cut in and styled by specialists. By appointment in Lake Forest. Call (904) 673-7587.",
    intro:
      "Looking for a natural-looking men's hair system or toupee near {city}, {state}? ManHair Online designs, fits, and styles premium hair systems for men across {county} County — in the modern or classic look you want, color-matched and cut in by our specialists for results no one will detect.",
    features: [
      "Modern and classic styles to choose from",
      "Color, density, texture, and wave matched to you",
      "Professional cut-in and styling included",
      "Breathable, skin-safe bases and adhesives",
      "Stock and fully custom-ordered options",
    ],
    benefits: [
      "A hairstyle that fits your lifestyle and age",
      "Confidence in any setting — work, dates, the gym",
      "Systems that last 6 months to a year with care",
      "Maintenance you can learn to do at home",
    ],
    keywords: [
      "mens hair systems {city}",
      "toupee near me",
      "hair pieces for men {city}",
      "mens toupee {city}",
    ],
  },
  {
    slug: "receding-hairline-restoration",
    name: "Receding Hairline Restoration",
    shortName: "Receding Hairline",
    internalPageUrl: "/receding-hairline/",
    h1Template: "Receding Hairline Restoration for Men in {city}, {state}",
    metaTitle: "Receding Hairline Restoration in {city}, {state} | ManHair Online",
    metaDesc:
      "Rebuild a natural, age-appropriate hairline near {city}, {state} — no surgery. Custom non-surgical hair systems. By appointment in Lake Forest. Call (904) 673-7587.",
    intro:
      "A receding hairline affects millions of men — and you don't have to live with it. ManHair Online helps men in {city}, {state} and across {county} County restore a full, natural-looking hairline without surgery. We design your new hairline to frame your face and match your age, so the result looks like the hair you used to have.",
    features: [
      "Custom hairline rebuilt to frame your face",
      "Undetectable front lace and hairline detailing",
      "No surgery, no scarring, no waiting months",
      "Immediate, same-day transformation",
      "Discreet, judgment-free consultations",
    ],
    benefits: [
      "Look years younger with a restored hairline",
      "Stop hiding under hats and avoiding photos",
      "Regain confidence at work and socially",
      "Affordable, predictable results",
    ],
    keywords: [
      "receding hairline solutions {city}",
      "hairline restoration near me",
      "fix receding hairline men {city}",
      "non surgical hairline {city}",
    ],
  },
  {
    slug: "alopecia-hair-loss",
    name: "Alopecia Hair Loss Solutions",
    shortName: "Alopecia Solutions",
    internalPageUrl: "/alopecia/",
    h1Template: "Alopecia Hair Loss Solutions for Men in {city}, {state}",
    metaTitle: "Alopecia Hair Loss Solutions in {city}, {state} | ManHair Online",
    metaDesc:
      "Full-coverage hair loss solutions for alopecia near {city}, {state}. Natural human-hair systems for total hair loss. By appointment in Lake Forest. Call (904) 673-7587.",
    intro:
      "Living with alopecia can be one of the hardest parts of hair loss — and ManHair Online is here to help men in {city}, {state} and throughout {county} County take their look back. Our full-coverage human-hair systems restore a complete, natural head of hair for alopecia areata, totalis, and universalis, with a comfortable, breathable fit you can wear every day.",
    features: [
      "Full-coverage systems for total hair loss",
      "Comfortable, breathable, skin-safe bases",
      "Natural hairline and crown detailing",
      "Solutions for areata, totalis, and universalis",
      "Compassionate, one-on-one support",
    ],
    benefits: [
      "A complete, natural-looking head of hair",
      "Renewed confidence and a sense of normalcy",
      "Secure wear for everyday life and activity",
      "Personalized care through your whole journey",
    ],
    keywords: [
      "alopecia hair solutions {city}",
      "alopecia hair systems near me",
      "hair loss solutions men {city}",
      "alopecia hairpiece {city}",
    ],
  },
];

export default services;
