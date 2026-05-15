import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import ContactBody from "./ContactBody";

export const metadata: Metadata = {
  title: "Contact Us | Regenerative Medicine in Sparks & Reno, NV",
  description:
    "Ready to start your healing journey? Reach out to ask about our regenerative therapies in Sparks & Reno, NV. We are here to answer your questions. Call us us!",
  alternates: { canonical: "https://renoregen.com/contact/" },
  openGraph: {
    title: "Contact Us | Regenerative Medicine in Sparks & Reno, NV",
    description:
      "Ready to start your healing journey? Reach out to ask about our regenerative therapies in Sparks & Reno, NV. We are here to answer your questions. Call us us!",
    url: "https://renoregen.com/contact/",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Reno Regenerative Medicine"
          title="Contact"
          image="/images/services/chiropractic-care.jpg"
          imageAlt="Reno Regenerative Medicine office in Reno, NV"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
          size="md"
        />
        <ContactBody />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
