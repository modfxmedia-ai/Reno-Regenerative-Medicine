"use client";

import { useState } from "react";

export interface Faq {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-slab text-lg font-bold text-ink">{f.q}</span>
              <span
                className={`grid place-items-center h-7 w-7 shrink-0 rounded-full border border-line text-red transition-transform ${
                  isOpen ? "rotate-45 bg-red text-white border-red" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-steel body-base pr-10">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
