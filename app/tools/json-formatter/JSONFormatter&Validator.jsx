"use client";

import { useState } from "react";
import {
  Braces,
  Check,
  Clipboard,
  Download,
  FileJson,
  Minimize2,
  RotateCcw,
  Sparkles,
  XCircle,
} from "lucide-react";

export default function JsonFormatterPage() {
  const [jsonInput, setJsonInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const validateJSON = () => {
    if (!jsonInput.trim()) {
      setError("Please enter JSON first.");
      setJsonOutput("");
      return false;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      setError("");
      return parsed;
    } catch (err) {
      setError(err.message || "Invalid JSON.");
      setJsonOutput("");
      return false;
    }
  };

  const formatJSON = () => {
    const parsed = validateJSON();

    if (parsed === false) return;

    setJsonOutput(JSON.stringify(parsed, null, 2));
  };

  const minifyJSON = () => {
    const parsed = validateJSON();

    if (parsed === false) return;

    setJsonOutput(JSON.stringify(parsed));
  };

  const validateOnly = () => {
    const parsed = validateJSON();

    if (parsed === false) return;

    setJsonOutput("✓ Valid JSON");
  };

  const copyJSON = async () => {
    if (!jsonOutput) return;

    await navigator.clipboard.writeText(jsonOutput);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const downloadJSON = () => {
    if (!jsonOutput || jsonOutput === "✓ Valid JSON") return;

    const blob = new Blob([jsonOutput], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "formatted.json";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  const clearAll = () => {
    setJsonInput("");
    setJsonOutput("");
    setError("");
    setCopied(false);
  };

  const loadExample = () => {
    const example = {
      name: "John Doe",
      age: 28,
      email: "john@example.com",
      active: true,
      skills: ["JavaScript", "React", "Next.js"],
      address: {
        city: "Islamabad",
        country: "Pakistan",
      },
    };

    setJsonInput(JSON.stringify(example, null, 2));
    setJsonOutput("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
            <Braces size={28} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            JSON Formatter & Validator
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Format, validate, minify and beautify JSON online for free.
            Everything runs directly in your browser.
          </p>
        </div>

        {/* Main Tool */}
        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">

          {/* Toolbar */}
          <div className="mb-5 flex flex-wrap gap-2">
            <button
              onClick={formatJSON}
              className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              <Sparkles size={17} />
              Format
            </button>

            <button
              onClick={minifyJSON}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <Minimize2 size={17} />
              Minify
            </button>

            <button
              onClick={validateOnly}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <Check size={17} />
              Validate
            </button>

            <button
              onClick={loadExample}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <FileJson size={17} />
              Example
            </button>

            <button
              onClick={clearAll}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              <RotateCcw size={17} />
              Clear
            </button>
          </div>

          {/* Editors */}
          <div className="grid gap-5 lg:grid-cols-2">

            {/* Input */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-900">
                  JSON Input
                </label>

                <span className="text-xs text-gray-500">
                  Paste your JSON
                </span>
              </div>

              <textarea
                value={jsonInput}
                onChange={(e) => {
                  setJsonInput(e.target.value);
                  setError("");
                  setJsonOutput("");
                }}
                placeholder={`{
  "name": "John",
  "age": 25,
  "active": true
}`}
                spellCheck={false}
                className="h-[420px] w-full resize-y rounded-xl border border-gray-300 bg-gray-950 p-4 font-mono text-sm leading-6 text-gray-100 outline-none transition placeholder:text-gray-600 focus:border-gray-500 focus:ring-2 focus:ring-gray-200"
              />
            </div>

            {/* Output */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-900">
                  Result
                </label>

                <div className="flex gap-2">
                  <button
                    onClick={copyJSON}
                    disabled={!jsonOutput}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {copied ? (
                      <>
                        <Check size={14} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Clipboard size={14} />
                        Copy
                      </>
                    )}
                  </button>

                  <button
                    onClick={downloadJSON}
                    disabled={
                      !jsonOutput || jsonOutput === "✓ Valid JSON"
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Download size={14} />
                    Download
                  </button>
                </div>
              </div>

              <div className="h-[420px] overflow-auto rounded-xl border border-gray-300 bg-gray-950 p-4">
                {jsonOutput ? (
                  <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-6 text-gray-100">
                    {jsonOutput}
                  </pre>
                ) : (
                  <div className="flex h-full items-center justify-center text-center">
                    <div>
                      <Braces
                        size={40}
                        className="mx-auto mb-3 text-gray-700"
                      />

                      <p className="text-sm text-gray-500">
                        Formatted JSON will appear here
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
              <XCircle size={20} className="mt-0.5 shrink-0" />

              <div>
                <p className="font-semibold">Invalid JSON</p>
                <p className="mt-1 break-words text-sm">
                  {error}
                </p>
              </div>
            </div>
          )}

          {/* Privacy */}
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
            <Braces
              size={19}
              className="mt-0.5 shrink-0 text-gray-600"
            />

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Your JSON stays in your browser
              </p>

              <p className="mt-1 text-sm text-gray-600">
                This tool processes JSON locally in your browser. Your
                JSON is not uploaded to a server by this tool.
              </p>
            </div>
          </div>
        </div>

        {/* About */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">
            JSON Formatter & Validator
          </h2>

          <div className="mt-4 space-y-4 text-gray-600 leading-7">
            <p>
              JSON Formatter & Validator is a free online tool for
              developers who need to quickly format, validate, beautify,
              or minify JSON data.
            </p>

            <p>
              Properly formatted JSON is easier to read and debug.
              Validation helps identify syntax problems such as missing
              commas, incorrect quotation marks, invalid brackets, or
              malformed JSON values.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Features
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Format JSON",
                text: "Beautify compressed or difficult-to-read JSON.",
              },
              {
                title: "Validate JSON",
                text: "Check whether your JSON syntax is valid.",
              },
              {
                title: "Minify JSON",
                text: "Remove unnecessary whitespace and formatting.",
              },
              {
                title: "Copy Result",
                text: "Copy formatted or minified JSON with one click.",
              },
              {
                title: "Download JSON",
                text: "Save your formatted JSON as a .json file.",
              },
              {
                title: "Browser Based",
                text: "Process JSON directly in your browser.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <h3 className="font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How To Use */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            How to Use the JSON Formatter
          </h2>

          <ol className="mt-5 space-y-3 text-gray-600">
            <li>
              <strong className="text-gray-900">1. Paste JSON:</strong>{" "}
              Add your JSON data to the input box.
            </li>

            <li>
              <strong className="text-gray-900">2. Choose an action:</strong>{" "}
              Format, Minify, or Validate your JSON.
            </li>

            <li>
              <strong className="text-gray-900">3. Copy or download:</strong>{" "}
              Use the available buttons to save the result.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mt-10 pb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold text-gray-900">
                What is JSON?
              </h3>

              <p className="mt-2 text-gray-600">
                JSON stands for JavaScript Object Notation. It is a
                lightweight data format commonly used for APIs,
                configuration files, and transferring structured data.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                What does JSON formatting do?
              </h3>

              <p className="mt-2 text-gray-600">
                Formatting adds indentation and line breaks to make JSON
                easier for humans to read and debug.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                What does JSON minification do?
              </h3>

              <p className="mt-2 text-gray-600">
                Minification removes unnecessary spaces and line breaks
                while keeping the JSON data unchanged.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Is my JSON uploaded?
              </h3>

              <p className="mt-2 text-gray-600">
                The formatting and validation in this tool happen
                directly in your browser. Your JSON is not sent to a
                server by the tool.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}