import BMICalculator from "./BMICalculator";

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
     
    </>
  );
}