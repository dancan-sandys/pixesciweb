import { motion } from "framer-motion";
import { FileText, Download, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function LeadMagnetsSection() {
  const magnets = [
    {
      icon: Shield,
      title: "21 CFR Part 11 Compliance Checklist",
      description: "Complete checklist for evaluating lab software compliance with electronic records and signatures requirements.",
      downloadText: "Download Free Checklist",
      features: [
        "ALCOA+ data integrity requirements",
        "Electronic signature validation",
        "Audit trail specifications",
        "System access controls checklist"
      ]
    },
    {
      icon: FileText,
      title: "The Hidden Cost of Fragmented Lab Systems",
      description: "White paper revealing how disconnected CDS, LIMS, ELN, and QMS systems impact investigation time and compliance costs.",
      downloadText: "Get White Paper",
      features: [
        "Real cost analysis from 50+ labs",
        "Investigation time benchmarks",
        "ROI calculations for integration",
        "Regulatory risk assessment"
      ]
    },
    {
      icon: CheckCircle,
      title: "Air-Gapped AI Deployment Guide",
      description: "Technical guide for deploying AI systems in regulated environments without compromising IP protection or compliance.",
      downloadText: "Download Guide",
      features: [
        "BSL3/4 deployment considerations",
        "IP protection strategies", 
        "Validation documentation templates",
        "Security architecture blueprints"
      ]
    }
  ];

  const handleDownload = (title: string) => {
    // In a real implementation, this would trigger download or redirect to landing page
    // For now, we'll use the calendar URL as the CTA
    window.open("https://cal.com/pixesci/30min?user=pixesci&overlayCalendar=true", '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resources for Regulated Lab Operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get the compliance guides and frameworks that QC Directors and Lab IT Managers 
            use to evaluate and implement lab automation systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {magnets.map((magnet, index) => (
            <motion.div
              key={magnet.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <magnet.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-medium">FREE DOWNLOAD</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  {magnet.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {magnet.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3 text-foreground">What's included:</h4>
                  <ul className="space-y-2">
                    {magnet.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full group"
                  onClick={() => handleDownload(magnet.title)}
                >
                  {magnet.downloadText}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-lg">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">
              No spam. No sales calls. Just practical guidance for lab automation decisions.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}