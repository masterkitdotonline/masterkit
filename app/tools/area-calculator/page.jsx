import AreaCalculator from "./AreaCalculator";
import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "Area Calculator",
  description:
    "Calculate the area of rectangles, squares, circles, triangles and more with MasterKit's free online Area Calculator.",
};

export default function Page() {
  return (
    <>
      <AreaCalculator />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL} />
    </>
  );
}