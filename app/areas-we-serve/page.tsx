import type { Metadata } from "next";

import PageHero from "@/app/components/PageHero";
import CTASection from "@/app/components/CTASection";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { generateMetadata as buildMetadata } from "@/app/lib/seo";
import locations from "@/app/lib/pseo/locations";
import services from "@/app/lib/pseo/services";

import AreasGrid from "./AreasGrid";

const SITE_URL = "https://renoregen.com";

export const metadata: Metadata = buildMetadata({ slug: "/areas-we-serve/" });

export default function AreasWeServePage() {
  // Group locations by county for organized display.
  const byCounty = locations.reduce<Record<string, typeof locations>>(
    (acc, loc) => {
      const key = `${loc.county} County, ${loc.state}`;
      (acc[key] ??= []).push(loc);
      return acc;
    },
    {},
  );

  // Sort counties so Washoe (home county) sits first, then alphabetic.
  const counties = Object.keys(byCounty).sort((a, b) => {
    if (a.startsWith("Washoe")) return -1;
    if (b.startsWith("Washoe")) return 1;
    return a.localeCompare(b);
  });

  // ItemList JSON-LD covering all 525 combos for crawl efficiency.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Areas We Serve — Reno Regenerative Medicine",
    numberOfItems: locations.length * services.length,
    itemListElement: locations.flatMap((loc, li) =>
      services.map((svc, si) => ({
        "@type": "ListItem",
        position: li * services.length + si + 1,
        url: `${SITE_URL}/${svc.slug}-${loc.slug}/`,
        name: `${svc.shortName} in ${loc.city}, ${loc.state}`,
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Header />
      <main>
        <PageHero
          eyebrow="Service Area"
          title="Areas We Serve"
          subtitle={`Care for patients across ${locations.length}+ Northern Nevada and Eastern California communities.`}
          image="/images/services/spinal-decompression.jpg"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Areas We Serve" },
          ]}
          size="md"
        />

        <AreasGrid
          counties={counties}
          byCounty={byCounty}
          services={services}
          totalLocations={locations.length}
        />

        <CTASection
          title="Don't see your city?"
          subtitle="We welcome patients from across Northern Nevada and Eastern California — call to confirm we serve your area."
        />
      </main>
      <Footer />
    </>
  );
}
