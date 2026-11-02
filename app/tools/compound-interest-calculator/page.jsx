
import CompoundInterestCalculator from "./CompoundInterestCalculator";
import AdSlot from "@/components/AdSlot";


export const metadata = {
  title: "Compound Interest Calculator",
  description:
    "Calculate compound interest and investment growth with our free online Compound Interest Calculator. Estimate future value, contributions and total interest.",
};

export default function Page() {
  return (
    <>
      <CompoundInterestCalculator />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}