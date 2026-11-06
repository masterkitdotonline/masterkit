"use client";

import { useEffect } from "react";

/**
 * AdSense-ready, non-intrusive ad slot.
 * Renders NOTHING until you set NEXT_PUBLIC_ADSENSE_CLIENT (ca-pub-xxxxxxxxxxxxxxxx)
 * and pass a slot id. This keeps the site clean while the AdSense account is pending.
 *
 * Usage: <AdSlot slot="1234567890" />
 */
export default function AdSlot({ slot, className = "" }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // ignore – ad blocked or already initialised
    }
  }, [client, slot]);

  if (!client || !slot) return null;

  return (
    <aside aria-label="Advertisement" className={`mx-auto my-10 w-full max-w-4xl px-4 print:hidden ${className}`}>
      <p className="mb-1 text-center text-[10px] font-medium uppercase tracking-widest text-slate-400">
        Advertisement
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block", minHeight: 90 }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
