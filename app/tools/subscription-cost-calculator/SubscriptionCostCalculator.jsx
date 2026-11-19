"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarClock, Plus, Trash2, RotateCcw } from "lucide-react";
import { CYCLES, subscriptionTotals } from "@/lib/newtools";

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";
const symbols = ["$", "€", "£", "₹", "Rs", "A$", "C$"];
const quick = ["Netflix", "Spotify", "YouTube Premium", "Amazon Prime", "ChatGPT", "iCloud", "Disney+", "Gym", "Phone plan", "Internet"];
const STORE = "masterkit-subscriptions-v1";

let uid = 0;
const newRow = (name = "", price = "", cycle = "monthly") => ({ id: `s${Date.now()}${uid++}`, name, price, cycle });

export default function SubscriptionCostCalculator() {
  const [rows, setRows] = useState(() => [newRow("", "", "monthly")]);
  const [sym, setSym] = useState("$");
  const loaded = useRef(false);

  // Load / save in this browser only (never uploaded)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORE);
      if (raw) {
        const d = JSON.parse(raw);
        if (Array.isArray(d.rows) && d.rows.length) setRows(d.rows);
        if (d.sym) setSym(d.sym);
      }
    } catch {}
    loaded.current = true;
  }, []);
  useEffect(() => {
    if (!loaded.current) return;
    try { window.localStorage.setItem(STORE, JSON.stringify({ rows, sym })); } catch {}
  }, [rows, sym]);

  const t = useMemo(() => subscriptionTotals(rows), [rows]);
  const money = (n, d = 2) => `${sym}${n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d })}`;

  const update = (id, k, v) => setRows((r) => r.map((x) => (x.id === id ? { ...x, [k]: v } : x)));
  const remove = (id) => setRows((r) => (r.length > 1 ? r.filter((x) => x.id !== id) : [newRow()]));
  const add = (name = "") => setRows((r) => [...r.filter((x) => x.name || x.price !== ""), newRow(name)]);
  const reset = () => setRows([newRow()]);

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-lg ring-4 ring-emerald-100">
            <CalendarClock size={28} />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Subscription Cost Calculator</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            List your weekly, monthly and yearly subscriptions and see what they really cost per month, per year and over the next 5 and 10 years.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">Your subscriptions</h2>
            <div className="flex items-center gap-2">
              <label htmlFor="sc-sym" className="text-sm font-semibold text-slate-600">Currency</label>
              <select id="sc-sym" value={sym} onChange={(e) => setSym(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500">
                {symbols.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {rows.map((r, i) => (
              <div key={r.id} className="grid gap-2 rounded-2xl bg-slate-50 p-3 sm:grid-cols-[1.4fr_1fr_1.2fr_auto] sm:items-center">
                <input aria-label={`Subscription ${i + 1} name`} value={r.name} onChange={(e) => update(r.id, "name", e.target.value)} placeholder="Name (e.g. Netflix)" className={field} />
                <input aria-label={`Subscription ${i + 1} price`} type="number" min="0" step="any" inputMode="decimal" value={r.price} onChange={(e) => update(r.id, "price", e.target.value)} placeholder="Price" className={field} />
                <select aria-label={`Subscription ${i + 1} billing cycle`} value={r.cycle} onChange={(e) => update(r.id, "cycle", e.target.value)} className={field}>
                  {CYCLES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
                <button type="button" onClick={() => remove(r.id)} aria-label={`Remove subscription ${i + 1}`} className="flex h-11 w-11 items-center justify-center justify-self-end rounded-xl text-slate-400 transition hover:bg-rose-50 hover:text-rose-600">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => add()} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:brightness-110">
              <Plus size={16} /> Add subscription
            </button>
            <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <RotateCcw size={16} /> Clear all
            </button>
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Quick add</p>
            <div className="flex flex-wrap gap-2">
              {quick.map((q) => (
                <button key={q} type="button" onClick={() => add(q)} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">+ {q}</button>
              ))}
            </div>
          </div>

          {t.count > 0 && (
            <div className="mt-8">
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-center text-white">
                <p className="text-sm font-medium text-indigo-100">You spend on {t.count} subscription{t.count > 1 ? "s" : ""}</p>
                <p className="mt-1 text-5xl font-extrabold">{money(t.monthly)}<span className="text-2xl font-semibold text-indigo-200"> / month</span></p>
                <p className="mt-2 text-sm text-indigo-100">{money(t.yearly)} per year</p>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  ["Per day", money(t.daily)],
                  ["Per week", money(t.weekly)],
                  ["Per year", money(t.yearly)],
                  ["Over 5 years", money(t.fiveYear, 0)],
                  ["Over 10 years", money(t.tenYear, 0)],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                    <span className="text-sm text-slate-500">{k}</span>
                    <span className="text-sm font-bold text-slate-900">{v}</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-6 text-base font-bold text-slate-900">Where your money goes</h3>
              <ul className="mt-3 space-y-3">
                {t.rows.map((s) => (
                  <li key={s.id}>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-semibold text-slate-800">{s.name || "Unnamed"}</span>
                      <span className="text-slate-500">{money(s.monthly)}/mo · {money(s.yearly)}/yr · {s.share.toFixed(0)}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${Math.max(s.share, 2)}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-6 text-xs text-slate-500">Your list is saved only in this browser and is never uploaded. Weekly prices are converted using 52 weeks per year.</p>
        </div>
      </div>
    </main>
  );
}
