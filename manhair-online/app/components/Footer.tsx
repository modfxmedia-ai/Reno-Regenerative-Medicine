import Link from "next/link";
import {
  BRAND,
  PHONE,
  ADDRESS,
  HOURS,
  SOCIAL,
  SERVICES,
  SERVICE_AREA,
} from "../lib/site";

const company = [
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Before & After", href: "/before-after/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About Us", href: "/about/" },
  { label: "Areas We Serve", href: "/areas-we-serve/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Book a Consultation", href: "/contact/" },
];

export default function Footer() {
  return (
    <footer className="bg-jet text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span
              className="grid place-items-center h-9 w-9 rounded-[10px] text-white font-slab font-extrabold leading-none"
              style={{ background: "linear-gradient(180deg,#DB2020,#7a0d0d)" }}
            >
              MH
            </span>
            <span className="font-slab font-extrabold text-xl text-white">
              Man<span className="text-red-bright">Hair</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Premium non-surgical hair replacement for men. {SERVICE_AREA.blurb}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center h-9 w-9 rounded-full bg-white/10 hover:bg-red transition-colors"
              aria-label="Facebook"
            >
              <span className="text-sm font-bold">f</span>
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center h-9 w-9 rounded-full bg-white/10 hover:bg-red transition-colors"
              aria-label="Instagram"
            >
              <span className="text-sm font-bold">ig</span>
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Solutions
          </h3>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-red-bright transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm">
            {company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-red-bright transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Visit Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={ADDRESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-bright transition-colors">
                {ADDRESS.street}
                <br />
                {ADDRESS.city}, {ADDRESS.state} {ADDRESS.zip}
              </a>
            </li>
            <li>
              <a href={PHONE.href} className="text-white font-semibold hover:text-red-bright transition-colors">
                {PHONE.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${BRAND.email}`} className="hover:text-red-bright transition-colors">
                {BRAND.email}
              </a>
            </li>
            <li className="text-white/50">
              {HOURS.note}
              <br />
              {HOURS.days}, {HOURS.open} – {HOURS.close}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy/" className="hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-white/80">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
