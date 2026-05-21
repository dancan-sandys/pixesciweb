import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileSearch, Database, RefreshCcw, Target } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "\"When our plate reader shows unexpected results, I spend 4+ hours manually checking reagent lots, analyst records, and calibration logs.\"",
    description: "Investigation time should be minutes, not half your day.",
  },
  {
    icon: FileSearch,
    title: "\"Every FDA audit means weeks of manually reconstructing what happened across our CDS, LIMS, ELN, and QMS.\"",
    description: "Audit trails should be automatic, not archaeological expeditions.",
  },
  {
    icon: Database,
    title: "\"I can't ask simple questions like 'show me every batch where lot B17 was used' without opening 4 different systems.\"", 
    description: "Your lab data should be queryable in plain English.",
  },
  {
    icon: AlertTriangle,
    title: "\"Transcription errors between our CDS and LIMS have caused three batch failures this month.\"",
    description: "Manual data transfer introduces human error into critical processes.",
  },
  {
    icon: RefreshCcw,
    title: "\"QC review takes 3 days because approvers have to piece together context from disconnected systems.\"",
    description: "Approval workflows should have complete context, not require detective work.",
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
    <section className="py-16 bg-background border-t border-border/50" data-testid="section-problem">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            The Hidden Cost of Fragmented Lab Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            QC Directors and Lab Managers in regulated environments tell us these stories every day. 
            Sound familiar?
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-destructive/30 hover:shadow-lg hover:shadow-destructive/5 transition-all duration-300 cursor-default"
              data-testid={`problem-${index}`}
            >
              <motion.div 
                className="flex-shrink-0 w-11 h-11 rounded-lg bg-destructive/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <point.icon className="w-5 h-5 text-destructive/70 group-hover:text-destructive transition-colors duration-200" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-destructive/90 transition-colors duration-200">
                  {point.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-primary/5 border border-primary/20">
            <Target className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-foreground font-medium">
              PixeSci connects every system into one audit-ready workflow engine
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
