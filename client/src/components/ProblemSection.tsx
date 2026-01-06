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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ProblemSection() {
  return (
    <section className="py-24 bg-background" data-testid="section-problem">
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

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                x: 8,
                transition: { duration: 0.2 }
              }}
              className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-default"
            >
              <motion.div 
                className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mt-0.5"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <point.icon className="w-5 h-5 text-destructive/70 group-hover:text-destructive transition-colors duration-200" />
              </motion.div>
              <p className="text-base text-foreground leading-relaxed group-hover:text-foreground/90">
                {point.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
