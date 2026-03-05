import HeroSection from "@/components/home/HeroSection";
import BrandOverviewCards from "@/components/home/BrandOverviewCards";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandOverviewCards />
      <StatsSection />
      <CTASection />
    </>
  );
}
