import Link from "next/link";
import { toolContent } from "@/lib/toolContent";

/** Helpful, original "About this tool" content shown under every tool (good for users and for AdSense review). */
export default function ToolAbout({ slug }) {
  const c = toolContent[slug];
  if (!c) return null;

  return (
    <section className="mx-auto mb-4 max-w-3xl px-4 pb-10 sm:px-6 print:hidden" aria-labelledby="about-tool">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <h2 id="about-tool" className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          About {c.title}
        </h2>

        <div className="mt-6 space-y-7">
          {c.blocks.map((b, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold text-slate-900">{b.h}</h3>
              {b.p?.map((t, k) => (
                <p key={k} className="mt-3 text-[15px] leading-7 text-slate-600">{t}</p>
              ))}
              {b.list && (
                <ul className="mt-3 list-disc space-y-1.5 pl-6 text-[15px] leading-7 text-slate-600 marker:text-indigo-500">
                  {b.list.map((t, k) => (
                    <li key={k}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 border-t border-slate-100 pt-5 text-sm text-slate-500">
          Looking for something else? Browse <Link href="/tools" className="font-semibold text-indigo-600 hover:underline">all free tools</Link>.
        </p>
      </div>
    </section>
  );
}
