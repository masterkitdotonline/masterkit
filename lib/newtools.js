// Pure helper functions for the Etsy Profit, PayPal Fee, Subscription Cost and Hex to Binary tools.
// Kept free of React so they are easy to test and reuse.

const r2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

/* ───────────────────────── Etsy profit ───────────────────────── */

export const ETSY_DEFAULTS = {
  listingFee: 0.2, // per listing / per unit sold (auto-renew)
  transactionPct: 6.5, // % of item price + shipping
};

/**
 * Etsy profit for one order.
 * price/shipping are what the BUYER pays; cost/shipCost/adSpend are what YOU pay.
 */
export function etsyProfit({
  price, shipping = 0, qty = 1, cost = 0, shipCost = 0, adSpend = 0,
  processingPct = 3, processingFixed = 0.25, offsitePct = 0,
  listingFee = ETSY_DEFAULTS.listingFee, transactionPct = ETSY_DEFAULTS.transactionPct,
  targetMargin = 30,
}) {
  const items = price * qty;
  const orderTotal = items + shipping;

  const listing = listingFee * qty;
  const transaction = orderTotal * (transactionPct / 100);
  const processing = orderTotal * (processingPct / 100) + processingFixed;
  const offsite = orderTotal * (offsitePct / 100);
  const totalFees = listing + transaction + processing + offsite;

  const productCost = cost * qty;
  const yourCosts = productCost + shipCost + adSpend;
  const profit = orderTotal - totalFees - yourCosts;

  const outOfPocket = productCost + shipCost + adSpend;
  const margin = orderTotal > 0 ? (profit / orderTotal) * 100 : 0;
  const roi = outOfPocket > 0 ? (profit / outOfPocket) * 100 : null;

  // Solve for the order total T that gives a target profit: T*(1 - rates - m) = costs + fixed fees
  const rates = (transactionPct + processingPct + offsitePct) / 100;
  const fixed = listing + processingFixed + yourCosts;
  const priceFor = (m) => {
    const d = 1 - rates - m;
    if (d <= 0) return null;
    const T = fixed / d;
    const p = (T - shipping) / qty;
    return p > 0 ? p : 0;
  };

  return {
    items: r2(items), orderTotal: r2(orderTotal),
    listing: r2(listing), transaction: r2(transaction), processing: r2(processing), offsite: r2(offsite),
    totalFees: r2(totalFees), feePct: orderTotal > 0 ? (totalFees / orderTotal) * 100 : 0,
    productCost: r2(productCost), shipCost: r2(shipCost), adSpend: r2(adSpend),
    profit: r2(profit), perItem: r2(profit / qty), margin, roi,
    breakEven: priceFor(0), targetPrice: priceFor(targetMargin / 100),
  };
}

/* ───────────────────────── PayPal fees ───────────────────────── */

// Typical US merchant rates – all editable in the UI because PayPal changes them by country/account.
export const PAYPAL_PRESETS = [
  { id: "checkout", label: "PayPal Checkout / Invoice / Venmo", pct: 3.49, fixed: 0.49 },
  { id: "card", label: "Standard card payment", pct: 2.99, fixed: 0.49 },
  { id: "qr", label: "QR code (in person)", pct: 2.29, fixed: 0.09 },
  { id: "micro", label: "Micropayments", pct: 4.99, fixed: 0.09 },
  { id: "custom", label: "Custom rate", pct: 0, fixed: 0 },
];

export const INTL_SURCHARGE_PCT = 1.5;
export const CONVERSION_PCT = 4;

/** Mode "receive": buyer pays `amount`, how much is the fee and what do I keep? */
export function paypalReceive({ amount, pct, fixed, intlPct = 0, convPct = 0 }) {
  const rate = pct + intlPct + convPct;
  const fee = amount * (rate / 100) + fixed;
  const net = amount - fee;
  return {
    mode: "receive", rate, fee: r2(fee), net: r2(net), gross: r2(amount),
    effective: amount > 0 ? (fee / amount) * 100 : 0,
    breakdown: {
      base: r2(amount * (pct / 100)),
      fixed: r2(fixed),
      intl: r2(amount * (intlPct / 100)),
      conv: r2(amount * (convPct / 100)),
    },
  };
}

