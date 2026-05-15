import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import TriggerPointInjectionsBody from "./TriggerPointInjectionsBody";
import { generateMetadata as buildMeta } from "../lib/seo";
import { SERVICES_BY_SLUG } from "../lib/services";

const SLUG = "trigger-point-injections" as const;
const service = SERVICES_BY_SLUG[SLUG];

export const metadata: Metadata = buildMeta({
  slug: `/${SLUG}/`,
  title: "Relieve Muscle Tension: Trigger Point Injections in Reno, NV",
  description:
    "Trigger point injections at Reno Regenerative Medicine relieve fibromyalgia, tension headaches, and chronic muscle pain in Reno, NV. Call (775) 683-9026.",
  image: service.image,
});

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Trigger Point Injections in Reno, NV"
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <TriggerPointInjectionsBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
