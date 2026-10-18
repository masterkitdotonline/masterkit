"use client";

import { useEffect, useRef, useState } from "react";

const scripts = [
  {
    id: 1,
    title: "Wormora — HTML5 Worm Game Source Code",
    description:
      "A colorful, playable HTML5 worm arcade game built with HTML, CSS and JavaScript. then get the complete source code for free and customize your own browser game.",
    image:
      "https://i.ibb.co/gFcQrDpw/Wormora-io-Colorful-Worm-Arena.png",
    driveUrl: "https://drive.google.com/file/d/17ANqV6qredCMBjCQ9BoQrzWUgmf9wSRb/view?usp=drive_link",
    monetagUrl: "https://uplcm.com/4/12059580",
  },
  {
    id: 2,
    title: "Ocean Eater – HTML5 Mobile Fish Survival Game Source Code",
    description:
      "A complete, mobile-friendly underwater survival game built with HTML, CSS, and JavaScript in a single index.html file. Players eat smaller fish to grow, avoid larger predators, unlock new growth levels, and explore a colorful underwater world. Includes AI fish, touch joystick controls, boost mechanics, missions, score tracking, and responsive mobile gameplay. Ideal for developers who want to customize the game or convert it into an Android app using AppCreator24.",
    image:
      "https://i.ibb.co/wNBhJztV/Ocean-Eater-Rule-the-Reef.png",
    driveUrl: "https://drive.google.com/file/d/16x8afVjwQIvtZ-tgf5tuLjxspgseegyl/view?usp=drive_link",
    monetagUrl: "https://uplcm.com/4/12059580",
  },
  {
    id: 3,
    title: "Slither-Style Snake Arena Game Source Code",
    description:
      "Create a fun, colorful, mobile-friendly snake arena game using HTML, CSS, and JavaScript in a single index.html file. Features include AI snakes, food collection, snake growth, power-ups, coins, missions, a minimap, leaderboards, and responsive touch controls.",
    image:
      "https://i.ibb.co/Vcsq7tPk/Glossy-Purple-Worm-Arcade-Adventure.png",
    driveUrl: "https://drive.google.com/file/d/1xh8hiB-Uk22YLXXjZ4YVHwEmPOTMQA21/view?usp=drive_link",
    monetagUrl: "https://uplcm.com/4/12059580",
  },
  
];

export default function ScriptsGrid() {
  const [activeId, setActiveId] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [completedIds, setCompletedIds] = useState([]);

  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  // One function: open Monetag tab and start the timer.
 const handleGetScript = (script) => {
  if (activeId !== null || completedIds.includes(script.id)) return;

  // Monetag link open karne ki koshish karo
  window.open(
    script.monetagUrl,
    "_blank",
    "noopener,noreferrer"
  );

  // Alert ke baghair timer start karo
  setActiveId(script.id);
  setSecondsLeft(10);

  clearInterval(timerRef.current);

  let remaining = 10;

  timerRef.current = setInterval(() => {
    remaining -= 1;
    setSecondsLeft(remaining);

    if (remaining <= 0) {
      clearInterval(timerRef.current);
      timerRef.current = null;

      setCompletedIds((prev) =>
        prev.includes(script.id) ? prev : [...prev, script.id]
      );

      setActiveId(null);
    }
  }, 1000);
};

  const handleDownload = (script) => {
    if (!completedIds.includes(script.id)) return;

    window.open(
      script.driveUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
          Script Library
        </p>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Free Scripts
        </h1>

        <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
          Discover useful scripts and download the ones you need.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {scripts.map((script) => {
          const isActive = activeId === script.id;
          const isCompleted = completedIds.includes(script.id);

          return (
            <article
              key={script.id}
              className="flex h-full min-h-[390px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Same image height for every card */}
              <div className="h-48 shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={script.image}
                  alt={script.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Flex column keeps buttons aligned at the bottom */}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="line-clamp-2 min-h-14 text-xl font-semibold text-gray-900 dark:text-white">
                  {script.title}
                </h2>

                <p className="mt-2 line-clamp-3 min-h-[72px] text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {script.description}
                </p>

                <div className="mt-auto pt-5">
                  {!isActive && !isCompleted && (
                    <button
                      type="button"
                      onClick={() => handleGetScript(script)}
                      disabled={activeId !== null}
                      className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Get Script
                    </button>
                  )}

                  {isActive && (
                    <button
                      type="button"
                      disabled
                      className="w-full rounded-xl bg-gray-200 px-4 py-3 text-sm font-semibold text-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      Please wait {secondsLeft}s...
                    </button>
                  )}

                  {isCompleted && (
                    <button
                      type="button"
                      onClick={() => handleDownload(script)}
                      className="w-full rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                      ↓ Download Script
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}