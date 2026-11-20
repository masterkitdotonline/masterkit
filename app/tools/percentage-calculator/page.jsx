
import PercentageCalculator from "./PercentageCalculator";

import ToolAbout from "@/components/ToolAbout";


export const metadata = {
  title: "Percentage Calculator",
  description:
    "Calculate percentages quickly and easily with our free online Percentage Calculator. Find percentages, values and percentage-based results instantly.",
};

export default function Page() {
  return (
    <>
      <PercentageCalculator />
      
      <ToolAbout slug="percentage-calculator" />
     
    </>
  );
}