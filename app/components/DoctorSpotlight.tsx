"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const credentials = [
  "Integrative & Regenerative Medicine",
  "Chiropractic & Therapeutic Exercise",
  "On-site X-ray Imaging",
  "Cold Laser & Joint Injection Specialist",
];

export default function DoctorSpotlight() {
  return (
    <section className="relative bg-[#f6f3ea]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md">
              <div
                className="absolute inset-0 rounded-3xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=80')",
                }}
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />

              {/* Corner stat */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-5 shadow-xl ring-1 ring-black/5 max-w-[220px]">
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#4a7c59]">
                  Reno Regenerative
                </div>
                <div className="mt-2 font-serif-display text-[20px] leading-tight text-[#1a2332]">
                  Whole-person care, one team.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#4a7c59]">
              Meet the Practice
            </div>
            <h2 className="font-serif-display mt-3 text-[40px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-[#1a2332]">
              Our{" "}
              <span className="italic text-[#4a7c59]">Team</span>
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-[#1a2332]/80 max-w-2xl">
              The team appreciate that every patient has individualized needs
              and concerns and adapts all of their treatment plans to address
              the uniqueness of each patient. Their treatment approach focuses
              on relieving pain and improving physical function for better
              overall health and well-being. The team provides effective
              hands-on care and innovative medicine services that can help
              patients who want to avoid taking medications or having surgery.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-xl bg-white border border-[#e8e4d9] px-4 py-3 text-[13.5px] text-[#1a2332]"
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#4a7c59] text-white text-[10px]">
                    ✓
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center rounded-md bg-[#1a2332] hover:bg-[#0f1a14] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors"
              >
                About the Clinic
              </Link>
              <Link
                href="/new-patients"
                className="inline-flex items-center rounded-md border border-[#1a2332]/15 hover:border-[#4a7c59]/40 hover:bg-white px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#1a2332] transition-colors"
              >
                New Patient Info
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
