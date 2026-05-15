import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { generateMetadata as buildMeta } from "../lib/seo";
import NewPatientsBody from "./NewPatientsBody";

export const metadata: Metadata = buildMeta({
  slug: "/new-patients/",
  title: "New Patient Information",
  description:
    "New to Reno Regenerative Medicine? Download patient forms, learn what to expect, and call us at (775) 683-9026. We welcome you as part of our extended family.",
});

export default function NewPatientsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="New Patients"
          title="New Patient Information"
          image="/images/services/physical-therapy.jpg"
          imageAlt="Welcoming the next patient to Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "New Patients" },
          ]}
          size="md"
        />
        <NewPatientsBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
