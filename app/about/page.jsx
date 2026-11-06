import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Learn about MasterKit – a free collection of online tools for math, finance, health, education, text, images and development, plus free HTML5 game source codes. No signup required.",
  alternates: { canonical: `${SITE.url}/about` },
};

const sections = [
  {
    h: "Who we are",
    p: [
      "MasterKit is an independent website that offers free online tools for everyday tasks. We build tools such as calculators, text utilities, image helpers, planners and developer utilities that open instantly in your browser, with no installation, no account and no payment.",
      "The project started with a simple frustration: many online tools are slow, cluttered or hide basic features behind sign-ups. We wanted a clean place where a student, a freelancer, a developer or a small business owner can get an answer in a few seconds and move on.",
    ],
  },
  {
    h: "What you will find on MasterKit",
    list: [
      "Math and education tools – a scientific MathKit, percentage, area and negative marks calculators, and a printable time table maker.",
      "Finance and health tools – loan, compound interest and discount calculators, plus BMI and daily calorie estimators.",
      "Text and developer tools – word counter, text repeater, lorem ipsum generator and a JSON formatter and validator.",
      "Image and YouTube tools – an image resizer and compressor and a YouTube thumbnail downloader.",
      "Free HTML5 games – ready-to-use game source codes that you can download, study and customise for your own projects.",
    ],
  },
  {
    h: "How our tools work",
    p: [
      "Most MasterKit tools run entirely in your browser. When you type text, paste JSON or choose an image, the processing happens on your own device, so the content you enter is not uploaded to our servers. Tools that need an external resource, such as the YouTube thumbnail downloader, only request the public image that you ask for.",
      "Every tool page includes a short guide explaining what the tool does, how the result is calculated and what to keep in mind, so you understand the answer instead of just copying it.",
    ],
  },
  {
    h: "Our editorial and quality standards",
    list: [
      "Accuracy first – formulas are written from standard, publicly documented methods and tested with known examples before release.",
      "Clear explanations – each tool explains its inputs, its output and its limits in plain language.",
      "Honest limits – our health, finance and exam tools give estimates for guidance only and never replace professional advice.",
      "Continuous improvement – we fix reported errors quickly and add new tools based on what visitors ask for.",
    ],
  },
  {
    h: "How the site is funded",
    p: [
      "MasterKit is free to use. To cover hosting and development costs, the site may display advertising from third-party networks such as Google AdSense. Ads are clearly separated from tool results and we do not allow ads that are misleading or inappropriate. You can read how advertising and cookies work in our Privacy Policy.",
    ],
  },
  {
    h: "Get in touch",
    p: [
      `Found a mistake, want a new tool, or need help? Email us at ${SITE.email} or message us on WhatsApp. We aim to reply ${SITE.responseTime}. Your feedback directly shapes what we build next.`,
    ],
  },
];

export default function AboutPage() {
  return (
    <LegalPage
      eyebrow="About MasterKit"
      title="Simple online tools, built to be useful"
      intro="Free online tools for math, finance, health, text, images and development, plus HTML5 game source codes – fast, private and easy to use."
      sections={sections}
      cta={{ title: "Ready to try a tool?", text: "Browse all free tools – no signup, no installation.", href: "/tools", label: "Explore all tools" }}
    />
  );
}
