import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://masterkit.online"),

  title: {
    default: "MasterKit - Free Online Tools & Calculators",
    template: "%s | MasterKit",
  },

  description:
    "MasterKit offers free online tools and calculators including BMI Calculator, Loan Calculator, Percentage Calculator, Image Resizer, Word Counter, JSON Formatter and more.",

  keywords: [
    "free online tools",
    "online calculators",
    "BMI calculator",
    "loan calculator",
    "percentage calculator",
    "area calculator",
    "compound interest calculator",
    "image resizer",
    "word counter",
    "JSON formatter",
    "YouTube thumbnail downloader",
    "developer tools",
    "SEO tools",
    "Mathkit",
    
  ],

  authors: [{ name: "MasterKit" }],
  creator: "MasterKit",
  publisher: "MasterKit",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masterkit.online",
    siteName: "MasterKit",
    title: "MasterKit - Free Online Tools & Calculators",
    description:
      "Free online calculators and useful tools for math, finance, health, images, text, YouTube, developer tasks and SEO.",
  },

  twitter: {
    card: "summary_large_image",
    title: "MasterKit - Free Online Tools & Calculators",
    description:
      "Free online tools and calculators for everyday tasks. No signup required.",
  },

  alternates: {
    canonical: "https://masterkit.online",
  },

  verification: {
    other: {
      "cpmbid-site-verification": "dd3beca97e9a3851e770c9326a30ba56",
      "google-site-verification": "fD-C06qtXQ848IiOwYm8fvd_7KGiKsGILCQQF2Dm800"
    },
  },
};

export default function RootLayout({ children }) {
  // Set NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX in .env.local when AdSense is approved.
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {adsenseClient && (
          <Script
            id="adsense-loader"
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900">
      <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-DVMVXH5WCG"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DVMVXH5WCG');
  `}
</Script>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
