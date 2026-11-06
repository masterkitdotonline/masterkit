"use client";

import { useMemo, useState } from "react";
import { Download, Code2, Search, X } from "lucide-react";



const scripts = [
  {
    id: 1,
    title: "Wormora — HTML5 Worm Game Source Code",
    description:
      "A colorful, playable HTML5 worm arcade game built with HTML, CSS and JavaScript. then get the complete source code for free and customize your own browser game.",
    image: "https://i.ibb.co/Q7w70bmR/Neon-Blue-Coding-Workspace-1.webp",
    driveUrl:
      "https://drive.google.com/file/d/17ANqV6qredCMBjCQ9BoQrzWUgmf9wSRb/view?usp=drive_link",
    category: "HTML5",
    tag: "HTML5 Game",
  },
  {
    id: 2,
    title: "Ocean Eater – HTML5 Mobile Fish Survival Game Source Code",
    description:
      "A complete, mobile-friendly underwater survival game built with HTML, CSS, and JavaScript in a single index.html file. Players eat smaller fish to grow, avoid larger predators, unlock new growth levels, and explore a colorful underwater world. Includes AI fish, touch joystick controls, boost mechanics, missions, score tracking, and responsive mobile gameplay. Ideal for developers who want to customize the game or convert it into an Android app using AppCreator24.",
    image: "https://i.ibb.co/Q7w70bmR/Neon-Blue-Coding-Workspace-1.webp",
    driveUrl:
      "https://drive.google.com/file/d/16x8afVjwQIvtZ-tgf5tuLjxspgseegyl/view?usp=drive_link",
    category: "HTML5",
    tag: "HTML5 Game",
  },
  {
    id: 3,
    title: "Slither-Style Snake Arena Game Source Code",
    description:
      "Create a fun, colorful, mobile-friendly snake arena game using HTML, CSS, and JavaScript in a single index.html file. Features include AI snakes, food collection, snake growth, power-ups, coins, missions, a minimap, leaderboards, and responsive touch controls.",
    image: "https://i.ibb.co/Q7w70bmR/Neon-Blue-Coding-Workspace-1.webp",
    driveUrl:
      "https://drive.google.com/file/d/1xh8hiB-Uk22YLXXjZ4YVHwEmPOTMQA21/view?usp=drive_link",
    category: "HTML5",
    tag: "HTML5 Game",
    
  },

  {
    id: 4,
    title: "BubbleShooter Game Source Code",
    description:
      "Create a fun, colorful, mobile-friendly snake arena game using HTML, CSS, and JavaScript in a single index.html file. Features include AI snakes, food collection, snake growth, power-ups, coins, missions, a minimap, leaderboards, and responsive touch controls.",
    image: "https://i.ibb.co/Q7w70bmR/Neon-Blue-Coding-Workspace-1.webp",
    driveUrl:
      "https://drive.google.com/file/d/1ryU1WEtuVnO393U_RPCw1kaLtZ0aHaby/view?usp=drive_link",
    category: "HTML5",
    tag: "HTML5 Game",
  },
  {
    id: 5,
    title: "Jump Runner: Build a Jumping Obstacle Game with HTML, CSS & JavaScript",
    description:
      "Make a dino-style endless runner game from scratch using only HTML, CSS and JavaScript. Jump over cacti, duck under birds, and beat your high score. It works on desktop with the keyboard and on mobile with on-screen buttons, and it needs no libraries.",
    image: "https://i.ibb.co/Q7w70bmR/Neon-Blue-Coding-Workspace-1.webp",
    driveUrl:
      "https://drive.google.com/file/d/1jT9tocdAJPHlgm0cYYJLY7_lDloUPyB8/view?usp=drive_link",
    category: "HTML5",
    tag: "HTML5 Game",
  },
   {
    id: 6,
    title: "2048 Puzzle Game – Play Online",
    description:
      "Enjoy the classic 2048 puzzle game! Merge numbers, beat your high score, and reach 2048 using mouse, keyboard, or touch controls.",
    image: "https://i.ibb.co/Q7w70bmR/Neon-Blue-Coding-Workspace-1.webp",
    driveUrl:
      "https://drive.google.com/file/d/1Zp0juhlxoAC0ZHgiUpParQsjukjhRO8R/view?usp=drive_link",
    category: "HTML5",
    tag: "HTML5 Game",
  }
];

export default function ScriptsGrid() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scripts.filter(
      (s) =>
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tag.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Script library</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Free HTML5 <span className="text-gradient">game scripts</span>
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Ready-to-use HTML5 game source codes built with HTML, CSS and JavaScript. Download, study,
          customize and publish your own browser games.
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-8 w-full sm:max-w-md">
        <Search
          size={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search games..."
          aria-label="Search game scripts"
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-10 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
          <p className="text-lg font-bold text-slate-900">No games found</p>
          <p className="mt-1 text-sm text-slate-500">Try a different keyword.</p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="btn-primary mt-5 inline-flex rounded-xl px-4 py-2.5 text-sm font-semibold"
          >
            Show all games
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((script) => (
            <article
              key={script.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative h-48 shrink-0 overflow-hidden bg-slate-100">
                <img
                  src={script.image}
                  alt={script.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm backdrop-blur">
                  <Code2 size={13} /> {script.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="line-clamp-2 text-lg font-bold text-slate-900">{script.title}</h2>
                <p className="mt-2 line-clamp-4 text-sm leading-6 text-slate-500">
                  {script.description}
                </p>

                <div className="mt-auto pt-6">
                  <a
                    href={script.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
                  >
                    <Download size={16} /> Download script
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
