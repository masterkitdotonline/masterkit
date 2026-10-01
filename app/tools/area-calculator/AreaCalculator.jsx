"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  Download,
  RotateCcw,
  Ruler,
  ChevronDown,
} from "lucide-react";

const UNITS = {
  "Square Meter (m²)": 1,
  "Square Kilometer (km²)": 1000000,
  "Square Centimeter (cm²)": 0.0001,
  "Square Millimeter (mm²)": 0.000001,

  "Square Feet (ft²)": 0.09290304,
  "Square Inch (in²)": 0.00064516,
  "Square Yard (yd²)": 0.83612736,
  "Square Mile (mi²)": 2589988.110336,

  "Square Foot (sq ft)": 0.09290304,
  "Square Yard (sq yd)": 0.83612736,

  Acre: 4046.8564224,
  Hectare: 10000,

  "Kanal (Pakistan)": 506.025856,
  "Marla (Pakistan)": 25.292928,

  "Killa (Pakistan)": 4046.8564224,
  "Murabba (Pakistan)": 101171.41056,

  "Gunta": 101.17141056,
  "Bigha (approx.)": 2508.382,
  "Dhur": 16.929,
  "Decimal": 40.468564224,
};

const LENGTH_TO_METER = {
  Meter: 1,
  Kilometer: 1000,
  Centimeter: 0.01,
  Millimeter: 0.001,
  Feet: 0.3048,
  Inch: 0.0254,
  Yard: 0.9144,
  Mile: 1609.344,
};

const SHAPES = [
  {
    id: "rectangle",
    name: "Rectangle",
    fields: [
      ["lengthA", "Length A"],
      ["lengthB", "Width B"],
    ],
  },
  {
    id: "rectangle4",
    name: "4-Side Plot",
    fields: [
      ["sideA", "Side A"],
      ["sideB", "Side B"],
      ["sideC", "Side C"],
      ["sideD", "Side D"],
    ],
  },
  {
    id: "square",
    name: "Square",
    fields: [["side", "Side"]],
  },
  {
    id: "circle",
    name: "Circle",
    fields: [["radius", "Radius"]],
  },
  {
    id: "triangle",
    name: "Triangle",
    fields: [
      ["base", "Base"],
      ["height", "Height"],
    ],
  },
  {
    id: "trapezoid",
    name: "Trapezoid",
    fields: [
      ["baseA", "Base A"],
      ["baseB", "Base B"],
      ["height", "Height"],
    ],
  },
  {
    id: "parallelogram",
    name: "Parallelogram",
    fields: [
      ["base", "Base"],
      ["height", "Height"],
    ],
  },
  {
    id: "ellipse",
    name: "Ellipse",
    fields: [
      ["radiusA", "Radius A"],
      ["radiusB", "Radius B"],
    ],
  },
  {
    id: "rhombus",
    name: "Rhombus",
    fields: [
      ["diagonalA", "Diagonal A"],
      ["diagonalB", "Diagonal B"],
    ],
  },
  {
    id: "kite",
    name: "Kite",
    fields: [
      ["diagonalA", "Diagonal A"],
      ["diagonalB", "Diagonal B"],
    ],
  },
];

function formatNumber(value) {
  if (!Number.isFinite(value)) return "0";

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 6,
  }).format(value);
}

function calculateArea(shape, values, unit) {
  const toMeters = LENGTH_TO_METER[unit] || 1;

  const v = {};

  Object.keys(values).forEach((key) => {
    v[key] = (Number(values[key]) || 0) * toMeters;
  });

  switch (shape) {
    case "rectangle":
      return v.lengthA * v.lengthB;

    case "rectangle4":
      // Approximation for a 4-side plot when only four side lengths
      // are available. Exact quadrilateral area requires additional
      // information such as an angle or diagonal.
      return (
        ((v.sideA + v.sideC) / 2) *
        ((v.sideB + v.sideD) / 2)
      );

    case "square":
      return v.side * v.side;

    case "circle":
      return Math.PI * v.radius * v.radius;

    case "triangle":
      return 0.5 * v.base * v.height;

    case "trapezoid":
      return ((v.baseA + v.baseB) / 2) * v.height;

    case "parallelogram":
      return v.base * v.height;

    case "ellipse":
      return Math.PI * v.radiusA * v.radiusB;

    case "rhombus":
      return 0.5 * v.diagonalA * v.diagonalB;

    case "kite":
      return 0.5 * v.diagonalA * v.diagonalB;

    default:
      return 0;
  }
}

