import PayPalFeeCalculator from "./PayPalFeeCalculator";

import ToolAbout from "@/components/ToolAbout";

export const metadata = {
  title: "PayPal Fee Calculator - Calculate PayPal Fees & Net Amount",
  description:
    "Free PayPal fee calculator. See how much PayPal charges per payment, what you keep after fees, or work backwards to find the exact amount to charge. Includes checkout, card, QR, international and currency conversion fees.",
  keywords: ["PayPal fee calculator", "PayPal fees calculator", "PayPal transaction fee calculator", "PayPal calculator", "how much does PayPal charge", "PayPal fees for sellers", "PayPal international fee", "PayPal currency conversion fee", "PayPal reverse fee calculator", "PayPal checkout fee 3.49% + 0.49", "calculate PayPal fees", "PayPal net amount calculator", "PayPal invoice fee", "PayPal goods and services fee", "PayPal business fees"],
  alternates: { canonical: "https://masterkit.online/tools/paypal-fee-calculator" },
  openGraph: {
    title: "PayPal Fee Calculator - Calculate PayPal Fees & Net Amount | MasterKit",
    description:
      "Free PayPal fee calculator. See how much PayPal charges per payment, what you keep after fees, or work backwards to find the exact amount to charge. Includes checkout, card, QR, international and currency conversion fees.",
    url: "https://masterkit.online/tools/paypal-fee-calculator",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <PayPalFeeCalculator />
    
      <ToolAbout slug="paypal-fee-calculator" />
      
    </>
  );
}
