import Features from "@/components/Features";
import Hero from "@/components/Hero";
import AdSlot from "@/components/AdSlot";
import AdsterraBanner from "@/components/AdsterraBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AdsterraBanner />
      {/* Optional AdSense slot (renders nothing until configured) */}
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} />
      <Features />
    </>
  );
}
