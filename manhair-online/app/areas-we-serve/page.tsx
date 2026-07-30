import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import JsonLd from "../components/JsonLd";
import { buildBreadcrumbSchema } from "../lib/jsonLd";
import locations from "../lib/pseo/locations";
import services from "../lib/pseo/services";
import { SERVICE_AREA } from "../lib/site";

export const metadata: Metadata = {
  title: "Areas We Serve — Hair Replacement Across Orange County, CA",
  description:
    "ManHair Online serves men across all of Orange County, California — Irvine, Mission Viejo, Anaheim, Santa Ana, Huntington Beach, Newport Beach and more. By appointment in Lake Forest.",
  alternates: { canonical: "/areas-we-serve/" },
};

export default function Page() {
  const sorted = [...locations].sort((a, b) => a.city.localeCompare(b.city));

  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas-we-serve/" },
        ])}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Orange County, California"
          title="Hair replacement for men across Orange County"
          subtitle={SERVICE_AREA.blurb}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Areas We Serve" }]}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <p className="eyebrow text-red mb-3">38 Cities & Communities</p>
              <h2 className="font-slab text-3xl md:text-4xl font-extrabold text-ink">
                Find your city
              </h2>
              <p className="mt-4 text-steel body-base">
                Our private studio at 20 Heron in Lake Forest is central to all of Orange
                County. Choose your city to see local hair-replacement options, or call{" "}
                <a href="tel:+19046737587" className="font-semibold text-red">
                  (904) 673-7587
                </a>{" "}
                to book.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((loc) => (
                <div
                  key={loc.slug}
                  className="rounded-2xl border border-line p-5 hover:border-red/40 transition-colors"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-slab text-lg font-bold text-ink">
                      {loc.city}, {loc.state}
                    </h3>
                    <span className="text-xs text-steel">{loc.zip}</span>
                  </div>
                  <p className="mt-1 text-sm text-steel capitalize">{loc.distance} away</p>
                  <ul className="mt-3 space-y-1.5">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}-${loc.slug}/`}
                          className="text-sm text-ink/75 hover:text-red transition-colors"
                        >
                          → {s.shortName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
