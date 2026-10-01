"use client";

import { useState } from "react";
import {
  Activity,
  Calculator,
  Download,
  RotateCcw,
  Scale,
} from "lucide-react";

const BMI_RANGES = [
  {
    label: "Underweight",
    min: 0,
    max: 18.49,
  },
  {
    label: "Healthy Weight",
    min: 18.5,
    max: 24.99,
  },
  {
    label: "Overweight",
    min: 25,
    max: 29.99,
  },
  {
    label: "Obesity",
    min: 30,
    max: Infinity,
  },
];

function getCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Healthy Weight";
  if (bmi < 30) return "Overweight";
  return "Obesity";
}

function getCategoryStyle(category) {
  switch (category) {
    case "Underweight":
      return "bg-blue-50 text-blue-700 border-blue-200";

    case "Healthy Weight":
      return "bg-green-50 text-green-700 border-green-200";

    case "Overweight":
      return "bg-yellow-50 text-yellow-700 border-yellow-200";

    case "Obesity":
      return "bg-red-50 text-red-700 border-red-200";

    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}

export default function BMICalculatorPage() {
  const [unit, setUnit] = useState("metric");

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const [result, setResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();

    let heightMeters;
    let weightKg;

    if (unit === "metric") {
      heightMeters = Number(height) / 100;
      weightKg = Number(weight);
    } else {
      const totalInches =
        Number(feet || 0) * 12 + Number(inches || 0);

      heightMeters = totalInches * 0.0254;
      weightKg = Number(weight) * 0.45359237;
    }

    if (
      !heightMeters ||
      !weightKg ||
      heightMeters <= 0 ||
      weightKg <= 0
    ) {
      setResult(null);
      return;
    }

    const bmi = weightKg / (heightMeters * heightMeters);

    const category = getCategory(bmi);

    // Healthy BMI range: 18.5 - 24.9
    const healthyMinWeight = 18.5 * heightMeters * heightMeters;
    const healthyMaxWeight = 24.9 * heightMeters * heightMeters;

    setResult({
      bmi,
      category,
      heightMeters,
      weightKg,
      healthyMinWeight,
      healthyMaxWeight,
    });
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setFeet("");
    setInches("");
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
            <Activity size={15} />
            Health Calculator
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            BMI Calculator
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Calculate your Body Mass Index (BMI) using your height and weight.
            Supports both metric and US measurement units.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

          {/* Calculator */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

            {/* Unit Toggle */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Measurement System
              </label>

              <div className="grid grid-cols-2 rounded-xl bg-gray-100 p-1">
                <button
                  type="button"
                  onClick={() => {
                    setUnit("metric");
                    setResult(null);
                  }}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                    unit === "metric"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Metric
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setUnit("us");
                    setResult(null);
                  }}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                    unit === "us"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  US Units
                </button>
              </div>
            </div>

            <form onSubmit={calculateBMI} className="mt-7">

              {/* Metric */}
              {unit === "metric" ? (
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="height"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Height
                    </label>

                    <div className="flex overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                      <input
                        id="height"
                        type="number"
                        min="1"
                        step="any"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="e.g. 175"
                        className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                      />

                      <span className="flex items-center border-l border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-500">
                        cm
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="weight"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Weight
                    </label>

                    <div className="flex overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                      <input
                        id="weight"
                        type="number"
                        min="1"
                        step="any"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="e.g. 70"
                        className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                      />

                      <span className="flex items-center border-l border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-500">
                        kg
                      </span>
                    </div>
                  </div>

                </div>
              ) : (
                /* US Units */
                <div className="grid gap-5 sm:grid-cols-3">

                  <div>
                    <label
                      htmlFor="feet"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Height
                    </label>

                    <div className="flex overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                      <input
                        id="feet"
                        type="number"
                        min="0"
                        step="1"
                        value={feet}
                        onChange={(e) => setFeet(e.target.value)}
                        placeholder="5"
                        className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                      />

                      <span className="flex items-center border-l border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-500">
                        ft
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inches"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Height
                    </label>

                    <div className="flex overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                      <input
                        id="inches"
                        type="number"
                        min="0"
                        max="11"
                        step="any"
                        value={inches}
                        onChange={(e) => setInches(e.target.value)}
                        placeholder="9"
                        className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                      />

                      <span className="flex items-center border-l border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-500">
                        in
                      </span>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="weight-us"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      Weight
                    </label>

                    <div className="flex overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                      <input
                        id="weight-us"
                        type="number"
                        min="1"
                        step="any"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="154"
                        className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                      />

                      <span className="flex items-center border-l border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-500">
                        lb
                      </span>
                    </div>
                  </div>

                </div>
              )}

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  <Calculator size={18} />
                  Calculate BMI
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
                  Your Result
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  BMI
                </h2>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Scale size={22} />
              </div>
            </div>

            {result ? (
              <>
                <div className="mt-6 rounded-xl bg-gray-50 p-6 text-center">
                  <p className="text-sm text-gray-500">
                    Body Mass Index
                  </p>

                  <p className="mt-2 text-5xl font-bold text-gray-900">
                    {result.bmi.toFixed(1)}
                  </p>

                  <span
                    className={`mt-4 inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold ${getCategoryStyle(
                      result.category
                    )}`}
                  >
                    {result.category}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-bold text-gray-900">
                    Healthy Weight Range
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Approximately{" "}
                    <strong>
                      {result.healthyMinWeight.toFixed(1)}
                    </strong>{" "}
                    –{" "}
                    <strong>
                      {result.healthyMaxWeight.toFixed(1)}
                    </strong>{" "}
                    kg for your height.
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                  {BMI_RANGES.map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between border-b border-gray-100 px-4 py-3 text-sm last:border-b-0 ${
                        result.category === item.label
                          ? "bg-gray-50 font-semibold"
                          : ""
                      }`}
                    >
                      <span className="text-gray-700">
                        {item.label}
                      </span>

                      <span className="text-gray-500">
                        {item.label === "Underweight" && "Below 18.5"}
                        {item.label === "Healthy Weight" && "18.5 – 24.9"}
                        {item.label === "Overweight" && "25.0 – 29.9"}
                        {item.label === "Obesity" && "30.0+"}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={downloadPDF}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                >
                  <Download size={17} />
                  Download / Save PDF
                </button>
              </>
            ) : (
              <div className="mt-8 rounded-xl border border-dashed border-gray-300 p-8 text-center">
                <Activity
                  size={32}
                  className="mx-auto text-gray-400"
                />

                <p className="mt-3 text-sm font-medium text-gray-700">
                  Enter your height and weight
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Your BMI result and category will appear here.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* BMI Information */}
        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            What is BMI?
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Body Mass Index (BMI) is a screening measurement calculated from
            a person's weight and height. It is commonly used to categorize
            weight status in adults.
          </p>

          <div className="mt-6 rounded-xl bg-gray-50 p-5">
            <p className="text-sm font-semibold text-gray-900">
              BMI Formula
            </p>

            <p className="mt-2 font-mono text-sm text-gray-700">
              BMI = Weight (kg) ÷ Height² (m²)
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Adult BMI Categories
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <p className="font-semibold text-blue-700">
                Underweight
              </p>
              <p className="mt-1 text-sm text-blue-700/80">
                Below 18.5
              </p>
            </div>

            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-700">
                Healthy Weight
              </p>
              <p className="mt-1 text-sm text-green-700/80">
                18.5 – 24.9
              </p>
            </div>

            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-4">
              <p className="font-semibold text-yellow-700">
                Overweight
              </p>
              <p className="mt-1 text-sm text-yellow-700/80">
                25.0 – 29.9
              </p>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <p className="font-semibold text-red-700">
                Obesity
              </p>
              <p className="mt-1 text-sm text-red-700/80">
                30.0 or higher
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-amber-900">
            Important Health Information
          </h2>

          <p className="mt-3 text-sm leading-6 text-amber-800">
            BMI is a general screening measure and does not directly measure
            body fat or overall health. It may not be appropriate for every
            person, including children, teenagers, pregnant people, athletes,
            or people with certain medical conditions. This calculator is for
            general informational purposes and should not replace advice from
            a qualified healthcare professional.
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