import Link from "next/link";
import type { Combination } from "@/app/lib/pseo/combinations";
import { services as allServices } from "@/app/lib/pseo/combinations";
import JsonLd from "@/app/components/JsonLd";
import CtaBanner from "@/app/components/CtaBanner";
import FaqAccordion from "@/app/components/FaqAccordion";
import {
  buildBreadcrumbSchema,
  buildServiceSchema,
  buildFaqSchema,
} from "@/app/lib/jsonLd";
import { PHONE, PRIMARY_CTA, ADDRESS } from "@/app/lib/site";

export default function PseoBody({
  combo,
  intro,
}: {
  combo: Combination;
  intro: string;
}) {
  const { service, location } = combo;
  const { city, state, county, distance } = location;

  const faqs = [
    {
      q: `Do you serve ${city}, ${state}?`,
      a: `Yes. ManHair Online welcomes men from ${city} and throughout ${county} County. Our private studio is ${distance} away at ${ADDRESS.full}, and we see clients by appointment only.`,
    },
    {
      q: `What does ${service.shortName.toLowerCase()} involve?`,
      a: `It starts with a free discovery call, followed by a private consultation where we design and fit a custom human-hair system, then cut it in and style it to the look you want — all without surgery.`,
    },
    {
      q: `How much does it cost?`,
      a: `Far less than a surgical hair transplant. Final pricing depends on the system you choose, and we offer monthly payment options and buy-now-pay-later financing. Call ${PHONE.display} for a free quote.`,
    },
    {
      q: `How soon can I be seen?`,
      a: `Men from ${city} can usually be scheduled within a few days. Request your free discovery call online or call ${PHONE.display}.`,
    },
  ];

  // Other services available to this same city (internal linking).
  const otherServices = allServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        schema={[
          buildServiceSchema({
            name: `${service.name} in ${city}, ${state}`,
            description: intro,
            path: `/${service.slug}-${location.slug}/`,
          }),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas-we-serve/" },
            { name: `${city}, ${state}`, path: `/${service.slug}-${location.slug}/` },
          ]),
          buildFaqSchema(faqs),
        ]}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xl text-ink/90 leading-relaxed font-medium">{intro}</p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div>
                <h2 className="font-slab text-xl font-bold text-ink">What you get</h2>
                <ul className="mt-3 space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-steel">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red text-white text-[11px] font-bold">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-slab text-xl font-bold text-ink">Why men choose us</h2>
                <ul className="mt-3 space-y-2.5">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5 text-steel">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink text-white text-[11px] font-bold">
                        ★
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 body-base">
              <h2 className="font-slab text-2xl font-extrabold text-ink">
                {service.shortName} for {city}, {state} residents
              </h2>
              <p className="mt-3 text-steel">
                You don&apos;t have to drive to Los Angeles or live with thinning hair. From{" "}
                {city}, our Lake Forest studio is just {distance} away — an easy trip for the
                most natural-looking, non-surgical hair available in {county} County. Every
                appointment is private and one-on-one, so you get the time and honest advice
                you deserve.
              </p>
              <p className="mt-3 text-steel">
                Ready to see what&apos;s possible? Book a free, no-pressure discovery call and
                we&apos;ll walk you through your options for {service.shortName.toLowerCase()}.
              </p>
            </div>

            {/* Cross-links to other services in this city */}
            <div className="mt-10">
              <h3 className="font-slab text-lg font-bold text-ink">
                More solutions in {city}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {otherServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}-${location.slug}/`}
                    className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink/80 hover:border-red hover:text-red transition-colors"
                  >
                    {s.shortName} in {city}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 rounded-2xl border border-line bg-smoke p-7">
              <h3 className="font-slab text-xl font-extrabold text-ink">
                Free consultation for {city}
              </h3>
              <p className="mt-2 text-steel text-[0.95rem]">
                Private, by-appointment service {distance} away in Lake Forest.
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
              <dl className="mt-6 space-y-3 text-sm border-t border-line pt-5">
                <div>
                  <dt className="text-steel">Studio</dt>
                  <dd className="font-semibold text-ink">{ADDRESS.full}</dd>
                </div>
                <div>
                  <dt className="text-steel">From {city}</dt>
                  <dd className="font-semibold text-ink capitalize">{distance}</dd>
                </div>
                <div>
                  <dt className="text-steel">Hours</dt>
                  <dd className="font-semibold text-ink">By appointment only</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-smoke border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="eyebrow text-red mb-3 text-center">FAQ</p>
          <h2 className="font-slab text-3xl font-extrabold text-ink text-center mb-10">
            {city} hair replacement questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <CtaBanner heading={`Get your hair back in ${city}, ${state}.`} />
    </>
  );
}
