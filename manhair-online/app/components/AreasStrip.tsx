import Link from "next/link";
import locations from "../lib/pseo/locations";

// Feature a curated set of well-known OC cities on the home page.
const featured = [
  "Irvine",
  "Mission Viejo",
  "Newport Beach",
  "Anaheim",
  "Santa Ana",
  "Huntington Beach",
  "Lake Forest",
  "Costa Mesa",
  "Laguna Niguel",
  "Tustin",
  "Aliso Viejo",
  "San Clemente",
];

export default function AreasStrip() {
  const bySlug = (name: string) =>
    locations.find((l) => l.city === name)?.slug ?? "";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="rounded-3xl bg-jet text-white p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow text-red-bright mb-3">Orange County, California</p>
              <h2 className="font-slab text-3xl md:text-4xl font-extrabold">
                Proudly serving men across all of Orange County
              </h2>
              <p className="mt-4 text-white/70 body-base">
                Our private studio sits at 20 Heron in Lake Forest — central to the whole
                county. Wherever you are in OC, you&apos;re minutes from a full head of hair.
              </p>
              <Link
                href="/areas-we-serve/"
                className="mt-6 inline-flex rounded-full bg-red px-7 py-3.5 font-semibold text-white hover:bg-red-bright transition-colors"
              >
                See all areas we serve
              </Link>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {featured.map((city) => (
                <Link
                  key={city}
                  href={`/non-surgical-hair-replacement-${bySlug(city)}/`}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/80 hover:border-red hover:text-white transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
