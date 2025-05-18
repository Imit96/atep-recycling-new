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
import { AnimatedGrid } from "@/components/motion/animated-grid";

interface Partner {
  name: string;
  type: string;
  description: string;
  partnership: string;
}

interface AssociationsClientProps {
  partners: Partner[];
  certifications: string[];
}

export function AssociationsClient({ partners, certifications }: AssociationsClientProps) {
  // Animation variants for certification badges
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  };

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <ScrollAnimation>
        <div className="text-center space-y-4">
          <AnimatedHeading tag="h1" className="text-4xl font-bold">
            Our Associations & Partners
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
            Working together with leading organizations to advance sustainable practices in Nigeria
          </motion.p>
        </div>
      </ScrollAnimation>

      {/* Partners Grid */}
      <AnimatedGrid 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
        itemClassName=""
      >
        {partners.map((partner, index) => (
          <Card 
            key={partner.name}
            className="motion-safe:transition-all motion-safe:duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader>
              <CardTitle>{partner.name}</CardTitle>
              <CardDescription>{partner.type}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {partner.description}
              </p>
              <div>
                <h3 className="text-sm font-semibold mb-2">Partnership Focus</h3>
                <p className="text-sm text-muted-foreground">
                  {partner.partnership}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </AnimatedGrid>

      {/* Certifications Section */}
      <ScrollAnimation direction="up" className="w-full">
        <section className="bg-accent/50 rounded-lg p-8 text-center space-y-6">
          <AnimatedHeading tag="h2" className="text-2xl font-bold">
            Our Certifications
          </AnimatedHeading>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                custom={i}
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-background py-2 px-4 rounded-full shadow-sm border"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Call to Action */}
      <ScrollAnimation direction="up" delay={0.3}>
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-semibold">
            Interested in partnering with us?
          </h3>
          <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </ScrollAnimation>
    </div>
  );
}
