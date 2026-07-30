import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { BRAND, PHONE } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ManHair Online collects, uses, and protects your information.",
  alternates: { canonical: "/privacy-policy/" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero eyebrow="Legal" title="Privacy Policy" showCta={false} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 py-16 body-base text-steel space-y-5">
            <p>
              {BRAND.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects
              your privacy. This policy explains what information we collect and how we use it.
            </p>
            <h2 className="font-slab text-2xl font-bold text-ink">Information we collect</h2>
            <p>
              When you submit a consultation request or contact us, we collect the details you
              provide — such as your name, phone number, email address, and any message — so we
              can respond and schedule your appointment.
            </p>
            <h2 className="font-slab text-2xl font-bold text-ink">How we use your information</h2>
            <p>
              We use your information solely to respond to your inquiry, schedule and provide
              our services, and follow up about your hair-replacement journey. We do not sell
              your personal information.
            </p>
            <h2 className="font-slab text-2xl font-bold text-ink">Data sharing</h2>
            <p>
              We may share information with trusted service providers (for example, scheduling
              or payment-financing partners) only as needed to provide our services, and we
              require them to protect your information.
            </p>
            <h2 className="font-slab text-2xl font-bold text-ink">Your choices</h2>
            <p>
              You may request that we update or delete your information, or opt out of follow-up
              communications, at any time by contacting us at {BRAND.email} or {PHONE.display}.
            </p>
            <h2 className="font-slab text-2xl font-bold text-ink">Contact</h2>
            <p>
              Questions about this policy? Email {BRAND.email} or call {PHONE.display}.
            </p>
            <p className="text-sm">Last updated: {new Date().getFullYear()}.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
