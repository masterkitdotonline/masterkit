"use client";

import { useMemo, useState } from "react";
import { CreditCard, RotateCcw } from "lucide-react";
import { paypalReceive, paypalCharge, PAYPAL_PRESETS, INTL_SURCHARGE_PCT, CONVERSION_PCT } from "@/lib/newtools";

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";
const label = "mb-2 block text-sm font-semibold text-slate-700";
const num = (v) => (v === "" ? NaN : Number(v));
const money = (n, sym = "$") => `${n < 0 ? "−" : ""}${sym}${Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const symbols = ["$", "€", "£", "₹", "A$", "C$"];

export default function PayPalFeeCalculator() {
  const [mode, setMode] = useState("receive");
  const [amount, setAmount] = useState("");
  const [sym, setSym] = useState("$");
  const [preset, setPreset] = useState("checkout");
  const [pct, setPct] = useState("3.49");
  const [fixed, setFixed] = useState("0.49");
  const [intl, setIntl] = useState(false);
  const [conv, setConv] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const pickPreset = (id) => {
    setPreset(id);
    const p = PAYPAL_PRESETS.find((x) => x.id === id);
    if (id !== "custom") { setPct(String(p.pct)); setFixed(String(p.fixed)); }
  };

  const { result, error } = useMemo(() => {
    if (!submitted) return {};
    const a = num(amount), p = num(pct), x = num(fixed);
    if (Number.isNaN(a) || a <= 0) return { error: mode === "receive" ? "Enter the amount the buyer pays (greater than 0)." : "Enter the amount you want to receive (greater than 0)." };
    if ([p, x].some((v) => Number.isNaN(v) || v < 0)) return { error: "Percentage and fixed fee must be numbers, 0 or more." };
    const args = { pct: p, fixed: x, intlPct: intl ? INTL_SURCHARGE_PCT : 0, convPct: conv ? CONVERSION_PCT : 0 };
    if (mode === "receive") return { result: paypalReceive({ amount: a, ...args }) };
    const r = paypalCharge({ net: a, ...args });
    return r ? { result: r } : { error: "Total fee percentage must be below 100%." };
  }, [submitted, mode, amount, pct, fixed, intl, conv]);

  const reset = () => { setAmount(""); setPreset("checkout"); setPct("3.49"); setFixed("0.49"); setIntl(false); setConv(false); setSubmitted(false); };

  const pill = (active) =>
    `rounded-full border px-4 py-2 text-sm font-semibold transition ${
      active
        ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30"
        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
    }`;

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg ring-4 ring-blue-100">
            <CreditCard size={28} />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">PayPal Fee Calculator</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            See exactly how much PayPal takes from a payment, or work backwards to find the amount you must charge to receive a target sum.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
            <div>
              <span className={label}>What do you want to find out?</span>
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => setMode("receive")} className={pill(mode === "receive")} style={mode === "receive" ? { color: "#fff" } : undefined}>Fee &amp; net amount</button>
                <button type="button" onClick={() => setMode("charge")} className={pill(mode === "charge")} style={mode === "charge" ? { color: "#fff" } : undefined}>Amount to charge (reverse)</button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <div>
                <label className={label} htmlFor="pp-amount">{mode === "receive" ? "Payment amount (what the buyer pays)" : "Amount you want to receive (after fees)"}</label>
                <input id="pp-amount" type="number" min="0" step="any" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="100.00" className={field} />
              </div>
              <div>
                <label className={label} htmlFor="pp-sym">Currency</label>
                <select id="pp-sym" value={sym} onChange={(e) => setSym(e.target.value)} className={`${field} sm:w-28`}>
                  {symbols.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div>
              <span className={label}>Payment type</span>
              <div className="flex flex-wrap gap-2">
                {PAYPAL_PRESETS.map((p) => (
                  <button key={p.id} type="button" onClick={() => pickPreset(p.id)} className={pill(preset === p.id)} style={preset === p.id ? { color: "#fff" } : undefined}>{p.label}</button>
                ))}
              </div>
              <div className="mt-3 grid max-w-md gap-3 sm:grid-cols-2">
                <div><label className="mb-1 block text-xs font-semibold text-slate-500" htmlFor="pp-pct">Percentage fee (%)</label><input id="pp-pct" type="number" min="0" step="any" value={pct} onChange={(e) => { setPct(e.target.value); setPreset("custom"); }} className={field} /></div>
                <div><label className="mb-1 block text-xs font-semibold text-slate-500" htmlFor="pp-fixed">Fixed fee per payment</label><input id="pp-fixed" type="number" min="0" step="any" value={fixed} onChange={(e) => { setFixed(e.target.value); setPreset("custom"); }} className={field} /></div>
              </div>
              <p className="mt-2 text-xs text-slate-500">Rates shown are typical US merchant rates. They differ by country, currency and account, so you can edit both boxes.</p>
            </div>

            <div className="space-y-2">
              <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 px-4 py-3">
                <input type="checkbox" checked={intl} onChange={(e) => setIntl(e.target.checked)} className="mt-1 h-4 w-4 accent-indigo-600" />
                <span className="text-sm text-slate-700"><strong>International payment</strong> – buyer is in another country (+{INTL_SURCHARGE_PCT}%)</span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 px-4 py-3">
                <input type="checkbox" checked={conv} onChange={(e) => setConv(e.target.checked)} className="mt-1 h-4 w-4 accent-indigo-600" />
                <span className="text-sm text-slate-700"><strong>Currency conversion</strong> – PayPal converts the money for you (about +{CONVERSION_PCT}%, usually 3–4%)</span>
              </label>
            </div>

            <div className="flex gap-3">
              <button type="submit" className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:brightness-110">
                Calculate PayPal fee
              </button>
              <button type="button" onClick={reset} className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <RotateCcw size={16} /> Reset
              </button>
            </div>
          </form>

          {error && <p role="alert" className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</p>}

          {result && (
            <div className="mt-7">
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-center text-white">
                {result.mode === "receive" ? (
                  <>
                    <p className="text-sm font-medium text-indigo-100">You receive</p>
                    <p className="mt-1 text-5xl font-extrabold">{money(result.net, sym)}</p>
                    <p className="mt-2 text-sm text-indigo-100">PayPal fee {money(result.fee, sym)} · effective rate {result.effective.toFixed(2)}%</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-medium text-indigo-100">Charge the buyer</p>
                    <p className="mt-1 text-5xl font-extrabold">{money(result.gross, sym)}</p>
                    <p className="mt-2 text-sm text-indigo-100">to receive {money(result.target, sym)} after a {money(result.fee, sym)} PayPal fee</p>
                  </>
                )}
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  ["Payment amount", money(result.gross, sym)],
                  ["Total PayPal fee", `−${money(result.fee, sym)}`],
                  [`Percentage fee (${(result.rate - (intl ? INTL_SURCHARGE_PCT : 0) - (conv ? CONVERSION_PCT : 0)).toFixed(2)}%)`, `−${money(result.breakdown.base, sym)}`],
                  ["Fixed fee", `−${money(result.breakdown.fixed, sym)}`],
                  ...(intl ? [[`International (${INTL_SURCHARGE_PCT}%)`, `−${money(result.breakdown.intl, sym)}`]] : []),
                  ...(conv ? [[`Currency conversion (${CONVERSION_PCT}%)`, `−${money(result.breakdown.conv, sym)}`]] : []),
                  ["Net amount you keep", money(result.net, sym)],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3">
                    <span className="text-sm text-slate-500">{k}</span>
                    <span className="text-sm font-bold text-slate-900">{v}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600">
                <strong className="text-slate-900">Formula:</strong> fee = amount × (rate ÷ 100) + fixed fee.{" "}
                {result.mode === "charge" && "To work backwards: amount to charge = (target + fixed fee) ÷ (1 − rate ÷ 100)."}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
