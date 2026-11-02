"use client";

import { useState } from "react";
import { Sigma, Delete, RotateCcw } from "lucide-react";
import {
  evaluate, formatNumber, parseList, gcdLcm, primeInfo, factorialBig,
  quadratic, powersRoots, stats,
} from "@/lib/mathkit";

const tabs = [
  { id: "calc", label: "Calculator" },
  { id: "powers", label: "Powers & Roots" },
  { id: "numbers", label: "Number Theory" },
  { id: "quadratic", label: "Quadratic" },
  { id: "stats", label: "Statistics" },
];

const keypad = [
  ["sin(", "cos(", "tan(", "log(", "ln("],
  ["√(", "^", "!", "π", "e"],
  ["(", ")", "%", "AC", "DEL"],
  ["7", "8", "9", "÷", "abs("],
  ["4", "5", "6", "×", "Ans"],
  ["1", "2", "3", "−", "1/x"],
  ["0", ".", ",", "+", "="],
];

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";
const label = "mb-2 block text-sm font-semibold text-slate-700";
const primary =
  "rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:brightness-110";

function Row({ k, v }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-50 px-4 py-3">
      <span className="text-sm text-slate-500">{k}</span>
      <span className="break-all text-right text-sm font-bold text-slate-900">{v}</span>
    </div>
  );
}

function ErrorBox({ msg }) {
  return msg ? (
    <p role="alert" className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{msg}</p>
  ) : null;
}

