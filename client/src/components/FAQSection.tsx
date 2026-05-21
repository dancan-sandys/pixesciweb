import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDAR_URL = "https://cal.com/pixesci/30min?user=pixesci&overlayCalendar=true";

const faqs = [
  {
    question: "Is PixeSci 21 CFR Part 11 compliant?",
    answer: "Yes. PixeSci is built from the ground up for regulated environments with 21 CFR Part 11 compliance, ALCOA+ data integrity, electronic signatures, and complete audit trails. Every action creates compliant documentation automatically.",
  },
  {
    question: "Can PixeSci be deployed air-gapped?",
    answer: "Absolutely. PixeSci is designed for on-premises, air-gapped deployment within your network. Patient data, IP, and proprietary information never leave your environment. No cloud dependencies are required for operation.",
  },
  {
    question: "How does it handle electronic signatures and audit trails?",
    answer: "Electronic signatures and audit trails are core to PixeSci's architecture, not add-ons. Every workflow step, data transfer, and decision is automatically logged with user identification, timestamps, and full traceability for regulatory review.",
  },
  {
    question: "What happens during FDA audits?",
    answer: "PixeSci generates audit-ready documentation automatically. Auditors can trace every result back through all connected systems with complete provenance. Our pre-submission review models (roadmap) will flag potential issues before they reach auditors.",
  },
  {
    question: "How does PixeSci integrate with our CDS, LIMS, ELN, and QMS?",
    answer: "PixeSci connects to your existing systems through validated APIs and connectors. We support major platforms like Empower, LabWare, Benchling, Qualio, and others. No changes to your current validated systems are required.",
  },
  {
    question: "What about validation and change control?",
    answer: "PixeSci includes validation documentation templates and change control workflows. We provide IQ/OQ/PQ protocols, validation master plans, and ongoing change documentation to support your GxP requirements.",
  },
  {
    question: "How long does deployment take in a GxP environment?",
    answer: "Typical deployment in regulated environments takes 2-3 months including validation activities. We provide dedicated validation support, pre-built documentation templates, and experienced GxP deployment specialists.",
  },
  {
    question: "Can it work with BSL3/4 lab requirements?",
    answer: "Yes. PixeSci is designed for high-security environments including BSL3/4 facilities. Air-gapped deployment, local AI models, and security controls meet the strictest containment and IP protection requirements.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function FAQSection() {
  return (
    <section className="py-24 bg-background border-t border-border/50" data-testid="section-faq" id="section-faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about PixeSci
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-5 bg-card/50 data-[state=open]:bg-card data-[state=open]:border-primary/20 transition-all duration-300"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 hover:text-primary transition-colors duration-200 gap-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl bg-muted/50 border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">Still have questions?</p>
                <p className="text-xs text-muted-foreground">Our team is here to help</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                Schedule a call
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
