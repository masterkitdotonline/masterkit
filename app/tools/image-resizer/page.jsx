
import ImageResizer from "./ImageResizer&Compressor";
import AdSlot from "@/components/AdSlot";
import ToolAbout from "@/components/ToolAbout";


export const metadata = {
  title: "Image Resizer & Compressor",
  description:
    "Resize and compress images online for free. Change image dimensions, reduce file size and download optimized JPG, PNG or WebP images.",
};

export default function Page() {
  return (
    <>
      <ImageResizer />
      <ToolAbout slug="image-resizer" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}