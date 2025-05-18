"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/motion/scroll-animation";
import { AnimatedHeading } from "@/components/motion/animated-text";
import { StaggeredList } from "@/components/motion/staggered-list";

interface CollectionProcessClientProps {
  steps: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export function CollectionProcessClient({ steps }: CollectionProcessClientProps) {
  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <ScrollAnimation className="text-center space-y-6">
        <AnimatedHeading tag="h1" className="text-4xl font-bold">
          Our Collection Process
        </AnimatedHeading>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.6, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2
            }
          }}
        >
          We make recycling simple and efficient with our streamlined collection process
        </motion.p>
      </ScrollAnimation>

      {/* Process Steps Section */}
      <div className="space-y-12">
        <StaggeredList className="space-y-16" staggerDelay={0.2}>
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="grid md:grid-cols-[1fr_3fr] gap-8 items-start"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl mb-3"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "var(--primary)",
                    color: "white",
                    transition: { duration: 0.2 } 
                  }}
                >
                  {step.icon}
                </motion.div>
                <div className="text-2xl font-bold">Step {index + 1}</div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">{step.title}</h2>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </StaggeredList>
      </div>

      {/* Requirements Section */}
      <ScrollAnimation className="bg-accent/50 rounded-lg p-8" direction="up">
        <div className="space-y-6">
          <AnimatedHeading tag="h2" className="text-2xl font-bold text-center">
            Material Requirements
          </AnimatedHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Clean & Dry",
                description: "Materials should be free from food residue and moisture"
              },
              {
                title: "Properly Sorted",
                description: "Different materials should be separated by category"
              },
              {
                title: "Quantity Guidelines",
                description: "Minimum quantities apply for certain collection services"
              }
            ].map((req, index) => (
              <motion.div 
                key={req.title} 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold">{req.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {req.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Equipment Section */}
      <div className="space-y-8">
        <ScrollAnimation>
          <AnimatedHeading tag="h2" className="text-2xl font-bold text-center">
            Our Collection Equipment
          </AnimatedHeading>
        </ScrollAnimation>
        <div className="grid sm:grid-cols-2 gap-8">
          {[
            {
              title: "Collection Vehicles",
              description: "Modern trucks specially designed for efficient waste collection",
              image: "🚚"
            },
            {
              title: "Sorting Equipment",
              description: "Advanced technology for accurate material separation",
              image: "⚙️"
            }
          ].map((item, index) => (
            <ScrollAnimation 
              key={item.title} 
              className="flex flex-col items-center bg-background rounded-lg p-6 border text-center"
              delay={index * 0.2}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="text-6xl mb-4">{item.image}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <ScrollAnimation className="text-center space-y-6">
        <AnimatedHeading tag="h2" className="text-2xl font-bold">
          Ready to Start Recycling?
        </AnimatedHeading>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Schedule a collection today or contact us to learn more about our services
        </p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg">
            <Link href="/contact">Schedule Collection</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View Accepted Materials</Link>
          </Button>
        </motion.div>
      </ScrollAnimation>
    </div>
  );
}