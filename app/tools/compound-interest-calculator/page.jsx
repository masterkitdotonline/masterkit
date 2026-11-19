
import CompoundInterestCalculator from "./CompoundInterestCalculator";
import AdSlot from "@/components/AdSlot";
import AdsterraBanner from "@/components/AdsterraBanner";
import ToolAbout from "@/components/ToolAbout";


export const metadata = {
  title: "Compound Interest Calculator",
  description:
    "Calculate compound interest and investment growth with our free online Compound Interest Calculator. Estimate future value, contributions and total interest.",
};

export default function Page() {
  return (
    <>
      <CompoundInterestCalculator />
      <AdsterraBanner />
      <ToolAbout slug="compound-interest-calculator" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}