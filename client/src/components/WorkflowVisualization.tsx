import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const workflows = [
  {
    name: "Flow Cytometry Pipeline",
    steps: ["FlowJo", "Prism", "Benchling"],
    bgColor: "bg-[#3B9AFF]",
  },
  {
    name: "Image Analysis",
    steps: ["ImageJ", "CellProfiler", "Excel"],
    bgColor: "bg-[#E377FF]",
  },
  {
    name: "Genomics Workflow",
    steps: ["BaseSpace", "CLC Genomics", "Cytoscape"],
    bgColor: "bg-[#2DD881]",
  },
];

export function WorkflowVisualization() {
  return (
    <section className="py-20 bg-background" data-testid="section-workflow-viz">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Multi-Tool Orchestration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch PixeSci™ connect your tools automatically
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {workflows.map((workflow, workflowIdx) => (
            <motion.div
              key={workflowIdx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: workflowIdx * 0.2 }}
              data-testid={`workflow-${workflowIdx}`}
            >
              <div className="flex items-center gap-2 mb-8">
                <h3 className="text-xl font-semibold text-foreground">{workflow.name}</h3>
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {workflow.steps.map((step, stepIdx) => (
                  <div key={stepIdx} className="flex items-center gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: workflowIdx * 0.2 + stepIdx * 0.3 }}
                      className={`px-8 py-4 rounded-lg ${workflow.bgColor} text-white font-semibold text-base shadow-md min-w-[160px] text-center`}
                    >
                      {step}
                    </motion.div>

                    {stepIdx < workflow.steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: workflowIdx * 0.2 + stepIdx * 0.3 + 0.15 }}
                      >
                        <ArrowRight className="w-8 h-8 text-muted-foreground" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center p-6 bg-primary/5 rounded-md border border-primary/20 max-w-3xl mx-auto"
        >
          <p className="text-lg">
            <span className="font-semibold text-primary">One natural language command</span> replaces hours of manual data transfer between tools
          </p>
        </motion.div>
      </div>
    </section>
  );
}
