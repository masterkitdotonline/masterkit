"use client";

import { useMemo, useState } from "react";
import { ClipboardCheck, RotateCcw } from "lucide-react";
import { negativeMarks } from "@/lib/mathkit";

const presets = [
  { id: "none", label: "No negative", ratio: 0 },
  { id: "q", label: "¼ mark", ratio: 1 / 4 },
  { id: "t", label: "⅓ mark", ratio: 1 / 3 },
  { id: "h", label: "½ mark", ratio: 1 / 2 },
  { id: "full", label: "Full mark", ratio: 1 },
  { id: "custom", label: "Custom" },
];

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";
const label = "mb-2 block text-sm font-semibold text-slate-700";

const num = (v) => (v === "" ? NaN : Number(v));
const fmt = (n, d = 2) => Number(n.toFixed(d)).toLocaleString("en-US", { maximumFractionDigits: d });

export default function NegativeMarksCalculator() {
  const [total, setTotal] = useState("");
  const [correct, setCorrect] = useState("");
  const [wrong, setWrong] = useState("");
  const [markCorrect, setMarkCorrect] = useState("1");
  const [preset, setPreset] = useState("q");
  const [custom, setCustom] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { result, error } = useMemo(() => {
    if (!submitted) return {};
    const t = num(total), c = num(correct), w = wrong === "" ? 0 : num(wrong), m = num(markCorrect);
    if ([t, c, w, m].some(Number.isNaN)) return { error: "Please fill total questions, correct answers and marks per correct answer." };
    if ([t, c, w].some((v) => !Number.isInteger(v) || v < 0)) return { error: "Questions must be whole numbers, 0 or more." };
    if (m <= 0) return { error: "Marks per correct answer must be greater than 0." };
    if (c + w > t) return { error: "Correct + wrong answers cannot be more than total questions." };
    const p = presets.find((x) => x.id === preset);
    const penalty = preset === "custom" ? num(custom) : p.ratio * m;
    if (Number.isNaN(penalty) || penalty < 0) return { error: "Enter the marks deducted per wrong answer (0 or more)." };
    return { result: { ...negativeMarks({ total: t, correct: c, wrong: w, markCorrect: m, penalty }), penalty } };
  }, [submitted, total, correct, wrong, markCorrect, preset, custom]);

  const reset = () => {
    setTotal(""); setCorrect(""); setWrong(""); setMarkCorrect("1");
    setPreset("q"); setCustom(""); setSubmitted(false);
  };

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 text-white shadow-lg ring-4 ring-rose-100">
            <ClipboardCheck size={28} />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Negative Marks Calculator</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Work out your exam score with negative marking — for MCQ tests, entry tests, NTS, MDCAT, ECAT, CSS, SSC, JEE, NEET and more.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div><label className={label} htmlFor="nm-total">Total questions</label><input id="nm-total" type="number" min="0" inputMode="numeric" value={total} onChange={(e) => setTotal(e.target.value)} placeholder="100" className={field} /></div>
              <div><label className={label} htmlFor="nm-correct">Correct answers</label><input id="nm-correct" type="number" min="0" inputMode="numeric" value={correct} onChange={(e) => setCorrect(e.target.value)} placeholder="60" className={field} /></div>
              <div><label className={label} htmlFor="nm-wrong">Wrong answers</label><input id="nm-wrong" type="number" min="0" inputMode="numeric" value={wrong} onChange={(e) => setWrong(e.target.value)} placeholder="20" className={field} /></div>
            </div>

            <div>
              <label className={label} htmlFor="nm-mark">Marks per correct answer</label>
              <input id="nm-mark" type="number" step="any" min="0" value={markCorrect} onChange={(e) => setMarkCorrect(e.target.value)} className={`${field} sm:max-w-[200px]`} />
            </div>

            <div>
              <span className={label}>Negative marking (deducted per wrong answer)</span>
              <div className="flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPreset(p.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      preset === p.id
                        ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                    style={preset === p.id ? { color: "#fff" } : undefined}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              {preset === "custom" && (
                <input type="number" step="any" min="0" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="Marks deducted, e.g. 0.5" aria-label="Custom marks deducted per wrong answer" className={`${field} mt-3 sm:max-w-[260px]`} />
              )}
            </div>

            <div className="flex gap-3">
              <button type="submit" className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:brightness-110">
                Calculate score
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
                <p className="text-sm font-medium text-indigo-100">Your final score</p>
                <p className="mt-1 text-5xl font-extrabold">{fmt(result.score)} <span className="text-2xl font-semibold text-indigo-200">/ {fmt(result.max)}</span></p>
                <p className="mt-2 text-sm text-indigo-100">{fmt(result.percentage)}% of total marks</p>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {[
                  ["Marks gained", `+${fmt(result.gained)}`],
                  ["Marks lost (negative)", `−${fmt(result.lost)}`],
                  ["Attempted", result.attempted],
                  ["Not attempted", result.unattempted],
                  ["Accuracy", `${fmt(result.accuracy)}%`],
                  ["Penalty per wrong", fmt(result.penalty, 4)],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                    <span className="text-sm text-slate-500">{k}</span>
                    <span className="text-sm font-bold text-slate-900">{v}</span>
                  </div>
                ))}
              </div>

              {result.penalty > 0 && (
                <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
                  <strong>Guessing tip:</strong> with this marking scheme, an answer is worth attempting only if you are more than{" "}
                  <strong>{fmt(result.breakEven)}%</strong> sure it is correct.
                </p>
              )}
            </div>
          )}
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900">How negative marking is calculated</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            <span className="font-mono font-bold text-slate-800">Score = (Correct × Marks per correct) − (Wrong × Penalty per wrong)</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Unattempted questions neither add nor remove marks. If a paper deducts ¼ mark for each wrong answer and a correct answer gives 1 mark,
            then 60 correct and 20 wrong gives 60 − (20 × 0.25) = <strong>55 marks</strong>.
          </p>
          <h3 className="mt-6 font-bold text-slate-900">Common negative marking schemes</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
            <li>¼ mark deducted per wrong answer (many MCQ tests, SSC)</li>
            <li>⅓ mark deducted per wrong answer (JEE Main, NEET, CAT-style tests)</li>
            <li>½ mark deducted per wrong answer (some entry tests)</li>
            <li>Custom marks, e.g. +4 for correct and −1 for wrong — choose “Custom” and enter 1</li>
          </ul>
          <p className="mt-4 text-xs text-slate-400">Always check your exam’s official marking scheme, as it can change between tests.</p>
        </section>
      </div>
    </main>
  );
}