/** Mode "charge": I want to receive `net` – how much must I charge the buyer? */
export function paypalCharge({ net, pct, fixed, intlPct = 0, convPct = 0 }) {
  const rate = pct + intlPct + convPct;
  if (rate >= 100) return null;
  const gross = (net + fixed) / (1 - rate / 100);
  const res = paypalReceive({ amount: gross, pct, fixed, intlPct, convPct });
  return { ...res, mode: "charge", target: r2(net) };
}

/* ───────────────────────── Subscriptions ───────────────────────── */

export const CYCLES = [
  { id: "weekly", label: "Weekly", perMonth: 52 / 12 },
  { id: "monthly", label: "Monthly", perMonth: 1 },
  { id: "quarterly", label: "Every 3 months", perMonth: 1 / 3 },
  { id: "biannual", label: "Every 6 months", perMonth: 1 / 6 },
  { id: "yearly", label: "Yearly", perMonth: 1 / 12 },
];

export const monthlyCost = (price, cycleId) => {
  const c = CYCLES.find((x) => x.id === cycleId) || CYCLES[1];
  return price * c.perMonth;
};

export function subscriptionTotals(items) {
  const rows = items
    .map((s) => ({ ...s, price: Number(s.price) }))
    .filter((s) => Number.isFinite(s.price) && s.price > 0)
    .map((s) => ({ ...s, monthly: monthlyCost(s.price, s.cycle) }))
    .sort((a, b) => b.monthly - a.monthly);

  const monthly = rows.reduce((t, s) => t + s.monthly, 0);
  const yearly = monthly * 12;
  return {
    rows: rows.map((s) => ({ ...s, yearly: s.monthly * 12, share: monthly > 0 ? (s.monthly / monthly) * 100 : 0 })),
    monthly, yearly,
    daily: yearly / 365, weekly: yearly / 52,
    fiveYear: yearly * 5, tenYear: yearly * 10,
    count: rows.length,
  };
}

/* ───────────────────────── Hex ⇄ Binary ───────────────────────── */

export const HEX_TABLE = Array.from({ length: 16 }, (_, i) => ({
  hex: i.toString(16).toUpperCase(),
  bin: i.toString(2).padStart(4, "0"),
  dec: i,
}));

const clean = (s) => s.replace(/0x/gi, "").replace(/[\s_,\-:]/g, "");

export function hexToBinary(input, { group = 4, trim = false } = {}) {
  const hex = clean(input);
  if (!hex) return { error: "Enter a hexadecimal value." };
  const bad = hex.match(/[^0-9a-fA-F]/);
  if (bad) return { error: `"${bad[0]}" is not a valid hex digit. Use 0-9 and A-F only.` };

  const digits = [...hex.toUpperCase()].map((h) => ({ hex: h, bin: HEX_TABLE[parseInt(h, 16)].bin }));
  let bits = digits.map((d) => d.bin).join("");
  if (trim) bits = bits.replace(/^0+(?=.)/, "");
  const grouped = group > 0 ? bits.replace(new RegExp(`(?=(?:.{${group}})+$)`, "g"), " ").trim() : bits;

  return {
    hex: hex.toUpperCase(), digits, binary: bits, grouped,
    bitCount: bits.length, decimal: BigInt("0x" + hex).toString(),
  };
}

export function binaryToHex(input) {
  let bits = input.replace(/0b/gi, "").replace(/[\s_,]/g, "");
  if (!bits) return { error: "Enter a binary value." };
  const bad = bits.match(/[^01]/);
  if (bad) return { error: `"${bad[0]}" is not a valid binary digit. Use 0 and 1 only.` };
  bits = bits.padStart(Math.ceil(bits.length / 4) * 4, "0");
  const nibbles = bits.match(/.{4}/g);
  const digits = nibbles.map((n) => ({ bin: n, hex: parseInt(n, 2).toString(16).toUpperCase() }));
  const hex = digits.map((d) => d.hex).join("");
  return { hex, digits, binary: bits, grouped: nibbles.join(" "), bitCount: bits.length, decimal: BigInt("0b" + bits).toString() };
}