/* ---------- Calculator ---------- */
function ScientificCalculator() {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [angle, setAngle] = useState("deg");
  const [ans, setAns] = useState(null);
  const [history, setHistory] = useState([]);

  const calculate = () => {
    if (!expr.trim()) return;
    try {
      const r = evaluate(expr, { angle });
      setResult(formatNumber(r));
      setAns(r);
      setError("");
      setHistory((h) => [{ e: expr, r: formatNumber(r) }, ...h].slice(0, 6));
    } catch (e) {
      setResult("");
      setError(e.message);
    }
  };

  const press = (k) => {
    setError("");
    if (k === "=") return calculate();
    if (k === "AC") { setExpr(""); setResult(""); return; }
    if (k === "DEL") return setExpr((s) => s.slice(0, -1));
    if (k === "Ans") return setExpr((s) => s + (ans === null ? "" : String(ans)));
    if (k === "1/x") return setExpr((s) => (s ? `1/(${s})` : ""));
    setExpr((s) => s + k);
  };

  const keyStyle = (k) => {
    if (k === "=") return "bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30";
    if (k === "AC" || k === "DEL") return "bg-rose-50 text-rose-600 hover:bg-rose-100";
    if (/^[0-9.,]$/.test(k)) return "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50";
    if (["÷", "×", "−", "+", "^", "%", "!", "(", ")"].includes(k)) return "bg-amber-50 text-amber-700 hover:bg-amber-100";
    return "bg-indigo-50 text-indigo-700 hover:bg-indigo-100";
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700">Angle mode</span>
        <div className="inline-flex rounded-full bg-slate-100 p-1">
          {["deg", "rad"].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setAngle(m)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase ${angle === m ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500"}`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <input
        value={expr}
        onChange={(e) => { setExpr(e.target.value); setError(""); }}
        onKeyDown={(e) => e.key === "Enter" && calculate()}
        placeholder="e.g. 2π × sin(30) + 5!"
        aria-label="Expression"
        inputMode="text"
        className={`${field} font-mono text-lg`}
      />

      <div className="mt-3 min-h-[64px] rounded-2xl bg-slate-900 px-5 py-3 text-right">
        <p className="text-xs text-slate-400">Result</p>
        <p className="break-all text-3xl font-extrabold text-white">{result || "0"}</p>
      </div>
      <ErrorBox msg={error} />

      <div className="mt-4 grid grid-cols-5 gap-2">
        {keypad.flat().map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => press(k)}
            aria-label={k === "DEL" ? "Delete last character" : k}
            className={`flex h-12 items-center justify-center rounded-xl text-sm font-bold transition active:scale-95 ${keyStyle(k)}`}
          >
            {k === "DEL" ? <Delete size={18} /> : k}
          </button>
        ))}
      </div>

      {history.length > 0 && (
        <div className="mt-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Recent</p>
          <ul className="space-y-1">
            {history.map((h, i) => (
              <li key={i}>
                <button type="button" onClick={() => setExpr(h.e)} className="flex w-full justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50">
                  <span className="truncate font-mono text-slate-500">{h.e}</span>
                  <span className="font-bold text-slate-900">= {h.r}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ---------- Powers & roots ---------- */
function PowersRoots() {
  const [x, setX] = useState("");
  const [n, setN] = useState("3");
  const [out, setOut] = useState(null);
  const [error, setError] = useState("");

  const run = (e) => {
    e.preventDefault();
    const xv = parseFloat(x), nv = parseFloat(n);
    if (isNaN(xv) || isNaN(nv)) { setOut(null); return setError("Enter both numbers"); }
    setError(""); setOut(powersRoots(xv, nv));
  };
  const f = (v) => (v === null ? "Not a real number" : formatNumber(v));

  return (
    <form onSubmit={run}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div><label className={label} htmlFor="pr-x">Number (x)</label><input id="pr-x" type="number" step="any" value={x} onChange={(e) => setX(e.target.value)} placeholder="e.g. 27" className={field} /></div>
        <div><label className={label} htmlFor="pr-n">Power / root (n)</label><input id="pr-n" type="number" step="any" value={n} onChange={(e) => setN(e.target.value)} className={field} /></div>
      </div>
      <button type="submit" className={`${primary} mt-5 w-full`}>Calculate</button>
      <ErrorBox msg={error} />
      {out && (
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <Row k="x²" v={f(out.square)} /><Row k="x³" v={f(out.cube)} />
          <Row k="√x" v={f(out.sqrt)} /><Row k="∛x" v={f(out.cbrt)} />
          <Row k={`x^${n}`} v={f(out.pow)} /><Row k={`${n}th root of x`} v={f(out.nroot)} />
        </div>
      )}
    </form>
  );
}

/* ---------- Number theory ---------- */
function NumberTheory() {
  const [list, setList] = useState("");
  const [single, setSingle] = useState("");
  const [g, setG] = useState(null);
  const [p, setP] = useState(null);
  const [fa, setFa] = useState(null);
  const [error, setError] = useState("");

  const wrap = (fn) => (e) => { e.preventDefault(); try { setError(""); fn(); } catch (er) { setError(er.message); } };

  return (
    <div className="space-y-8">
      <form onSubmit={wrap(() => setG(gcdLcm(parseList(list))))}>
        <label className={label} htmlFor="nt-list">GCD &amp; LCM — numbers separated by commas</label>
        <div className="flex gap-3">
          <input id="nt-list" value={list} onChange={(e) => setList(e.target.value)} placeholder="12, 18, 24" className={field} />
          <button type="submit" className={primary}>Find</button>
        </div>
        {g && <div className="mt-4 grid gap-2 sm:grid-cols-2"><Row k="GCD (HCF)" v={formatNumber(g.gcd)} /><Row k="LCM" v={formatNumber(g.lcm)} /></div>}
      </form>

      <form onSubmit={wrap(() => {
        const n = Number(single);
        setP(primeInfo(n));
      })}>
        <label className={label} htmlFor="nt-single">Prime check &amp; factorisation</label>
        <div className="flex gap-3">
          <input id="nt-single" type="number" value={single} onChange={(e) => setSingle(e.target.value)} placeholder="e.g. 360" className={field} />
          <button type="submit" className={primary}>Check</button>
          <button
            type="button"
            onClick={wrap(() => {
              const n = Number(single);
              const v = factorialBig(n).toString();
              setFa(v.length > 60 ? `${v.slice(0, 20)}… (${v.length} digits)` : v);
            })}
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            n!
          </button>
        </div>
        {p && (
          <div className="mt-4 grid gap-2">
            <Row k="Is prime?" v={p.isPrime ? "Yes, prime" : "No, composite"} />
            <Row k="Prime factors" v={p.expr} />
          </div>
        )}
        {fa && <div className="mt-2"><Row k={`${single}!`} v={fa} /></div>}
      </form>
      <ErrorBox msg={error} />
    </div>
  );
}

/* ---------- Quadratic ---------- */
function Quadratic() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [out, setOut] = useState(null);
  const [error, setError] = useState("");

  const run = (e) => {
    e.preventDefault();
    const [av, bv, cv] = [a, b, c].map(parseFloat);
    if ([av, bv, cv].some(isNaN)) { setOut(null); return setError("Enter a, b and c"); }
    try { setError(""); setOut(quadratic(av, bv, cv)); } catch (er) { setOut(null); setError(er.message); }
  };

  return (
    <form onSubmit={run}>
      <p className="mb-4 text-sm text-slate-500">Solve <span className="font-mono font-bold text-slate-800">ax² + bx + c = 0</span></p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[["a", a, setA], ["b", b, setB], ["c", c, setC]].map(([k, v, set]) => (
          <div key={k}><label className={label} htmlFor={`q-${k}`}>{k}</label><input id={`q-${k}`} type="number" step="any" value={v} onChange={(e) => set(e.target.value)} className={field} /></div>
        ))}
      </div>
      <button type="submit" className={`${primary} mt-5 w-full`}>Solve</button>
      <ErrorBox msg={error} />
      {out && (
        <div className="mt-6 grid gap-2">
          <Row k="Result" v={out.type} />
          <Row k="Discriminant (b² − 4ac)" v={formatNumber(out.d)} />
          {out.roots.map((r, i) => <Row key={i} k={out.roots.length === 1 ? "x" : `x${i + 1}`} v={typeof r === "number" ? formatNumber(r) : r} />)}
          <Row k="Vertex" v={`(${formatNumber(out.vertex.x)}, ${formatNumber(out.vertex.y)})`} />
        </div>
      )}
    </form>
  );
}

/* ---------- Statistics ---------- */
function Statistics() {
  const [text, setText] = useState("");
  const [out, setOut] = useState(null);
  const [error, setError] = useState("");

  const run = (e) => {
    e.preventDefault();
    try { setError(""); setOut(stats(parseList(text))); } catch (er) { setOut(null); setError(er.message); }
  };
  const f = (v) => (v === null ? "—" : formatNumber(v));

  return (
    <form onSubmit={run}>
      <label className={label} htmlFor="st">Numbers (commas, spaces or new lines)</label>
      <textarea id="st" rows={3} value={text} onChange={(e) => setText(e.target.value)} placeholder="2, 4, 4, 4, 5, 5, 7, 9" className={field} />
      <button type="submit" className={`${primary} mt-4 w-full`}>Analyse</button>
      <ErrorBox msg={error} />
      {out && (
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <Row k="Count" v={out.count} /><Row k="Sum" v={f(out.sum)} />
          <Row k="Mean" v={f(out.mean)} /><Row k="Median" v={f(out.median)} />
          <Row k="Mode" v={out.modes.length ? out.modes.map(formatNumber).join(", ") : "No mode"} /><Row k="Range" v={f(out.range)} />
          <Row k="Min" v={f(out.min)} /><Row k="Max" v={f(out.max)} />
          <Row k="Std dev (population)" v={f(out.popSd)} /><Row k="Std dev (sample)" v={f(out.sampleSd)} />
          <Row k="Variance (population)" v={f(out.popVar)} /><Row k="Variance (sample)" v={f(out.sampleVar)} />
        </div>
      )}
    </form>
  );
}

const panels = { calc: ScientificCalculator, powers: PowersRoots, numbers: NumberTheory, quadratic: Quadratic, stats: Statistics };

export default function MathKit() {
  const [tab, setTab] = useState("calc");
  const Panel = panels[tab];

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg ring-4 ring-violet-100">
            <Sigma size={28} />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">MathKit</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            A free all-in-one math toolkit: scientific calculator, powers &amp; roots, GCD/LCM, prime factors, quadratic solver and statistics.
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                tab === t.id
                  ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
              style={tab === t.id ? { color: "#fff" } : undefined}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <Panel />
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900">What can MathKit do?</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li><strong className="text-slate-800">Calculator:</strong> + − × ÷, powers (^), √, %, factorial (!), brackets, sin/cos/tan and inverses, log, ln, π and e, in degrees or radians. Type 2π or 3(4+1) — implicit multiplication works.</li>
            <li><strong className="text-slate-800">Powers &amp; roots:</strong> square, cube, square root, cube root, any power and any n-th root.</li>
            <li><strong className="text-slate-800">Number theory:</strong> GCD (HCF), LCM, prime check, prime factorisation and factorials.</li>
            <li><strong className="text-slate-800">Quadratic solver:</strong> real and complex roots, discriminant and vertex.</li>
            <li><strong className="text-slate-800">Statistics:</strong> mean, median, mode, range, variance and standard deviation.</li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">Everything runs in your browser — nothing is uploaded.</p>
        </section>
      </div>
    </main>
  );
}
