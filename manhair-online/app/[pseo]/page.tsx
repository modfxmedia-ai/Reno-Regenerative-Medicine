import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import { getAllSlugs, getCombinationBySlug } from "@/app/lib/pseo/combinations";
import { SITE_URL } from "@/app/lib/site";

import PseoBody from "./PseoBody";

// Only pre-rendered combos resolve; everything else 404s.
export const dynamicParams = false;

type RouteParams = { pseo: string };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ pseo: slug }));
}

function fill(str: string, v: { city: string; state: string; county: string }) {
  return str
    .replace(/\{city\}/g, v.city)
    .replace(/\{state\}/g, v.state)
    .replace(/\{county\}/g, v.county);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { pseo } = await params;
  const combo = getCombinationBySlug(pseo);
  if (!combo) return {};

  const { service, location } = combo;
  const v = { city: location.city, state: location.state, county: location.county };
  const title = fill(service.metaTitle, v);
  const description = fill(service.metaDesc, v);
  const canonical = `${SITE_URL}/${pseo}/`;

  return {
    title: { absolute: title },
    description,
    keywords: service.keywords.map((k) => fill(k, v)),
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "ManHair Online",
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function PseoPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { pseo } = await params;
  const combo = getCombinationBySlug(pseo);
  if (!combo) return notFound();

  const { service, location } = combo;
  const v = { city: location.city, state: location.state, county: location.county };
  const h1 = fill(service.h1Template, v);
  const intro = fill(service.intro, v);

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow={service.shortName}
          title={h1}
          subtitle={`Serving men in ${location.city}, ${location.state} and throughout ${location.county} County — ${location.distance} from our Lake Forest studio.`}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Areas We Serve", href: "/areas-we-serve/" },
            { label: `${location.city}, ${location.state}` },
          ]}
        />
        <PseoBody combo={combo} intro={intro} />
      </main>
      <Footer />
    </>
  );
}
