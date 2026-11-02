
import WordCounter from "./WordCounter";
import AdSlot from "@/components/AdSlot";


export const metadata = {
  title: "Word Counter",
  description:
    "Count words, characters, sentences, paragraphs and reading time with our free online Word Counter. Perfect for essays, articles, assignments and content writing.",
};

export default function Page() {
  return (
    <>
      <WordCounter />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}