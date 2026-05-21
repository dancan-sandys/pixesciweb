import { motion } from "framer-motion";
import { Shield, CheckCircle, Award } from "lucide-react";

export function SocialProofSection() {
  const credentials = [
    {
      icon: Shield,
      title: "21 CFR Part 11",
      subtitle: "Compliant from day one"
    },
    {
      icon: CheckCircle,
      title: "ALCOA+ Ready",
      subtitle: "Audit trails built-in"
    },
    {
      icon: Award,
      title: "GxP Validated",
      subtitle: "BSL3/4 environments"
    }
  ];

  const customers = [
    {
      name: "Barroso Lab",
      type: "Research Institution",
      logo: "/api/placeholder/120/60" // Placeholder for actual logo
    },
    {
      name: "NSCI",
      type: "Biotech Company", 
      logo: "/api/placeholder/120/60" // Placeholder for actual logo
    },
    {
      name: "Albany Medical College",
      type: "Academic Medical Center",
      logo: "/api/placeholder/120/60" // Placeholder for actual logo
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Regulatory Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold mb-8 text-foreground">
            Built for Regulated Environments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-background rounded-lg border border-border"
              >
                <credential.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-1">{credential.title}</h3>
                <p className="text-muted-foreground text-sm">{credential.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-lg font-medium mb-8 text-muted-foreground">
            Trusted by Leading Research Institutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-background/60 rounded-lg border border-border/50 hover:border-border transition-colors"
              >
                {/* Placeholder for logo - replace with actual logos when available */}
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center mb-3">
                  <span className="text-xs font-medium text-muted-foreground">
                    {customer.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h4 className="font-medium text-foreground">{customer.name}</h4>
                <p className="text-xs text-muted-foreground">{customer.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              Air-gapped deployment • IP never leaves your network
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}