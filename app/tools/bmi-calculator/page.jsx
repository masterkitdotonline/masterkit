import BMICalculator from "./BMICalculator";
import AdSlot from "@/components/AdSlot";
import ToolAbout from "@/components/ToolAbout";


export const metadata = {
  title: "BMI Calculator",
  description:
    "Calculate your Body Mass Index with our free online BMI Calculator. Enter your height and weight to get your BMI result, category and healthy weight range.",
};

export default function Page() {
  return (
    <>
      <BMICalculator />
      <ToolAbout slug="bmi-calculator" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}