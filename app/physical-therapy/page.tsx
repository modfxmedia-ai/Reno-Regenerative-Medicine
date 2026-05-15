import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import TherapeuticExerciseBody from "./TherapeuticExerciseBody";
import { generateMetadata as buildMeta } from "../lib/seo";
import { SERVICES_BY_SLUG } from "../lib/services";

const SLUG = "physical-therapy" as const;
const service = SERVICES_BY_SLUG[SLUG];

export const metadata: Metadata = buildMeta({
  slug: `/${SLUG}/`,
  title: "Personalized Physical Therapy to Restore Your Movement",
  description:
    "Reno Regenerative Medicine offers physical therapy in Reno, NV for personal injury, auto accidents, sports injuries, and mobility problems. Call (775) 683-9026.",
  image: service.image,
});

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Therapeutic Exercises / Physical Therapy in Reno, NV"
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <TherapeuticExerciseBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
