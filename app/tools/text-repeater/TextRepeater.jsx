"use client";

import { useMemo, useState } from "react";
import { Repeat, Copy, Check, Download, Trash2 } from "lucide-react";

const MAX_REPEATS = 10000;
const MAX_CHARS = 1000000;

const SEPARATORS = [
  { id: "newline", label: "New line", value: "\n" },
  { id: "space", label: "Space", value: " " },
  { id: "comma", label: "Comma ( , )", value: "," },
  { id: "commaspace", label: "Comma + space", value: ", " },
  { id: "tab", label: "Tab", value: "\t" },
  { id: "dash", label: "Dash ( - )", value: " - " },
  { id: "pipe", label: "Pipe ( | )", value: " | " },
  { id: "blank", label: "Blank line", value: "\n\n" },
  { id: "none", label: "No separator", value: "" },
  { id: "custom", label: "Custom…", value: null },
];

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";
const label = "mb-2 block text-sm font-semibold text-slate-700";

const unescape = (s) => s.replace(/\\n/g, "\n").replace(/\\t/g, "\t");

export default function TextRepeater() {
  const [text, setText] = useState("");
  const [count, setCount] = useState("5");
  const [sepId, setSepId] = useState("newline");
  const [custom, setCustom] = useState("");
  const [numbered, setNumbered] = useState(false);
  const [trim, setTrim] = useState(true);
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [copied, setCopied] = useState(false);

  const { output, repeats, truncated, error } = useMemo(() => {
    const n = Math.floor(Number(count));
    if (!text.trim()) return { output: "", repeats: 0, truncated: false, error: "" };
    if (!Number.isFinite(n) || n < 1) return { output: "", repeats: 0, truncated: false, error: "Enter a repeat count of 1 or more." };
    const times = Math.min(n, MAX_REPEATS);
    const base = trim ? text.trim() : text;
    const sep = sepId === "custom" ? unescape(custom) : SEPARATORS.find((s) => s.id === sepId).value;

    const parts = [];
    let length = 0;
    let cut = false;
    for (let i = 1; i <= times; i++) {
      const piece = `${numbered ? `${i}. ` : ""}${prefix}${base}${suffix}`;
      length += piece.length + sep.length;
      if (length > MAX_CHARS) { cut = true; break; }
      parts.push(piece);
    }
    return {
      output: parts.join(sep),
      repeats: parts.length,
      truncated: cut || n > MAX_REPEATS,
      error: "",
    };
  }, [text, count, sepId, custom, numbered, trim, prefix, suffix]);

  const stats = useMemo(() => {
    const words = output.trim() ? output.trim().split(/\s+/).length : 0;
    const lines = output ? output.split("\n").length : 0;
    return { chars: output.length, words, lines };
  }, [output]);

  const copy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = output;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const download = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "repeated-text.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setText(""); setCount("5"); setSepId("newline"); setCustom("");
    setNumbered(false); setTrim(true); setPrefix(""); setSuffix("");
  };

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-600 text-white shadow-lg ring-4 ring-cyan-100">
            <Repeat size={28} />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Text Repeater</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Repeat any word, sentence or paragraph as many times as you need – with your choice of separator, numbering, prefix and suffix.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div>
            <label htmlFor="tr-text" className={label}>Text to repeat</label>
            <textarea
              id="tr-text"
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your text here…"
              className={field}
            />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="tr-count" className={label}>Repeat count (max {MAX_REPEATS.toLocaleString()})</label>
              <input
                id="tr-count"
                type="number"
                min="1"
                max={MAX_REPEATS}
                inputMode="numeric"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className={field}
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {[2, 5, 10, 50, 100, 1000].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setCount(String(n))}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
                  >
                    ×{n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="tr-sep" className={label}>Separator</label>
              <select id="tr-sep" value={sepId} onChange={(e) => setSepId(e.target.value)} className={field}>
                {SEPARATORS.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
              {sepId === "custom" && (
                <input
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  placeholder="e.g. ###  (use \n for a new line)"
                  aria-label="Custom separator"
                  className={`${field} mt-2`}
                />
              )}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="tr-prefix" className={label}>Add before each repeat</label>
              <input id="tr-prefix" value={prefix} onChange={(e) => setPrefix(e.target.value)} placeholder='e.g. "' className={field} />
            </div>
            <div>
              <label htmlFor="tr-suffix" className={label}>Add after each repeat</label>
              <input id="tr-suffix" value={suffix} onChange={(e) => setSuffix(e.target.value)} placeholder='e.g. "' className={field} />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-700">
              <input type="checkbox" checked={numbered} onChange={(e) => setNumbered(e.target.checked)} className="h-4 w-4 rounded border-slate-300 accent-indigo-600" />
              Number each repeat (1. 2. 3.)
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-700">
              <input type="checkbox" checked={trim} onChange={(e) => setTrim(e.target.checked)} className="h-4 w-4 rounded border-slate-300 accent-indigo-600" />
              Trim extra spaces around the text
            </label>
          </div>

          {error && <p role="alert" className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</p>}
        </div>

        <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">Result</h2>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={copy} disabled={!output} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50">
                {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied" : "Copy"}
              </button>
              <button type="button" onClick={download} disabled={!output} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
                <Download size={16} /> .txt
              </button>
              <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                <Trash2 size={16} /> Reset
              </button>
            </div>
          </div>

          <textarea
            readOnly
            rows={8}
            value={output}
            aria-label="Repeated text result"
            placeholder="Your repeated text will appear here…"
            className={`${field} mt-4 bg-slate-50 font-mono text-sm`}
          />

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[["Repeats", repeats], ["Characters", stats.chars], ["Words", stats.words], ["Lines", stats.lines]].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-slate-50 px-4 py-3 text-center">
                <p className="text-lg font-extrabold text-slate-900">{Number(v).toLocaleString()}</p>
                <p className="text-xs text-slate-500">{k}</p>
              </div>
            ))}
          </div>

          {truncated && (
            <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
              Output was limited to keep your browser fast (max {MAX_REPEATS.toLocaleString()} repeats or {MAX_CHARS.toLocaleString()} characters).
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
