import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import JsonLd from "./components/JsonLd";
import { buildBusinessSchema } from "./lib/jsonLd";
import { SITE_URL, BRAND } from "./lib/site";

const sans = Roboto({
  variable: "--font-sans-ui",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const slab = Roboto_Slab({
  variable: "--font-slab-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Men's Non-Surgical Hair Replacement in Orange County, CA | ManHair Online",
    template: "%s | ManHair Online",
  },
  description: BRAND.description,
  applicationName: BRAND.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    siteName: BRAND.name,
    locale: "en_US",
    type: "website",
    url: `${SITE_URL}/`,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${slab.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-white text-ink"
        suppressHydrationWarning
      >
        <JsonLd schema={buildBusinessSchema()} />
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
