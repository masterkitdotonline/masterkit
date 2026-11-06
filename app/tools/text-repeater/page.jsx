import TextRepeater from "./TextRepeater";
import AdSlot from "@/components/AdSlot";
import ToolAbout from "@/components/ToolAbout";

export const metadata = {
  title: "Text Repeater - Repeat Text Online with Separators & Numbering",
  description:
    "Free online text repeater. Repeat any word, sentence or paragraph up to 10,000 times with new line, space, comma or custom separators. Add numbering, prefix and suffix, then copy or download.",
  keywords: ["text repeater", "repeat text online", "text repeater generator", "repeat text multiple times", "bulk text repeater", "text duplicator", "copy paste text multiple times", "repeat word n times", "line repeater", "text multiplier", "repeat text with separator", "string repeat online", "number text repeater", "emoji repeater", "repeat text generator free"],
  alternates: { canonical: "https://masterkit.online/tools/text-repeater" },
  openGraph: {
    title: "Text Repeater - Repeat Text Online with Separators & Numbering | MasterKit",
    description:
      "Free online text repeater. Repeat any word, sentence or paragraph up to 10,000 times with new line, space, comma or custom separators. Add numbering, prefix and suffix, then copy or download.",
    url: "https://masterkit.online/tools/text-repeater",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <TextRepeater />
      <ToolAbout slug="text-repeater" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}
