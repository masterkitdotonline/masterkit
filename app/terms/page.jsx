import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for MasterKit: rules for using our free online tools and scripts, disclaimers, intellectual property and limitations of liability.",
  alternates: { canonical: `${SITE.url}/terms` },
};

const sections = [
  {
    h: "Acceptance of terms",
    p: [
      `By accessing or using ${SITE.name} (${SITE.url}) you agree to these Terms of Use and our Privacy Policy. If you do not agree, please stop using the website.`,
    ],
  },
  {
    h: "Use of the website",
    p: ["You may use MasterKit for lawful personal, educational and commercial purposes. You agree not to:"],
    list: [
      "Use the site in any way that violates applicable laws or regulations.",
      "Attempt to disrupt, overload, scrape at high volume or gain unauthorised access to the site or its servers.",
      "Upload or process content that is illegal, infringing or harmful.",
      "Click on advertisements artificially or encourage others to do so.",
    ],
  },
  {
    h: "Accuracy of tools and results",
    p: [
      "We work hard to make our tools accurate, but we do not guarantee that results are error-free, complete or suitable for your situation. Health, finance, exam and academic results are estimates for general guidance only. Please verify important figures before relying on them.",
    ],
  },
  {
    h: "No professional advice",
    p: [
      "Nothing on MasterKit is medical, financial, legal or other professional advice. Always consult a qualified professional before making decisions about your health, loans, investments or legal matters.",
    ],
  },
  {
    h: "Free scripts and source codes",
    p: [
      "Downloadable scripts and HTML5 game source codes are provided as is for learning and for use in your own projects. You may modify them for your own use. Unless a script states otherwise, you may not resell the unmodified source code as your own product or claim authorship of the original work.",
    ],
  },
  {
    h: "Intellectual property",
    p: [
      "The design, text, layout and original code of this website are owned by MasterKit and protected by applicable copyright laws. Third-party names, logos and trademarks, including YouTube, remain the property of their respective owners and are used only for identification.",
    ],
  },
  {
    h: "Advertising and third-party links",
    p: [
      "The site may display third-party advertising, including Google AdSense, and may link to external websites. We do not endorse or control third-party content and are not responsible for it. Your dealings with advertisers or external sites are solely between you and them.",
    ],
  },
  {
    h: "Availability and changes",
    p: [
      "We may add, change, suspend or remove tools and features at any time without notice. We do not guarantee that the site will always be available or free of interruptions or errors.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "To the fullest extent permitted by law, MasterKit and its owners are not liable for any direct, indirect, incidental or consequential loss or damage arising from your use of, or inability to use, the website, its tools or any downloaded files.",
    ],
  },
  {
    h: "Changes to these terms",
    p: ["We may revise these terms from time to time. Continued use of the website after changes are posted means you accept the updated terms."],
  },
  {
    h: "Contact",
    p: [`Questions about these terms? Email ${SITE.email} or visit our Contact page.`],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="The rules for using MasterKit and its free tools and scripts."
      updated={SITE.updated}
      sections={sections}
    />
  );
}
