"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  RefreshCw,
  FileText,
  Minus,
  Plus,
} from "lucide-react";

const loremWords = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "duis",
  "aute",
  "irure",
  "reprehenderit",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "fugiat",
  "nulla",
  "pariatur",
  "excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "in",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum",
];

function randomWord() {
  return loremWords[Math.floor(Math.random() * loremWords.length)];
}

function generateSentence(wordCount) {
  const words = [];

  for (let i = 0; i < wordCount; i++) {
    words.push(randomWord());
  }

  words[0] =
    words[0].charAt(0).toUpperCase() + words[0].slice(1);

  return words.join(" ") + ".";
}

function generateParagraph() {
  const sentenceCount = Math.floor(Math.random() * 3) + 4;
  const sentences = [];

  for (let i = 0; i < sentenceCount; i++) {
    const wordCount = Math.floor(Math.random() * 8) + 8;
    sentences.push(generateSentence(wordCount));
  }

  return sentences.join(" ");
}

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  function generateLorem() {
    const result = [];

    for (let i = 0; i < paragraphs; i++) {
      result.push(generateParagraph());
    }

    setText(result.join("\n\n"));
    setCopied(false);
  }

  async function copyText() {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  function clearText() {
    setText("");
    setCopied(false);
  }

  function decreaseParagraphs() {
    setParagraphs((value) => Math.max(1, value - 1));
  }

  function increaseParagraphs() {
    setParagraphs((value) => Math.min(20, value + 1));
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg ring-4 ring-violet-100">
            <FileText size={28} />
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Lorem Ipsum Generator
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Generate free Lorem Ipsum placeholder text for websites,
            designs, prototypes and development projects.
          </p>
        </div>

        {/* Generator Card */}
        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

          {/* Controls */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <label className="block text-sm font-semibold text-slate-900">
                Number of Paragraphs
              </label>

              <div className="mt-2 flex h-11 w-44 items-center rounded-xl border border-slate-200 bg-slate-50">

                <button
                  type="button"
                  onClick={decreaseParagraphs}
                  className="flex h-full w-11 items-center justify-center text-slate-600 transition hover:bg-slate-100 hover:text-black"
                  aria-label="Decrease paragraphs"
                >
                  <Minus size={17} />
                </button>

                <div className="flex flex-1 justify-center font-semibold text-slate-900">
                  {paragraphs}
                </div>

                <button
                  type="button"
                  onClick={increaseParagraphs}
                  className="flex h-full w-11 items-center justify-center text-slate-600 transition hover:bg-slate-100 hover:text-black"
                  aria-label="Increase paragraphs"
                >
                  <Plus size={17} />
                </button>

              </div>

              <p className="mt-1 text-xs text-slate-500">
                Choose between 1 and 20 paragraphs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">

              <button
                type="button"
                onClick={generateLorem}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 shadow-md shadow-indigo-500/25 hover:brightness-110 px-5 py-3 text-sm font-semibold text-white transition "
              >
                <RefreshCw size={17} />
                Generate Text
              </button>

              <button
                type="button"
                onClick={copyText}
                disabled={!text}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "Copied" : "Copy"}
              </button>

              <button
                type="button"
                onClick={clearText}
                disabled={!text}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Clear
              </button>

            </div>
          </div>

          {/* Output */}
          <div className="mt-7">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">
                Generated Text
              </h2>

              {text && (
                <span className="text-xs text-slate-500">
                  {text.split(/\s+/).filter(Boolean).length} words
                </span>
              )}
            </div>

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Your generated Lorem Ipsum text will appear here..."
              className="min-h-[320px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700 outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>
        </section>

        {/* How to Use */}
        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            How to Use Lorem Ipsum Generator
          </h2>

          <ol className="mt-5 space-y-4 text-slate-600">
            <li>
              <strong className="text-slate-900">1. Choose paragraphs:</strong>{" "}
              Select how many Lorem Ipsum paragraphs you need.
            </li>

            <li>
              <strong className="text-slate-900">2. Generate text:</strong>{" "}
              Click the Generate Text button to create placeholder content.
            </li>

            <li>
              <strong className="text-slate-900">3. Review the text:</strong>{" "}
              Edit the generated text directly if needed.
            </li>

            <li>
              <strong className="text-slate-900">4. Copy:</strong>{" "}
              Click Copy to use the text in your website, design or project.
            </li>
          </ol>
        </section>

        {/* Features */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Features of Lorem Ipsum Generator
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Free to use",
              "No signup required",
              "Generate multiple paragraphs",
              "Copy generated text instantly",
              "Works directly in your browser",
              "Simple and fast interface",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-semibold text-slate-900">
                  {feature}
                </h3>
              </div>
            ))}

          </div>
        </section>

        {/* About */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            What Is Lorem Ipsum?
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Lorem Ipsum is commonly used as placeholder text during
            website and graphic design development. It allows designers
            and developers to see how a page or layout will look before
            the final content is available.
          </p>

          <p className="mt-4 leading-7 text-slate-600">
            Instead of spending time writing temporary content,
            developers and designers can use Lorem Ipsum to test
            typography, spacing, layouts and content areas.
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
                What is a Lorem Ipsum Generator?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A Lorem Ipsum Generator creates placeholder text that
                can be used during website, app and graphic design
                development.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Is this Lorem Ipsum Generator free?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Yes. The tool is free to use and does not require an
                account or signup.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Can I edit the generated text?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Yes. You can edit the generated text directly inside
                the output box.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Can I copy the generated Lorem Ipsum?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Yes. Click the Copy button to copy the generated text
                to your clipboard.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}