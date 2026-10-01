"use client";

import { useEffect, useRef, useState } from "react";
import {
  Upload,
  Image as ImageIcon,
  Download,
  RotateCcw,
  Lock,
  Unlock,
  FileImage,
} from "lucide-react";

export default function ImageResizer() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [originalSize, setOriginalSize] = useState(0);

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [aspectLocked, setAspectLocked] = useState(true);
  const [quality, setQuality] = useState(80);
  const [format, setFormat] = useState("image/jpeg");

  const [outputSize, setOutputSize] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  const aspectRatio = useRef(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const formatBytes = (bytes) => {
    if (!bytes) return "0 KB";

    const units = ["Bytes", "KB", "MB", "GB"];
    const index = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${(bytes / Math.pow(1024, index)).toFixed(
      index === 0 ? 0 : 2
    )} ${units[index]}`;
  };

  const loadImage = (file) => {
    setError("");

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (file.size > 25 * 1024 * 1024) {
      setError("Maximum file size is 25 MB.");
      return;
    }

    const objectUrl = URL.createObjectURL(file);

    const img = new Image();

    img.onload = () => {
      setImage(img);
      setFileName(file.name);
      setOriginalSize(file.size);

      setWidth(img.width);
      setHeight(img.height);

      aspectRatio.current = img.width / img.height;

      setOutputSize(null);
      setPreviewUrl("");

      URL.revokeObjectURL(objectUrl);
    };

    img.onerror = () => {
      setError("Unable to read this image.");
      URL.revokeObjectURL(objectUrl);
    };

    img.src = objectUrl;
  };

  const handleFileChange = (e) => {
    loadImage(e.target.files?.[0]);
  };

  const handleWidthChange = (value) => {
    setWidth(value);

    if (
      aspectLocked &&
      aspectRatio.current &&
      value &&
      Number(value) > 0
    ) {
      setHeight(
        Math.round(Number(value) / aspectRatio.current)
      );
    }
  };

  const handleHeightChange = (value) => {
    setHeight(value);

    if (
      aspectLocked &&
      aspectRatio.current &&
      value &&
      Number(value) > 0
    ) {
      setWidth(
        Math.round(Number(value) * aspectRatio.current)
      );
    }
  };

  const resizeImage = () => {
    if (!image) {
      setError("Please upload an image first.");
      return;
    }

    const newWidth = Number(width);
    const newHeight = Number(height);

    if (
      !Number.isFinite(newWidth) ||
      !Number.isFinite(newHeight) ||
      newWidth <= 0 ||
      newHeight <= 0
    ) {
      setError("Please enter valid width and height.");
      return;
    }

    if (newWidth > 10000 || newHeight > 10000) {
      setError("Maximum output dimension is 10,000 × 10,000 pixels.");
      return;
    }

    setError("");

    const canvas = document.createElement("canvas");

    canvas.width = newWidth;
    canvas.height = newHeight;

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      setError("Your browser does not support image processing.");
      return;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // White background for JPEG
    if (format === "image/jpeg") {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, newWidth, newHeight);
    }

    ctx.drawImage(image, 0, 0, newWidth, newHeight);

    const qualityValue = Number(quality) / 100;

    canvas.toBlob(
      (blob) => {
        if (!blob) {
          setError("Unable to create the resized image.");
          return;
        }

        if (previewUrl) {
          URL.revokeObjectURL(previewUrl);
        }

        const url = URL.createObjectURL(blob);

        setPreviewUrl(url);
        setOutputSize(blob.size);
      },
      format,
      qualityValue
    );
  };

  const downloadImage = () => {
    if (!previewUrl) return;

    const extension =
      format === "image/png"
        ? "png"
        : format === "image/webp"
        ? "webp"
        : "jpg";

    const baseName =
      fileName
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-z0-9-_]/gi, "-") || "image";

    const link = document.createElement("a");

    link.href = previewUrl;
    link.download = `${baseName}-resized.${extension}`;

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const reset = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setImage(null);
    setFileName("");
    setOriginalSize(0);
    setWidth("");
    setHeight("");
    setOutputSize(null);
    setPreviewUrl("");
    setError("");

    aspectRatio.current = null;

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const reduction =
    originalSize && outputSize
      ? Math.round(
          ((originalSize - outputSize) / originalSize) * 100
        )
      : 0;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
          <ImageIcon size={28} />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Image Resizer & Compressor
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Resize and compress your images directly in your browser.
          No signup and no image upload to a server.
        </p>
      </div>

      {/* Upload */}
      {!image && (
        <div className="mx-auto max-w-3xl">
          <label
            htmlFor="image-upload"
            className="flex min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white p-8 text-center transition hover:border-blue-500 hover:bg-blue-50/30"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Upload size={30} />
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Upload an Image
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Click to select JPG, PNG, WebP or another image
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Maximum file size: 25 MB
            </p>

            <input
              ref={inputRef}
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      )}

      {error && (
        <div className="mx-auto mt-5 max-w-3xl rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Editor */}
      {image && (
        <div className="grid gap-6 lg:grid-cols-5">
          {/* Preview */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:col-span-3">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="font-semibold text-gray-900">
                  Image Preview
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  {fileName}
                </p>
              </div>

              <button
                type="button"
                onClick={reset}
                className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <RotateCcw size={16} />
                Reset
              </button>
            </div>

            <div className="flex min-h-[300px] items-center justify-center overflow-hidden rounded-xl bg-gray-100 p-4">
              <img
                src={previewUrl || image.src}
                alt="Uploaded image preview"
                className="max-h-[500px] max-w-full object-contain"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">
                  Original Size
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {formatBytes(originalSize)}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3">
                <p className="text-xs text-gray-500">
                  Dimensions
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {image.width} × {image.height}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:col-span-2">
            <h2 className="mb-5 text-xl font-semibold text-gray-900">
              Resize & Compress
            </h2>

            {/* Width */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Width (px)
              </label>

              <input
                type="number"
                min="1"
                max="10000"
                value={width}
                onChange={(e) =>
                  handleWidthChange(e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Height */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Height (px)
              </label>

              <input
                type="number"
                min="1"
                max="10000"
                value={height}
                onChange={(e) =>
                  handleHeightChange(e.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Aspect Ratio */}
            <button
              type="button"
              onClick={() => setAspectLocked(!aspectLocked)}
              className="mb-5 flex items-center gap-2 text-sm font-medium text-blue-600"
            >
              {aspectLocked ? (
                <Lock size={17} />
              ) : (
                <Unlock size={17} />
              )}

              {aspectLocked
                ? "Aspect ratio locked"
                : "Aspect ratio unlocked"}
            </button>

            {/* Format */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Output Format
              </label>

              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="image/jpeg">JPG</option>
                <option value="image/png">PNG</option>
                <option value="image/webp">WebP</option>
              </select>
            </div>

            {/* Quality */}
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Quality
                </label>

                <span className="text-sm font-semibold text-blue-600">
                  {quality}%
                </span>
              </div>

              <input
                type="range"
                min="10"
                max="100"
                value={quality}
                onChange={(e) =>
                  setQuality(Number(e.target.value))
                }
                className="w-full accent-blue-600"
              />

              <div className="mt-1 flex justify-between text-xs text-gray-400">
                <span>Smaller file</span>
                <span>Better quality</span>
              </div>
            </div>

            <button
              type="button"
              onClick={resizeImage}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <FileImage size={19} />
              Resize & Compress
            </button>

            {/* Result */}
            {outputSize !== null && (
              <div className="mt-5 rounded-xl bg-green-50 p-4">
                <p className="text-sm font-semibold text-green-800">
                  Image processed successfully
                </p>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-gray-600">
                      New size
                    </span>

                    <strong className="text-gray-900">
                      {formatBytes(outputSize)}
                    </strong>
                  </div>

                  {reduction > 0 && (
                    <div className="flex justify-between gap-3">
                      <span className="text-gray-600">
                        Size reduced
                      </span>

                      <strong className="text-green-700">
                        {reduction}%
                      </strong>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={downloadImage}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
                >
                  <Download size={18} />
                  Download Image
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Features */}
      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <Upload className="mb-3 text-blue-600" size={23} />

          <h3 className="font-semibold text-gray-900">
            Browser Processing
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Your image is processed directly in your browser.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <Lock className="mb-3 text-blue-600" size={23} />

          <h3 className="font-semibold text-gray-900">
            Privacy Friendly
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            No account or server-side image upload is required.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <ImageIcon className="mb-3 text-blue-600" size={23} />

          <h3 className="font-semibold text-gray-900">
            Multiple Formats
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Export your resized image as JPG, PNG or WebP.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Resize an Image
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
              1
            </div>

            <h3 className="font-semibold text-gray-900">
              Upload Image
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Select the image you want to resize or compress.
            </p>
          </div>

          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
              2
            </div>

            <h3 className="font-semibold text-gray-900">
              Choose Size
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Set your desired width, height, format and quality.
            </p>
          </div>

          <div>
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
              3
            </div>

            <h3 className="font-semibold text-gray-900">
              Download
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Process the image and download the optimized result.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ / SEO content */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          Image Resizer & Compressor
        </h2>

        <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600">
          <p>
            An image resizer changes the dimensions of an image while
            an image compressor reduces its file size. This tool lets
            you do both in one place.
          </p>

          <p>
            Keeping the aspect ratio locked helps prevent images from
            appearing stretched or distorted when you change their
            dimensions.
          </p>

          <p>
            WebP can often provide a smaller file size while
            maintaining good image quality. JPG is commonly useful for
            photographs, while PNG is useful when transparency needs to
            be preserved.
          </p>
        </div>
      </section>
    </div>
  );
}