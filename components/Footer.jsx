import Link from "next/link";
import {
  HeartPulse,
  Wallet,
  Calculator,
  Video,
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
    name: "YouTube Thumbnail Downloader",
    href: "/tools/youtube-thumbnail-downloader",
    icon: Video,
  },
  {
    name: "Image Resizer & Compressor",
    href: "/tools/image-resizer",
    icon: Image,
  },
  
  {
    name: "JSON Formatter & Validator",
    href: "/tools/json-formatter",
    icon: Code2,
  },
  
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-300">

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-black">
                M
              </div>

              <span className="text-lg font-bold text-white">
                Master<span className="text-blue-400">Kit</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Simple and useful online tools for everyday tasks. Calculate,
              convert, create and get things done faster.
            </p>

            <Link
              href="/tools"
              className="mt-5 inline-flex rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
            >
              Explore Tools
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/tools"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  All Tools
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Categories
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="flex items-center gap-2 rounded-lg p-2 text-sm text-gray-400 transition hover:bg-gray-900 hover:text-white"
                  >
                    <Icon size={16} />
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} MasterKit. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-white"
              >
                Terms of Use
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}