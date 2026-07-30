import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import JsonLd from "../components/JsonLd";
import { buildBreadcrumbSchema } from "../lib/jsonLd";
import { PHONE, BRAND, ADDRESS, HOURS } from "../lib/site";

export const metadata: Metadata = {
  title: "Book a Free Consultation — ManHair Online | Lake Forest, CA",
  description:
    "Book your free, private hair-loss discovery call with ManHair Online. By appointment only at 20 Heron, Lake Forest, CA 92630. Call (904) 673-7587.",
  alternates: { canonical: "/contact/" },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Book Your Free Consultation"
          title="Let's get your hair back"
          subtitle="Request a 100% free, private discovery call. We'll call you at a time that works to talk through your options — no pressure, no pushy sales."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          showCta={false}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="lg:pl-4">
              <h2 className="font-slab text-2xl font-extrabold text-ink">Prefer to call?</h2>
              <p className="mt-3 text-steel body-base">
                We&apos;d love to hear from you. Reach a ManHair specialist directly:
              </p>
              <a
                href={PHONE.href}
                className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-line bg-smoke px-6 py-4 font-slab text-2xl font-extrabold text-ink hover:border-red hover:text-red transition-colors"
              >
                {PHONE.display}
              </a>

              <dl className="mt-10 space-y-6">
                <div>
                  <dt className="eyebrow text-red mb-1">Studio</dt>
                  <dd className="text-ink font-semibold">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
                  </dd>
                  <a
                    href={ADDRESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-red hover:underline"
                  >
                    Get directions →
                  </a>
                </div>
                <div>
                  <dt className="eyebrow text-red mb-1">Hours</dt>
                  <dd className="text-ink font-semibold">{HOURS.note}</dd>
                  <dd className="text-steel text-sm">
                    {HOURS.days} · {HOURS.open} – {HOURS.close}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-red mb-1">Email</dt>
                  <dd>
                    <a href={`mailto:${BRAND.email}`} className="text-ink font-semibold hover:text-red">
                      {BRAND.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-red mb-1">Service area</dt>
                  <dd className="text-steel">All of Orange County, California</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
