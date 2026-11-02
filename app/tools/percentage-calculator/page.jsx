
import PercentageCalculator from "./PercentageCalculator";
import AdSlot from "@/components/AdSlot";


export const metadata = {
  title: "Percentage Calculator",
  description:
    "Calculate percentages quickly and easily with our free online Percentage Calculator. Find percentages, values and percentage-based results instantly.",
};

export default function Page() {
  return (
    <>
      <PercentageCalculator />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}