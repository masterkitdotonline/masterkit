"use client";

import { useEffect, useRef } from "react";

export default function AdsteraBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    const container = adRef.current;

    if (!container || container.dataset.loaded === "true") {
      return;
    }

    container.dataset.loaded = "true";

    window.atOptions = {
      key: "370fb7632c2df8541f3ac881c4d301ef",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://bauval.org/22/370fb7632c2df8541f3ac881c4d301ef";
    script.async = true;

    container.appendChild(script);

    return () => {
      // Don't remove the script immediately; ad scripts may still be running.
    };
  }, []);

  return (
    <div className="my-6 flex w-full justify-center overflow-hidden">
      <div
        ref={adRef}
        className="min-h-[250px] max-w-full"
        style={{
          width: 300,
        }}
      />
    </div>
  );
}