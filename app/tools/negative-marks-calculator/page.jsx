import NegativeMarksCalculator from "./NegativeMarksCalculator";
import AdSlot from "@/components/AdSlot";
import ToolAbout from "@/components/ToolAbout";

export const metadata = {
  title: "Negative Marks Calculator - Exam Score with Negative Marking",
  description:
    "Free negative marks calculator. Enter total, correct and wrong answers and choose 1/4, 1/3, 1/2 or custom negative marking to get your exact exam score, percentage and accuracy.",
  keywords: ["negative marks calculator","negative marking calculator","MCQ score calculator","exam score calculator","entry test marks calculator","NTS marks calculator","MDCAT marks calculator","NEET marks calculator","JEE marks calculator","quarter negative marking","1/3 negative marking","test result calculator"],
  alternates: { canonical: "https://masterkit.online/tools/negative-marks-calculator" },
  openGraph: {
    title: "Negative Marks Calculator - Exam Score with Negative Marking | MasterKit",
    description:
      "Free negative marks calculator. Enter total, correct and wrong answers and choose 1/4, 1/3, 1/2 or custom negative marking to get your exact exam score, percentage and accuracy.",
    url: "https://masterkit.online/tools/negative-marks-calculator",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <NegativeMarksCalculator />
      <ToolAbout slug="negative-marks-calculator" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}
