"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years of Care" },
  { value: "200+", label: "5-Star Reviews" },
  { value: "15+", label: "Therapies Offered" },
  { value: "On-site", label: "X-ray & Ultrasound" },
];

export default function TrustBar() {
  return (
    <section className="relative bg-white border-y border-[#e8e4d9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 lg:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8 lg:divide-x lg:divide-[#e8e4d9]">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="lg:px-6 first:lg:pl-0 last:lg:pr-0 text-center lg:text-left"
            >
              <div className="font-serif-display text-[36px] lg:text-[44px] leading-none text-[#1a2332] tracking-[-0.02em]">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#4a7c59]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
