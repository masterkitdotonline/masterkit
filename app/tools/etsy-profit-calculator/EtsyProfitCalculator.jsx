"use client";

import { useMemo, useState } from "react";
import { Store, RotateCcw } from "lucide-react";
import { etsyProfit } from "@/lib/newtools";

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";
const label = "mb-2 block text-sm font-semibold text-slate-700";

const regions = [
  { id: "us", label: "United States", pct: "3", fixed: "0.25" },
  { id: "uk", label: "United Kingdom", pct: "4", fixed: "0.20" },
  { id: "custom", label: "Custom", pct: "3", fixed: "0.25" },
];
const ads = [
  { id: "0", label: "No Offsite Ads" },
  { id: "15", label: "Offsite Ads 15%" },
  { id: "12", label: "Offsite Ads 12%" },
];

const num = (v) => (v === "" ? NaN : Number(v));
const money = (n) => `${n < 0 ? "−" : ""}$${Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const initial = { price: "", shipping: "", qty: "1", cost: "", shipCost: "", adSpend: "", target: "30" };

export default function EtsyProfitCalculator() {
  const [f, setF] = useState(initial);
  const [region, setRegion] = useState("us");
  const [procPct, setProcPct] = useState("3");
  const [procFixed, setProcFixed] = useState("0.25");
  const [offsite, setOffsite] = useState("0");
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const pickRegion = (id) => {
    const r = regions.find((x) => x.id === id);
    setRegion(id);
    if (id !== "custom") { setProcPct(r.pct); setProcFixed(r.fixed); }
  };

  const { result, error } = useMemo(() => {
    if (!submitted) return {};
    const price = num(f.price), qty = num(f.qty);
    const shipping = f.shipping === "" ? 0 : num(f.shipping);
    const cost = f.cost === "" ? 0 : num(f.cost);
    const shipCost = f.shipCost === "" ? 0 : num(f.shipCost);
    const adSpend = f.adSpend === "" ? 0 : num(f.adSpend);
    const target = f.target === "" ? 30 : num(f.target);
    const pp = num(procPct), pf = num(procFixed);
    if (Number.isNaN(price) || price <= 0) return { error: "Enter the item selling price (greater than 0)." };
    if (!Number.isInteger(qty) || qty < 1) return { error: "Quantity must be a whole number, 1 or more." };
    if ([shipping, cost, shipCost, adSpend, pp, pf, target].some((v) => Number.isNaN(v) || v < 0)) return { error: "All other fields must be numbers, 0 or more." };
    return {
      result: etsyProfit({
        price, shipping, qty, cost, shipCost, adSpend,
        processingPct: pp, processingFixed: pf, offsitePct: Number(offsite), targetMargin: target,
      }),
      target,
    };
  }, [submitted, f, procPct, procFixed, offsite]);

  const reset = () => { setF(initial); setRegion("us"); setProcPct("3"); setProcFixed("0.25"); setOffsite("0"); setSubmitted(false); };

  const pill = (active) =>
    `rounded-full border px-4 py-2 text-sm font-semibold transition ${
      active
        ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30"
        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
    }`;

  const profitable = result && result.profit >= 0;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg ring-4 ring-amber-100">
            <Store size={28} />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Etsy Profit Calculator</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Add up listing, transaction, payment processing and Offsite Ads fees, subtract your costs and see your real Etsy profit, margin and break-even price.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div><label className={label} htmlFor="ep-price">Item price ($)</label><input id="ep-price" type="number" min="0" step="any" inputMode="decimal" value={f.price} onChange={set("price")} placeholder="38.00" className={field} /></div>
              <div><label className={label} htmlFor="ep-ship">Shipping charged to buyer ($)</label><input id="ep-ship" type="number" min="0" step="any" inputMode="decimal" value={f.shipping} onChange={set("shipping")} placeholder="6.00" className={field} /></div>
              <div><label className={label} htmlFor="ep-qty">Quantity</label><input id="ep-qty" type="number" min="1" step="1" inputMode="numeric" value={f.qty} onChange={set("qty")} className={field} /></div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div><label className={label} htmlFor="ep-cost">Cost per item ($)</label><input id="ep-cost" type="number" min="0" step="any" inputMode="decimal" value={f.cost} onChange={set("cost")} placeholder="Materials + packaging" className={field} /></div>
              <div><label className={label} htmlFor="ep-shipcost">Your actual postage ($)</label><input id="ep-shipcost" type="number" min="0" step="any" inputMode="decimal" value={f.shipCost} onChange={set("shipCost")} placeholder="7.50" className={field} /></div>
              <div><label className={label} htmlFor="ep-ads">Etsy Ads spend per sale ($)</label><input id="ep-ads" type="number" min="0" step="any" inputMode="decimal" value={f.adSpend} onChange={set("adSpend")} placeholder="0.00" className={field} /></div>
            </div>

            <div>
              <span className={label}>Payment processing (by seller country)</span>
              <div className="flex flex-wrap gap-2">
                {regions.map((r) => (
                  <button key={r.id} type="button" onClick={() => pickRegion(r.id)} className={pill(region === r.id)} style={region === r.id ? { color: "#fff" } : undefined}>{r.label}</button>
                ))}
              </div>
              <div className="mt-3 grid max-w-md gap-3 sm:grid-cols-2">
                <div><label className="mb-1 block text-xs font-semibold text-slate-500" htmlFor="ep-pp">Percentage (%)</label><input id="ep-pp" type="number" min="0" step="any" value={procPct} onChange={(e) => { setProcPct(e.target.value); setRegion("custom"); }} className={field} /></div>
                <div><label className="mb-1 block text-xs font-semibold text-slate-500" htmlFor="ep-pf">Fixed fee per order ($)</label><input id="ep-pf" type="number" min="0" step="any" value={procFixed} onChange={(e) => { setProcFixed(e.target.value); setRegion("custom"); }} className={field} /></div>
              </div>
            </div>

            <div>
              <span className={label}>Did the sale come from an Etsy Offsite Ad?</span>
              <div className="flex flex-wrap gap-2">
                {ads.map((a) => (
                  <button key={a.id} type="button" onClick={() => setOffsite(a.id)} className={pill(offsite === a.id)} style={offsite === a.id ? { color: "#fff" } : undefined}>{a.label}</button>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-500">Offsite Ads fee is 15% for most shops and 12% once your shop passes $10,000 in yearly sales.</p>
            </div>

            <div>
              <label className={label} htmlFor="ep-target">Target profit margin (%)</label>
              <input id="ep-target" type="number" min="0" max="90" step="any" value={f.target} onChange={set("target")} className={`${field} sm:max-w-[200px]`} />
            </div>

            <div className="flex gap-3">
              <button type="submit" className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:brightness-110">
                Calculate profit
              </button>
              <button type="button" onClick={reset} className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <RotateCcw size={16} /> Reset
              </button>
            </div>
          </form>

          {error && <p role="alert" className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</p>}

          {result && (
            <div className="mt-7">
              <div className={`rounded-3xl bg-gradient-to-br p-6 text-center text-white ${profitable ? "from-emerald-500 to-teal-600" : "from-rose-500 to-red-600"}`}>
                <p className="text-sm font-medium text-white/80">{profitable ? "Your estimated profit" : "You would lose money on this sale"}</p>
                <p className="mt-1 text-5xl font-extrabold">{money(result.profit)}</p>
                <p className="mt-2 text-sm text-white/80">
                  {result.margin.toFixed(1)}% margin{result.roi !== null ? ` · ${result.roi.toFixed(0)}% return on cost` : ""}{submittedQty(f.qty) > 1 ? ` · ${money(result.perItem)} per item` : ""}
                </p>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  ["Order total (items + shipping)", money(result.orderTotal)],
                  ["Listing fee", `−${money(result.listing)}`],
                  ["Transaction fee (6.5%)", `−${money(result.transaction)}`],
                  ["Payment processing", `−${money(result.processing)}`],
                  ["Offsite Ads fee", `−${money(result.offsite)}`],
                  ["Total Etsy fees", `−${money(result.totalFees)} (${result.feePct.toFixed(1)}%)`],
                  ["Item cost", `−${money(result.productCost)}`],
                  ["Postage + Etsy Ads", `−${money(result.shipCost + result.adSpend)}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3">
                    <span className="text-sm text-slate-500">{k}</span>
                    <span className="text-sm font-bold text-slate-900">{v}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">
                  <strong>Break-even price:</strong>{" "}
                  {result.breakEven === null ? "not reachable with these fees" : `${money(result.breakEven)} per item`}
                  <span className="block text-xs text-amber-800/80">The lowest price where you make $0 profit.</span>
                </div>
                <div className="rounded-2xl bg-indigo-50 px-4 py-3 text-sm leading-6 text-indigo-900">
                  <strong>Price for {num(f.target) || 30}% margin:</strong>{" "}
                  {result.targetPrice === null ? "not reachable with these fees" : `${money(result.targetPrice)} per item`}
                  <span className="block text-xs text-indigo-800/80">Keeps your shipping charge and costs the same.</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function submittedQty(q) {
  const n = Number(q);
  return Number.isInteger(n) && n > 0 ? n : 1;
}
