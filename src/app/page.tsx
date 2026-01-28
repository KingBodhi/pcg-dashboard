import HeroSection from "@/components/hero/HeroSection";
import StatsSection from "@/components/stats/StatsSection";
import UseCasesSection from "@/components/usecases/UseCasesSection";
import StackOverview from "@/components/stack/StackOverview";
import FlagshipSection from "@/components/flagship/FlagshipSection";
import SecurityBadges from "@/components/security/SecurityBadges";
import CTASection from "@/components/cta/CTASection";

export default function Home() {
  return (
    <div>
      {/* Hero - Sovereign OS Introduction */}
      <HeroSection />

      {/* Stats Bar */}
      <StatsSection />

      {/* Use Cases - Personal, Home, Wearables, Enterprise */}
      <UseCasesSection />

      {/* Stack Overview - The 6 layers */}
      <StackOverview />

      {/* Flagship App - PCG Dashboard */}
      <FlagshipSection />

      {/* Security Badges */}
      <SecurityBadges />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
