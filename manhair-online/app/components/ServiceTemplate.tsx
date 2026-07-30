import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import PageHero from "./PageHero";
import CtaBanner from "./CtaBanner";
import FaqAccordion, { type Faq } from "./FaqAccordion";
import JsonLd from "./JsonLd";
import { buildServiceSchema, buildBreadcrumbSchema, buildFaqSchema } from "../lib/jsonLd";
import { PHONE, PRIMARY_CTA } from "../lib/site";
import locations from "../lib/pseo/locations";

export interface ServiceSection {
  heading: string;
  paragraphs: string[];
}

export interface ServiceContent {
  /** pSEO service slug used to build /{slug}-{city}/ interlinks */
  serviceSlug: string;
  path: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  metaDescription: string;
  intro: string;
  highlights: { title: string; body: string }[];
  sections: ServiceSection[];
  faqs: Faq[];
}

// A representative spread of OC cities for in-content local interlinking.
const interlinkCities = [
  "Irvine",
  "Mission Viejo",
  "Newport Beach",
  "Anaheim",
  "Santa Ana",
  "Huntington Beach",
  "Costa Mesa",
  "Lake Forest",
  "Laguna Niguel",
  "Tustin",
  "Aliso Viejo",
  "Fullerton",
  "Orange",
  "San Clemente",
];

export default function ServiceTemplate({ content }: { content: ServiceContent }) {
  const slugFor = (city: string) =>
    locations.find((l) => l.city === city)?.slug ?? "";

  return (
    <>
      <JsonLd
        schema={[
          buildServiceSchema({
            name: content.h1.replace(/ for Men$/i, ""),
            description: content.metaDescription,
            path: content.path,
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: content.eyebrow, path: content.path },
          ]),
          buildFaqSchema(content.faqs),
        ]}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow={content.eyebrow}
          title={content.h1}
          subtitle={content.subtitle}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: content.eyebrow }]}
        />

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid lg:grid-cols-3 gap-12">
            {/* Body */}
            <div className="lg:col-span-2">
              <p className="text-xl text-ink/90 leading-relaxed font-medium">{content.intro}</p>

              <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {content.highlights.map((h) => (
                  <div key={h.title} className="flex gap-3">
                    <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red text-white text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <h3 className="font-slab font-bold text-ink">{h.title}</h3>
                      <p className="text-steel text-[0.93rem] leading-relaxed mt-0.5">{h.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-10 body-base">
                {content.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="font-slab text-2xl font-extrabold text-ink">{s.heading}</h2>
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className="mt-3 text-steel">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky CTA sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 rounded-2xl border border-line bg-smoke p-7">
                <h3 className="font-slab text-xl font-extrabold text-ink">
                  Ready to see your options?
                </h3>
                <p className="mt-2 text-steel text-[0.95rem]">
                  Book a free, private discovery call — no pressure, just honest answers.
                </p>
                <Link
                  href={PRIMARY_CTA.href}
                  className="mt-5 block rounded-full bg-red px-6 py-3.5 text-center font-semibold text-white hover:bg-red-bright transition-colors"
                >
                  {PRIMARY_CTA.label}
                </Link>
                <a
                  href={PHONE.href}
                  className="mt-3 block rounded-full border border-ink/15 px-6 py-3.5 text-center font-semibold text-ink hover:border-red hover:text-red transition-colors"
                >
                  Call {PHONE.display}
                </a>
                <p className="mt-4 text-center text-xs text-steel">
                  By appointment only · 20 Heron, Lake Forest, CA
                </p>
              </div>
            </aside>
          </div>
        </section>

        {/* Local SEO interlinks */}
        <section className="bg-smoke border-t border-line">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <h2 className="font-slab text-2xl font-extrabold text-ink">
              {content.eyebrow} across Orange County
            </h2>
            <p className="mt-2 text-steel">
              We serve men throughout Orange County, California. Find your city:
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {interlinkCities.map((city) => (
                <Link
                  key={city}
                  href={`/${content.serviceSlug}-${slugFor(city)}/`}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink/80 hover:border-red hover:text-red transition-colors"
                >
                  {city}
                </Link>
              ))}
              <Link
                href="/areas-we-serve/"
                className="rounded-full bg-red px-4 py-2 text-sm font-semibold text-white hover:bg-red-bright transition-colors"
              >
                All areas →
              </Link>
            </div>
          </div>
        </section>

        {content.faqs.length > 0 && (
          <section className="bg-white">
            <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
              <p className="eyebrow text-red mb-3 text-center">FAQ</p>
              <h2 className="font-slab text-3xl font-extrabold text-ink text-center mb-10">
                Common questions
              </h2>
              <FaqAccordion faqs={content.faqs} />
            </div>
          </section>
        )}

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
