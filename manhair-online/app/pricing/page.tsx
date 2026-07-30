import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import JsonLd from "../components/JsonLd";
import { buildBreadcrumbSchema } from "../lib/jsonLd";
import { PHONE, PRIMARY_CTA } from "../lib/site";

export const metadata: Metadata = {
  title: "Pricing & Payment Plans — Affordable Hair Replacement | ManHair Online",
  description:
    "Transparent, affordable men's hair replacement pricing in Orange County, CA. Monthly payment options and buy-now-pay-later financing available. Call (904) 673-7587.",
  alternates: { canonical: "/pricing/" },
};

const points = [
  {
    title: "A fraction of a transplant",
    body: "Instead of investing $10,000–$15,000+ in surgery, you get expert, undetectable results for a fraction of the cost.",
  },
  {
    title: "Monthly payment options",
    body: "We can set up pay-as-you-go monthly billing to keep your investment convenient and manageable.",
  },
  {
    title: "Buy now, pay later",
    body: "Flexible financing (like Cherry) lets you start now and pay over time for health and wellness purchases.",
  },
  {
    title: "Save with at-home maintenance",
    body: "We teach you to maintain your system yourself, so you avoid recurring high salon fees for years to come.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing/" },
        ])}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Pricing & Payment Plans"
          title="Premium hair, at the industry's most affordable prices"
          subtitle="We believe every guy should be able to afford this life-changing solution — so we keep pricing transparent and offer flexible ways to pay."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            <div className="grid gap-5 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p.title} className="rounded-2xl border border-line p-7">
                  <h2 className="font-slab text-xl font-bold text-ink">{p.title}</h2>
                  <p className="mt-2.5 text-steel leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-jet text-white p-8 sm:p-12 text-center">
              <h2 className="font-slab text-2xl md:text-3xl font-extrabold">
                Get your exact price on a free discovery call
              </h2>
              <p className="mt-4 text-white/70 body-base max-w-2xl mx-auto">
                Final pricing depends on the system you choose — base type, density, and
                whether it&apos;s stock or fully custom. Book a 100% free call and we&apos;ll
                give you honest numbers and the next steps, with no pressure.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href={PRIMARY_CTA.href}
                  className="rounded-full bg-red px-8 py-4 font-semibold text-white hover:bg-red-bright transition-colors"
                >
                  {PRIMARY_CTA.label}
                </Link>
                <a
                  href={PHONE.href}
                  className="rounded-full border border-white/25 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Call {PHONE.display}
                </a>
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-steel">
              Referral bonus: refer a friend and you both receive a $100 credit.
            </p>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
