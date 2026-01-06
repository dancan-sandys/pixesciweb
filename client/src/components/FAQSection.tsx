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
    question: "Will it work with my specific analysis workflow?",
    answer: "Yes. PixeSci learns your lab's unique procedures and adapts to your specific needs. Whether you're using standard protocols or custom pipelines, our AI understands context and can be trained on your specific workflows.",
  },
  {
    question: "What about data security?",
    answer: "Your data never leaves your computer unless you explicitly choose cloud processing. We take research-grade security seriously with SOC 2 compliance, end-to-end encryption, and no data retention policies. Your proprietary research stays private.",
  },
  {
    question: "How does PixeSci integrate with my existing software?",
    answer: "PixeSci works alongside your current tools without requiring any changes to your existing setup. It communicates with software like FlowJo, Prism, Benchling, and 40+ others through their native APIs and automation interfaces.",
  },
  {
    question: "How much will it cost?",
    answer: "We offer flexible pricing based on lab size and usage. Early access users receive special founding member pricing with significant discounts. Schedule a demo to discuss pricing options tailored to your needs.",
  },
  {
    question: "When will it be available?",
    answer: "Our beta launches in Q1 2026. By joining the waitlist now, you'll get priority access, dedicated onboarding support, and the opportunity to shape the product with your feedback.",
  },
  {
    question: "Do I need any technical expertise to use PixeSci?",
    answer: "Not at all. PixeSci is designed for scientists, not programmers. You interact using natural language commands just like talking to a colleague. Say what you want to accomplish, and PixeSci handles the technical details.",
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
