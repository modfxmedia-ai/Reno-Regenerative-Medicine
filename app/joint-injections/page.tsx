import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import JointInjectionsBody from "./JointInjectionsBody";
import { generateMetadata as buildMeta } from "../lib/seo";
import { SERVICES_BY_SLUG } from "../lib/services";

const SLUG = "joint-injections" as const;
const service = SERVICES_BY_SLUG[SLUG];

export const metadata: Metadata = buildMeta({
  slug: `/${SLUG}/`,
  title: "Experience Relief With Joint Injections in Reno, NV",
  description:
    "Looking for joint injection treatments in Reno, NV? We provide safe, effective care to reduce swelling and help you move with less pain. Contact us now.",
  image: service.image,
});

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title="Joint Injections in Reno, NV"
          image={service.image}
          imageAlt={`${service.label} at Reno Regenerative Medicine`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services/" },
            { label: service.name },
          ]}
          size="md"
        />
        <JointInjectionsBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
