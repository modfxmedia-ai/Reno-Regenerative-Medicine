// Schema.org JSON-LD builders. Centralised so any page can call a builder
// and render the result with <JsonLd/>.

import { SITE_URL, BRAND, PHONE, ADDRESS, HOURS, SOCIAL, SERVICE_AREA } from "./site";

export const BUSINESS_ID = `${SITE_URL}/#business`;

/** HairSalon / LocalBusiness — applies site-wide, injected from layout. */
export function buildBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "HealthAndBeautyBusiness", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: BRAND.name,
    alternateName: BRAND.shortName,
    description: BRAND.description,
    url: SITE_URL,
    telephone: PHONE.raw,
    email: BRAND.email,
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/brand/logo-mark.svg`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Cherry (Buy Now Pay Later)",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: ADDRESS.lat,
      longitude: ADDRESS.lng,
    },
    hasMap: ADDRESS.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
        description: HOURS.note,
      },
    ],
    availableLanguage: "English",
    areaServed: {
      "@type": "AdministrativeArea",
      name: SERVICE_AREA.region,
    },
    sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  };
}

/** Service schema for a hair-service detail page. */
export function buildServiceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  const pageUrl = `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: pageUrl,
    provider: { "@id": BUSINESS_ID },
    areaServed: {
      "@type": "AdministrativeArea",
      name: SERVICE_AREA.region,
    },
  };
}

/** BreadcrumbList builder. Pass ordered [name, path] pairs (path optional on last). */
export function buildBreadcrumbSchema(crumbs: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.path ? { item: `${SITE_URL}${c.path}` } : {}),
    })),
  };
}

/** FAQPage builder. */
export function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
