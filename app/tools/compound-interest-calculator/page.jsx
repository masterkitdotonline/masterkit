"use client";

import { useState } from "react";
import {
  Calculator,
  Download,
  RotateCcw,
  TrendingUp,
} from "lucide-react";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [frequency, setFrequency] = useState("12");
  const [monthlyContribution, setMonthlyContribution] = useState("");

  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();

    const P = Number(principal);
    const annualRate = Number(rate);
    const time = Number(years);
    const n = Number(frequency);
    const contribution = Number(monthlyContribution) || 0;

    if (
      !Number.isFinite(P) ||
      !Number.isFinite(annualRate) ||
      !Number.isFinite(time) ||
      P <= 0 ||
      annualRate < 0 ||
      time <= 0
    ) {
      setResult(null);
      return;
    }

    const r = annualRate / 100;
    const periods = Math.round(time * n);

    let futureValue;

    if (r === 0) {
      futureValue = P + contribution * periods;
    } else {
      const growth = Math.pow(1 + r / n, periods);

      // Initial investment
      const initialAmount = P * growth;

      // Monthly contribution
      let contributionAmount = 0;

      if (contribution > 0) {
        const monthlyRate = r / 12;
        const months = Math.round(time * 12);

        if (monthlyRate === 0) {
          contributionAmount = contribution * months;
        } else {
          contributionAmount =
            contribution *
            ((Math.pow(1 + monthlyRate, months) - 1) /
              monthlyRate);
        }
      }

      futureValue = initialAmount + contributionAmount;
    }

    const totalContributions =
      P + contribution * Math.round(time * 12);

    const totalInterest = futureValue - totalContributions;

    setResult({
      futureValue,
      totalInterest: Math.max(0, totalInterest),
      totalContributions,
      years: time,
      rate: annualRate,
    });
  };

  const reset = () => {
    setPrincipal("");
    setRate("");
    setYears("");
    setFrequency("12");
    setMonthlyContribution("");
    setResult(null);
  };

  const downloadPDF = () => {
    window.print();
  };

  const money = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
          <TrendingUp size={28} />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Compound Interest Calculator
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Calculate how your money can grow over time with compound
          interest and regular contributions.
        </p>
      </div>

      {/* Calculator */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Form */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-3">
          <div className="mb-6 flex items-center gap-3">
            <Calculator className="text-blue-600" size={22} />
            <h2 className="text-xl font-semibold text-gray-900">
              Investment Details
            </h2>
          </div>

          <form onSubmit={calculate} className="space-y-5">
            {/* Principal */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Initial Investment
              </label>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  placeholder="1000"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-8 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Rate */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Annual Interest Rate
              </label>

              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="7"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-4 pr-10 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  %
                </span>
              </div>
            </div>

            {/* Years */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Investment Period
              </label>

              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  placeholder="10"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-4 pr-16 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  years
                </span>
              </div>
            </div>

            {/* Frequency */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Compounding Frequency
              </label>

              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="1">Annually</option>
                <option value="2">Semi-annually</option>
                <option value="4">Quarterly</option>
                <option value="12">Monthly</option>
                <option value="365">Daily</option>
              </select>
            </div>

            {/* Contribution */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Monthly Contribution
                <span className="ml-1 font-normal text-gray-400">
                  (optional)
                </span>
              </label>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={monthlyContribution}
                  onChange={(e) =>
                    setMonthlyContribution(e.target.value)
                  }
                  placeholder="100"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-8 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                <Calculator size={19} />
                Calculate
              </button>

              <button
                type="button"
                onClick={reset}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <RotateCcw size={18} />
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Result */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:col-span-2">
          <h2 className="mb-5 text-xl font-semibold text-gray-900">
            Your Results
          </h2>

          {result ? (
            <div className="space-y-4">
              <div className="rounded-xl bg-blue-600 p-5 text-white">
                <p className="text-sm text-blue-100">
                  Future Value
                </p>

                <p className="mt-1 break-words text-3xl font-bold">
                  {money(result.futureValue)}
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-500">
                    Total Contributions
                  </span>

                  <span className="font-semibold text-gray-900">
                    {money(result.totalContributions)}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-500">
                    Total Interest
                  </span>

                  <span className="font-semibold text-green-600">
                    {money(result.totalInterest)}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-gray-500">
                    Investment Period
                  </span>

                  <span className="font-semibold text-gray-900">
                    {result.years} years
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={downloadPDF}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                <Download size={18} />
                Download / Save PDF
              </button>
            </div>
          ) : (
            <div className="flex min-h-[360px] items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center">
              <div>
                <TrendingUp
                  size={42}
                  className="mx-auto mb-4 text-gray-300"
                />

                <p className="font-medium text-gray-600">
                  Enter your investment details
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Your compound interest result will appear here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Formula */}
      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Compound Interest Formula
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          Compound interest calculates interest on both your original
          investment and previously earned interest.
        </p>

        <div className="my-6 overflow-x-auto rounded-xl bg-gray-50 p-5 text-center">
          <p className="text-lg font-semibold text-gray-900">
            A = P(1 + r/n)ⁿᵗ
          </p>
        </div>

        <div className="grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
          <p>
            <strong>P</strong> = Initial investment
          </p>
          <p>
            <strong>r</strong> = Annual interest rate
          </p>
          <p>
            <strong>n</strong> = Compounding frequency
          </p>
          <p>
            <strong>t</strong> = Time in years
          </p>
          <p>
            <strong>A</strong> = Final amount
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          How Compound Interest Works
        </h2>

        <div className="mt-5 space-y-4 text-gray-600">
          <p>
            Compound interest allows your earnings to generate additional
            earnings over time. The longer you keep your money invested,
            the greater the potential effect of compounding.
          </p>

          <p>
            For example, if you invest $1,000 and earn interest, future
            interest can be calculated on the original $1,000 plus the
            interest already earned.
          </p>

          <p>
            Regular contributions can increase the final value because
            additional money is added throughout the investment period.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
        <h2 className="font-bold text-gray-900">
          Important Information
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-700">
          This calculator provides estimates for educational and
          informational purposes only. Actual investment returns may
          differ because of taxes, fees, changing interest rates,
          inflation, investment performance, and other factors. This
          calculator is not financial advice.
        </p>
      </section>

      <style jsx global>{`
        @media print {
          header,
          footer,
          button {
            display: none !important;
          }

          body {
            background: white !important;
          }

          .shadow-sm {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}