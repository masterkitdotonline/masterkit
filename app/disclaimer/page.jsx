import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Disclaimer",
  description:
    "MasterKit disclaimer: our tools provide estimates for general information only and are not professional medical, financial or legal advice.",
  alternates: { canonical: `${SITE.url}/disclaimer` },
};

const sections = [
  {
    h: "General information only",
    p: [
      "All tools, guides and text on MasterKit are provided for general informational and educational purposes. We make no representations or warranties of any kind about the completeness, accuracy, reliability or suitability of the information or results.",
    ],
  },
  {
    h: "Health tools",
    p: [
      "The BMI and calorie calculators give population-based estimates. They do not account for muscle mass, medical conditions, pregnancy, age-specific needs or individual circumstances and are not a diagnosis. Talk to a doctor or registered dietitian before changing your diet or exercise routine.",
    ],
  },
  {
    h: "Finance tools",
    p: [
      "The loan, compound interest and discount calculators show illustrative results based on the numbers you enter. Real lenders may apply fees, different compounding rules, taxes or rounding that change the outcome. This is not financial or investment advice.",
    ],
  },
  {
    h: "Exam and education tools",
    p: [
      "The negative marks calculator and time table maker follow the values you enter. Always confirm the official marking scheme and schedule with your institution or exam body.",
    ],
  },
  {
    h: "Downloads and external links",
    p: [
      "Script downloads and links to third-party websites are provided for convenience. We are not responsible for external content and recommend scanning any downloaded file and reviewing source code before using it in production.",
    ],
  },
  {
    h: "Advertising",
    p: [
      "MasterKit may show ads from third parties such as Google AdSense. The appearance of an ad is not an endorsement of the advertised product or service.",
    ],
  },
  {
    h: "Use at your own risk",
    p: [
      `Your use of the website and its tools is at your own risk. Under no circumstances will ${SITE.name} be liable for any loss or damage arising from the use of the site. If you spot an error, please let us know at ${SITE.email}.`,
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      intro="Our tools give helpful estimates – here is what to keep in mind."
      updated={SITE.updated}
      sections={sections}
    />
  );
}
