import { Download, Code2 } from "lucide-react";

const scripts = [
  {
    id: 1,
    title: "Wormora — HTML5 Worm Game Source Code",
    description:
      "A colorful, playable HTML5 worm arcade game built with HTML, CSS and JavaScript. then get the complete source code for free and customize your own browser game.",
    image:
      "Neon-Blue-Coding-Workspace-1.webp",
    driveUrl: "https://drive.google.com/file/d/17ANqV6qredCMBjCQ9BoQrzWUgmf9wSRb/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Ocean Eater – HTML5 Mobile Fish Survival Game Source Code",
    description:
      "A complete, mobile-friendly underwater survival game built with HTML, CSS, and JavaScript in a single index.html file. Players eat smaller fish to grow, avoid larger predators, unlock new growth levels, and explore a colorful underwater world. Includes AI fish, touch joystick controls, boost mechanics, missions, score tracking, and responsive mobile gameplay. Ideal for developers who want to customize the game or convert it into an Android app using AppCreator24.",
    image:
      "Neon-Blue-Coding-Workspace-1.webp",
    driveUrl: "https://drive.google.com/file/d/16x8afVjwQIvtZ-tgf5tuLjxspgseegyl/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Slither-Style Snake Arena Game Source Code",
    description:
      "Create a fun, colorful, mobile-friendly snake arena game using HTML, CSS, and JavaScript in a single index.html file. Features include AI snakes, food collection, snake growth, power-ups, coins, missions, a minimap, leaderboards, and responsive touch controls.",
    image:
      "Neon-Blue-Coding-Workspace-1.webp",
    driveUrl: "https://drive.google.com/file/d/1xh8hiB-Uk22YLXXjZ4YVHwEmPOTMQA21/view?usp=drive_link",
  },
  
];

export default function ScriptsGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Script library</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Free <span className="text-gradient">scripts</span>
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Ready-to-use HTML5 game source codes. Download, customize and publish your own.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {scripts.map((script) => (
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
                <Code2 size={13} /> HTML5 Game
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h2 className="line-clamp-2 text-lg font-bold text-slate-900">{script.title}</h2>
              <p className="mt-2 line-clamp-4 text-sm leading-6 text-slate-500">{script.description}</p>

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
    </section>
  );
}
