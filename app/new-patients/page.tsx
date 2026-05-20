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
    "Taking the first step toward healing can feel overwhelming. We make becoming a new patient easy and stress-free. Download your forms and book a visit!",
});

export default function NewPatientsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
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
