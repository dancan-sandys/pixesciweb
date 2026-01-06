import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";

interface Tool {
  name: string;
  description: string;
  category: string;
}

const tools: Tool[] = [
  { name: "FlowJo", description: "Flow cytometry analysis and gating", category: "Lab Data & Analysis" },
  { name: "GraphPad Prism", description: "Statistical graphing and analysis", category: "Lab Data & Analysis" },
  { name: "ImageJ", description: "Image processing and analysis", category: "Lab Data & Analysis" },
  { name: "CellProfiler", description: "Automated cell image analysis", category: "Lab Data & Analysis" },
  { name: "Imaris", description: "3D/4D microscopy visualization", category: "Lab Data & Analysis" },
  { name: "PyMOL", description: "Molecular visualization system", category: "Lab Data & Analysis" },
  { name: "Benchling", description: "Cloud biology software for R&D", category: "Molecular Biology & ELN" },
  { name: "SnapGene", description: "DNA cloning and visualization", category: "Molecular Biology & ELN" },
  { name: "Geneious Prime", description: "Molecular biology and NGS analysis", category: "Molecular Biology & ELN" },
  { name: "ChemDraw", description: "Chemical structure drawing", category: "Molecular Biology & ELN" },
  { name: "Labguru", description: "Electronic lab notebook", category: "Molecular Biology & ELN" },
  { name: "LabCollector", description: "LIMS and sample management", category: "Molecular Biology & ELN" },
  { name: "Chromeleon", description: "Chromatography data system", category: "Analytical Chemistry" },
  { name: "MassLynx", description: "Mass spectrometry software", category: "Analytical Chemistry" },
  { name: "SoftMax Pro", description: "Microplate reader analysis", category: "Analytical Chemistry" },
  { name: "OriginLab", description: "Data analysis and graphing", category: "Analytical Chemistry" },
  { name: "Xcalibur", description: "Mass spec data acquisition", category: "Analytical Chemistry" },
  { name: "CLC Genomics", description: "NGS data analysis platform", category: "Bioinformatics & Omics" },
  { name: "BaseSpace", description: "Illumina genomics cloud platform", category: "Bioinformatics & Omics" },
  { name: "Seurat", description: "Single-cell RNA-seq analysis", category: "Bioinformatics & Omics" },
  { name: "Cell Ranger", description: "10X Genomics analysis pipeline", category: "Bioinformatics & Omics" },
  { name: "GSEA", description: "Gene set enrichment analysis", category: "Bioinformatics & Omics" },
  { name: "Cytoscape", description: "Network visualization and analysis", category: "Bioinformatics & Omics" },
];

const categories = [
  { name: "Lab Data & Analysis", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { name: "Molecular Biology & ELN", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
  { name: "Analytical Chemistry", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
  { name: "Bioinformatics & Omics", color: "bg-green-500/10 text-green-500 border-green-500/20" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const toolVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

export function ToolsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredTools = selectedCategory
    ? tools.filter(t => t.category === selectedCategory)
    : tools;

  const displayedTools = showAll ? filteredTools : filteredTools.slice(0, 12);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat?.color || "bg-muted text-muted-foreground border-border";
  };

  return (
    <section className="py-24 bg-muted/30 border-t border-border/50" data-testid="section-tools">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-medium text-secondary mb-4">
            <Layers className="w-3.5 h-3.5" />
            Integrations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Works With Your Existing Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seamlessly orchestrate workflows across 50+ scientific software platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            data-testid="filter-all"
          >
            All Tools
          </Button>
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.name)}
              data-testid={`filter-${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category.name}
            </Button>
          ))}
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory || "all"}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-3"
            >
              {displayedTools.map((tool, index) => (
                <Tooltip key={`${tool.name}-${index}`}>
                  <TooltipTrigger asChild>
                    <motion.div
                      variants={toolVariants}
                      whileHover={{ 
                        scale: 1.08,
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium cursor-default border transition-all duration-200 shadow-sm hover:shadow-md ${getCategoryColor(tool.category)}`}
                      data-testid={`tool-${tool.name.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {tool.name}
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <p className="font-semibold mb-1">{tool.name}</p>
                    <p className="text-xs text-muted-foreground">{tool.description}</p>
                    <p className="text-xs text-primary mt-1">{tool.category}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredTools.length > 12 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8"
            >
              <Button
                variant="ghost"
                onClick={() => setShowAll(!showAll)}
                className="group"
                data-testid="button-show-more-tools"
              >
                {showAll ? (
                  <>
                    Show less
                    <ChevronUp className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  </>
                ) : (
                  <>
                    Show all {filteredTools.length} tools
                    <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a tool that's not listed?
          </p>
          <Button
            variant="outline"
            onClick={() => {
              const signupSection = document.querySelector('[data-testid="signup-section"]');
              if (signupSection) {
                signupSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            data-testid="button-request-integration"
          >
            Request an integration
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
