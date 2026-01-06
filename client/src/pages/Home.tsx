import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ProblemSection } from "@/components/ProblemSection";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ToolsSection } from "@/components/ToolsSection";
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
      <StatsSection />
      <ProblemSection />
      <InteractiveDemo />
      <FeaturesSection />
      <ToolsSection />
      {/* TestimonialsSection hidden until real user feedback is collected */}
      {/* <TestimonialsSection /> */}
      <PilotSignupSection />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
