
import YouTubeThumbnailDownloader from "./YouTubeThumbnailDownloader";
import AdSlot from "@/components/AdSlot";


export const metadata = {
  title: "YouTube Thumbnail Downloader",
  description:
    "Download YouTube video thumbnails in high quality with our free YouTube Thumbnail Downloader. Enter a video URL and get available thumbnail images instantly.",
};

export default function Page() {
  return (
    <>
      <YouTubeThumbnailDownloader />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}