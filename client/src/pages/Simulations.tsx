import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Zap, ArrowRight, Play, RotateCcw } from "lucide-react";

const CALENDAR_URL = "https://cal.com/pixesci/30min?user=pixesci&overlayCalendar=true";

interface WorkflowStep {
  id: number;
  tool: string;
  action: string;
  duration: string;
  details: string;
}

interface Scenario {
  id: string;
  title: string;
  category: string;
  prompt: string;
  tools: string[];
  steps: WorkflowStep[];
  outcome: {
    timeSaved: string;
    automation: string;
    result: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: "flow-cytometry",
    title: "Flow Cytometry Analysis",
    category: "Data Analysis",
    prompt: "Analyze my flow cytometry FCS files, apply standard gating strategy, and sync the results to Benchling",
    tools: ["FlowJo", "Benchling"],
    steps: [
      { id: 1, tool: "PixeSci", action: "Parsing your request", duration: "0.3s", details: "Understanding intent and identifying required tools" },
      { id: 2, tool: "FlowJo", action: "Opening FCS files", duration: "2.1s", details: "Loading 24 sample files from experiment folder" },
      { id: 3, tool: "FlowJo", action: "Applying gating strategy", duration: "4.2s", details: "FSC/SSC → Live/Dead → CD3+ → CD4/CD8 subsets" },
      { id: 4, tool: "FlowJo", action: "Generating statistics", duration: "1.8s", details: "Calculating frequencies and MFI values" },
      { id: 5, tool: "Benchling", action: "Syncing results", duration: "1.5s", details: "Creating structured entries with linked data" },
      { id: 6, tool: "PixeSci", action: "Complete", duration: "0.2s", details: "All tasks finished successfully" },
    ],
    outcome: {
      timeSaved: "45 minutes → 10 seconds",
      automation: "24 samples analyzed with consistent gating",
      result: "Results automatically documented in Benchling ELN",
    },
  },
  {
    id: "molecular-docking",
    title: "Molecular Docking Study",
    category: "Computational",
    prompt: "Run docking simulations for my compound library against target protein and generate binding affinity plots in Prism",
    tools: ["Schrödinger", "Prism"],
    steps: [
      { id: 1, tool: "PixeSci", action: "Parsing your request", duration: "0.3s", details: "Identifying docking workflow requirements" },
      { id: 2, tool: "Schrödinger", action: "Preparing protein structure", duration: "3.2s", details: "Adding hydrogens, optimizing H-bonds, generating grid" },
      { id: 3, tool: "Schrödinger", action: "Processing ligand library", duration: "2.8s", details: "Preparing 150 compounds with LigPrep" },
      { id: 4, tool: "Schrödinger", action: "Running Glide docking", duration: "8.5s", details: "SP docking with flexible ligand sampling" },
      { id: 5, tool: "Schrödinger", action: "Extracting scores", duration: "1.2s", details: "Collecting docking scores and poses" },
      { id: 6, tool: "Prism", action: "Creating visualizations", duration: "2.4s", details: "Generating binding affinity scatter plots" },
      { id: 7, tool: "PixeSci", action: "Complete", duration: "0.2s", details: "Docking study finished with ranked compounds" },
    ],
    outcome: {
      timeSaved: "2 hours → 18 seconds",
      automation: "150 compounds docked and ranked",
      result: "Publication-ready figures generated in Prism",
    },
  },
  {
    id: "image-analysis",
    title: "Microscopy Image Quantitation",
    category: "Imaging",
    prompt: "Quantify cell counts and fluorescence intensity from my confocal images, segment nuclei and measure co-localization",
    tools: ["Imaris", "ImageJ"],
    steps: [
      { id: 1, tool: "PixeSci", action: "Parsing your request", duration: "0.3s", details: "Understanding imaging analysis requirements" },
      { id: 2, tool: "Imaris", action: "Loading image stack", duration: "4.1s", details: "Importing 3D confocal z-stack (512x512x40)" },
      { id: 3, tool: "Imaris", action: "Surface segmentation", duration: "5.2s", details: "Detecting and segmenting 847 nuclei" },
      { id: 4, tool: "ImageJ", action: "Intensity measurements", duration: "2.8s", details: "Measuring DAPI, GFP, and RFP channels" },
      { id: 5, tool: "ImageJ", action: "Co-localization analysis", duration: "3.1s", details: "Calculating Pearson's and Manders' coefficients" },
      { id: 6, tool: "PixeSci", action: "Exporting results", duration: "1.2s", details: "Generating CSV with per-cell measurements" },
      { id: 7, tool: "PixeSci", action: "Complete", duration: "0.2s", details: "Image analysis pipeline finished" },
    ],
    outcome: {
      timeSaved: "1.5 hours → 17 seconds",
      automation: "847 cells segmented and quantified",
      result: "Per-cell statistics exported with co-localization metrics",
    },
  },
  {
    id: "pk-modeling",
    title: "PK Simulation & Reporting",
    category: "PKPD",
    prompt: "Run PK simulations for my compound using the two-compartment model and generate a dose-response report",
    tools: ["PK Sim", "Prism"],
    steps: [
      { id: 1, tool: "PixeSci", action: "Parsing your request", duration: "0.3s", details: "Setting up PK simulation parameters" },
      { id: 2, tool: "PK Sim", action: "Loading compound data", duration: "1.8s", details: "Importing physicochemical properties" },
      { id: 3, tool: "PK Sim", action: "Building model", duration: "2.4s", details: "Configuring two-compartment IV bolus model" },
      { id: 4, tool: "PK Sim", action: "Running simulations", duration: "6.2s", details: "Simulating 5 dose levels (1-100 mg/kg)" },
      { id: 5, tool: "PK Sim", action: "Calculating PK parameters", duration: "1.5s", details: "AUC, Cmax, t½, clearance, Vd" },
      { id: 6, tool: "Prism", action: "Generating plots", duration: "2.1s", details: "Concentration-time curves and dose-response" },
      { id: 7, tool: "PixeSci", action: "Complete", duration: "0.2s", details: "PK report ready for review" },
    ],
    outcome: {
      timeSaved: "3 hours → 14 seconds",
      automation: "5 dose levels simulated with full PK analysis",
      result: "Complete PK report with publication-quality figures",
    },
  },
];

