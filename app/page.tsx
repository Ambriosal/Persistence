import { CtaSection } from "@/components/landing/CtaSection";
import { HonestSection } from "@/components/landing/HonestSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingNav } from "@/components/landing/LandingNav";
import { MemoryModel } from "@/components/landing/MemoryModel";
import { ProductWindow } from "@/components/landing/ProductWindow";
import { StatsRow } from "@/components/landing/StatsRow";

export default function Home() {
  return (
    <>
      <LandingNav />
      <LandingHero />
      <ProductWindow />
      <StatsRow />
      <HowItWorks />
      <MemoryModel />
      <HonestSection />
      <CtaSection />
      <LandingFooter />
    </>
  );
}
