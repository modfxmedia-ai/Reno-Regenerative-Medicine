"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV, PHONE, PRIMARY_CTA, BRAND, HOURS } from "../lib/site";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${BRAND.name} home`}>
      <span
        className="grid place-items-center h-10 w-10 rounded-[11px] text-white font-slab font-extrabold text-lg leading-none"
        style={{ background: "linear-gradient(180deg,#DB2020,#7a0d0d)" }}
      >
        MH
      </span>
      <span className="leading-none">
        <span className="block font-slab font-extrabold text-[1.35rem] tracking-tight text-ink">
          Man<span className="text-red">Hair</span>
        </span>
        <span className="block eyebrow text-steel text-[0.58rem] tracking-[0.22em] mt-0.5">
          ONLINE
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden md:block bg-jet text-white/90 text-[0.8rem]">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-9">
          <span className="text-white/70">{HOURS.note} · Serving all of Orange County, CA</span>
          <div className="flex items-center gap-5">
            <a href={PHONE.href} className="font-semibold hover:text-red-bright transition-colors">
              {PHONE.display}
            </a>
            <span className="text-white/30">|</span>
            <span className="text-white/70">20 Heron, Lake Forest, CA</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`bg-white/95 backdrop-blur border-b transition-shadow ${
          scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-line" : "border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-[70px]">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-[0.92rem] font-medium text-ink/85 hover:text-red transition-colors py-2"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                    <div className="w-64 rounded-xl border border-line bg-white shadow-xl p-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-lg px-3 py-2.5 text-[0.88rem] text-ink/80 hover:bg-smoke hover:text-red transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE.href}
              className="text-[0.92rem] font-semibold text-ink hover:text-red transition-colors"
            >
              {PHONE.display}
            </a>
            <Link
              href={PRIMARY_CTA.href}
              className="rounded-full bg-red px-5 py-2.5 text-[0.88rem] font-semibold text-white hover:bg-red-bright transition-colors"
            >
              {PRIMARY_CTA.label}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-lg text-ink hover:bg-smoke"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-[70px] z-40 bg-white overflow-y-auto">
          <nav className="px-6 py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.href} className="border-b border-line py-1">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-semibold text-ink"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pb-2 pl-3 flex flex-col">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="py-2 text-[0.95rem] text-steel hover:text-red"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href={PRIMARY_CTA.href}
                onClick={() => setOpen(false)}
                className="rounded-full bg-red px-5 py-3.5 text-center font-semibold text-white"
              >
                {PRIMARY_CTA.label}
              </Link>
              <a
                href={PHONE.href}
                className="rounded-full border border-ink/15 px-5 py-3.5 text-center font-semibold text-ink"
              >
                Call {PHONE.display}
              </a>
              <p className="text-center text-sm text-steel mt-1">{HOURS.note}</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
