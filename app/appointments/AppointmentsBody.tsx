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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
              Schedule your visit.
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#1a2332]/70">
              Ready to start feeling better? Share a few details below and our team will follow up to confirm a convenient time for your consultation.
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
                    <input required name="first" type="text" className={inputCls} placeholder="Jane" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                      Last Name
                    </span>
                    <input required name="last" type="text" className={inputCls} placeholder="Doe" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                      Email
                    </span>
                    <input required name="email" type="email" className={inputCls} placeholder="you@example.com" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                      Phone
                    </span>
                    <input required name="phone" type="tel" className={inputCls} placeholder="(775) 555-0123" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                      Preferred Service
                    </span>
                    <select name="service" className={inputCls}>
                      <option>Not sure &mdash; help me decide</option>
                      <option>Joint Injections</option>
                      <option>Trigger Point Injections</option>
                      <option>Physical Therapy</option>
                      <option>Spinal Decompression</option>
                      <option>Chiropractic Care</option>
                      <option>Nutritional IVs</option>
                      <option>Bioidentical Hormones</option>
                      <option>GAINSwave</option>
                      <option>Knee Decompression</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                      Preferred Day &amp; Time
                    </span>
                    <input name="preferred_time" type="text" className={inputCls} placeholder="e.g. Tuesday afternoon" />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                    Tell us about your symptoms or goals
                  </span>
                  <textarea required name="message" rows={5} className={inputCls} placeholder="Briefly describe what you'd like help with." />
                </label>

                <fieldset className="grid gap-3">
                  <legend className="mb-1 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1a2332]/70">
                    Are you a new or existing patient?
                  </legend>
                  <div className="flex flex-wrap gap-5 text-[14.5px] text-[#1a2332]/80">
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="patient_type" value="new" defaultChecked className="h-4 w-4 accent-[#3d7a52]" />
                      New patient
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input type="radio" name="patient_type" value="existing" className="h-4 w-4 accent-[#3d7a52]" />
                      Existing patient
                    </label>
                  </div>
                </fieldset>

                <p className="text-[12.5px] leading-[1.6] text-[#1a2332]/55">
                  By submitting, you agree to be contacted by Reno Regenerative Medicine. Please do not include sensitive medical information.
                </p>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#c6b180] px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0a120d] transition-colors hover:bg-[#f3d99a]"
                  >
                    Request Appointment
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
