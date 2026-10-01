
import WordCounter from "./WordCounter";


export const metadata = {
  title: "Word Counter",
  description:
    "Count words, characters, sentences, paragraphs and reading time with our free online Word Counter. Perfect for essays, articles, assignments and content writing.",
};

export default function Page() {
  return <WordCounter />;
}