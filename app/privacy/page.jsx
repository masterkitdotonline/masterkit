import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "MasterKit Privacy Policy: what information we collect, how cookies, Google Analytics and Google AdSense are used, and the choices you have.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

const sections = [
  {
    h: "Introduction",
    p: [
      `This Privacy Policy explains how ${SITE.name} (${SITE.url}) collects, uses and protects information when you visit our website. By using the site you agree to the practices described here. If you do not agree, please do not use the site.`,
    ],
  },
  {
    h: "Information we do not collect",
    p: [
      "You do not need an account to use MasterKit. Most of our tools run directly in your browser, so the text, numbers, JSON or images you enter are processed on your own device and are not sent to or stored on our servers.",
    ],
  },
  {
    h: "Information collected automatically",
    p: ["Like most websites, we and our service providers may automatically receive limited technical information when you visit:"],
    list: [
      "Browser type and version, device type, operating system and screen size.",
      "Approximate location (country or city level) derived from your IP address.",
      "Pages visited, time spent, referring website and general interaction data.",
    ],
    after: ["This data is used in aggregate to understand how the site is used, to keep it secure and to improve our tools."],
  },
  {
    h: "Cookies and similar technologies",
    p: [
      "Cookies are small files stored on your device. We and our partners use cookies and similar technologies for analytics, to remember basic preferences and to show and measure advertising. You can delete or block cookies in your browser settings, although some parts of the site may not work as intended without them.",
    ],
  },
  {
    h: "Google Analytics",
    p: [
      "We use Google Analytics to understand how visitors use the site, for example which tools are popular. Google Analytics uses cookies to collect usage information and reports it to us in aggregated form. You can learn more at policies.google.com/technologies/partner-sites and opt out with the Google Analytics Opt-out Browser Add-on.",
    ],
  },
  {
    h: "Advertising and Google AdSense",
    p: [
      "MasterKit may display advertisements served by third-party vendors, including Google. Third-party vendors, including Google, use cookies to serve ads based on a user's previous visits to this website or other websites.",
      "Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to this site and/or other sites on the internet.",
      "You may opt out of personalised advertising by visiting Google Ads Settings (adssettings.google.com). You can also opt out of some third-party vendors' use of cookies for personalised advertising by visiting www.aboutads.info.",
      "Where required by law, such as in the European Economic Area and the United Kingdom, we request your consent before personalised ads or non-essential cookies are used.",
    ],
  },
  {
    h: "Third-party websites and services",
    p: [
      "Our site may contain links to other websites, such as Google Drive for script downloads or YouTube. We do not control these sites and are not responsible for their content or privacy practices. We encourage you to read the privacy policy of every site you visit.",
    ],
  },
  {
    h: "Local storage",
    p: [
      "Some tools, such as the Time Table Maker, may save your work in your browser's local storage so it is still there when you return. This data stays on your device, and you can remove it at any time by clearing your browser data.",
    ],
  },
  {
    h: "Children's privacy",
    p: [
      "MasterKit is intended for a general audience and is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided personal information, please contact us and we will take appropriate steps.",
    ],
  },
  {
    h: "Your rights and choices",
    p: ["Depending on where you live, you may have rights to access, correct, delete or restrict the use of your personal data, and to object to or withdraw consent for certain processing. You can:"],
    list: [
      "Block or delete cookies using your browser settings.",
      "Opt out of personalised advertising through Google Ads Settings or aboutads.info.",
      "Contact us to ask a question about data connected to your visit.",
    ],
  },
  {
    h: "Data security",
    p: [
      "We take reasonable technical measures to protect the site. However, no method of transmission or storage on the internet is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    h: "Changes to this policy",
    p: [
      "We may update this Privacy Policy from time to time. Changes take effect when they are posted on this page, and the date at the top shows when it was last revised.",
    ],
  },
  {
    h: "Contact us",
    p: [`Questions about this policy? Email ${SITE.email} or use our Contact page.`],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How we handle information, cookies, analytics and advertising on MasterKit."
      updated={SITE.updated}
      sections={sections}
    />
  );
}
