"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Calculator,
  Wallet,
  HeartPulse,
  Video,
  Image,
  FileText,
  Code2,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    name: "Area Calculator",
    description:
      "Calculate the area of circles, rectangles, squares, triangles and more.",
    category: "Math",
    icon: Calculator,
    href: "/tools/area-calculator",
  },
  {
    name: "Percentage Calculator",
    description: "Calculate percentages quickly and easily.",
    category: "Math",
    icon: Calculator,
    href: "/tools/percentage-calculator",
  },
  {
    name: "YouTube Thumbnail Downloader",
    description: "Download YouTube thumbnails in high quality.",
    category: "YouTube",
    icon: Video,
    href: "/tools/youtube-thumbnail-downloader",
  },
  {
    name: "Image Resizer",
    description: "Resize images quickly and easily.",
    category: "Image",
    icon: Image,
    href: "/tools/image-resizer",
  },
  {
    name: "Compound Interest Calculator",
    description: "Calculate how your money can grow over time with compound interest and regular contributions.",
    category: "Finance",
    icon: Wallet,
    href: "/tools/compound-interest-calculator",
  },
  {
    name: "Loan Calculator",
    description: "Calculate monthly payments and total interest.",
    category: "Finance",
    icon: Wallet,
    href: "/tools/loan-calculator",
  },
  {
    name: "BMI Calculator",
    description: "Calculate your BMI and understand your result.",
    category: "Health",
    icon: HeartPulse,
    href: "/tools/bmi-calculator",
  },
  {
    name: "Word Counter",
    description: "Count words, characters and sentences instantly.",
    category: "Text",
    icon: FileText,
    href: "/tools/word-counter",
  },
  {
    name: "JSON Formatter",
    description: "Format and validate JSON data easily.",
    category: "Developer",
    icon: Code2,
    href: "/tools/json-formatter",
  },
];

const categories = [
  "All",
  "Math",
  "YouTube",
  "Image",
  "Finance",
  "Health",
  "Text",
  "Developer",
];

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools =
    selectedCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              MasterKit
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              All Tools
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600">
              Explore our collection of simple and useful online tools for
              everyday tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-black bg-black text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Tool Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredTools.length}
            </span>{" "}
            {filteredTools.length === 1 ? "tool" : "tools"}
            {selectedCategory !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-gray-900">
                  {selectedCategory}
                </span>
              </>
            )}
          </p>
        </div>

        {/* Tool Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 transition group-hover:bg-blue-50">
                      <Icon
                        size={22}
                        className="text-gray-700 group-hover:text-blue-600"
                      />
                    </div>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                      {tool.category}
                    </span>
                  </div>

                  <h2 className="mt-5 text-lg font-semibold text-gray-900">
                    {tool.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {tool.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Use Tool
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              No tools found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              There are no tools in this category yet.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}