"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/motion/scroll-animation";
import { AnimatedHeading } from "@/components/motion/animated-text";
import { StaggeredList } from "@/components/motion/staggered-list";

interface ReachInNigeriaClientProps {
  locations: {
    city: string;
    services: string[];
    active: boolean;
    address: string;
    openingSoon?: boolean;
  }[];
  partners: {
    name: string;
    location: string;
    type: string;
  }[];
}

export function ReachInNigeriaClient({ locations, partners }: ReachInNigeriaClientProps) {
  // Card hover effect
  const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <ScrollAnimation className="text-center space-y-4">
        <AnimatedHeading tag="h1" className="text-4xl font-bold">
          Our Reach in Nigeria
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
          ATEP Recycling provides sustainable waste management solutions across Nigeria
        </motion.p>
      </ScrollAnimation>

      {/* Map Section (Placeholder) */}
      <ScrollAnimation className="rounded-xl overflow-hidden" direction="up">
        <motion.div 
          className="bg-gradient-to-br from-accent/30 to-accent/10 dark:from-accent/20 dark:to-accent/5 p-8 text-center rounded-xl border border-accent/20 backdrop-blur-sm"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <div className="aspect-[16/9] flex items-center justify-center relative">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-4 opacity-10">
              {[...Array(18)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-primary/20 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                />
              ))}
            </div>
            
            <div className="relative space-y-6 max-w-md mx-auto">
              <div className="space-y-4">
                <motion.div
                  className="inline-block bg-primary/10 dark:bg-primary/20 rounded-full px-4 py-1 text-sm text-primary font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Coming Soon
                </motion.div>
                <motion.p 
                  className="text-lg text-foreground/80 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Interactive map integration to better serve you across Ondo State
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button asChild size="lg" variant="default" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    <span>Contact Us</span>
                    <span className="ml-2">→</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimation>

      {/* Locations Section */}
      <div className="space-y-8">
        <ScrollAnimation>
          <AnimatedHeading tag="h2" className="text-2xl font-bold text-center mb-8">
            Our Locations
          </AnimatedHeading>
        </ScrollAnimation>

        <StaggeredList className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <motion.div
              key={location.city}
              className={`border rounded-lg overflow-hidden ${
                location.active ? "bg-background" : "bg-muted/50"
              }`}
              initial="rest"
              whileHover="hover"
              variants={cardHover}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{location.city}</h3>
                  {location.openingSoon ? (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      Opening Soon
                    </span>
                  ) : location.active ? (
                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full">
                      Active
                    </span>
                  ) : (
                    <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-1 rounded-full">
                      Limited Service
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground">{location.address}</p>

                <div>
                  <h4 className="text-sm font-medium mb-2">Services Offered:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {location.services.map((service) => (
                      <li key={service} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 mr-1 text-green-600 dark:text-green-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggeredList>
      </div>

      {/* Partners Section */}
      <ScrollAnimation className="bg-accent/40 rounded-lg p-8" direction="up">
        <div className="space-y-6">
          <AnimatedHeading tag="h2" className="text-2xl font-bold text-center">
            Our Collection Partners
          </AnimatedHeading>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            We work with trusted partners across Nigeria to expand our collection network
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.name}
                className="p-4 bg-background rounded-lg border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5, 
                    delay: index * 0.1, 
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.location}</p>
                <p className="text-xs mt-1 text-primary">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Coverage Expansion Section */}
      <ScrollAnimation className="text-center space-y-6" direction="up">
        <AnimatedHeading tag="h2" className="text-2xl font-bold">
          Expanding Our Coverage
        </AnimatedHeading>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We are constantly growing our operations to reach more communities across Nigeria. 
          If we're not in your area yet, contact us to discuss potential service options.
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
          <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
            <Link href="/contact">Request Service In Your Area</Link>
          </Button>
        </motion.div>
      </ScrollAnimation>
    </div>
  );
}
