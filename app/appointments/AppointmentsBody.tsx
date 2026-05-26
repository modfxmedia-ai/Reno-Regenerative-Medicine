"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ================================================================== */
/*  Appointments form + office card                                   */
/* ================================================================== */
export default function AppointmentsBody() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get("first") as string,
      lastName: formData.get("last") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      insurance: formData.get("insurance") as string,
      message: formData.get("message") as string,
      source: "Appointment Request",
    };

    await fetch("https://services.leadconnectorhq.com/hooks/m3cJWahBtUP73smhkOlY/webhook-trigger/b5ecc20a-ba70-46de-ad42-a8ba1f2f2f0a", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setSubmitted(true);
  }

  const inputCls =
    "w-full rounded-xl border border-[#e8e4d9] bg-white px-4 py-3.5 text-[15px] text-[#0a120d] placeholder:text-[#1a2332]/40 focus:border-[#3d7a52] focus:outline-none focus:ring-2 focus:ring-[#3d7a52]/20";

  return (
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

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-[#f6f3ea] p-8 ring-1 ring-[#e8e4d9]">
                <p className="font-serif-display text-[24px] leading-snug text-[#0a120d]">
                  Thank you &mdash; your request is on its way.
                </p>
                <p className="mt-2 text-[15px] leading-[1.7] text-[#1a2332]/75">
                  Our team will reach out shortly to confirm your appointment. For an immediate response, please call{" "}
                  <a href="tel:+17756839026" className="font-semibold text-[#13231a] underline decoration-[#c6b180] decoration-2 underline-offset-[4px] hover:text-[#3d7a52]">
                    (775) 683-9026
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                      First Name
                    </span>
                    <input name="first" type="text" className={inputCls} placeholder="First Name" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                      Last Name
                    </span>
                    <input name="last" type="text" className={inputCls} placeholder="Last Name" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                      Phone <span className="text-[#3d7a52]">*</span>
                    </span>
                    <input required name="phone" type="tel" className={inputCls} placeholder="Phone" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                      Email <span className="text-[#3d7a52]">*</span>
                    </span>
                    <div className="relative">
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1a2332]/40"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                      <input
                        required
                        name="email"
                        type="email"
                        className={`${inputCls} pl-11`}
                        placeholder="Email"
                      />
                    </div>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                    Insurance Provider
                  </span>
                  <input name="insurance" type="text" className={inputCls} />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                    Message
                  </span>
                  <textarea name="message" rows={4} className={inputCls} />
                </label>

                <label className="flex items-start gap-3 rounded-2xl bg-[#f6f3ea]/60 p-4 ring-1 ring-[#e8e4d9]">
                  <input
                    required
                    type="checkbox"
                    name="consent"
                    className="mt-1 h-4 w-4 flex-none accent-[#3d7a52]"
                  />
                  <span className="text-[12.5px] leading-[1.6] text-[#1a2332]/75">
                    Reno Regenerative Medicine is committed to protecting and respecting your privacy, and we&rsquo;ll only use your personal information to administer your account and to provide the products and services you requested from us. I consent to receive SMS notifications, alerts &amp; occasional marketing communication from company. Message frequency varies. Message &amp; data rates may apply. Text HELP to (775) 204-3533 for assistance. You can reply STOP to unsubscribe at any time.
                  </span>
                </label>

                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4a7c59] to-[#3d7a52] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_18px_40px_-18px_rgba(74,124,89,0.85)] transition-colors hover:from-[#3d7a52] hover:to-[#2e5e3f] sm:w-auto"
                  >
                    Submit
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
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
  );
}
