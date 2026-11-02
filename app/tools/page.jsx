"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import ToolIcon from "@/components/ToolIcon";
import AdSlot from "@/components/AdSlot";
import { tools, categories, categoryTheme, themes } from "@/lib/tools";

export default function Tools() {
  const [selected, setSelected] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter(
      (t) =>
        (selected === "All" || t.category === selected) &&
        (!q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q))
    );
  }, [selected, query]);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="bg-grid absolute inset-0 -z-0" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">MasterKit</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            All <span className="text-gradient">tools</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore our collection of simple, useful online tools for everyday tasks.
          </p>

          <div className="relative mt-8 max-w-md">
            <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools…"
              aria-label="Search tools"
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = selected === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setSelected(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 !text-white shadow-md shadow-indigo-500/30"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
                style={active ? { color: "#fff" } : undefined}
              >
                {c}
              </button>
            );
          })}
        </div>

        <p className="mb-6 text-sm text-slate-500">
          Showing <span className="font-bold text-slate-900">{filtered.length}</span> {filtered.length === 1 ? "tool" : "tools"}
          {selected !== "All" && (
            <> in <span className="font-bold text-slate-900">{selected}</span></>
          )}
        </p>

        {filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool) => {
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
                  <h2 className="mt-5 text-lg font-bold text-slate-900">{tool.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{tool.description}</p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-indigo-600">
                    Use tool <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center">
            <h2 className="text-lg font-bold text-slate-900">No tools found</h2>
            <p className="mt-2 text-sm text-slate-500">Try a different search or category.</p>
          </div>
        )}
      </section>

      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOLS} />
    </div>
  );
}
