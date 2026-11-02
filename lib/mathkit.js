// MathKit – pure math helpers (no eval, no dependencies)

const FUNCS = {
  sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs, exp: Math.exp,
  ln: Math.log, log: Math.log10, log2: Math.log2,
  floor: Math.floor, ceil: Math.ceil, round: Math.round,
  sin: null, cos: null, tan: null, asin: null, acos: null, atan: null,
  sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
  fact: null,
};
const CONSTS = { pi: Math.PI, e: Math.E, tau: Math.PI * 2 };

export function factorialBig(n) {
  if (!Number.isInteger(n) || n < 0) throw new Error("Factorial needs a whole number ≥ 0");
  if (n > 1000) throw new Error("Factorial is limited to 1000");
  let r = 1n;
  for (let i = 2n; i <= BigInt(n); i++) r *= i;
  return r;
}

function tokenize(src) {
  const s = src
    .replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-")
    .replace(/π/g, " pi ").replace(/√/g, " √ ")
    .replace(/\s+/g, " ").trim().toLowerCase();
  const tokens = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === " ") { i++; continue; }
    if (/[0-9.]/.test(c)) {
      let j = i;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      const txt = s.slice(i, j);
      if ((txt.match(/\./g) || []).length > 1 || txt === ".") throw new Error("Invalid number");
      tokens.push({ t: "num", v: parseFloat(txt) });
      i = j; continue;
    }
    if (/[a-z]/.test(c)) {
      let j = i;
      while (j < s.length && /[a-z0-9]/.test(s[j])) j++;
      tokens.push({ t: "id", v: s.slice(i, j) });
      i = j; continue;
    }
    if ("+-*/^%!()√,".includes(c)) { tokens.push({ t: c }); i++; continue; }
    throw new Error(`Unexpected character "${c}"`);
  }
  return tokens;
}

export function evaluate(src, { angle = "deg" } = {}) {
  const tokens = tokenize(src);
  if (!tokens.length) throw new Error("Enter an expression");
  let p = 0;
  const peek = () => tokens[p];
  const eat = (t) => { if (peek() && peek().t === t) { p++; return true; } return false; };
  const toRad = (x) => (angle === "deg" ? (x * Math.PI) / 180 : x);
  const fromRad = (x) => (angle === "deg" ? (x * 180) / Math.PI : x);

  const callFn = (name, x) => {
    switch (name) {
      case "sin": return Math.sin(toRad(x));
      case "cos": return Math.cos(toRad(x));
      case "tan": return Math.tan(toRad(x));
      case "asin": return fromRad(Math.asin(x));
      case "acos": return fromRad(Math.acos(x));
      case "atan": return fromRad(Math.atan(x));
      case "fact": return Number(factorialBig(x));
      default: return FUNCS[name](x);
    }
  };

  function expr() {
    let v = term();
    while (peek() && (peek().t === "+" || peek().t === "-")) {
      const op = tokens[p++].t;
      const r = term();
      v = op === "+" ? v + r : v - r;
    }
    return v;
  }
  function startsOperand() {
    const k = peek();
    return k && (k.t === "num" || k.t === "id" || k.t === "(" || k.t === "√");
  }
  function term() {
    let v = unary();
    for (;;) {
      if (eat("*")) v *= unary();
      else if (eat("/")) {
        const d = unary();
        if (d === 0) throw new Error("Cannot divide by zero");
        v /= d;
      } else if (startsOperand()) v *= unary(); // implicit multiplication: 2π, 3(4+1)
      else break;
    }
    return v;
  }
  function unary() {
    if (eat("-")) return -unary();
    if (eat("+")) return unary();
    return power();
  }
  function power() {
    const base = postfix();
    if (eat("^")) return Math.pow(base, unary());
    return base;
  }
  function postfix() {
    let v = primary();
    for (;;) {
      if (eat("!")) v = Number(factorialBig(v));
      else if (eat("%")) v = v / 100;
      else break;
    }
    return v;
  }
  function primary() {
    const k = tokens[p++];
    if (!k) throw new Error("Expression ended unexpectedly");
    if (k.t === "num") return k.v;
    if (k.t === "(") {
      const v = expr();
      if (!eat(")")) throw new Error("Missing closing )");
      return v;
    }
    if (k.t === "√") {
      const x = postfix_noimplicit();
      if (x < 0) throw new Error("Square root of a negative number");
      return Math.sqrt(x);
    }
    if (k.t === "id") {
      if (k.v in CONSTS) return CONSTS[k.v];
      if (k.v in FUNCS) {
        if (!eat("(")) throw new Error(`Use ${k.v}( … )`);
        const x = expr();
        if (!eat(")")) throw new Error("Missing closing )");
        if (k.v === "sqrt" && x < 0) throw new Error("Square root of a negative number");
        if ((k.v === "ln" || k.v === "log" || k.v === "log2") && x <= 0) throw new Error("Logarithm needs a positive number");
        if ((k.v === "asin" || k.v === "acos") && Math.abs(x) > 1) throw new Error("Input must be between -1 and 1");
        return callFn(k.v, x);
      }
      throw new Error(`Unknown name "${k.v}"`);
    }
    throw new Error(`Unexpected "${k.t}"`);
  }
  function postfix_noimplicit() {
    const k = peek();
    if (k && k.t === "(") return primary();
    if (k && k.t === "num") { p++; return k.v; }
    if (k && k.t === "id") return primary();
    throw new Error("√ needs a number");
  }

  const result = expr();
  if (p < tokens.length) throw new Error(`Unexpected "${tokens[p].t === "num" ? tokens[p].v : tokens[p].t}"`);
  if (!Number.isFinite(result)) throw new Error("Result is too large or undefined");
  return clean(result);
}

