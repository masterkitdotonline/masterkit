"use client";

import { useState } from "react";

/**
 * PromoBanner – reusable 350x50 promotion banner.
 * Clicking it opens an external site in a new tab.
 *
 * Props
 *   href      (required) external link the banner opens, e.g. "https://example.com/offer"
 *   src       (required) banner image URL (best size 350x50), e.g. "/promo/offer.png" or "https://..."
 *   alt       (optional) short description of the banner (good for accessibility / SEO)
 *   label     (optional) small text above the banner, default "Promotion" ("" hides it)
 *   width     (optional) default 350
 *   height    (optional) default 50
 *   className (optional) extra classes for the outer wrapper
 *
 * Usage
 *   import PromoBanner from "@/components/PromoBanner";
 *
 *   <PromoBanner href="https://example.com/offer" src="/promo/offer-350x50.png" alt="Get 20% off hosting" />
 *
 * Use it as many times as you like on a page, each with its own href/src.
 * Put your images in the /public folder (e.g. /public/promo/offer-350x50.png -> src="/promo/offer-350x50.png").
 */
export default function PromoBanner({
  href,
  src,
  alt = "Promotion",
  label = "Promotion",
  width = 350,
  height = 130,
  className = "",
}) {
  const [failed, setFailed] = useState(false);

  // Nothing to show if props are missing or the image could not load (no broken-image icon for visitors)
  if (!href || !src || failed) return null;

  return (
    <aside
      aria-label="Promotion"
      className={`mx-auto my-6 flex w-full max-w-4xl flex-col items-center px-4 print:hidden ${className}`}
    >
      {label ? (
        <p className="mb-1 text-center text-[10px] font-medium uppercase tracking-widest text-slate-400">{label}</p>
      ) : null}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer sponsored nofollow"
        aria-label={`${alt} (opens in a new tab)`}
        className="block max-w-full overflow-hidden rounded-lg shadow-sm ring-1 ring-slate-200 transition hover:shadow-md hover:ring-indigo-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
        style={{ width, aspectRatio: `${width} / ${height}` }}
      >
        {/* Plain <img> so any image URL works without configuring next/image domains */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="block h-full w-full object-cover"
        />
      </a>
    </aside>
  );
}
