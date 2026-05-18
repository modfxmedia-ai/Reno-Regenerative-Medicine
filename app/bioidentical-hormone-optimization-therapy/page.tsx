import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import BioidenticalHormonesBody from "./BioidenticalHormonesBody";
import { generateMetadata as buildMeta } from "../lib/seo";
import { SERVICES_BY_SLUG } from "../lib/services";

const SLUG = "bioidentical-hormone-optimization-therapy" as const;
const service = SERVICES_BY_SLUG[SLUG];

export const metadata: Metadata = buildMeta({
  slug: `/${SLUG}/`,
  title: "Bioidentical Replacement Hormone Therapy in Reno, NV",
  description:
    "Struggling with fatigue or mood changes? Natural hormone therapy in Reno, NV can make a big difference. Let our friendly team help. Call to book!",
  image: service.image,
});

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Bioidentical Hormone Replacement Therapy in Reno, NV"
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <BioidenticalHormonesBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
