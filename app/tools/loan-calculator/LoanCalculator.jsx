"use client";

import { useState } from "react";
import {
  Calculator,
  DollarSign,
  Download,
  RotateCcw,
} from "lucide-react";

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function LoanCalculatorPage() {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [term, setTerm] = useState("");
  const [termType, setTermType] = useState("years");

  const [result, setResult] = useState(null);

  const calculateLoan = (e) => {
    e.preventDefault();

    const principal = Number(amount);
    const annualRate = Number(interest);

    let totalMonths =
      termType === "years"
        ? Number(term) * 12
        : Number(term);

    if (
      !principal ||
      principal <= 0 ||
      annualRate < 0 ||
      !totalMonths ||
      totalMonths <= 0
    ) {
      setResult(null);
      return;
    }

    const monthlyRate = annualRate / 100 / 12;

    let monthlyPayment;

    if (monthlyRate === 0) {
      monthlyPayment = principal / totalMonths;
    } else {
      monthlyPayment =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    const totalPayment = monthlyPayment * totalMonths;
    const totalInterest = totalPayment - principal;

    setResult({
      monthlyPayment,
      totalPayment,
      totalInterest,
      principal,
      totalMonths,
      annualRate,
    });
  };

  const reset = () => {
    setAmount("");
    setInterest("");
    setTerm("");
    setTermType("years");
    setResult(null);
  };

  const downloadPDF = () => {
    if (!result) return;

    window.print();
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
            <DollarSign size={15} />
            Finance Calculator
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Loan Calculator
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Calculate your estimated monthly loan payment, total interest,
            and total repayment based on your loan amount, interest rate,
            and loan term.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

          {/* Calculator */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

            <form onSubmit={calculateLoan}>

              {/* Loan Amount */}
              <div>
                <label
                  htmlFor="amount"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Loan Amount
                </label>

                <div className="flex overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                  <span className="flex items-center border-r border-gray-200 bg-gray-50 px-4 text-sm font-medium text-gray-500">
                    $
                  </span>

                  <input
                    id="amount"
                    type="number"
                    min="0"
                    step="any"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 25000"
                    className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Interest */}
              <div className="mt-5">
                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Annual Interest Rate
                </label>

                <div className="flex overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                  <input
                    id="interest"
                    type="number"
                    min="0"
                    step="0.01"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="e.g. 7.5"
                    className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                  />

                  <span className="flex items-center border-l border-gray-200 bg-gray-50 px-4 text-sm font-medium text-gray-500">
                    %
                  </span>
                </div>
              </div>

              {/* Term */}
              <div className="mt-5">
                <label
                  htmlFor="term"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Loan Term
                </label>

                <div className="flex overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                  <input
                    id="term"
                    type="number"
                    min="1"
                    step="1"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder={
                      termType === "years"
                        ? "e.g. 5"
                        : "e.g. 60"
                    }
                    className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                  />

                  <select
                    value={termType}
                    onChange={(e) => {
                      setTermType(e.target.value);
                      setResult(null);
                    }}
                    className="border-l border-gray-200 bg-gray-50 px-3 text-sm font-medium text-gray-600 outline-none"
                  >
                    <option value="years">Years</option>
                    <option value="months">Months</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  <Calculator size={18} />
                  Calculate Loan
                </button>

                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  <RotateCcw size={17} />
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Result */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Loan Summary
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  Result
                </h2>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <DollarSign size={22} />
              </div>
            </div>

            {result ? (
              <>
                {/* Monthly Payment */}
                <div className="mt-6 rounded-xl bg-gray-50 p-5 text-center">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Monthly Payment
                  </p>

                  <p className="mt-2 break-words text-3xl font-bold text-gray-900">
                    ${formatMoney(result.monthlyPayment)}
                  </p>
                </div>

                {/* Summary */}
                <div className="mt-5 space-y-1">
                  <div className="flex items-center justify-between border-b border-gray-100 py-3 text-sm">
                    <span className="text-gray-600">
                      Loan Amount
                    </span>

                    <span className="font-semibold text-gray-900">
                      ${formatMoney(result.principal)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 py-3 text-sm">
                    <span className="text-gray-600">
                      Interest Rate
                    </span>

                    <span className="font-semibold text-gray-900">
                      {result.annualRate}%
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 py-3 text-sm">
                    <span className="text-gray-600">
                      Loan Term
                    </span>

                    <span className="font-semibold text-gray-900">
                      {result.totalMonths} months
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 py-3 text-sm">
                    <span className="text-gray-600">
                      Total Interest
                    </span>

                    <span className="font-semibold text-gray-900">
                      ${formatMoney(result.totalInterest)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3 text-sm">
                    <span className="font-semibold text-gray-800">
                      Total Payment
                    </span>

                    <span className="font-bold text-gray-900">
                      ${formatMoney(result.totalPayment)}
                    </span>
                  </div>
                </div>

                {/* PDF */}
                <button
                  type="button"
                  onClick={downloadPDF}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                >
                  <Download size={17} />
                  Download / Save PDF
                </button>
              </>
            ) : (
              <div className="mt-8 rounded-xl border border-dashed border-gray-300 p-8 text-center">
                <Calculator
                  size={32}
                  className="mx-auto text-gray-400"
                />

                <p className="mt-3 text-sm font-medium text-gray-700">
                  Enter your loan details
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Your estimated monthly payment and total loan cost
                  will appear here.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Information */}
        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            How Loan Payments Are Calculated
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            For a standard fixed-rate installment loan, the monthly payment
            is calculated using the loan principal, monthly interest rate,
            and number of monthly payments.
          </p>

          <div className="mt-5 rounded-xl bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">
              Monthly Payment Formula
            </p>

            <p className="mt-3 font-mono text-sm leading-7 text-gray-700">
              M = P × [r(1 + r)ⁿ] ÷ [(1 + r)ⁿ − 1]
            </p>

            <div className="mt-4 space-y-1 text-xs leading-5 text-gray-500">
              <p>M = Monthly payment</p>
              <p>P = Loan principal</p>
              <p>r = Monthly interest rate</p>
              <p>n = Number of monthly payments</p>
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-amber-900">
            Important Information
          </h2>

          <p className="mt-3 text-sm leading-6 text-amber-800">
            This calculator provides estimates for standard fixed-rate
            installment loans. Actual loan payments may differ because of
            taxes, insurance, fees, additional payments, variable interest
            rates, lender-specific calculations, or other charges. Always
            verify loan terms and costs with your lender before making a
            financial decision.
          </p>
        </section>
      </div>

      {/* Print / PDF */}
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

          main {
            min-height: auto !important;
          }

          .shadow-sm {
            box-shadow: none !important;
          }
        }
      `}</style>
    </main>
  );
}