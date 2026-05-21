import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Clock, DollarSign, TrendingUp, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export function InvestigationROICalculator() {
  const [hoursPerInvestigation, setHoursPerInvestigation] = useState([4]);
  const [investigationsPerWeek, setInvestigationsPerWeek] = useState([3]);
  const [analystHourlyRate, setAnalystHourlyRate] = useState([85]);
  const [weeksPerYear] = useState(50); // Account for vacation/holidays

  // Calculations
  const currentTimePerWeek = hoursPerInvestigation[0] * investigationsPerWeek[0];
  const pixeSciTimePerWeek = 0.5 * investigationsPerWeek[0]; // 30 minutes vs 4+ hours
  const timeSavedPerWeek = currentTimePerWeek - pixeSciTimePerWeek;
  const annualTimeSaved = timeSavedPerWeek * weeksPerYear;
  const annualCostSavings = annualTimeSaved * analystHourlyRate[0];

  // Conservative ROI calculation based on typical first year cost (~$105K)
  const pixeSciCost = 105000; 
  const netROI = annualCostSavings - pixeSciCost;
  const roiPercent = ((annualCostSavings - pixeSciCost) / pixeSciCost * 100);

  const benefits = [
    {
      icon: Clock,
      metric: `${Math.round(annualTimeSaved)}`,
      unit: "hours saved annually",
      description: "Time analysts can focus on science, not data archaeology"
    },
    {
      icon: DollarSign, 
      metric: `$${Math.round(annualCostSavings).toLocaleString()}`,
      unit: "annual cost savings",
      description: "Based on analyst time redirected to higher-value work"
    },
    {
      icon: TrendingUp,
      metric: `${roiPercent > 0 ? '+' : ''}${Math.round(roiPercent)}%`,
      unit: "first-year ROI",
      description: roiPercent > 0 ? "Positive ROI achieved in year one" : "ROI achieved by year two"
    },
    {
      icon: CheckCircle,
      metric: `${Math.round(timeSavedPerWeek * 4.33)}`,
      unit: "hours saved monthly",
      description: "Equivalent to 3+ full investigation days per month"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your Investigation Time Savings
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how much time and money your lab could save by automating manual investigation workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Input Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Your Lab's Current State</h3>
              </div>

              <div className="space-y-8">
                {/* Hours per investigation */}
                <div>
                  <Label className="text-base font-medium mb-3 block">
                    Hours spent per investigation (manual cross-referencing)
                  </Label>
                  <div className="px-4">
                    <Slider
                      value={hoursPerInvestigation}
                      onValueChange={setHoursPerInvestigation}
                      max={12}
                      min={1}
                      step={0.5}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1 hour</span>
                      <span className="font-medium text-primary">
                        {hoursPerInvestigation[0]} hours
                      </span>
                      <span>12+ hours</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Time to trace samples, check lots, review protocols, and identify root cause
                  </p>
                </div>

                {/* Investigations per week */}
                <div>
                  <Label className="text-base font-medium mb-3 block">
                    Investigations per week
                  </Label>
                  <div className="px-4">
                    <Slider
                      value={investigationsPerWeek}
                      onValueChange={setInvestigationsPerWeek}
                      max={15}
                      min={1}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>1/week</span>
                      <span className="font-medium text-primary">
                        {investigationsPerWeek[0]}/week
                      </span>
                      <span>15+/week</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    OOS results, deviation investigations, failure analysis, etc.
                  </p>
                </div>

                {/* Analyst hourly rate */}
                <div>
                  <Label className="text-base font-medium mb-3 block">
                    Average analyst hourly cost
                  </Label>
                  <div className="px-4">
                    <Slider
                      value={analystHourlyRate}
                      onValueChange={setAnalystHourlyRate}
                      max={150}
                      min={50}
                      step={5}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>$50/hr</span>
                      <span className="font-medium text-primary">
                        ${analystHourlyRate[0]}/hr
                      </span>
                      <span>$150+/hr</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Includes salary, benefits, and overhead for QC analysts/scientists
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Current state */}
            <Card className="p-6 border-destructive/20 bg-destructive/5">
              <h4 className="font-semibold text-lg mb-4 text-destructive">
                Current Manual Process
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Weekly time spent</div>
                  <div className="font-semibold text-lg">{currentTimePerWeek} hours</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Annual cost</div>
                  <div className="font-semibold text-lg">
                    ${Math.round(currentTimePerWeek * weeksPerYear * analystHourlyRate[0]).toLocaleString()}
                  </div>
                </div>
              </div>
            </Card>

            {/* With PixeSci */}
            <Card className="p-6 border-primary/20 bg-primary/5">
              <h4 className="font-semibold text-lg mb-4 text-primary">
                With PixeSci Automation
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <div className="text-muted-foreground">Weekly time spent</div>
                  <div className="font-semibold text-lg">{pixeSciTimePerWeek} hours</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Reduction</div>
                  <div className="font-semibold text-lg text-primary">
                    {Math.round((1 - pixeSciTimePerWeek / currentTimePerWeek) * 100)}%
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Investigations completed in ~30 minutes with automated cross-system queries
              </p>
            </Card>

            {/* ROI Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="text-center p-4 bg-background rounded-lg border"
                >
                  <benefit.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground mb-1">
                    {benefit.metric}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground mb-2">
                    {benefit.unit}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-lg text-sm">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="font-medium">
              These calculations are based on real customer deployments
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}