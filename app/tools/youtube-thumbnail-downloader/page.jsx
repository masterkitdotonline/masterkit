
import YouTubeThumbnailDownloader from "./YouTubeThumbnailDownloader";
import AdSlot from "@/components/AdSlot";
import ToolAbout from "@/components/ToolAbout";


export const metadata = {
  title: "YouTube Thumbnail Downloader",
  description:
    "Download YouTube video thumbnails in high quality with our free YouTube Thumbnail Downloader. Enter a video URL and get available thumbnail images instantly.",
};

export default function Page() {
  return (
    <>
      <YouTubeThumbnailDownloader />
      <ToolAbout slug="youtube-thumbnail-downloader" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}