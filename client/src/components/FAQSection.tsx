import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Will it work with my specific analysis workflow?",
    answer: "PixeSci™ learns your lab's unique procedures and adapts to your specific needs.",
  },
  {
    question: "What about data security?",
    answer: "Your data never leaves your computer. We take research-grade security seriously.",
  },
  {
    question: "How does PixeSci integrate with my existing software?",
    answer: "PixeSci™ works alongside your current tools, automating complex workflows through simple natural language commands.",
  },
  {
    question: "How much will it cost?",
    answer: "Early access users get special pricing. Get a quick demo to learn more.",
  },
  {
    question: "When will it be available?",
    answer: "Beta launches in Q1 2026. Get a quick demo to secure early access.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-background" data-testid="section-faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Frequently    Asked    Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-1">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border px-0"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
