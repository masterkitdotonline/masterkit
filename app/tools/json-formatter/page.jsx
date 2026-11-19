
import JsonFormatterPage from "./JSONFormatter&Validator";
import AdSlot from "@/components/AdSlot";
import AdsterraBanner from "@/components/AdsterraBanner";
import ToolAbout from "@/components/ToolAbout";


export const metadata = {
  title: "JSON Formatter & Validator",
  description:
    "Format, beautify, validate and minify JSON online for free. Easily check JSON syntax and make your data easier to read.",
};

export default function Page() {
  return (
    <>
      <JsonFormatterPage />
      <AdsterraBanner />
      <ToolAbout slug="json-formatter" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}