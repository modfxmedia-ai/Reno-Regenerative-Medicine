"use client";

import Script from "next/script";

/**
 * Reusable website contact form component
 * Uses the LeadConnector iframe form
 */
export default function WebsiteForm() {
  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_-8px_rgba(10,18,13,0.12)] ring-1 ring-[#e8e4d9]">
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
            title="Contact form"
          />
        </div>
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
