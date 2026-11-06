
import LoanCalculatorPage from "./LoanCalculator";
import AdSlot from "@/components/AdSlot";
import ToolAbout from "@/components/ToolAbout";


export const metadata = {
  title: "Loan Calculator",
  description:
    "Calculate loan payments, total interest and total repayment with our free online Loan Calculator. Estimate monthly payments based on loan amount, rate and term.",
};

export default function Page() {
  return (
    <>
      <LoanCalculatorPage />
      <ToolAbout slug="loan-calculator" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}