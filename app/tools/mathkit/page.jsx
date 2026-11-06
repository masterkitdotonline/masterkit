import MathKit from "./MathKit";
import AdSlot from "@/components/AdSlot";
import ToolAbout from "@/components/ToolAbout";

export const metadata = {
  title: "MathKit - Free Online Math Toolkit & Scientific Calculator",
  description:
    "MathKit is a free all-in-one math toolkit: scientific calculator, powers and roots, GCD and LCM, prime factors, factorial, quadratic equation solver and statistics calculator.",
  keywords: ["MathKit","math toolkit","scientific calculator online","math calculator","GCD LCM calculator","HCF calculator","prime factorization calculator","quadratic equation solver","factorial calculator","square root calculator","cube root calculator","standard deviation calculator","mean median mode calculator","trigonometry calculator","log calculator"],
  alternates: { canonical: "https://masterkit.online/tools/mathkit" },
  openGraph: {
    title: "MathKit - Free Online Math Toolkit & Scientific Calculator | MasterKit",
    description:
      "MathKit is a free all-in-one math toolkit: scientific calculator, powers and roots, GCD and LCM, prime factors, factorial, quadratic equation solver and statistics calculator.",
    url: "https://masterkit.online/tools/mathkit",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <MathKit />
      <ToolAbout slug="mathkit" />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}
