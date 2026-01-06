import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageSquare, RefreshCw, FileText, Users, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Credibility and Authority",
    description: "Professional AI that understands biotech workflows and delivers publication-ready results your team can trust.",
  },
  {
    icon: RefreshCw,
    title: "Clarity from Complexity",
    description: "Transform complex multi-tool workflows into simple natural language commands that anyone on your team can use.",
  },
  {
    icon: Zap,
    title: "Speed to Market",
    description: "Accelerate research timelines from weeks to hours by automating data pipelines across FlowJo, Prism, Benchling, and more.",
  },
  {
    icon: Lock,
    title: "Research-Grade Security",
    description: "Enterprise security with SOC 2 compliance ensures your proprietary research data stays private and protected.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background" data-testid="section-features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Built    for    How    Scientists    Actually    Work
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <motion.div 
                className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mb-4"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
