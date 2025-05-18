"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/motion/scroll-animation";
import { AnimatedHeading } from "@/components/motion/animated-text";
import { StaggeredList } from "@/components/motion/staggered-list";

interface TermsSection {
  title: string;
  content: string[];
}

interface TermsAndConditionsClientProps {
  sections: TermsSection[];
}

export function TermsConditionsClient({ sections }: TermsAndConditionsClientProps) {
  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <div className="text-center space-y-4">
          <AnimatedHeading tag="h1" className="text-4xl font-bold">
            Terms and Conditions
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              transition: { delay: 0.3, duration: 0.5 }
            }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Please read these terms carefully before using our services
          </motion.p>
        </div>
      </ScrollAnimation>

      {/* Last Updated */}
      <ScrollAnimation delay={0.2}>
        <div className="text-center text-sm text-muted-foreground">
          Last Updated: May 2025
        </div>
      </ScrollAnimation>

      {/* Terms Content */}
      <ScrollAnimation>
        <Card className="motion-safe:transform motion-safe:transition-all motion-safe:duration-500 hover:shadow-lg">
          <CardContent className="p-6 space-y-8">
            {sections.map((section, sectionIndex) => (
              <ScrollAnimation key={section.title} delay={0.1 * sectionIndex}>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <div className="space-y-2">
                    <StaggeredList delay={0.2} staggerDelay={0.05}>
                      {section.content.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </StaggeredList>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimation>
    </div>
  );
}
