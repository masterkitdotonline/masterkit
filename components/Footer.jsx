import Link from "next/link";
import { Logo } from "@/components/Header";
import ToolIcon from "@/components/ToolIcon";
import { tools } from "@/lib/tools";

const company = [
  { name: "Home", href: "/" },
  { name: "All Tools", href: "/tools" },
  { name: "Scripts", href: "/scripts" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="MasterKit home">
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Free, fast and privacy-friendly online tools for everyday tasks. Calculate, convert,
              create and get things done — no signup needed.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Company</h3>
            <ul className="mt-4 space-y-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-500 transition hover:text-indigo-600">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">Tools</h3>
            <div className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2">
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center gap-3 rounded-xl p-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  <ToolIcon icon={tool.icon} theme={tool.theme} size="sm" className="!h-8 !w-8 !rounded-lg !ring-0 !shadow-none" />
                  {tool.short}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} MasterKit. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-indigo-600">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-indigo-600">Terms of Use</Link>
            <Link href="/disclaimer" className="text-sm text-slate-500 hover:text-indigo-600">Disclaimer</Link>
            <Link href="/contact" className="text-sm text-slate-500 hover:text-indigo-600">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
