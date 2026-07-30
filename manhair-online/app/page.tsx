import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";
import TrustBar from "./components/TrustBar";
import ServicesGrid from "./components/ServicesGrid";
import WhyChoose from "./components/WhyChoose";
import ProcessSteps from "./components/ProcessSteps";
import AreasStrip from "./components/AreasStrip";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import JsonLd from "./components/JsonLd";
import { buildBreadcrumbSchema } from "./lib/jsonLd";
import { SITE_URL, BRAND } from "./lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Men's Non-Surgical Hair Replacement in Orange County, CA | ManHair Online",
  },
  description: BRAND.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Men's Non-Surgical Hair Replacement in Orange County, CA | ManHair Online",
    description: BRAND.description,
    url: `${SITE_URL}/`,
    siteName: BRAND.name,
    type: "website",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([{ name: "Home", path: "/" }])} />
      <Header />
      <main className="flex-1">
        <HomeHero />
        <TrustBar />
        <ServicesGrid />
        <WhyChoose />
        <ProcessSteps />
        <AreasStrip />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
