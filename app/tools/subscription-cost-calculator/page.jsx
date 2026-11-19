import SubscriptionCostCalculator from "./SubscriptionCostCalculator";
import AdSlot from "@/components/AdSlot";
import AdsterraBanner from "@/components/AdsterraBanner";
import ToolAbout from "@/components/ToolAbout";

export const metadata = {
  title: "Subscription Cost Calculator - Monthly & Yearly Subscription Total",
  description:
    "Free subscription cost calculator. Add Netflix, Spotify, apps, gym and more, then see what all your subscriptions cost per month, per year and over 5 and 10 years. Find out where your money really goes.",
  keywords: ["subscription cost calculator", "subscription calculator", "monthly subscription calculator", "subscription tracker", "how much do I spend on subscriptions", "yearly subscription cost", "recurring payments calculator", "subscription budget calculator", "Netflix cost calculator", "annual subscription calculator", "subscription expenses", "monthly bills calculator", "cancel subscriptions save money", "recurring expenses calculator", "streaming cost calculator"],
  alternates: { canonical: "https://masterkit.online/tools/subscription-cost-calculator" },
  openGraph: {
    title: "Subscription Cost Calculator - Monthly & Yearly Subscription Total | MasterKit",
    description:
      "Free subscription cost calculator. Add Netflix, Spotify, apps, gym and more, then see what all your subscriptions cost per month, per year and over 5 and 10 years. Find out where your money really goes.",
    url: "https://masterkit.online/tools/subscription-cost-calculator",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SubscriptionCostCalculator />
      <AdsterraBanner />
      <ToolAbout slug="subscription-cost-calculator" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}