function WorkflowVisualizer({ scenario, isRunning, currentStep }: { scenario: Scenario; isRunning: boolean; currentStep: number }) {
  return (
    <div className="space-y-3">
      {scenario.steps.map((step, index) => {
        const isCompleted = currentStep > index;
        const isCurrent = currentStep === index;
        const isPending = currentStep < index;

        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className={`flex items-start gap-4 p-4 rounded-lg border transition-all duration-300 ${
                isCompleted
                  ? "bg-primary/5 border-primary/20"
                  : isCurrent
                  ? "bg-accent/10 border-accent/30"
                  : "bg-muted/30 border-border/50"
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {isCompleted ? (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                ) : isCurrent && isRunning ? (
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center animate-pulse">
                    <Zap className="w-4 h-4 text-accent-foreground" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">{index + 1}</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground">
                    {step.tool}
                  </span>
                  <span className={`text-sm font-medium ${isPending ? "text-muted-foreground" : ""}`}>
                    {step.action}
                  </span>
                </div>
                <p className={`text-sm ${isPending ? "text-muted-foreground/60" : "text-muted-foreground"}`}>
                  {step.details}
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {step.duration}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function SimulationRunner({ scenario }: { scenario: Scenario }) {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);

  const runSimulation = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setIsComplete(false);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= scenario.steps.length) {
        clearInterval(interval);
        setIsRunning(false);
        setIsComplete(true);
        setCurrentStep(scenario.steps.length);
      } else {
        setCurrentStep(step);
      }
    }, 800);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStep(-1);
    setIsComplete(false);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Your Prompt</h3>
          <Card className="p-4 bg-muted/30">
            <p className="text-sm italic">"{scenario.prompt}"</p>
          </Card>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Tools Used</h3>
          <div className="flex flex-wrap gap-2">
            {scenario.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {!isRunning && currentStep === -1 && (
            <Button onClick={runSimulation} className="gap-2" data-testid="button-run-simulation">
              <Play className="w-4 h-4" />
              Run Simulation
            </Button>
          )}
          {(isComplete || currentStep > -1) && !isRunning && (
            <Button variant="outline" onClick={resetSimulation} className="gap-2" data-testid="button-reset-simulation">
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          )}
          {isRunning && (
            <Button disabled className="gap-2">
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Running...
            </Button>
          )}
        </div>

        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Card className="p-6 border-primary/20 bg-primary/5">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  Workflow Complete
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="font-medium">Time Saved:</span>{" "}
                      <span className="text-muted-foreground">{scenario.outcome.timeSaved}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="font-medium">Automated:</span>{" "}
                      <span className="text-muted-foreground">{scenario.outcome.automation}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="font-medium">Result:</span>{" "}
                      <span className="text-muted-foreground">{scenario.outcome.result}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asChild className="gap-2" data-testid="button-try-workflow">
                    <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                      Try This Workflow With Us
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-4">Workflow Steps</h3>
        <WorkflowVisualizer scenario={scenario} isRunning={isRunning} currentStep={currentStep} />
      </div>
    </div>
  );
}

export default function Simulations() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0].id);
  const currentScenario = scenarios.find((s) => s.id === activeScenario) || scenarios[0];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              See PixeSci in Action
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore how PixeSci orchestrates your favorite biotech tools through simple natural language commands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <Tabs value={activeScenario} onValueChange={setActiveScenario}>
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-8">
                {scenarios.map((scenario) => (
                  <TabsTrigger
                    key={scenario.id}
                    value={scenario.id}
                    className="text-xs sm:text-sm"
                    data-testid={`tab-${scenario.id}`}
                  >
                    {scenario.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {scenarios.map((scenario) => (
                <TabsContent key={scenario.id} value={scenario.id}>
                  <Card className="p-6 md:p-8">
                    <div className="mb-6">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        {scenario.category}
                      </span>
                      <h2 className="text-2xl font-bold mt-1">{scenario.title}</h2>
                    </div>
                    <SimulationRunner scenario={scenario} />
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Workflows?</h3>
            <p className="text-muted-foreground mb-6">
              These simulations represent just a fraction of what PixeSci can do. Talk to us about your specific research needs.
            </p>
            <Button size="lg" asChild data-testid="button-simulations-cta">
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                Get a Quick Demo
              </a>
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
