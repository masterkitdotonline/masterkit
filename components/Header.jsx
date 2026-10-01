"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  HeartPulse,
  Wallet,
  Calculator,
  PlaySquare,
  Image,
  FileText,
  Code2,
  BarChart3,
} from "lucide-react";

const categories = [
  {
    name: "BMI Calculator",
    href: "/tools/bmi-calculator",
    icon: HeartPulse,
  },
  {
    name: "Compound Interest Calculator",
    href: "/tools/compound-interest-calculator",
    icon: Wallet,
  },
  {
    name: "Loan Calculator",
    href: "/tools/loan-calculator",
    icon: Calculator,
  },
  {
    name: "Area Calculator",
    href: "/tools/area-calculator",
    icon: Calculator,
  },
  {
    name: "Youtube Thumbnail Downloader",
    href: "/tools/youtube-thumbnail-downloader",
    icon: PlaySquare,
  },
  {
    name: "Image Resizer & Compressor",
    href: "/tools/image-resizer",
    icon: Image,
  },
  {
    name: "Text Tool",
    href: "/tools/word-counter",
    icon: FileText,
  },
  {
    name: "JSON Formatter & Validator",
    href: "/tools/json-formatter",
    icon: Code2,
  },
  // {
  //   name: "SEO",
  //   href: "/tools?category=seo",
  //   icon: BarChart3,
  // },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
            M
          </div>

          <span className="text-lg font-bold tracking-tight text-gray-900">
            Master<span className="text-blue-600">Kit</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">

          <Link
            href="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>

          {/* Categories */}
          <div className="relative">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Popular Tools
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  categoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {categoryOpen && (
              <div className="absolute left-1/2 top-12 w-[420px] -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-3 shadow-xl">
                <div className="mb-2 px-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Browse Popular Tools
                  </h3>
                  <p className="text-xs text-gray-500">
                    Find the right tool for your task
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-1">
                  {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                      <Link
                        key={category.name}
                        href={category.href}
                        onClick={() => setCategoryOpen(false)}
                        className="flex items-center gap-3 rounded-xl p-3 hover:bg-gray-50"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
                          <Icon size={18} className="text-gray-700" />
                        </div>

                        <span className="text-sm font-medium text-gray-800">
                          {category.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/tools"
                  className="mt-2 block rounded-xl bg-gray-50 p-3 text-center text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  View All Tools →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/tools"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            All Tools
          </Link>
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 md:flex">
          {/* <Link
            href="/search"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50"
          >
            <Search size={19} />
          </Link> */}

          <Link
            href="/tools"
            className="rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Explore Tools
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-5 pt-3 md:hidden">
          <div className="space-y-1">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              href="/tools"
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              All Tools
            </Link>

            {/* Mobile Categories */}
            <div className="pt-2">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Popular Tools
              </p>

              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;

                  return (
                    <Link
                      key={category.name}
                      href={category.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2 rounded-xl border border-gray-100 p-3 hover:bg-gray-50"
                    >
                      <Icon size={17} className="text-gray-600" />

                      <span className="text-sm font-medium text-gray-700">
                        {category.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* <Link
              href="/search"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-3 text-sm font-medium text-gray-700"
            >
              <Search size={18} />
              Search Tools
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
}