import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import WhyChoose from "../components/WhyChoose";
import CtaBanner from "../components/CtaBanner";
import JsonLd from "../components/JsonLd";
import { buildBreadcrumbSchema } from "../lib/jsonLd";

export const metadata: Metadata = {
  title: "About ManHair Online — Men's Hair Loss Solutions in Orange County",
  description:
    "ManHair Online was founded by Justin, who struggled with hair loss young. Today we deliver private, affordable, non-surgical hair replacement for men across Orange County, CA.",
  alternates: { canonical: "/about/" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="About ManHair Online"
          title="Built by a man who's been there"
          subtitle="Our mission is simple: a community where every man is treated equally, regardless of his hair situation — with honest help, real results, and zero judgment."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 body-base">
            <h2 className="font-slab text-3xl font-extrabold text-ink">The ManHair philosophy</h2>
            <p className="mt-4 text-steel">
              We believe every guy has the right to the full head of hair he deserves. Many men
              start losing their hair long before they should — and that isn&apos;t fair. We&apos;ve
              spent years researching the best solution to restore not just hair, but confidence
              and control.
            </p>
            <p className="mt-4 text-steel">
              We handle every part of your experience: measurements, design, fitting, cut-in,
              styling, and all the support and advice you need along the way. Looks matter — for
              your career, your relationships, and how you feel walking into a room — and we take
              that seriously.
            </p>

            <div className="my-10 rounded-2xl border-l-4 border-red bg-smoke p-7">
              <h3 className="font-slab text-xl font-bold text-ink">A message from the founder</h3>
              <p className="mt-3 text-steel italic">
                &ldquo;After years of seeing myself, family, and friends deal with hair loss —
                spending countless hours and hard-earned money on transplant surgery, clinics,
                ointments, and potions — nothing ever delivered a full, perfect head of hair.
                Every time, we were left wanting more. So I built ManHair to be different.&rdquo;
              </p>
              <p className="mt-4 text-steel italic">
                &ldquo;We handle every customer personally, in private, with one-on-one care. You
                get a dedicated specialist, real answers, and a solution that fits your life — and
                you save thousands compared to overpaying at a salon. Welcome to ManHair.&rdquo;
              </p>
              <p className="mt-4 font-semibold text-ink">— Justin, Founder of ManHair Online</p>
            </div>

            <h2 className="font-slab text-3xl font-extrabold text-ink">A new chapter in Orange County</h2>
            <p className="mt-4 text-steel">
              ManHair Online has relocated to Orange County, California. Our private studio at
              20 Heron in Lake Forest serves men throughout the county by appointment only — so
              every visit is unhurried, discreet, and focused entirely on you. Whether you&apos;re
              in Irvine, Mission Viejo, Newport Beach, Anaheim, or anywhere in between, your full
              head of hair is minutes away.
            </p>
          </div>
        </section>

        <WhyChoose />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
