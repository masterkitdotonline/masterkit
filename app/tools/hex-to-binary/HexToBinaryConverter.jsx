"use client";

import { useMemo, useState } from "react";
import { Binary, ArrowLeftRight, Copy, Check, RotateCcw } from "lucide-react";
import { hexToBinary, binaryToHex, HEX_TABLE } from "@/lib/newtools";

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-mono text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";
const label = "mb-2 block text-sm font-semibold text-slate-700";
const examples = ["FF", "1A3F", "0xDEADBEEF", "7E", "C0FFEE"];

export default function HexToBinaryConverter() {
  const [mode, setMode] = useState("hex2bin");
  const [input, setInput] = useState("");
  const [group, setGroup] = useState(4);
  const [trim, setTrim] = useState(false);
  const [copied, setCopied] = useState("");

  const toBin = mode === "hex2bin";

  const out = useMemo(() => {
    if (!input.trim()) return null;
    return toBin ? hexToBinary(input, { group, trim }) : binaryToHex(input);
  }, [input, mode, group, trim, toBin]);

  const main = out && !out.error ? (toBin ? out.grouped : out.hex) : "";

  const copy = async (text, key) => {
    try { await navigator.clipboard.writeText(text); setCopied(key); setTimeout(() => setCopied(""), 1500); } catch {}
  };

  const swap = () => {
    if (out && !out.error) setInput(toBin ? out.binary : out.hex);
    else setInput("");
    setMode(toBin ? "bin2hex" : "hex2bin");
  };

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
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 text-white shadow-lg ring-4 ring-slate-200">
            <Binary size={28} />
          </div>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Hex to Binary Converter</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Convert hexadecimal to binary instantly, see the step-by-step working for every digit, and use the hex to binary table. Switch direction any time to convert binary back to hex.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" onClick={() => { setMode("hex2bin"); setInput(""); }} className={pill(toBin)} style={toBin ? { color: "#fff" } : undefined}>Hex → Binary</button>
            <button type="button" onClick={() => { setMode("bin2hex"); setInput(""); }} className={pill(!toBin)} style={!toBin ? { color: "#fff" } : undefined}>Binary → Hex</button>
            <button type="button" onClick={swap} className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
              <ArrowLeftRight size={15} /> Swap
            </button>
          </div>

          <div className="mt-5">
            <label className={label} htmlFor="hb-input">{toBin ? "Hexadecimal value" : "Binary value"}</label>
            <textarea
              id="hb-input"
              rows={3}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={toBin ? "e.g. 1A3F or 0xFF" : "e.g. 1111 1111"}
              spellCheck={false}
              autoCapitalize="off"
              className={`${field} resize-y`}
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {toBin && examples.map((x) => (
                <button key={x} type="button" onClick={() => setInput(x)} className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-semibold text-slate-600 hover:bg-slate-50">{x}</button>
              ))}
              {!toBin && ["11111111", "1010 1011", "110100111101"].map((x) => (
                <button key={x} type="button" onClick={() => setInput(x)} className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs font-semibold text-slate-600 hover:bg-slate-50">{x}</button>
              ))}
              <button type="button" onClick={() => setInput("")} className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-slate-500 hover:bg-slate-50"><RotateCcw size={12} /> Clear</button>
            </div>
          </div>

          {toBin && (
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <label htmlFor="hb-group" className="text-sm font-semibold text-slate-700">Group bits</label>
                <select id="hb-group" value={group} onChange={(e) => setGroup(Number(e.target.value))} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500">
                  <option value={4}>by 4 (nibbles)</option>
                  <option value={8}>by 8 (bytes)</option>
                  <option value={0}>no spaces</option>
                </select>
              </div>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" checked={trim} onChange={(e) => setTrim(e.target.checked)} className="h-4 w-4 accent-indigo-600" />
                Remove leading zeros
              </label>
            </div>
          )}

          {out?.error && <p role="alert" className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{out.error}</p>}

          {out && !out.error && (
            <div className="mt-6">
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white">
                <p className="text-sm font-medium text-indigo-100">{toBin ? "Binary result" : "Hexadecimal result"}</p>
                <p className="mt-2 break-all font-mono text-2xl font-bold leading-snug sm:text-3xl">{main}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button type="button" onClick={() => copy(toBin ? out.binary : out.hex, "main")} className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/25">
                    {copied === "main" ? <Check size={15} /> : <Copy size={15} />} {copied === "main" ? "Copied" : "Copy result"}
                  </button>
                  <span className="text-sm text-indigo-100">{out.bitCount} bits · {Math.ceil(out.bitCount / 8)} byte{Math.ceil(out.bitCount / 8) > 1 ? "s" : ""}</span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3">
                <span className="text-sm text-slate-500">Decimal value</span>
                <button type="button" onClick={() => copy(out.decimal, "dec")} className="break-all text-right font-mono text-sm font-bold text-slate-900 hover:text-indigo-600" title="Copy decimal">
                  {out.decimal} {copied === "dec" && <span className="ml-1 text-xs font-sans text-emerald-600">copied</span>}
                </button>
              </div>

              <h2 className="mt-6 text-base font-bold text-slate-900">Step-by-step conversion</h2>
              <p className="mt-1 text-sm text-slate-500">
                {toBin ? "Each hex digit becomes exactly 4 binary digits." : "Every group of 4 bits becomes one hex digit (padded with leading zeros if needed)."}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {out.digits.slice(0, 64).map((d, i) => (
                  <div key={i} className="min-w-[64px] rounded-xl border border-slate-200 bg-white px-3 py-2 text-center">
                    <div className="font-mono text-lg font-bold text-indigo-600">{toBin ? d.hex : d.bin}</div>
                    <div className="text-slate-300">↓</div>
                    <div className="font-mono text-sm font-semibold text-slate-800">{toBin ? d.bin : d.hex}</div>
                  </div>
                ))}
              </div>
              {out.digits.length > 64 && <p className="mt-2 text-xs text-slate-500">Showing the first 64 digits.</p>}
            </div>
          )}
        </div>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8" aria-labelledby="hb-table">
          <h2 id="hb-table" className="text-xl font-bold text-slate-900">Hex to binary table</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">Memorise these 16 rows and you can convert any hexadecimal number to binary by hand.</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[320px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-2 pr-4 font-semibold">Hex</th>
                  <th className="py-2 pr-4 font-semibold">Binary</th>
                  <th className="py-2 font-semibold">Decimal</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                {HEX_TABLE.map((r) => (
                  <tr key={r.hex} className="border-b border-slate-100 last:border-0">
                    <td className="py-2 pr-4 font-bold text-indigo-600">{r.hex}</td>
                    <td className="py-2 pr-4 text-slate-800">{r.bin}</td>
                    <td className="py-2 text-slate-600">{r.dec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
