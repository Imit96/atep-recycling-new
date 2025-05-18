"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaggeredList } from "@/components/motion/staggered-list";

interface ProductsClientProps {
  materials: {
    category: string;
    items: string[];
    description: string;
    icon: string;
  }[];
}

export function ProductsClient({ materials }: ProductsClientProps) {
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
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold">PET Plastic Recycling</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          ATEP Recycling specializes in PET plastic recycling and processing
        </p>
      </motion.div>

      {/* Materials Grid */}
      <StaggeredList className="grid place-items-center">
        {materials.map((material) => (
          <div
            key={material.category}
            className="p-8 bg-background rounded-lg border space-y-4 max-w-2xl w-full"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{material.icon}</span>
              <h2 className="text-xl font-semibold">{material.category}</h2>
            </div>
            <p className="text-muted-foreground text-lg">{material.description}</p>
            <ul className="list-disc list-inside space-y-2 text-base">
              {material.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </StaggeredList>

      {/* CTA Section */}
      <motion.div
        className="text-center space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/collection-process">View Collection Process</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
