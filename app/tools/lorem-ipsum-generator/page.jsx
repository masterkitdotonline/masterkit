import LoremIpsumGenerator from "./LoremIpsumGenerator";

export const metadata = {
  title: "Lorem Ipsum Generator",
  description:
    "Generate free Lorem Ipsum placeholder text online. Choose the number of paragraphs, sentences, or words and copy the generated text instantly.",

  keywords: [
    "lorem ipsum generator",
    "lorem ipsum",
    "dummy text generator",
    "placeholder text generator",
    "lorem ipsum generator online",
    "random text generator",
    "dummy text",
    "placeholder text",
  ],

  openGraph: {
    title: "Lorem Ipsum Generator | MasterKit",
    description:
      "Generate Lorem Ipsum placeholder text online for websites, designs, prototypes and development projects.",
    type: "website",
  },
};

export default function Page() {
  return <LoremIpsumGenerator />;
}