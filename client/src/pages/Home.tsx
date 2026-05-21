import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { StatsSection } from "@/components/StatsSection";
import { ProblemSection } from "@/components/ProblemSection";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { FeaturesSection } from "@/components/FeaturesSection";
import { RegulatoryBenefitsSection } from "@/components/RegulatoryBenefitsSection";
import { InvestigationROICalculator } from "@/components/InvestigationROICalculator";
import { ToolsSection } from "@/components/ToolsSection";
import { LeadMagnetsSection } from "@/components/LeadMagnetsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PilotSignupSection } from "@/components/PilotSignupSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialProofSection />
      <StatsSection />
      <ProblemSection />
      <InteractiveDemo />
      <FeaturesSection />
      {/* RegulatoryBenefitsSection hidden to protect IP details */}
      {/* <RegulatoryBenefitsSection /> */}
      <InvestigationROICalculator />
      <ToolsSection />
      <LeadMagnetsSection />
      {/* TestimonialsSection hidden until real user feedback is collected */}
      {/* <TestimonialsSection /> */}
      <PilotSignupSection />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
