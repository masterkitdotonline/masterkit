import Script from "next/script";

/**
 * Monetag ad loader (sitewide, loaded once from app/layout.js).
 *
 * The <meta name="monetag"> tag only VERIFIES the site. To actually show ads you must create an
 * ad zone in the Monetag dashboard (Sites -> your site -> Ad zones) and copy its script details:
 *
 *   NEXT_PUBLIC_MONETAG_SRC   = the script URL from the snippet, e.g. https://xxxx.com/tag.min.js
 *                               (or https://xxxx.com/401/1234567 for In-Page Push / Vignette)
 *   NEXT_PUBLIC_MONETAG_ZONE  = (optional) zone id, only if the snippet has data-zone="..."
 *
 * Put both in .env.local (and in your hosting dashboard). Renders nothing until SRC is set.
 */
export default function MonetagAds() {
  const src = process.env.NEXT_PUBLIC_MONETAG_SRC;
  const zone = process.env.NEXT_PUBLIC_MONETAG_ZONE;
  if (!src) return null;

  return (
    <Script
      id="monetag-loader"
      src={src}
      strategy="afterInteractive"
      data-zone={zone || undefined}
      data-cfasync="false"
    />
  );
}
