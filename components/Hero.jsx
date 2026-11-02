import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Gift } from "lucide-react";
import ToolIcon from "@/components/ToolIcon";
import { popularTools, categoryTheme, themes } from "@/lib/tools";

const badges = [
  { icon: Gift, label: "100% Free", color: "text-emerald-600 bg-emerald-50" },
  { icon: ShieldCheck, label: "Private by design", color: "text-indigo-600 bg-indigo-50" },
  { icon: Zap, label: "Instant results", color: "text-amber-600 bg-amber-50" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-[-120px] -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200/60 via-violet-200/60 to-pink-200/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-1.5 text-sm font-semibold text-indigo-700 shadow-sm">
            <Sparkles size={15} /> Free tools for everyday tasks
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Powerful tools.
            <br />
            <span className="text-gradient">Simple &amp; free.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Calculators, image tools, text utilities and developer helpers — all in one clean place.
            No signup, no clutter.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/tools" className="btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold">
              Explore all tools <ArrowRight size={17} />
            </Link>
            <Link href="/scripts" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
              Free scripts
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {badges.map(({ icon: Icon, label, color }) => (
              <span key={label} className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold ${color}`}>
                <Icon size={14} /> {label}
              </span>
            ))}
          </div>
        </div>

        {/* Popular tools */}
        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Popular tools</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Tools people use most</h2>
            </div>
            <Link href="/tools" className="hidden items-center gap-1 text-sm font-semibold text-slate-600 hover:text-indigo-600 sm:flex">
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularTools.map((tool) => {
              const t = themes[categoryTheme[tool.category]] || themes.blue;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-slate-900/10"
                >
                  <div className="flex items-start justify-between">
                    <ToolIcon icon={tool.icon} theme={tool.theme} />
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${t.soft} ${t.text}`}>{tool.category}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{tool.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{tool.description}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-indigo-600">
                    Use tool <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
