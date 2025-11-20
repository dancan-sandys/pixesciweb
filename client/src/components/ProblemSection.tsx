import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MousePointer, BookOpen, Clock, DollarSign, RefreshCcw } from "lucide-react";

const painPoints = [
  {
    icon: MousePointer,
    title: "Switching between FlowJo, Prism, and Excel just to create one graph",
  },
  {
    icon: BookOpen,
    title: "Training new lab members on 10+ different software packages",
  },
  {
    icon: Clock,
    title: "Spending days manually moving data between Benchling and ImageJ",
  },
  {
    icon: DollarSign,
    title: "Expensive tools like Imaris and Schrödinger barely used",
  },
  {
    icon: RefreshCcw,
    title: "Repeating the same 20-click workflow every single day",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-muted/30" data-testid="section-problem">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            What's    Getting    in    Your    Way?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center mt-1">
                <div className="w-2 h-2 bg-muted-foreground/50 rounded-full" />
              </div>
              <p className="text-base text-foreground leading-relaxed">
                {point.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
