import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { generateMetadata as buildMeta } from "../lib/seo";
import ServicesGridSection from "./ServicesGridSection";

export const metadata: Metadata = buildMeta({
  slug: "/services/",
  title: "Discover Regenerative and Integrative Medicine in Reno, NV",
  description:
    "Reno Regenerative Medicine offers joint injections, chiropractic care, spinal decompression, nutritional IVs, bioidentical hormones, GAINSWave, and more in Reno, NV.",
});

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Services"
          title="Our Services"
          image="/images/services/spinal-decompression.jpg"
          imageAlt="Reno Regenerative Medicine services"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
          size="md"
        />
        <ServicesGridSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
