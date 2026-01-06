import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Quote, Users } from "lucide-react";
import phdImage from "@assets/generated_images/PhD_student_testimonial_portrait_a1074dc6.png";
import professorImage from "@assets/generated_images/Professor_testimonial_portrait_5853a0d4.png";
import managerImage from "@assets/generated_images/Facility_manager_testimonial_portrait_7996bfc5.png";

const testimonials = [
  {
    quote: "PixeSci gave me my evenings back. What used to take me all weekend now happens while I grab coffee.",
    author: "Dr. Sarah Chen",
    role: "Cell Biology PhD",
    institution: "Stanford",
    image: phdImage,
  },
  {
    quote: "My students can now focus on experimental design instead of fighting with software interfaces.",
    author: "Prof. Michael Rodriguez",
    role: "Principal Investigator",
    institution: "MIT",
    image: professorImage,
  },
  {
    quote: "We increased our core facility throughput by 300% without hiring anyone.",
    author: "Jennifer Kim",
    role: "Core Facility Manager",
    institution: "UCSF",
    image: managerImage,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
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

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background" data-testid="section-testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 text-xs font-medium text-success mb-4">
            <Users className="w-3.5 h-3.5" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Join Scientists Who've Made the Switch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how researchers are transforming their workflows with PixeSci
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              data-testid={`testimonial-${index}`}
            >
              <Card className="p-6 h-full flex flex-col relative group hover:border-primary/30 transition-colors duration-300">
                <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4" />
                
                <p className="text-foreground leading-relaxed mb-6 flex-1 italic relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <Avatar className="w-12 h-12 ring-2 ring-primary/10">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.institution}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-4 rounded-lg bg-muted/50 border border-border/50">
            <div className="text-center px-4">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-muted-foreground">Researchers waiting</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border" />
            <div className="text-center px-4">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-xs text-muted-foreground">Institutions</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border" />
            <div className="text-center px-4">
              <div className="text-2xl font-bold text-primary">Q1 2026</div>
              <div className="text-xs text-muted-foreground">Beta launch</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
