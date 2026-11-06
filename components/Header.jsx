"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Layers, ArrowRight } from "lucide-react";
import ToolIcon from "@/components/ToolIcon";
import { popularTools } from "@/lib/tools";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Tools", href: "/tools" },
  { name: "Scripts", href: "/scripts" },
  { name: "About", href: "/about" },
];

export function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 text-white shadow-lg shadow-indigo-500/30">
        <Layers size={21} strokeWidth={2.4} />
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
        Master<span className="text-gradient">Kit</span>
      </span>
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef(null);

  const closeAll = () => {
    setMenuOpen(false);
    setToolsOpen(false);
  };

  // Dropdown ke bahar click ya Escape par band karo
  useEffect(() => {
    if (!toolsOpen) return;

    const handleClickOutside = (e) => {
      if (toolsRef.current && !toolsRef.current.contains(e.target)) {
        setToolsOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setToolsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [toolsOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={closeAll} aria-label="MasterKit home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          <Link href="/" className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
            Home
          </Link>

          <div className="relative" ref={toolsRef}>
            <button
              type="button"
              aria-expanded={toolsOpen}
              onClick={() => setToolsOpen(!toolsOpen)}
              className="flex items-center gap-1 rounded-lg bg-transparent px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Popular Tools
              <ChevronDown size={16} className={`transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
            </button>

            {toolsOpen && (
              <div className="absolute left-1/2 top-12 w-[440px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10">
                <div className="grid grid-cols-2 gap-1">
                  {popularTools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={closeAll}
                      className="flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-slate-50"
                    >
                      <ToolIcon icon={tool.icon} theme={tool.theme} size="sm" />
                      <span className="text-sm font-semibold text-slate-800">{tool.short}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/tools"
                  onClick={closeAll}
                  className="mt-2 flex items-center justify-center gap-1 rounded-xl bg-slate-50 p-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
                >
                  View all tools <ArrowRight size={15} />
                </Link>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/tools" className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold">
            Explore Tools <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white p-0 text-slate-800 md:hidden"
          style={{ WebkitAppearance: "none", touchAction: "manipulation" }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-navigation" className="max-h-[80vh] overflow-y-auto border-t border-slate-200 bg-white px-4 pb-6 pt-3 md:hidden">
          <div className="space-y-1">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={closeAll} className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                {l.name}
              </Link>
            ))}
          </div>

          <p className="px-3 pb-2 pt-5 text-xs font-bold uppercase tracking-wider text-slate-400">Popular Tools</p>
          <div className="grid grid-cols-2 gap-2">
            {popularTools.map((tool) => (
              <Link key={tool.href} href={tool.href} onClick={closeAll} className="flex min-w-0 items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-2.5 hover:bg-slate-50">
                <ToolIcon icon={tool.icon} theme={tool.theme} size="sm" />
                <span className="text-sm font-semibold text-slate-700">{tool.short}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}