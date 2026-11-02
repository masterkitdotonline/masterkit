import { Zap, ShieldCheck, Smartphone, Layers3, MousePointerClick, RefreshCw } from "lucide-react";
import ToolIcon from "@/components/ToolIcon";

const features = [
  { icon: Zap, theme: "amber", title: "Fast & easy", description: "Get results instantly with simple tools designed for everyday tasks." },
  { icon: ShieldCheck, theme: "emerald", title: "Privacy friendly", description: "Your data stays in your browser whenever a tool can process it locally." },
  { icon: Smartphone, theme: "blue", title: "Works everywhere", description: "Use every tool comfortably on desktop, tablet or mobile." },
  { icon: Layers3, theme: "violet", title: "Many categories", description: "Finance, health, math, images, text, YouTube and developer tools." },
  { icon: MousePointerClick, theme: "rose", title: "Simple to use", description: "No setup. Pick a tool, enter your values and get your answer." },
  { icon: RefreshCw, theme: "cyan", title: "Always improving", description: "New tools and improvements are added regularly." },
];

export default function Features() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Why MasterKit</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need, in one place</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Simple, useful and accessible online tools that help you get things done faster.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border border-slate-200 bg-slate-50/60 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5">
              <ToolIcon icon={f.icon} theme={f.theme} />
              <h3 className="mt-5 text-lg font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
