import EtsyProfitCalculator from "./EtsyProfitCalculator";
import AdSlot from "@/components/AdSlot";
import AdsterraBanner from "@/components/AdsterraBanner";
import ToolAbout from "@/components/ToolAbout";

export const metadata = {
  title: "Etsy Profit Calculator - Etsy Fees, Profit & Margin Calculator",
  description:
    "Free Etsy profit calculator. Add listing, 6.5% transaction, payment processing and Offsite Ads fees, subtract your costs, and see your real Etsy profit, margin, break-even price and the price you need for your target margin.",
  keywords: ["Etsy profit calculator", "Etsy fee calculator", "Etsy fees calculator", "Etsy seller fees", "Etsy profit margin calculator", "Etsy pricing calculator", "Etsy break even price", "Etsy transaction fee calculator", "Etsy offsite ads fee", "how much does Etsy take", "Etsy listing fee", "Etsy shop profit", "Etsy price calculator for handmade items", "Etsy revenue calculator", "Etsy seller calculator"],
  alternates: { canonical: "https://masterkit.online/tools/etsy-profit-calculator" },
  openGraph: {
    title: "Etsy Profit Calculator - Etsy Fees, Profit & Margin Calculator | MasterKit",
    description:
      "Free Etsy profit calculator. Add listing, 6.5% transaction, payment processing and Offsite Ads fees, subtract your costs, and see your real Etsy profit, margin, break-even price and the price you need for your target margin.",
    url: "https://masterkit.online/tools/etsy-profit-calculator",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <EtsyProfitCalculator />
      <AdsterraBanner />
      <ToolAbout slug="etsy-profit-calculator" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}
