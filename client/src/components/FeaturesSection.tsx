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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
