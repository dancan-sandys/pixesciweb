import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToolInfo {
  name: string;
  description: string;
}

const toolCategories = [
  {
    category: "Lab Data & Analysis",
    tools: [
      { name: "FlowJo", description: "Flow cytometry analysis and gating" },
      { name: "GraphPad Prism", description: "Statistical graphing and analysis" },
      { name: "ImageJ", description: "Image processing and analysis" },
      { name: "CellProfiler", description: "Automated cell image analysis" },
      { name: "Imaris", description: "3D/4D microscopy visualization" },
      { name: "PyMOL", description: "Molecular visualization system" },
    ],
  },
  {
    category: "Molecular Biology & ELN",
    tools: [
      { name: "Benchling", description: "Cloud biology software for R&D" },
      { name: "SnapGene", description: "DNA cloning and visualization" },
      { name: "Geneious Prime", description: "Molecular biology and NGS analysis" },
      { name: "ChemDraw", description: "Chemical structure drawing" },
      { name: "Labguru", description: "Electronic lab notebook" },
      { name: "LabCollector", description: "LIMS and sample management" },
    ],
  },
  {
    category: "Analytical Chemistry",
    tools: [
      { name: "Chromeleon", description: "Chromatography data system" },
      { name: "MassLynx", description: "Mass spectrometry software" },
      { name: "SoftMax Pro", description: "Microplate reader analysis" },
      { name: "OriginLab", description: "Data analysis and graphing" },
      { name: "Xcalibur", description: "Mass spec data acquisition" },
      { name: "NMR/FTIR Tools", description: "Spectroscopy analysis software" },
    ],
  },
  {
    category: "Bioinformatics & Omics",
    tools: [
      { name: "CLC Genomics", description: "NGS data analysis platform" },
      { name: "BaseSpace", description: "Illumina genomics cloud platform" },
      { name: "Seurat", description: "Single-cell RNA-seq analysis" },
      { name: "Cell Ranger", description: "10X Genomics analysis pipeline" },
      { name: "GSEA", description: "Gene set enrichment analysis" },
      { name: "Cytoscape", description: "Network visualization and analysis" },
    ],
  },
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
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

export function ToolsSection() {
  const allTools = [
    "FlowJo", "Prism", "Benchling", "ImageJ", "SnapGene", "CellProfiler",
    "Chromeleon", "CLC Genomics", "BaseSpace", "Imaris", "ChemDraw", "Geneious",
    "MassLynx", "Seurat", "Cytoscape", "Cell Ranger", "PyMOL", "LabCollector",
  ];

  return (
    <section className="py-24 bg-muted/30" data-testid="section-tools">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Works    with    Your    Existing    Tools
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            FlowJo · Prism · Benchling · ImageJ · and 40+ more
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-3"
          >
            {allTools.map((tool, index) => (
              <motion.div
                key={index}
                variants={toolVariants}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="px-4 py-2 bg-background border border-border/50 rounded-lg text-sm text-muted-foreground cursor-default shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200"
                data-testid={`tool-${tool.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
