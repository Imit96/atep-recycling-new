"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/motion/scroll-animation";
import { AnimatedHeading } from "@/components/motion/animated-text";
import { StaggeredList } from "@/components/motion/staggered-list";

interface PolicySection {
  title: string;
  content: string[];
}

interface PrivacyPolicyClientProps {
  sections: PolicySection[];
}

export function PrivacyPolicyClient({ sections }: PrivacyPolicyClientProps) {
  // Animation variants for policy cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <div className="text-center space-y-4">
          <AnimatedHeading tag="h1" className="text-4xl font-bold">
            Privacy Policy
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
            Your privacy is important to us. Please read how we protect your data.
          </motion.p>
        </div>
      </ScrollAnimation>

      {/* Last Updated */}
      <ScrollAnimation delay={0.2}>
        <div className="text-center text-sm text-muted-foreground">
          Last Updated: May 2025
        </div>
      </ScrollAnimation>

      {/* Privacy Policy Content */}
      <ScrollAnimation>
        <Card className="overflow-hidden">
          <CardContent className="p-6 space-y-8">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <div className="space-y-2">
                  <StaggeredList delay={0.15} staggerDelay={0.05}>
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
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </ScrollAnimation>
    </div>
  );
}
