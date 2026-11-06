import DiscountCalculator from "./DiscountCalculator";
import AdSlot from "@/components/AdSlot";
import ToolAbout from "@/components/ToolAbout";

export const metadata = {
  title: "Discount Calculator",
  description:
    "Calculate discounts, final prices and savings instantly with MasterKit's free online Discount Calculator.",
  keywords: [
    "discount calculator",
    "discount percentage calculator",
    "sale price calculator",
    "percentage discount calculator",
    "price after discount calculator",
    "savings calculator",
  ],
  openGraph: {
    title: "Discount Calculator | MasterKit",
    description:
      "Calculate sale prices, discount amounts and total savings quickly with our free Discount Calculator.",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <DiscountCalculator />
      <ToolAbout slug="discount-calculator" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}