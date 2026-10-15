"use client";

import { useEffect } from "react";

export default function AdsteraPopunder() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://abscloud.org/1/e21ee6c01bd4196e9b314af49afdce2b";

    script.setAttribute("data-cfasync", "false");
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Popunder scripts may register global event handlers.
      // Avoid removing the script during component cleanup.
    };
  }, []);

  return null;
}