export default function AreaCalculator() {
  const [shape, setShape] = useState("rectangle");
  const [unit, setUnit] = useState("Feet");

  const [values, setValues] = useState({
    lengthA: "",
    lengthB: "",
    sideA: "",
    sideB: "",
    sideC: "",
    sideD: "",
    side: "",
    radius: "",
    base: "",
    height: "",
    baseA: "",
    baseB: "",
    radiusA: "",
    radiusB: "",
    diagonalA: "",
    diagonalB: "",
  });

  const [result, setResult] = useState(null);

  const selectedShape = useMemo(
    () => SHAPES.find((item) => item.id === shape),
    [shape]
  );

  const handleChange = (key, value) => {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const calculate = (e) => {
    e.preventDefault();

    const area = calculateArea(shape, values, unit);

    if (!area || area <= 0) {
      setResult(null);
      return;
    }

    setResult(area);
  };

  const reset = () => {
    setValues({
      lengthA: "",
      lengthB: "",
      sideA: "",
      sideB: "",
      sideC: "",
      sideD: "",
      side: "",
      radius: "",
      base: "",
      height: "",
      baseA: "",
      baseB: "",
      radiusA: "",
      radiusB: "",
      diagonalA: "",
      diagonalB: "",
    });

    setResult(null);
  };

  const resultUnits = [
    ["Square Meter", 1],
    ["Square Kilometer", 1000000],
    ["Square Feet", 0.09290304],
    ["Square Yard", 0.83612736],
    ["Square Mile", 2589988.110336],
    ["Acre", 4046.8564224],
    ["Hectare", 10000],
    ["Kanal", 506.025856],
    ["Marla", 25.292928],
    ["Killa", 4046.8564224],
    ["Murabba", 101171.41056],
    ["Gunta", 101.17141056],
    ["Decimal", 40.468564224],
  ];

  const getConvertedResult = (factor) => {
    return result ? result / factor : 0;
  };

  const downloadPDF = () => {
    if (!result) return;

    window.print();
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Small Heading */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
            <Ruler size={15} />
            Land Area Tool
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Area Calculator
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Calculate land and shape areas using different measurement units,
            including square feet, square yards, acres, kanal, marla, killa,
            hectares and more.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

          {/* Calculator */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

            <div className="grid gap-5 sm:grid-cols-2">

              {/* Shape */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Shape
                </label>

                <div className="relative">
                  <select
                    value={shape}
                    onChange={(e) => {
                      setShape(e.target.value);
                      setResult(null);
                    }}
                    className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  >
                    {SHAPES.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div>
              </div>

              {/* Unit */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-800">
                  Input Unit
                </label>

                <div className="relative">
                  <select
                    value={unit}
                    onChange={(e) => {
                      setUnit(e.target.value);
                      setResult(null);
                    }}
                    className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pr-10 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  >
                    {Object.keys(LENGTH_TO_METER).map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Dynamic Inputs */}
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {selectedShape.fields.map(([key, label]) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    {label}
                  </label>

                  <div className="flex overflow-hidden rounded-xl border border-gray-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                    <input
                      id={key}
                      type="number"
                      min="0"
                      step="any"
                      value={values[key]}
                      onChange={(e) =>
                        handleChange(key, e.target.value)
                      }
                      placeholder="Enter value"
                      className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
                    />

                    <span className="flex items-center border-l border-gray-200 bg-gray-50 px-3 text-xs font-medium text-gray-500">
                      {unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={calculate}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                <Calculator size={18} />
                Calculate Area
              </button>

              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                <RotateCcw size={17} />
                Reset
              </button>
            </div>

            {/* 4 Side Note */}
            {shape === "rectangle4" && (
              <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                <strong>Note:</strong> If all four sides are different, four
                side lengths alone cannot determine an exact quadrilateral
                area. This calculator uses the average of opposite sides as
                an approximate area. For exact surveying, use a diagonal or
                angle measurement.
              </div>
            )}
          </div>

          {/* Result */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Calculated Area
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  Result
                </h2>
              </div>

              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Ruler size={22} />
              </div>
            </div>

            {result ? (
              <>
                <div className="mt-6 rounded-xl bg-gray-50 p-5 text-center">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    Square Meters
                  </p>

                  <p className="mt-2 break-words text-3xl font-bold text-gray-900">
                    {formatNumber(result)}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    m²
                  </p>
                </div>

                <div className="mt-5 space-y-2">
                  {resultUnits.map(([name, factor]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between border-b border-gray-100 py-2.5 text-sm"
                    >
                      <span className="text-gray-600">{name}</span>

                      <span className="font-semibold text-gray-900">
                        {formatNumber(getConvertedResult(factor))}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={downloadPDF}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
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
                  Enter your measurements
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Select a shape and unit, enter the required values, then
                  calculate your area.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Supported Units */}
        <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Supported Land Area Units
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Results can be viewed in common international area units and
            commonly used land measurement units.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "m²",
              "km²",
              "cm²",
              "mm²",
              "sq ft",
              "sq yd",
              "sq in",
              "sq mi",
              "Acre",
              "Hectare",
              "Kanal",
              "Marla",
              "Killa",
              "Murabba",
              "Gunta",
              "Decimal",
              "Bigha",
              "Dhur",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Information */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">
              Common Land Measurements
            </h2>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>
                <strong>1 Acre</strong> = 43,560 square feet
              </p>

              <p>
                <strong>1 Killa</strong> = 1 Acre in the Pakistan convention
                used by this calculator.
              </p>

              <p>
                <strong>1 Kanal</strong> = 5,445 square feet in the common
                Pakistan convention.
              </p>

              <p>
                <strong>1 Kanal</strong> = 20 Marla under the same convention.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">
              Accuracy Note
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              This calculator is intended for general calculations. Local land
              measurement standards can differ by country or region,
              especially for units such as kanal, marla, killa and bigha.
              Always verify measurements with local land records or a qualified
              surveyor when the result is being used for a property
              transaction or legal purpose.
            </p>
          </div>
        </section>

      </div>

      {/* Print styling */}
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