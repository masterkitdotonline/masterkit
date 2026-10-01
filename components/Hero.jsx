import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Video,
  Image,
  Calculator,
  Wallet,
  HeartPulse,
  Search,
  Code2
} from "lucide-react";

const popularTools = [
  {
    name: "YouTube Thumbnail Downloader",
    description: "Download YouTube thumbnails in high quality.",
    category: "YouTube",
    icon: Search,
    href: "/tools/youtube-thumbnail-downloader",
  },
  {
    name: "Image Resizer",
    description: "Resize images quickly without complicated software.",
    category: "Image",
    icon: Image,
    href: "/tools/image-resizer",
  },
  {
    name: "JSON Formatter & Validator",
    href: "/tools/json-formatter",
    icon: Code2,
    category: "Developer",
    description: "Format, validate, minify and beautify JSON online for free. Everything runs directly in your browser.",
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
    description: "Calculate BMI and understand your result.",
    category: "Health",
    icon: HeartPulse,
    href: "/tools/bmi-calculator",
  },
  {
    name: "Area Calculator",
    description: "Calculate the area of circles, rectangles, triangles and more.",
    category: "Math",
    icon: Calculator,
    href: "/tools/area-calculator",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-purple-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

        {/* Hero Content */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
            <Sparkles size={16} className="text-blue-600" />
            Free tools for everyday tasks
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Powerful Tools.
            <br />
            <span className="text-blue-600">Simple & Free.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Useful online tools for YouTube, images, finance, health, math,
            SEO and many more everyday tasks.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Explore All Tools
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* Popular Tools */}
        <div className="mt-20">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-600">
                POPULAR TOOLS
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                Tools people use most
              </h2>
            </div>

            <Link
              href="/tools"
              className="hidden items-center gap-1 text-sm font-semibold text-gray-600 hover:text-black sm:flex"
            >
              View all
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularTools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 transition group-hover:bg-blue-50">
                      <Icon
                        size={21}
                        className="text-gray-700 group-hover:text-blue-600"
                      />
                    </div>

                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="mt-5 font-semibold text-gray-900">
                    {tool.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {tool.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Use Tool
                    <ArrowRight
                      size={15}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile View All */}
          <div className="mt-6 flex justify-center sm:hidden">
            <Link
              href="/tools"
              className="flex items-center gap-1 text-sm font-semibold text-gray-700"
            >
              View all tools
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}