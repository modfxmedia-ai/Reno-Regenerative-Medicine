import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import CTASection from "../../components/CTASection";
import ServicePageBody from "../../components/ServicePageBody";
import KneeDecompressionExtras from "./KneeDecompressionExtras";
import { generateMetadata as buildMeta } from "../../lib/seo";
import { SERVICES_BY_SLUG, getRelatedServices } from "../../lib/services";

const SLUG = "knee-decompression" as const;
const service = SERVICES_BY_SLUG[SLUG];
const related = getRelatedServices(SLUG, 3);

export const metadata: Metadata = buildMeta({
  slug: `/services/${SLUG}/`,
  title: "Knee Decompression Therapy in Reno, NV",
  description:
    "Non-surgical knee decompression therapy at Reno Regenerative Medicine reduces joint pressure, relieves pain, and restores mobility without cortisone or surgery. Call (775) 683-9026.",
  image: service.image,
});

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title={service.label}
          subtitle={service.short}
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <ServicePageBody service={service} related={related} />
        <KneeDecompressionExtras />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
