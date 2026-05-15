import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import GainswaveBody from "./GainswaveBody";
import { generateMetadata as buildMeta } from "../lib/seo";
import { SERVICES_BY_SLUG } from "../lib/services";

const SLUG = "gainswave" as const;
const service = SERVICES_BY_SLUG[SLUG];

export const metadata: Metadata = buildMeta({
  slug: `/${SLUG}/`,
  title: "Improve Wellness With GAINSWave\u00ae in Reno, NV",
  description:
    "GAINSWave\u00ae acoustic wave therapy at Reno Regenerative Medicine improves sexual function and treats erectile dysfunction in Reno, NV. Call (775) 683-9026.",
  image: service.image,
});

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="GAINSWave\u00ae in Reno, NV"
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <GainswaveBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
