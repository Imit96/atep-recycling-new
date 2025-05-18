"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/motion/scroll-animation";
import { AnimatedHeading } from "@/components/motion/animated-text";

interface CertificationsClientProps {
  certifications: {
    name: string;
    type: string;
    issuer: string;
    description: string;
    validUntil: string;
    benefits: string[];
  }[];
}

export function CertificationsClient({ certifications }: CertificationsClientProps) {
  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <ScrollAnimation className="text-center space-y-4">
        <AnimatedHeading tag="h1" className="text-4xl font-bold">
          Our Certifications
        </AnimatedHeading>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
          }}
        >
          Industry recognitions that validate our commitment to quality and sustainability
        </motion.p>
      </ScrollAnimation>

      {/* Certifications Section */}
      <div className="grid gap-8">
        {certifications.map((cert, index) => (
          <ScrollAnimation 
            key={cert.name}
            delay={index * 0.1}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>{cert.name}</CardTitle>
                    <CardDescription>{cert.type}</CardDescription>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 text-sm bg-primary/10 text-primary rounded-full w-fit">
                    Valid until {cert.validUntil}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium">Issuing Organization</div>
                  <div>{cert.issuer}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Description</div>
                  <div className="text-muted-foreground">{cert.description}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Key Benefits</div>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                    {cert.benefits.map((benefit) => (
                      <motion.li 
                        key={benefit}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                        }}
                        viewport={{ once: true }}
                      >
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        ))}
      </div>

      {/* Industry Standards Section */}
      <ScrollAnimation className="bg-accent/50 rounded-lg p-8 space-y-6" direction="up">
        <AnimatedHeading tag="h2" className="text-2xl font-bold text-center">
          Our Commitment to Standards
        </AnimatedHeading>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Global Guidelines",
              description: "We adhere to international standards and best practices"
            },
            {
              title: "Rigorous Audits",
              description: "Regular third-party assessments ensure compliance"
            },
            {
              title: "Continuous Improvement",
              description: "Ongoing efforts to exceed industry benchmarks"
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title} 
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
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation className="text-center space-y-4">
        <AnimatedHeading tag="h2" className="text-2xl font-bold">
          Partner with a Certified Leader
        </AnimatedHeading>
        <p className="text-muted-foreground">
          Experience the difference of working with a certified recycling company
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
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/collection-process">Learn Our Process</Link>
          </Button>
        </motion.div>
      </ScrollAnimation>
    </div>
  );
}
