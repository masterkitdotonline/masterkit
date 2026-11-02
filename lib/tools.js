import {
  Calculator,
  Percent,
  Ruler,
  Wallet,
  TrendingUp,
  Landmark,
  Tag,
  HeartPulse,
  Flame,
  Video,
  ImageDown,
  FileText,
  Braces,
  Type,
  Sigma,
  ClipboardCheck,
} from "lucide-react";

// Colour themes used for the colourful icon tiles (static class names so Tailwind keeps them)
export const themes = {
  blue: { gradient: "from-blue-500 to-indigo-600", soft: "bg-blue-50", text: "text-blue-600", ring: "ring-blue-100", glow: "shadow-blue-500/30" },
  violet: { gradient: "from-violet-500 to-purple-600", soft: "bg-violet-50", text: "text-violet-600", ring: "ring-violet-100", glow: "shadow-violet-500/30" },
  emerald: { gradient: "from-emerald-400 to-teal-600", soft: "bg-emerald-50", text: "text-emerald-600", ring: "ring-emerald-100", glow: "shadow-emerald-500/30" },
  rose: { gradient: "from-rose-400 to-pink-600", soft: "bg-rose-50", text: "text-rose-600", ring: "ring-rose-100", glow: "shadow-rose-500/30" },
  amber: { gradient: "from-amber-400 to-orange-500", soft: "bg-amber-50", text: "text-amber-600", ring: "ring-amber-100", glow: "shadow-amber-500/30" },
  red: { gradient: "from-red-500 to-rose-600", soft: "bg-red-50", text: "text-red-600", ring: "ring-red-100", glow: "shadow-red-500/30" },
  cyan: { gradient: "from-cyan-400 to-sky-600", soft: "bg-cyan-50", text: "text-cyan-600", ring: "ring-cyan-100", glow: "shadow-cyan-500/30" },
  slate: { gradient: "from-slate-600 to-slate-800", soft: "bg-slate-100", text: "text-slate-700", ring: "ring-slate-200", glow: "shadow-slate-500/30" },
};

export const categoryTheme = {
  Math: "blue",
  Finance: "emerald",
  Health: "rose",
  YouTube: "red",
  Image: "violet",
  Text: "amber",
  Developer: "slate",
  Education: "cyan",
};

export const tools = [
  { name: "Area Calculator", short: "Area", description: "Calculate the area of circles, rectangles, squares, triangles and more.", category: "Math", icon: Ruler, theme: "blue", href: "/tools/area-calculator", popular: true },
  { name: "Percentage Calculator", short: "Percentage", description: "Work out percentages quickly and easily.", category: "Math", icon: Percent, theme: "cyan", href: "/tools/percentage-calculator" },
  { name: "YouTube Thumbnail Downloader", short: "YT Thumbnails", description: "Download YouTube thumbnails in every available quality.", category: "YouTube", icon: Video, theme: "red", href: "/tools/youtube-thumbnail-downloader", popular: true },
  { name: "Image Resizer & Compressor", short: "Image Resizer", description: "Resize and compress images right in your browser.", category: "Image", icon: ImageDown, theme: "violet", href: "/tools/image-resizer", popular: true },
  { name: "Compound Interest Calculator", short: "Compound Interest", description: "See how your money can grow over time with regular contributions.", category: "Finance", icon: TrendingUp, theme: "emerald", href: "/tools/compound-interest-calculator" },
  { name: "Loan Calculator", short: "Loan", description: "Calculate monthly payments and total interest.", category: "Finance", icon: Landmark, theme: "amber", href: "/tools/loan-calculator", popular: true },
  { name: "Discount Calculator", short: "Discount", description: "Find final prices and savings in seconds.", category: "Finance", icon: Tag, theme: "rose", href: "/tools/discount-calculator" },
  { name: "BMI Calculator", short: "BMI", description: "Check your Body Mass Index and healthy weight range.", category: "Health", icon: HeartPulse, theme: "rose", href: "/tools/bmi-calculator", popular: true },
  { name: "Calorie Calculator", short: "Calories", description: "Estimate your daily calorie needs from age, body and activity.", category: "Health", icon: Flame, theme: "amber", href: "/tools/calorie-calculator" },
  { name: "Word Counter", short: "Word Counter", description: "Count words, characters, sentences and reading time.", category: "Text", icon: Type, theme: "amber", href: "/tools/word-counter" },
  { name: "Lorem Ipsum Generator", short: "Lorem Ipsum", description: "Generate placeholder text for designs and prototypes.", category: "Text", icon: FileText, theme: "violet", href: "/tools/lorem-ipsum-generator" },
  { name: "JSON Formatter & Validator", short: "JSON", description: "Format, validate and minify JSON — fully in your browser.", category: "Developer", icon: Braces, theme: "slate", href: "/tools/json-formatter", popular: true },
  { name: "MathKit", short: "MathKit", description: "Scientific calculator plus powers & roots, GCD/LCM, primes, quadratic solver and statistics.", category: "Math", icon: Sigma, theme: "violet", href: "/tools/mathkit", popular: true },
  { name: "Negative Marks Calculator", short: "Negative Marks", description: "Calculate exam score with 1/4, 1/3, 1/2 or custom negative marking.", category: "Education", icon: ClipboardCheck, theme: "rose", href: "/tools/negative-marks-calculator", popular: true },
];

export const categories = ["All", "Math", "Education", "Finance", "Health", "YouTube", "Image", "Text", "Developer"];

export const popularTools = tools.filter((t) => t.popular);
