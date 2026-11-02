"use client";

import { useState } from "react";
import {
  Activity,
  Calculator,
  RotateCcw,
  Info,
} from "lucide-react";

export default function CalorieCalculator() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("1.2");
  const [result, setResult] = useState(null);

  const calculateCalories = () => {
    const ageValue = Number(age);
    const heightValue = Number(height);
    const weightValue = Number(weight);

    if (
      !ageValue ||
      !heightValue ||
      !weightValue ||
      ageValue <= 0 ||
      heightValue <= 0 ||
      weightValue <= 0
    ) {
      return;
    }

    // Mifflin-St Jeor equation
    let bmr;

    if (gender === "male") {
      bmr =
        10 * weightValue +
        6.25 * heightValue -
        5 * ageValue +
        5;
    } else {
      bmr =
        10 * weightValue +
        6.25 * heightValue -
        5 * ageValue -
        161;
    }

    const tdee = bmr * Number(activity);

    setResult({
      bmr: Math.round(bmr),
      maintenance: Math.round(tdee),
      weightLoss: Math.round(tdee - 500),
      weightGain: Math.round(tdee + 500),
    });
  };

  const resetCalculator = () => {
    setGender("male");
    setAge("");
    setHeight("");
    setWeight("");
    setActivity("1.2");
    setResult(null);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg ring-4 ring-amber-100">
            <Activity size={28} />
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Calorie Calculator
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Estimate your daily calorie needs based on your age,
            gender, height, weight and activity level.
          </p>
        </div>

        {/* Calculator */}
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Gender */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-900">
                Gender
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    gender === "male"
                      ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Male
                </button>

                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    gender === "female"
                      ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age */}
            <div>
              <label
                htmlFor="age"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Age
              </label>

              <input
                id="age"
                type="number"
                min="1"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="e.g. 25"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </div>

            {/* Height */}
            <div>
              <label
                htmlFor="height"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Height (cm)
              </label>

              <input
                id="height"
                type="number"
                min="1"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 175"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </div>

            {/* Weight */}
            <div>
              <label
                htmlFor="weight"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Weight (kg)
              </label>

              <input
                id="weight"
                type="number"
                min="1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 70"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </div>

            {/* Activity */}
            <div className="sm:col-span-2">
              <label
                htmlFor="activity"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Activity Level
              </label>

              <select
                id="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
              >
                <option value="1.2">
                  Sedentary — little or no exercise
                </option>
                <option value="1.375">
                  Lightly Active — exercise 1–3 days/week
                </option>
                <option value="1.55">
                  Moderately Active — exercise 3–5 days/week
                </option>
                <option value="1.725">
                  Very Active — exercise 6–7 days/week
                </option>
                <option value="1.9">
                  Extra Active — very hard exercise or physical job
                </option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={calculateCalories}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-500/25 hover:brightness-110 px-6 py-3 text-sm font-semibold text-white transition "
            >
              <Calculator size={17} />
              Calculate Calories
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
                Your Estimated Daily Calories
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">BMR</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {result.bmr}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    calories/day
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Maintenance
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {result.maintenance}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    calories/day
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Weight Loss
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {result.weightLoss}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    estimated calories/day
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    Weight Gain
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    {result.weightGain}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    estimated calories/day
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-7 flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <Info
              size={19}
              className="mt-0.5 shrink-0 text-slate-500"
            />

            <p className="text-sm leading-6 text-slate-600">
              This calculator provides an estimate and is not medical
              advice. Individual calorie needs can vary based on
              health, body composition, lifestyle and other factors.
            </p>
          </div>
        </section>

        {/* How to use */}
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            How to Use the Calorie Calculator
          </h2>

          <ol className="mt-5 space-y-4 text-slate-600">
            <li>
              <strong className="text-slate-900">1. Select your gender:</strong>{" "}
              Choose male or female.
            </li>

            <li>
              <strong className="text-slate-900">2. Enter your age:</strong>{" "}
              Enter your age in years.
            </li>

            <li>
              <strong className="text-slate-900">3. Enter your measurements:</strong>{" "}
              Enter your height in centimeters and weight in kilograms.
            </li>

            <li>
              <strong className="text-slate-900">4. Select activity:</strong>{" "}
              Choose the activity level that best describes your routine.
            </li>

            <li>
              <strong className="text-slate-900">5. Calculate:</strong>{" "}
              Click Calculate Calories to see your estimated daily needs.
            </li>
          </ol>
        </section>

        {/* Information */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            What Is a Calorie Calculator?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            A calorie calculator estimates the amount of energy your
            body may need each day. The calculation considers factors
            such as age, gender, height, weight and physical activity.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            The result can be useful as a starting point when planning
            nutrition and fitness goals, but actual calorie requirements
            can differ from person to person.
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
                What does this calorie calculator calculate?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                It estimates your BMR and daily calorie needs based
                on your personal information and activity level.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                What is BMR?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                BMR stands for Basal Metabolic Rate. It estimates the
                energy your body uses to maintain basic functions at rest.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Is the calorie result exact?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No. It is an estimate. Actual calorie requirements vary
                between individuals.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}