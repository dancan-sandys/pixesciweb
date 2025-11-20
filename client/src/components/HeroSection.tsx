import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Microscope, Dna, BarChart3 } from "lucide-react";
import { LiveSignupCounter } from "./LiveSignupCounter";
import frustratedImage from "@assets/generated_images/Complex_software_interface_showing_frustration_0a50718a.png";
import happyImage from "@assets/generated_images/Scientific_AI_analysis_interface_f1e4b778.png";

export function HeroSection() {
  const handleJoinWaitlist = () => {
    console.log("Join Waitlist clicked - scrolling to form");
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero-section" className="relative py-32 md:py-40 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-6">
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              For Biotech & Pharma R&D Teams
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Stop    Fighting    Software.
            <br className="hidden md:block" />
            <span className="block mt-2">Start    Doing    Science.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            AI-powered platform that orchestrates your scientific software—FlowJo, Prism, Benchling, ImageJ—through simple natural language commands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 min-h-12 font-semibold"
              onClick={handleJoinWaitlist}
              data-testid="button-hero-join-waitlist"
            >
              Join the Waitlist
            </Button>
          </div>
          <LiveSignupCounter />
        </motion.div>

      </div>
    </section>
  );
}
