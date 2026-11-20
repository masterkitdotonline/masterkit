
import ImageResizer from "./ImageResizer&Compressor";

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
      
    </>
  );
}