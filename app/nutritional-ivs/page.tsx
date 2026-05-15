import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import NutritionalIVsBody from "./NutritionalIVsBody";
import { generateMetadata as buildMeta } from "../lib/seo";
import { SERVICES_BY_SLUG } from "../lib/services";

const SLUG = "nutritional-ivs" as const;
const service = SERVICES_BY_SLUG[SLUG];

export const metadata: Metadata = buildMeta({
  slug: `/${SLUG}/`,
  title: "Rehydrate and Rejuvenate With Restorative Nutritional IVs in Reno, NV",
  description:
    "Nutritional IV therapy at Reno Regenerative delivers vitamins directly to your bloodstream for fast relief from fatigue, stress, dehydration and more. Call (775) 683-9026.",
  image: service.image,
});

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Nutritional IVs in Reno, NV"
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <NutritionalIVsBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
