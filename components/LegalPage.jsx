import Link from "next/link";

/**
 * Shared layout for About / Privacy / Terms / Disclaimer.
 * sections: [{ h: "Heading", p: ["paragraph", ...], list: ["item", ...], after: ["paragraph", ...] }]
 */
export default function LegalPage({ eyebrow, title, intro, updated, sections, cta }) {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
          {intro && <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{intro}</p>}
          {updated && <p className="mt-4 text-sm text-slate-400">Last updated: {updated}</p>}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {sections.map((s, i) => (
            <article key={s.h} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                {s.h}
              </h2>
              {s.p?.map((t, k) => (
                <p key={k} className="mt-4 leading-7 text-slate-600">{t}</p>
              ))}
              {s.list && (
                <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600 marker:text-indigo-500">
                  {s.list.map((t, k) => (
                    <li key={k}>{t}</li>
                  ))}
                </ul>
              )}
              {s.after?.map((t, k) => (
                <p key={k} className="mt-4 leading-7 text-slate-600">{t}</p>
              ))}
            </article>
          ))}
        </div>

        {cta && (
          <div className="mt-10 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-center text-white">
            <h2 className="text-2xl font-bold">{cta.title}</h2>
            <p className="mx-auto mt-2 max-w-xl text-indigo-100">{cta.text}</p>
            <Link href={cta.href} className="mt-5 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold !text-indigo-700 shadow-lg transition hover:bg-indigo-50">
              {cta.label}
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
