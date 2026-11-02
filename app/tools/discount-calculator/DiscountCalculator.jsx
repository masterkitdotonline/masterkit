"use client";

import { useState } from "react";
import {
  Calculator,
  RotateCcw,
  Percent,
  DollarSign,
} from "lucide-react";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState(null);

  const calculateDiscount = () => {
    const originalPrice = Number(price);
    const discountPercent = Number(discount);

    if (
      !originalPrice ||
      originalPrice <= 0 ||
      discountPercent < 0 ||
      discountPercent > 100
    ) {
      return;
    }

    const discountAmount =
      originalPrice * (discountPercent / 100);

    const finalPrice = originalPrice - discountAmount;

    setResult({
      originalPrice,
      discountPercent,
      discountAmount,
      finalPrice,
    });
  };

  const resetCalculator = () => {
    setPrice("");
    setDiscount("");
    setResult(null);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 text-white shadow-lg ring-4 ring-rose-100">
            <Percent size={28} />
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Discount Calculator
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Calculate discount amounts, final prices and total savings
            quickly and easily.
          </p>
        </div>

        {/* Calculator */}
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

          <div className="grid gap-6 sm:grid-cols-2">

            {/* Original Price */}
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Original Price
              </label>

              <div className="relative">
                <DollarSign
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g. 100"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>
            </div>

            {/* Discount */}
            <div>
              <label
                htmlFor="discount"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Discount Percentage
              </label>

              <div className="relative">
                <input
                  id="discount"
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="e.g. 20"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                />

                <Percent
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">

            <button
              type="button"
              onClick={calculateDiscount}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-500/25 hover:brightness-110 px-6 py-3 text-sm font-semibold text-white transition "
            >
              <Calculator size={17} />
              Calculate Discount
            </button>

            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <RotateCcw size={17} />
              Reset
            </button>

          </div>

          {/* Result */}
          {result && (
            <div className="mt-8">

              <h2 className="text-xl font-bold text-slate-900">
                Discount Result
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Original Price
                  </p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    ${result.originalPrice.toFixed(2)}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    You Save
                  </p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    ${result.discountAmount.toFixed(2)}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {result.discountPercent}% discount
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Final Price
                  </p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    ${result.finalPrice.toFixed(2)}
                  </p>
                </div>

              </div>

              {/* Formula */}
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">
                    Formula:
                  </span>{" "}
                  Discount Amount = Original Price × Discount %
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  Final Price = Original Price − Discount Amount
                </p>
              </div>

            </div>
          )}
        </section>

        {/* How to Use */}
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            How to Use the Discount Calculator
          </h2>

          <ol className="mt-5 space-y-4 text-slate-600">
            <li>
              <strong className="text-slate-900">1. Enter the price:</strong>{" "}
              Enter the original price of the product.
            </li>

            <li>
              <strong className="text-slate-900">2. Enter the discount:</strong>{" "}
              Enter the discount percentage.
            </li>

            <li>
              <strong className="text-slate-900">3. Calculate:</strong>{" "}
              Click Calculate Discount.
            </li>

            <li>
              <strong className="text-slate-900">4. View your result:</strong>{" "}
              See the discount amount, savings and final price.
            </li>
          </ol>
        </section>

        {/* Information */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            What Is a Discount Calculator?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            A discount calculator helps you determine how much money
            you save when a product is offered at a percentage discount.
            It also calculates the final price after the discount is
            applied.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            For example, if an item costs $100 and has a 20% discount,
            the discount is $20 and the final price is $80.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-6">

            <div>
              <h3 className="font-semibold text-slate-900">
                How do I calculate a discount?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Multiply the original price by the discount percentage
                divided by 100. Subtract the discount amount from the
                original price to get the final price.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                What is the final price after a 20% discount?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                A 20% discount means you pay 80% of the original price.
                For example, $100 becomes $80.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Can I use decimals?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Yes. You can enter decimal prices and discount percentages
                for more precise calculations.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}