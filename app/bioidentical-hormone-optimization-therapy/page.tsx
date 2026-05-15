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
    "BHRT at Reno Regenerative Medicine treats hormone imbalances in men and women \u2014 relieving fatigue, low libido, mood swings, and more. Call (775) 683-9026.",
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
