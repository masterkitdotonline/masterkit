"use client";

import { useState } from "react";
import { Calculator, RotateCcw } from "lucide-react";


export default function PercentageCalculator() {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState(null);

  const calculatePercentage = (e) => {
    e.preventDefault();

    const number = parseFloat(value);
    const totalNumber = parseFloat(total);

    if (
      isNaN(number) ||
      isNaN(totalNumber) ||
      totalNumber === 0
    ) {
      setResult(null);
      return;
    }

    const percentage = (number / totalNumber) * 100;
    setResult(percentage);
  };

  const resetCalculator = () => {
    setValue("");
    setTotal("");
    setResult(null);
  };

  return (
    <>
    
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="border-b border-gray-50 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-2 text-center sm:px-6 lg:px-8">
          {/* <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
            <Calculator className="text-blue-600" size={28} />
          </div> */}

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Percentage Calculator
          </h1>

          {/* <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Calculate what percentage one number is of another number quickly
            and easily.
          </p> */}
        </div>
      </section>

      {/* Calculator */}
      <section className="px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-xl">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

            <form onSubmit={calculatePercentage} className="space-y-5">

              {/* Value */}
              <div>
                <label
                  htmlFor="value"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  What is the value?
                </label>

                <input
                  id="value"
                  type="number"
                  step="any"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="e.g. 25"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Total */}
              <div>
                <label
                  htmlFor="total"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Percentage of
                </label>

                <input
                  id="total"
                  type="number"
                  step="any"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  placeholder="e.g. 200"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-black px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  Calculate
                </button>

                <button
                  type="button"
                  onClick={resetCalculator}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  <RotateCcw size={16} />
                  Reset
                </button>
              </div>
            </form>

            {/* Result */}
            {result !== null && (
              <div className="mt-7 rounded-2xl bg-blue-50 p-6 text-center">
                <p className="text-sm font-medium text-gray-500">
                  Result
                </p>

                <p className="mt-2 text-4xl font-bold text-blue-600">
                  {result.toFixed(2)}%
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  {value} is {result.toFixed(2)}% of {total}
                </p>
              </div>
            )}
          </div>

          {/* Explanation */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">
              How to calculate percentage?
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              To find what percentage one number is of another, divide the
              first number by the second number and multiply the result by
              100.
            </p>

            <div className="mt-4 rounded-xl bg-gray-50 p-4 text-center font-mono text-sm text-gray-700">
              (Value ÷ Total) × 100
            </div>
          </div>

        </div>
      </section>
    </main>
  
    </>
  );
}