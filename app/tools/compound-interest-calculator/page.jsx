
import CompoundInterestCalculator from "./CompoundInterestCalculator";

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
      
      <ToolAbout slug="compound-interest-calculator" />
     
    </>
  );
}