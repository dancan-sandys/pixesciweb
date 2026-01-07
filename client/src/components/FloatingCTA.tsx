import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      const scrollY = window.scrollY;
      
      setIsVisible(scrollY > heroHeight);
      setShowScrollTop(scrollY > window.innerHeight * 2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSignup = () => {
    const signupSection = document.querySelector('[data-testid="signup-section"]');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-2"
        >
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Button
                size="icon"
                variant="outline"
                onClick={scrollToTop}
                className="rounded-full shadow-lg bg-background/95 backdrop-blur-sm"
                data-testid="button-scroll-top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </motion.div>
          )}
          
          <Button
            onClick={scrollToSignup}
            className="shadow-lg rounded-full px-6 group"
            data-testid="button-floating-cta"
          >
            Get Early Access
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
