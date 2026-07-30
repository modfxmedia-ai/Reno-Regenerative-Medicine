import type { Metadata } from "next";
import ServiceTemplate, { type ServiceContent } from "../components/ServiceTemplate";

const content: ServiceContent = {
  serviceSlug: "mens-hair-systems",
  path: "/mens-hair-styles/",
  eyebrow: "Men's Hair Systems & Toupees",
  h1: "Men's Hair Systems, Toupees & Hair Pieces",
  subtitle:
    "Modern and classic styles, color-matched and cut in by our specialists — for a look that's 100% you and 0% detectable.",
  metaDescription:
    "Men's hair systems, toupees, and hair pieces in Orange County, CA. Modern and classic styles, professionally cut in and styled. By appointment in Lake Forest. Call (904) 673-7587.",
  intro:
    "At ManHair Online we understand the importance of a great-looking hairstyle. That's why we offer a wide selection of toupee hair systems and hair pieces for men — crafted from the highest-quality materials and designed to provide a natural look and feel, from classic to contemporary.",
  highlights: [
    { title: "Modern & classic looks", body: "From sharp and stylish to timeless — whatever suits you." },
    { title: "Matched to you", body: "Color, density, texture, and wave are all dialed in to your features." },
    { title: "Pro cut-in & styling", body: "Our stylists cut and style your system so it blends seamlessly." },
    { title: "Stock or custom", body: "Choose a ready-to-go base or a fully custom-designed unit." },
  ],
  sections: [
    {
      heading: "A style for every man",
      paragraphs: [
        "Whether you're after something sleek and modern or classic and timeless, we have you covered. Our toupee hair systems are built for a natural look and feel, and our experienced stylists know all the latest trends and techniques.",
        "Most men go for the look they had — or always wanted — when they had hair, and we cut and style the system to match exactly that.",
      ],
    },
    {
      heading: "The perfect cut-in, near you",
      paragraphs: [
        "Finding the right style can feel overwhelming, so we make it simple. From selecting the perfect base to the final cut-in and style, our specialists guide you the whole way — in a private, one-on-one appointment at our Lake Forest studio.",
      ],
    },
    {
      heading: "Products that keep it looking fresh",
      paragraphs: [
        "We use and recommend lightweight, water-based styling products and color-safe, sulfate-free care products that extend the life of your system. We'll show you exactly what to use and how to style it at home.",
      ],
    },
  ],
  faqs: [
    {
      q: "Can I choose my own hairstyle?",
      a: "Absolutely. You decide the look — modern, classic, textured, short, or longer — and our stylists cut in and style your system to match. Anything is possible.",
    },
    {
      q: "Can I use styling products?",
      a: "Yes. We advise lightweight, water-based gels and hairsprays to hold shape, and we'll point you to the products that work best with your system.",
    },
    {
      q: "How long does a system last?",
      a: "With proper care, every system averages 6 months to a year before a replacement is needed. Well-cared-for units can last even longer.",
    },
    {
      q: "Do you service systems bought elsewhere?",
      a: "We provide maintenance for outside systems but only cut, style, and guarantee our own products to ensure our standard of quality.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Men's Hair Systems, Toupees & Hair Pieces | Orange County, CA",
  description: content.metaDescription,
  alternates: { canonical: content.path },
};

export default function Page() {
  return <ServiceTemplate content={content} />;
}
