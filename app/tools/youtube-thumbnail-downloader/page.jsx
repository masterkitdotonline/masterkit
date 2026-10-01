"use client";

import { useState } from "react";
import {
  Video,
  Download,
  Copy,
  Check,
  Image as ImageIcon,
} from "lucide-react";

export default function YouTubeThumbnailDownloader() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState("");

  const getVideoId = (value) => {
    try {
      const parsed = new URL(value.trim());

      // youtube.com/watch?v=VIDEO_ID
      if (parsed.hostname.includes("youtube.com")) {
        const id = parsed.searchParams.get("v");

        if (id) return id;

        // youtube.com/shorts/VIDEO_ID
        const shortsMatch = parsed.pathname.match(
          /\/shorts\/([^/?]+)/
        );

        if (shortsMatch) return shortsMatch[1];

        // youtube.com/embed/VIDEO_ID
        const embedMatch = parsed.pathname.match(
          /\/embed\/([^/?]+)/
        );

        if (embedMatch) return embedMatch[1];
      }

      // youtu.be/VIDEO_ID
      if (parsed.hostname === "youtu.be") {
        return parsed.pathname.split("/")[1];
      }

      return null;
    } catch {
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setVideoId("");
    setCopied("");

    if (!url.trim()) {
      setError("Please enter a YouTube video URL.");
      return;
    }

    const id = getVideoId(url);

    if (!id) {
      setError("Please enter a valid YouTube video URL.");
      return;
    }

    setVideoId(id);
  };

  const reset = () => {
    setUrl("");
    setVideoId("");
    setError("");
    setCopied("");
  };

  const copyUrl = async (imageUrl, type) => {
    try {
      await navigator.clipboard.writeText(imageUrl);
      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch {
      setCopied("");
    }
  };

  const thumbnails = videoId
    ? [
        {
          name: "Maximum Resolution",
          description: "Highest available thumbnail quality",
          file: "maxresdefault.jpg",
        },
        {
          name: "High Quality",
          description: "High-quality thumbnail",
          file: "hqdefault.jpg",
        },
        {
          name: "Medium Quality",
          description: "Medium-quality thumbnail",
          file: "mqdefault.jpg",
        },
        {
          name: "Standard Quality",
          description: "Standard thumbnail",
          file: "sddefault.jpg",
        },
      ]
    : [];

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
          <Video size={28} />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          YouTube Thumbnail Downloader
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Download and save YouTube video thumbnails in different
          available resolutions. No signup required.
        </p>
      </div>

      {/* Downloader */}
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
        <form onSubmit={handleSubmit}>
          <label className="mb-2 block text-sm font-semibold text-gray-800">
            YouTube Video URL
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="min-w-0 flex-1 rounded-xl border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              <ImageIcon size={19} />
              Get Thumbnail
            </button>
          </div>

          {error && (
            <p className="mt-3 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}
        </form>
      </div>

      {/* Results */}
      {videoId && (
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900">
              Available Thumbnails
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Choose a resolution and download or copy the image URL.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {thumbnails.map((thumbnail) => {
              const imageUrl = `https://img.youtube.com/vi/${videoId}/${thumbnail.file}`;

              return (
                <div
                  key={thumbnail.file}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gray-100">
                    <img
                      src={imageUrl}
                      alt={`YouTube thumbnail - ${thumbnail.name}`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900">
                        {thumbnail.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {thumbnail.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <a
                        href={imageUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                      >
                        <Download size={17} />
                        Download
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          copyUrl(imageUrl, thumbnail.file)
                        }
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                      >
                        {copied === thumbnail.file ? (
                          <>
                            <Check size={17} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={17} />
                            Copy URL
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Supported URLs */}
      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">
          Supported YouTube URLs
        </h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "youtube.com/watch?v=...",
            "youtu.be/...",
            "youtube.com/shorts/...",
            "youtube.com/embed/...",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-600"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Download a YouTube Thumbnail
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
              1
            </div>
            <h3 className="font-semibold text-gray-900">
              Copy the URL
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Copy the URL of the YouTube video you want to use.
            </p>
          </div>

          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
              2
            </div>
            <h3 className="font-semibold text-gray-900">
              Paste the URL
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Paste the video URL into the input field above.
            </p>
          </div>

          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
              3
            </div>
            <h3 className="font-semibold text-gray-900">
              Download
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Select the available thumbnail quality and save it.
            </p>
          </div>
        </div>
      </section>

      {/* Important info */}
      <section className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
        <h2 className="font-bold text-gray-900">
          Important Information
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-700">
          Thumbnail availability and resolution can vary by YouTube
          video. Only use downloaded thumbnails when you have the
          appropriate rights or permission to use them. This tool is
          provided for informational and utility purposes.
        </p>
      </section>

      {/* Reset */}
      {videoId && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={reset}
            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Download Another Thumbnail
          </button>
        </div>
      )}
    </div>
  );
}