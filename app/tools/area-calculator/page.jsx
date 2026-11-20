import AreaCalculator from "./AreaCalculator";

import ToolAbout from "@/components/ToolAbout";

export const metadata = {
  title: "Area Calculator",
  description:
    "Calculate the area of rectangles, squares, circles, triangles and more with MasterKit's free online Area Calculator.",
};

export default function Page() {
  return (
    <>
      <AreaCalculator />
     
      <ToolAbout slug="area-calculator" />
      
    </>
  );
}