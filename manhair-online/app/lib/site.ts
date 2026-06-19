// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for ManHair Online business details, navigation,
// and brand constants. Every page and component imports from here so the
// NAP (Name / Address / Phone) stays consistent for local SEO.
// ─────────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://www.manhaironline.com";

export const BRAND = {
  name: "ManHair Online",
  shortName: "ManHair",
  legalName: "ManHair Online",
  tagline: "Get Your Hair Back. Get Your Confidence Back.",
  description:
    "Premium non-surgical hair replacement for men in Orange County, California. Undetectable, ultra-realistic human-hair systems — by appointment only in Lake Forest, CA.",
  founder: "Justin",
  foundingHome: "Orange County, California",
  email: "info@manhaironline.com",
} as const;

export const PHONE = {
  /** Display format */
  display: "(904) 673-7587",
  /** tel: href format */
  href: "tel:+19046737587",
  raw: "+19046737587",
} as const;

export const ADDRESS = {
  street: "20 Heron",
  city: "Lake Forest",
  state: "CA",
  stateLong: "California",
  zip: "92630",
  country: "US",
  countryLong: "United States",
  /** Lake Forest, CA approximate coordinates */
  lat: 33.6469,
  lng: -117.6892,
  full: "20 Heron, Lake Forest, CA 92630",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=20+Heron+Lake+Forest+CA+92630",
} as const;

export const HOURS = {
  note: "By appointment only",
  days: "Monday – Saturday",
  open: "9:00 AM",
  close: "6:00 PM",
} as const;

export const SOCIAL = {
  facebook: "https://www.facebook.com/ManHairOnline/",
  instagram: "https://www.instagram.com/manhaironline/",
} as const;

export const SERVICE_AREA = {
  county: "Orange County",
  region: "Orange County, California",
  blurb:
    "Serving men across all of Orange County, California — from Irvine, Mission Viejo, and Newport Beach to Anaheim, Santa Ana, and Huntington Beach.",
} as const;

// ── Primary site navigation ──────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV: NavItem[] = [
  { label: "How It Works", href: "/how-it-works/" },
  {
    label: "Solutions",
    href: "/hair-systems/",
    children: [
      { label: "Non-Surgical Hair Replacement", href: "/hair-systems/" },
      { label: "Men's Hair Systems & Toupees", href: "/mens-hair-styles/" },
      { label: "Receding Hairline Restoration", href: "/receding-hairline/" },
      { label: "Alopecia Hair Loss Solutions", href: "/alopecia/" },
    ],
  },
  { label: "Before & After", href: "/before-after/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about/" },
  { label: "Areas We Serve", href: "/areas-we-serve/" },
  { label: "FAQ", href: "/faq/" },
];

// ── Core service offerings (used on home + service hub) ───────────────────
export interface Service {
  slug: string;
  title: string;
  short: string;
  href: string;
  blurb: string;
}

export const SERVICES: Service[] = [
  {
    slug: "non-surgical-hair-replacement",
    title: "Non-Surgical Hair Replacement",
    short: "Hair Systems",
    href: "/hair-systems/",
    blurb:
      "Custom, undetectable human-hair systems designed to your exact hairline — no surgery, no downtime, instant results.",
  },
  {
    slug: "mens-hair-systems",
    title: "Men's Hair Systems & Toupees",
    short: "Hair Styles",
    href: "/mens-hair-styles/",
    blurb:
      "Modern and classic styles, densities, and colors — cut in and styled by our specialists for a look that's 100% you.",
  },
  {
    slug: "receding-hairline-restoration",
    title: "Receding Hairline Restoration",
    short: "Receding Hairline",
    href: "/receding-hairline/",
    blurb:
      "Rebuild a natural, age-appropriate hairline and frame your face again — discreetly and affordably.",
  },
  {
    slug: "alopecia-hair-loss",
    title: "Alopecia Hair Loss Solutions",
    short: "Alopecia",
    href: "/alopecia/",
    blurb:
      "Full-coverage solutions for alopecia areata, totalis, and universalis that restore a complete, natural head of hair.",
  },
];

export const PRIMARY_CTA = {
  label: "Book My Free Consultation",
  href: "/contact/",
} as const;
