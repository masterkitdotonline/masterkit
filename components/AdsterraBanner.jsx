"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Adsterra 320x50 banner – reusable, use it as many times as you like on a page.
 *
 * Why an iframe? The Adsterra snippet reads a GLOBAL `atOptions` variable, so two banners
 * on the same page would overwrite each other. Each banner here lives in its own iframe
 * (srcDoc) with its own `atOptions`, so 2-3 banners per page work without conflicts.
 *
 * - Loads lazily (only when the banner is close to the viewport) to keep pages fast.
 * - Re-mounts on every route change, so a new ad is requested per page view.
 *
 * Usage:  <AdsterraBanner />
 *         <AdsterraBanner adKey="another-key" />   // optional: use a different key per placement
 */
const DEFAULT_KEY = "0caadee2d1ad7c0ec86600895ea601b9";
const DEFAULT_SRC = "https://bauval.org/22";

function buildDoc({ adKey, width, height, src }) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><base target="_blank"><style>html,body{margin:0;padding:0;background:transparent;overflow:hidden}body{display:flex;justify-content:center;align-items:center;width:${width}px;height:${height}px}</style></head><body><script>atOptions={'key':'${adKey}','format':'iframe','height':${height},'width':${width},'params':{}};<\/script><script src="${src}/${adKey}"><\/script></body></html>`;
}

export default function AdsterraBanner({
  adKey = DEFAULT_KEY,
  width = 320,
  height = 50,
  src = DEFAULT_SRC,
  className = "",
}) {
  const pathname = usePathname();
  const holder = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const el = holder.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  return (
    <aside
      aria-label="Advertisement"
      className={`mx-auto my-6 flex w-full max-w-4xl flex-col items-center px-4 print:hidden ${className}`}
    >
      <p className="mb-1 text-center text-[10px] font-medium uppercase tracking-widest text-slate-400">
        Advertisement
      </p>
      <div
        ref={holder}
        className="flex items-center justify-center overflow-hidden"
        style={{ width, height, maxWidth: "100%" }}
      >
        {visible && (
          <iframe
            key={pathname}
            title="Advertisement"
            width={width}
            height={height}
            scrolling="no"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            srcDoc={buildDoc({ adKey, width, height, src })}
            style={{ border: 0, overflow: "hidden", display: "block" }}
          />
        )}
      </div>
    </aside>
  );
}
