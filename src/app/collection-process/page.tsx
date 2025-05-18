import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Collection Process | ATEP Recycling",
  description: "Learn about ATEP Recycling's efficient waste collection and processing system",
};

export default function CollectionProcess() {
  const steps = [
    {
      title: "Schedule Collection",
      description: "Contact us to arrange a convenient collection time. We offer flexible scheduling to meet your needs.",
      icon: "📅",
    },
    {
      title: "Material Preparation",
      description: "Sort and prepare materials according to our guidelines for efficient collection.",
      icon: "📦",
    },
    {
      title: "Pickup Service",
      description: "Our professional team arrives at the scheduled time to collect your recyclable materials.",
      icon: "🚛",
    },
    {
      title: "Initial Sorting",
      description: "Materials are sorted at our facility according to type and quality.",
      icon: "♻️",
    },
    {
      title: "Processing",
      description: "Sorted materials undergo appropriate processing methods based on material type.",
      icon: "⚙️",
    },
    {
      title: "Quality Control",
      description: "Rigorous quality checks ensure materials meet recycling standards.",
      icon: "✅",
    },
  ];

  const benefits = [
    {
      title: "Convenient Collection",
      description: "We come to you, making recycling easy and accessible",
    },
    {
      title: "Professional Service",
      description: "Trained staff handle materials with care and expertise",
    },
    {
      title: "Environmental Impact",
      description: "Direct contribution to reducing landfill waste",
    },
  ];

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Collection Process</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A streamlined approach to recycling that makes sustainability simple and efficient
        </p>
      </div>

      {/* Process Steps */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative p-6 bg-background rounded-lg border"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>
            <div className="text-4xl mb-4">{step.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <section className="bg-accent/50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Benefits of Our Process</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center space-y-2">
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get Started Section */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Ready to Start Recycling?</h2>
        <p className="text-muted-foreground">
          Join us in creating a sustainable future through responsible recycling
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Schedule Collection</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View Accepted Materials</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}