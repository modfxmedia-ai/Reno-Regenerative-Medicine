"use client";

import { useState } from "react";
import { PHONE } from "../lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend yet — capture the lead client-side and show confirmation.
    // Wire this to your CRM / GoHighLevel / email endpoint on launch.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-smoke p-8 text-center">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-red text-white text-2xl">
          ✓
        </div>
        <h3 className="font-slab text-2xl font-bold text-ink">Request received.</h3>
        <p className="mt-3 text-steel body-base">
          Thanks for reaching out. A ManHair specialist will call you at the number you
          provided to schedule your free, private discovery call.
        </p>
        <p className="mt-4 text-sm text-steel">
          Prefer to talk now?{" "}
          <a href={PHONE.href} className="font-semibold text-red">
            Call {PHONE.display}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 sm:p-8 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First name" name="firstName" autoComplete="given-name" required />
        <Field label="Last name" name="lastName" autoComplete="family-name" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-semibold text-ink mb-1.5">
          What&apos;s your situation? <span className="font-normal text-steel">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us a little about your hair loss and what you're hoping for…"
          className="w-full rounded-xl border border-line bg-smoke/40 px-4 py-3 text-ink outline-none focus:border-red focus:ring-2 focus:ring-red/20 transition"
        />
      </div>
      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-red px-6 py-4 font-semibold text-white hover:bg-red-bright transition-colors"
      >
        Request My Free Discovery Call
      </button>
      <p className="mt-3 text-center text-xs text-steel">
        100% free and confidential. We&apos;ll call to find a time that works — by appointment only.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-ink mb-1.5">
        {label} {required && <span className="text-red">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-line bg-smoke/40 px-4 py-3 text-ink outline-none focus:border-red focus:ring-2 focus:ring-red/20 transition"
      />
    </label>
  );
}
