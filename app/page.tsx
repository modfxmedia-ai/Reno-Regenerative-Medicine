import type { Metadata } from "next";
import Header from "./components/Header";
import HeroV2 from "./components/HeroV2";
import TrustBar from "./components/TrustBar";
import ApproachSection from "./components/ApproachSection";
import ServicesBento from "./components/ServicesBento";
import BodyMapSection from "./components/WhereIsYourPain";
import ProcessSteps from "./components/ProcessSteps";
import DoctorSpotlight from "./components/DoctorSpotlight";
import Testimonials from "./components/Testimonials";
import ContactCTASection from "./components/ContactCTASection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Welcome to Reno Regenerative | Integrative Medicine Clinic",
  description:
    "Looking for an integrative medicine center? Reno Regenerative Medicine helps with knee, back, and joint pain, helping your body heal naturally. Call today!",
  alternates: { canonical: "https://renoregen.com/" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Reno Regenerative Medicine",
  description:
    "Knee, Back & Joint Pain Clinic in Reno, Nevada offering innovative and integrative medicine.",
  url: "https://renoregen.com/",
  telephone: "+1-775-683-9026",
  image: "https://renoregen.com/wp-content/uploads/2022/08/jointpain_img.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "730 Sandhill Road #120",
    addressLocality: "Reno",
    addressRegion: "NV",
    postalCode: "89521",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 39.4486, longitude: -119.7392 },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "201",
  },
  sameAs: [
    "https://www.facebook.com/renoregenerative",
    "https://www.youtube.com/channel/UCAoMwIvwTV-jKzS7MZttmVg",
  ],
  areaServed: "Northern Nevada and surrounding California communities",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <HeroV2 />
        <TrustBar />
        <ApproachSection />
        <ServicesBento />
        <BodyMapSection />
        <ProcessSteps />
        <DoctorSpotlight />
        <Testimonials />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
