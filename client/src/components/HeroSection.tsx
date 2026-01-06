import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const CALENDAR_URL = "https://cal.com/pixesci/30min?user=pixesci&overlayCalendar=true";

function FloatingParticles() {
  const prefersReducedMotion = useReducedMotion();
  
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: 2 + (i % 5),
      x: (i * 5) % 100,
      y: (i * 7) % 100,
      duration: 15 + (i % 10),
      delay: i * 0.25,
    })), []
  );

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function AnimatedGradient() {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) {
    return (
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(221 83% 56% / 0.15) 0%, transparent 50%)",
        }}
      />
    );
  }
  
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none opacity-30"
      animate={{
        background: [
          "radial-gradient(circle at 20% 50%, hsl(221 83% 56% / 0.15) 0%, transparent 50%)",
          "radial-gradient(circle at 80% 50%, hsl(221 83% 56% / 0.15) 0%, transparent 50%)",
          "radial-gradient(circle at 50% 80%, hsl(221 83% 56% / 0.15) 0%, transparent 50%)",
          "radial-gradient(circle at 20% 50%, hsl(221 83% 56% / 0.15) 0%, transparent 50%)",
        ],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function HeroSection() {
  const scrollToSignupForm = () => {
    const signupSection = document.querySelector('[data-testid="signup-section"]');
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCalendar = () => {
    window.open(CALENDAR_URL, '_blank');
  };

  return (
    <section id="hero-section" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-background overflow-hidden">
      <FloatingParticles />
      <AnimatedGradient />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
              For Biotech & Pharma R&D Teams and Research Labs
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Stop    Fighting    Software.
            <br className="hidden md:block" />
            <span className="block mt-3">Start    Doing    Science.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            PixeSci is an AI-powered automation layer that helps researchers orchestrate complex imaging and analysis workflows across existing scientific software ecosystems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-6 min-h-12 font-semibold"
              onClick={scrollToSignupForm}
              data-testid="button-hero-create-account"
            >
              Create an account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 min-h-12 font-semibold"
              onClick={openCalendar}
              data-testid="button-hero-get-demo"
            >
              Get a demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
