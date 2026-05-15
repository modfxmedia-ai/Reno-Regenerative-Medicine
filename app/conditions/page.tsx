import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { generateMetadata as buildMeta } from "../lib/seo";
import ConditionsOverviewBody from "./ConditionsOverviewBody";

export const metadata: Metadata = buildMeta({
  slug: "/conditions/",
  title: "Conditions We Treat at Reno Regenerative | Book Now",
  description:
    "Reno Regenerative Medicine treats back pain, knee pain, neuropathy, whiplash, joint pain, hormonal imbalance, shoulder pain, and sexual dysfunction in Reno, NV.",
});

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Conditions"
          title="Conditions We Treat"
          image="/images/services/joint-injections.jpg"
          imageAlt="Conditions treated at Reno Regenerative Medicine"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Conditions" },
          ]}
          size="md"
        />
        <ConditionsOverviewBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
