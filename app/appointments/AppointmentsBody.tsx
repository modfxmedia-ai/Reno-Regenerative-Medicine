"use client";

import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/* ================================================================== */
/*  Appointments form + office card                                   */
/* ================================================================== */
export default function AppointmentsBody() {
  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1180px] px-6 xl:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#3d7a52]">
                <span aria-hidden className="h-px w-8 bg-[#3d7a52]/70" />
                Request an Appointment
              </span>
              <h2 className="mt-4 font-serif-display text-[34px] sm:text-[42px] leading-[1.08] tracking-tight text-[#0a120d]">
                Request An Appointment Today
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.7] text-[#1a2332]/70">
                Share a few details below and our team will follow up to confirm a convenient time for your visit.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_-8px_rgba(10,18,13,0.12)] ring-1 ring-[#e8e4d9]">
                <div className="relative" style={{ minHeight: '808px' }}>
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/qDfQoPCHzpq1r5FpaDL7"
                    style={{ width: '100%', height: '100%', border: 'none', minHeight: '808px' }}
                    id="inline-qDfQoPCHzpq1r5FpaDL7"
                    data-layout={'{"id":"INLINE"}'}
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name=" 🟢 website form"
                    data-height="808"
                    data-layout-iframe-id="inline-qDfQoPCHzpq1r5FpaDL7"
                    data-form-id="qDfQoPCHzpq1r5FpaDL7"
                    title=" 🟢 website form"
                  />
                </div>
              </div>
            </motion.div>

          {/* Office card */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a120d] via-[#13231a] to-[#1f3a28] p-8 text-white shadow-[0_40px_80px_-40px_rgba(10,18,13,0.5)]">
              <div aria-hidden className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-[#3d7a52]/20 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
                  <span aria-hidden className="h-px w-8 bg-[#f3d99a]/70" />
                  Reno Office
                </span>
                <p className="mt-4 font-serif-display text-[26px] leading-snug">
                  Reno Regenerative Medicine
                </p>
                <p className="mt-3 text-[15px] leading-[1.7] text-white/80">
                  730 Sandhill Rd, Suite 120
                  <br />
                  Reno, NV 89521
                </p>

                <div className="mt-6 space-y-3 text-[15px] text-white/85">
                  <p>
                    <span className="text-white/60">Call: </span>
                    <a href="tel:+17756839026" className="font-semibold hover:text-[#f3d99a]">
                      (775) 683-9026
                    </a>
                  </p>
                  <p>
                    <span className="text-white/60">Text: </span>
                    <a href="sms:+17755223807" className="font-semibold hover:text-[#f3d99a]">
                      (775) 522-3807
                    </a>
                  </p>
                  <p>
                    <span className="text-white/60">Fax: </span>
                    <span className="font-semibold">(775) 683-9017</span>
                  </p>
                </div>

                <div className="mt-7 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f3d99a]">
                    Business Hours
                  </p>
                  <ul className="mt-3 space-y-1.5 text-[14px] text-white/85">
                    <li className="flex justify-between"><span>Monday</span><span>9:00 am &ndash; 6:00 pm</span></li>
                    <li className="flex justify-between"><span>Tuesday</span><span>9:00 am &ndash; 6:00 pm</span></li>
                    <li className="flex justify-between"><span>Wednesday</span><span>9:00 am &ndash; 6:00 pm</span></li>
                    <li className="flex justify-between"><span>Thursday</span><span>9:00 am &ndash; 6:00 pm</span></li>
                    <li className="flex justify-between text-white/55"><span>Friday</span><span>Closed</span></li>
                    <li className="flex justify-between text-white/55"><span>Saturday</span><span>Closed</span></li>
                    <li className="flex justify-between text-white/55"><span>Sunday</span><span>Closed</span></li>
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/new-patients/"
                    className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
                  >
                    New Patient Info
                  </Link>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
    <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
