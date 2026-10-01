"use client";

import { useMemo, useState } from "react";
import {
  Copy,
  FileText,
  RotateCcw,
  Check,
  Clock3,
  Type,
  AlignLeft,
} from "lucide-react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed
      ? trimmed.split(/\s+/).filter(Boolean).length
      : 0;

    const characters = text.length;

    const charactersNoSpaces = text.replace(/\s/g, "").length;

    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter((item) => item.trim()).length
      : 0;

    const paragraphs = trimmed
      ? text
          .split(/\n\s*\n/)
          .filter((item) => item.trim()).length
      : 0;

    const lines = text
      ? text.split(/\r?\n/).filter((line) => line.trim()).length
      : 0;

    const readingTime = words > 0 ? Math.ceil(words / 200) : 0;

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      lines,
      readingTime,
    };
  }, [text]);

  const keywordStats = useMemo(() => {
    if (!text.trim()) return [];

    const words = text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s'-]/gu, "")
      .split(/\s+/)
      .filter((word) => word.length > 2);

    const frequency = {};

    words.forEach((word) => {
      frequency[word] = (frequency[word] || 0) + 1;
    });

    return Object.entries(frequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  }, [text]);

  const handleCopy = async () => {
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
  };

  const handleClear = () => {
    setText("");
    setCopied(false);
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
          <FileText size={28} />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Word Counter
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Count words, characters, sentences, paragraphs and reading
          time instantly. Free, fast and easy to use.
        </p>
      </div>

      {/* Editor */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Toolbar */}
        <div className="flex flex-col gap-3 border-b border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Type size={18} className="text-blue-600" />
            Write or paste your text
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleCopy}
              disabled={!text}
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {copied ? (
                <>
                  <Check size={16} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleClear}
              disabled={!text}
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <RotateCcw size={16} />
              Clear
            </button>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your text here..."
          className="min-h-[320px] w-full resize-y border-0 p-5 text-base leading-7 text-gray-800 outline-none focus:ring-0"
          spellCheck="true"
        />

        {/* Bottom info */}
        <div className="border-t border-gray-200 px-5 py-3 text-xs text-gray-500">
          Your text is processed in your browser.
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <StatCard
          label="Words"
          value={stats.words}
          icon={<FileText size={19} />}
        />

        <StatCard
          label="Characters"
          value={stats.characters}
          icon={<Type size={19} />}
        />

        <StatCard
          label="No Spaces"
          value={stats.charactersNoSpaces}
          icon={<Type size={19} />}
        />

        <StatCard
          label="Sentences"
          value={stats.sentences}
          icon={<AlignLeft size={19} />}
        />

        <StatCard
          label="Paragraphs"
          value={stats.paragraphs}
          icon={<AlignLeft size={19} />}
        />

        <StatCard
          label="Reading Time"
          value={`${stats.readingTime} min`}
          icon={<Clock3 size={19} />}
        />
      </div>

      {/* Additional Information */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Reading & Text Stats */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Text Statistics
          </h2>

          <div className="mt-5 divide-y divide-gray-100">
            <InfoRow label="Words" value={stats.words} />
            <InfoRow
              label="Characters"
              value={stats.characters}
            />
            <InfoRow
              label="Characters without spaces"
              value={stats.charactersNoSpaces}
            />
            <InfoRow label="Sentences" value={stats.sentences} />
            <InfoRow label="Paragraphs" value={stats.paragraphs} />
            <InfoRow label="Lines" value={stats.lines} />
            <InfoRow
              label="Estimated reading time"
              value={`${stats.readingTime} min`}
            />
          </div>
        </section>

        {/* Keyword Frequency */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Most Used Words
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Top repeated words with more than 2 characters.
          </p>

          {keywordStats.length > 0 ? (
            <div className="mt-5 space-y-2">
              {keywordStats.map(([word, count], index) => (
                <div
                  key={word}
                  className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                      {index + 1}
                    </span>

                    <span className="truncate text-sm font-medium text-gray-800">
                      {word}
                    </span>
                  </div>

                  <span className="ml-3 text-sm font-semibold text-gray-500">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-5 flex min-h-[240px] items-center justify-center rounded-xl border border-dashed border-gray-300 text-center">
              <div>
                <FileText
                  size={36}
                  className="mx-auto mb-3 text-gray-300"
                />

                <p className="font-medium text-gray-500">
                  No text yet
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Start typing to see word frequency.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* How it works */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Use the Word Counter
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
              1
            </div>

            <h3 className="font-semibold text-gray-900">
              Enter Your Text
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Type directly into the editor or paste your existing
              content.
            </p>
          </div>

          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
              2
            </div>

            <h3 className="font-semibold text-gray-900">
              Check Statistics
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Word, character, sentence, paragraph and reading-time
              statistics update automatically.
            </p>
          </div>

          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
              3
            </div>

            <h3 className="font-semibold text-gray-900">
              Copy Your Text
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use the Copy button to quickly copy your finished text.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Free Online Word Counter
        </h2>

        <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600">
          <p>
            A word counter is useful for writers, students, bloggers,
            marketers, freelancers and anyone who needs to keep their
            content within a specific word or character limit.
          </p>

          <p>
            This tool counts words and characters in real time. It also
            provides sentence and paragraph counts and an estimated
            reading time based on approximately 200 words per minute.
          </p>

          <p>
            The tool works directly in your browser, so you can analyze
            your text without creating an account or uploading the text
            to a server.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-5 space-y-5">
          <div>
            <h3 className="font-semibold text-gray-900">
              How is the word count calculated?
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Words are separated using whitespace, so spaces, tabs and
              line breaks are handled automatically.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Does the tool count spaces as characters?
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Yes. The Characters statistic includes spaces. A separate
              Characters without spaces statistic is also provided.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              Is my text uploaded anywhere?
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              No. The counting is performed directly in your browser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>

      <p className="text-xs font-medium text-gray-500">{label}</p>

      <p className="mt-1 break-words text-xl font-bold text-gray-900">
        {value}
      </p>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <span className="text-sm text-gray-600">{label}</span>

      <span className="text-sm font-semibold text-gray-900">
        {value}
      </span>
    </div>
  );
}