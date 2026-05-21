import { motion } from "framer-motion";
import { Shield, Database, FileCheck, Clock, Lock, Search } from "lucide-react";

export function RegulatoryBenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "21 CFR Part 11 Compliant",
      description: "Electronic records and signatures built into the core architecture, not bolted on afterward.",
      features: ["ALCOA+ data integrity", "Electronic signatures", "Audit trail automation"]
    },
    {
      icon: FileCheck,
      title: "Audit-Ready Records",
      description: "Every action creates compliant documentation automatically. No manual record-keeping required.",
      features: ["Automatic evidence trails", "Traceable workflows", "Regulatory submission packages"]
    },
    {
      icon: Lock,
      title: "Air-Gapped Security", 
      description: "Deploy entirely within your network. Patient data and IP never leave your environment.",
      features: ["On-premises deployment", "No cloud dependencies", "IP protection guaranteed"]
    },
    {
      icon: Search,
      title: "Investigation Automation",
      description: "Turn 4-hour manual investigations into 2-minute automated queries across all systems.",
      features: ["Cross-system correlation", "Root cause analysis", "Pattern detection"]
    },
    {
      icon: Clock,
      title: "Faster Validation",
      description: "Reusable validation templates and pre-built workflows reduce deployment time.",
      features: ["Template library", "Validation documentation", "Compliance checklists"]
    },
    {
      icon: Database,
      title: "Data Integrity",
      description: "Automatic ALCOA+ compliance with complete traceability and error prevention.",
      features: ["Data lineage tracking", "Version control", "Change documentation"]
    }
  ];

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
            Regulation-First Architecture
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            PixeSci isn't just compliant—it's built from the ground up for regulated environments. 
            Audit trails, validation, and security aren't add-ons, they're foundational.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg mr-3">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {benefit.description}
              </p>
              
              <ul className="space-y-2">
                {benefit.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Call-out box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-3">
            Pre-Submission Review Models (Roadmap)
          </h3>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            AI models trained on FDA guidance and published 483 findings will flag potential 
            issues in your reports before they reach an auditor.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
            <FileCheck className="w-4 h-4" />
            Coming 2025: AI-powered compliance review
          </div>
        </motion.div>
      </div>
    </section>
  );
}