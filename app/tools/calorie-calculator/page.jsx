import CalorieCalculator from "./CalorieCalculator";
import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "Calorie Calculator",
  description:
    "Calculate your estimated daily calorie needs based on age, gender, height, weight and activity level with MasterKit's free Calorie Calculator.",
  keywords: [
    "calorie calculator",
    "daily calorie calculator",
    "calorie needs calculator",
    "maintenance calories calculator",
    "TDEE calculator",
    "calories per day calculator",
  ],
  openGraph: {
    title: "Calorie Calculator | MasterKit",
    description:
      "Calculate your estimated daily calorie needs based on your personal information and activity level.",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <CalorieCalculator />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}