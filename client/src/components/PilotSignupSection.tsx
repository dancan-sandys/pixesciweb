import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useMemo } from "react";

function FloatingOrbs() {
  const prefersReducedMotion = useReducedMotion();
  
  const orbs = useMemo(() => [
    { size: 300, x: -10, y: 20, duration: 25, delay: 0 },
    { size: 200, x: 90, y: 60, duration: 20, delay: 5 },
    { size: 150, x: 50, y: 80, duration: 22, delay: 3 },
  ], []);

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function PilotSignupSection() {
  return (
    <section className="relative py-24 bg-muted/30 overflow-hidden" data-testid="pilot-signup-section">
      <FloatingOrbs />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Limited Pilot Program
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Join Our Pilot Program
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be among the first to experience PixeSci — pilot participants get early access, priority support, and exclusive founding member pricing.
          </p>

          <div 
            className="w-full rounded-lg overflow-hidden"
            style={{ height: '500px' }}
            data-testid="typeform-embed"
          >
            <iframe
              src="https://form.typeform.com/to/k7NQu5WS"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="camera; microphone; autoplay; encrypted-media;"
              style={{ border: 'none' }}
              title="PixeSci Pilot Program Signup"
            />
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }
            }}
          >
            {["Early access", "Founding member pricing", "Priority support", "Shape the product"].map((benefit, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 border border-border/50"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(221, 83%, 56%, 0.1)" }}
              >
                <Check className="w-4 h-4 text-primary" />
                {benefit}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
