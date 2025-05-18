"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/motion/scroll-animation";
import { SplitText, AnimatedHeading } from "@/components/motion/animated-text";
import { AnimatedGrid } from "@/components/motion/animated-grid";

export function HomeClient() {
  // Hero section animation variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Stats animation
  const countUp = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 15,
        delay: 0.3
      }
    },
  };

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex flex-col items-center text-center gap-8 md:items-start md:text-left"
            variants={heroItemVariants}
          >
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              <SplitText 
                text="Atep recyclers turning waste into worth" 
                delay={0.5}
                wordClassName="inline-block mr-[0.25em]"
              />
            </h1>
            <motion.p 
              className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
              variants={heroItemVariants}
            >
              Atep&apos;s mission is to drive a cleaner future through sustainable PET (polyethylene terephthalate) waste recovery
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={heroItemVariants}
            >
              <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
                <Link href="/mission-vision-values">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={heroItemVariants}
            className="rounded-lg overflow-hidden"
          >
            {/* Image Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg md:h-96"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="container py-16 bg-accent/50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollAnimation className="space-y-4">
            <AnimatedHeading tag="h2" className="text-3xl font-bold">
              About ATEP Recycling
            </AnimatedHeading>
            <p className="text-gray-500 dark:text-gray-400">
              All Trades Eco Power Ltd (ATEP) Recyclers is a Nigerian recycling business that 
              specializes in the processing of plastic waste, specifically Polyethylene 
              terephthalate (PET) bottles. ATEP recyclers, founded in 2024, is located in 
              Akure, Ondo State. The business is committed to environmental sustainability 
              and economic growth while playing a major role in promoting efficient waste 
              management.
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1">
            {[
              { title: "Tons of Plastic Recycled", value: "1000+" }
            ].map((stat, index) => (
              <ScrollAnimation 
                key={index} 
                className="p-8 bg-background rounded-2xl shadow-lg text-center max-w-[500px] mx-auto hover:shadow-xl transition-shadow duration-300" 
                delay={index * 0.1}
              >
                <motion.p 
                  className="text-7xl font-bold text-primary mb-4"
                  variants={countUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-xl text-muted-foreground font-medium tracking-wide">{stat.title}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-16">
        <ScrollAnimation className="text-center max-w-3xl mx-auto mb-12">
          <AnimatedHeading tag="h2" className="text-3xl font-bold mb-4">
            Our Services
          </AnimatedHeading>
          <p className="text-gray-500 dark:text-gray-400">
            We offer a comprehensive range of recycling services to help businesses and
            communities achieve their sustainability goals.
          </p>
        </ScrollAnimation>

        <AnimatedGrid columns={3} gap={6} className="mb-8">
          {[
            {
              title: "Plastic Collection",
              description: "We collect various types of plastic waste from businesses and communities."
            },
            {
              title: "Sorting & Processing",
              description: "Our advanced sorting technology ensures efficient processing of all materials."
            },
            {
              title: "Recycled Products",
              description: "We transform recycled materials into new, sustainable products."
            },
            {
              title: "Waste Audits",
              description: "Our experts analyze your waste stream to identify recycling opportunities."
            },
            {
              title: "Community Outreach",
              description: "Educational programs to raise awareness about recycling practices."
            },
            {
              title: "Business Partnerships",
              description: "Custom recycling programs tailored to your company's needs."
            }
          ].map((service, index) => (
            <div key={index} className="p-6 bg-background rounded-lg border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </AnimatedGrid>
      </section>

      {/* Call to Action */}
      <ScrollAnimation className="container py-16 text-center">
        <AnimatedHeading tag="h2" className="text-3xl font-bold mb-4">
          Ready to Make a Difference?
        </AnimatedHeading>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Join us in our mission to create a sustainable future through innovative recycling solutions.
          Contact our team today to learn how we can help you achieve your environmental goals.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </motion.div>
      </ScrollAnimation>
    </div>
  );
}
