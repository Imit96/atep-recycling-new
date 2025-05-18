"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/motion/scroll-animation";
import { AnimatedHeading } from "@/components/motion/animated-text";
import { StaggeredList } from "@/components/motion/staggered-list";

interface MissionVisionClientProps {
  coreValues: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export function MissionVisionClient({ coreValues }: MissionVisionClientProps) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="container py-16 space-y-16">
      {/* Mission Section */}
      <ScrollAnimation className="text-center space-y-6">
        <AnimatedHeading tag="h1" className="text-4xl font-bold">
          Our Mission & Vision
        </AnimatedHeading>
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To lead Nigeria&apos;s transition to sustainable waste management through
              innovative recycling solutions while educating and empowering
              communities to make environmentally conscious decisions.
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To be Nigeria&apos;s foremost recycling company, setting industry
              standards for sustainable practices and creating a cleaner,
              greener future for generations to come.
            </p>
          </motion.div>
        </div>
      </ScrollAnimation>

      {/* Core Values Section */}
      <section className="space-y-8">
        <ScrollAnimation>
          <AnimatedHeading tag="h2" className="text-3xl font-bold text-center">
            Our Core Values
          </AnimatedHeading>
        </ScrollAnimation>
        
        <StaggeredList className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="p-6 bg-background rounded-lg border space-y-4 h-full"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl">{value.icon}</span>
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </StaggeredList>
      </section>

      {/* Impact Section */}
      <ScrollAnimation className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl p-12 space-y-8">
        <AnimatedHeading tag="h2" className="text-2xl font-bold text-center">
          Our Impact
        </AnimatedHeading>
        
        <div className="flex justify-center">
          <ScrollAnimation 
            className="text-center space-y-4"
            direction="up"
          >
            <motion.div 
              className="text-6xl font-bold text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              viewport={{ once: true }}
            >
              1000+
            </motion.div>
            <p className="text-xl text-muted-foreground font-medium">Tons of Waste Recycled</p>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation className="text-center space-y-4">
        <AnimatedHeading tag="h2" className="text-2xl font-bold">
          Join Us in Making a Difference
        </AnimatedHeading>
        <p className="text-muted-foreground">
          Be part of our mission to create a sustainable future
        </p>
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg">
            <Link href="/contact">Partner With Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/collection-process">Learn How It Works</Link>
          </Button>
        </motion.div>
      </ScrollAnimation>
    </div>
  );
}