export function clean(x) {
  if (Math.abs(x) < 1e-12) return 0;
  return Number(x.toPrecision(12));
}

export function formatNumber(x) {
  if (typeof x !== "number" || !Number.isFinite(x)) return String(x);
  const a = Math.abs(x);
  if (a !== 0 && (a >= 1e15 || a < 1e-9)) return x.toExponential(6).replace(/\.?0+e/, "e");
  return x.toLocaleString("en-US", { maximumFractionDigits: 10 });
}

export function parseList(text) {
  const nums = text.split(/[\s,;]+/).filter(Boolean).map(Number);
  if (!nums.length) throw new Error("Enter some numbers");
  if (nums.some((n) => !Number.isFinite(n))) throw new Error("Only numbers separated by commas or spaces, please");
  return nums;
}

export function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; }
export function lcm(a, b) { return a === 0 || b === 0 ? 0 : Math.abs(a * b) / gcd(a, b); }

export function gcdLcm(list) {
  const ints = list.map((n) => {
    if (!Number.isInteger(n)) throw new Error("GCD and LCM need whole numbers");
    return n;
  });
  if (ints.length < 2) throw new Error("Enter at least two numbers");
  const g = ints.reduce((x, y) => gcd(x, y));
  const l = ints.reduce((x, y) => lcm(x, y));
  if (!Number.isSafeInteger(l)) throw new Error("LCM is too large to calculate exactly");
  return { gcd: g, lcm: l };
}

export function primeInfo(n) {
  if (!Number.isInteger(n) || n < 2) throw new Error("Enter a whole number ≥ 2");
  if (n > 1e12) throw new Error("Limit is 1,000,000,000,000");
  const factors = [];
  let m = n;
  for (let d = 2; d * d <= m; d += d === 2 ? 1 : 2) {
    while (m % d === 0) { factors.push(d); m /= d; }
  }
  if (m > 1) factors.push(m);
  const isPrime = factors.length === 1;
  const counts = {};
  factors.forEach((f) => (counts[f] = (counts[f] || 0) + 1));
  const expr = Object.entries(counts).map(([b, e]) => (e > 1 ? `${b}^${e}` : b)).join(" × ");
  return { isPrime, factors, expr };
}

export function quadratic(a, b, c) {
  if (a === 0) throw new Error("a cannot be 0 (that is not a quadratic equation)");
  const d = b * b - 4 * a * c;
  const vertex = { x: clean(-b / (2 * a)), y: clean(c - (b * b) / (4 * a)) };
  if (d > 0) {
    const s = Math.sqrt(d);
    return { d: clean(d), type: "Two real roots", roots: [clean((-b + s) / (2 * a)), clean((-b - s) / (2 * a))], vertex };
  }
  if (d === 0) return { d: 0, type: "One repeated real root", roots: [clean(-b / (2 * a))], vertex };
  const re = clean(-b / (2 * a));
  const im = clean(Math.sqrt(-d) / (2 * Math.abs(a)));
  return { d: clean(d), type: "Two complex roots", roots: [`${re} + ${im}i`, `${re} − ${im}i`], vertex };
}

export function powersRoots(x, n) {
  const out = { square: clean(x * x), cube: clean(x * x * x) };
  out.sqrt = x >= 0 ? clean(Math.sqrt(x)) : null;
  out.cbrt = clean(Math.cbrt(x));
  out.pow = clean(Math.pow(x, n));
  if (!Number.isFinite(out.pow)) out.pow = null;
  out.nroot = null;
  if (n !== 0) {
    if (x >= 0) out.nroot = clean(Math.pow(x, 1 / n));
    else if (Number.isInteger(n) && Math.abs(n) % 2 === 1) out.nroot = clean(-Math.pow(-x, 1 / n));
  }
  if (out.nroot !== null && !Number.isFinite(out.nroot)) out.nroot = null;
  return out;
}

export function stats(list) {
  const n = list.length;
  const sorted = [...list].sort((a, b) => a - b);
  const sum = list.reduce((a, b) => a + b, 0);
  const mean = sum / n;
  const median = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
  const freq = new Map();
  list.forEach((v) => freq.set(v, (freq.get(v) || 0) + 1));
  const maxF = Math.max(...freq.values());
  const modes = maxF === 1 ? [] : [...freq].filter(([, f]) => f === maxF).map(([v]) => v).sort((a, b) => a - b);
  const ss = list.reduce((a, v) => a + (v - mean) ** 2, 0);
  return {
    count: n, sum: clean(sum), mean: clean(mean), median: clean(median), modes,
    min: sorted[0], max: sorted[n - 1], range: clean(sorted[n - 1] - sorted[0]),
    popVar: clean(ss / n), popSd: clean(Math.sqrt(ss / n)),
    sampleVar: n > 1 ? clean(ss / (n - 1)) : null, sampleSd: n > 1 ? clean(Math.sqrt(ss / (n - 1))) : null,
  };
}

export function negativeMarks({ total, correct, wrong, markCorrect, penalty }) {
  const attempted = correct + wrong;
  const gained = correct * markCorrect;
  const lost = wrong * penalty;
  const score = gained - lost;
  const max = total * markCorrect;
  return {
    attempted, unattempted: total - attempted, gained, lost, score, max,
    percentage: max > 0 ? (score / max) * 100 : 0,
    accuracy: attempted > 0 ? (correct / attempted) * 100 : 0,
    breakEven: markCorrect + penalty > 0 ? (penalty / (markCorrect + penalty)) * 100 : 0,
  };
}
