import HexToBinaryConverter from "./HexToBinaryConverter";
import AdSlot from "@/components/AdSlot";
import AdsterraBanner from "@/components/AdsterraBanner";
import ToolAbout from "@/components/ToolAbout";

export const metadata = {
  title: "Hex to Binary Converter - Hex to Binary Table & Conversion Guide",
  description:
    "Free hex to binary converter with step-by-step working. Convert hexadecimal to binary instantly, learn how to convert hex to binary by hand, and use the full hex to binary table (0-F). Also converts binary back to hex.",
  keywords: ["hex to binary", "hex to binary converter", "hex to binary table", "how to convert hex to binary", "hex to binary conversion", "hexadecimal to binary", "hex to binary calculator", "hex to bin", "binary to hex converter", "binary to hexadecimal", "hex to decimal and binary", "hex binary chart", "convert hex to binary online", "hexadecimal to binary table", "hex to binary step by step"],
  alternates: { canonical: "https://masterkit.online/tools/hex-to-binary" },
  openGraph: {
    title: "Hex to Binary Converter - Hex to Binary Table & Conversion Guide | MasterKit",
    description:
      "Free hex to binary converter with step-by-step working. Convert hexadecimal to binary instantly, learn how to convert hex to binary by hand, and use the full hex to binary table (0-F). Also converts binary back to hex.",
    url: "https://masterkit.online/tools/hex-to-binary",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <HexToBinaryConverter />
      <AdsterraBanner />
      <ToolAbout slug="hex-to-binary" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}
