import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { BRAND, PHONE } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the ManHair Online website and services.",
  alternates: { canonical: "/terms/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero eyebrow="Legal" title="Terms of Service" showCta={false} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 py-16 body-base text-steel space-y-5">
            <p>
              By accessing and using the {BRAND.name} website, you agree to these terms. If you
              do not agree, please do not use the site.
            </p>
            <h2 className="font-slab text-2xl font-bold text-ink">Services</h2>
            <p>
              {BRAND.name} provides non-surgical men&apos;s hair replacement systems and related
              services by appointment. Information on this site is for general purposes and is
              not a substitute for a personal consultation.
            </p>
            <h2 className="font-slab text-2xl font-bold text-ink">Appointments &amp; payment</h2>
            <p>
              Services are provided by appointment only. Pricing depends on the system and
              options selected and is confirmed during your consultation. Payment plans and
              third-party financing may be available subject to approval.
            </p>
            <h2 className="font-slab text-2xl font-bold text-ink">Results disclaimer</h2>
            <p>
              Individual results vary. Photos, testimonials, and descriptions reflect individual
              experiences and are not guarantees of any particular outcome.
            </p>
            <h2 className="font-slab text-2xl font-bold text-ink">Intellectual property</h2>
            <p>
              All content on this site is the property of {BRAND.name} and may not be reproduced
              without permission.
            </p>
            <h2 className="font-slab text-2xl font-bold text-ink">Contact</h2>
            <p>
              Questions about these terms? Email {BRAND.email} or call {PHONE.display}.
            </p>
            <p className="text-sm">Last updated: {new Date().getFullYear()}.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
