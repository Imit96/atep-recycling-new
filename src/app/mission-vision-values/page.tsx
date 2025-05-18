import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Mission, Vision & Core Values | ATEP Recycling",
  description: "Learn about ATEP Recycling's mission, vision, and core values driving sustainable recycling in Nigeria",
};

export default function MissionVisionValues() {
  const coreValues = [
    {
      title: "Sustainability",
      description: "We are committed to environmental preservation and sustainable practices in all our operations.",
      icon: "🌱",
    },
    {
      title: "Innovation",
      description: "We continuously seek new ways to improve our recycling processes and services.",
      icon: "💡",
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty and ethical behavior in all our dealings.",
      icon: "⭐",
    },
    {
      title: "Community",
      description: "We work to create positive impact in the communities we serve across Nigeria.",
      icon: "🤝",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our operations and service delivery.",
      icon: "🏆",
    },
    {
      title: "Education",
      description: "We are dedicated to spreading awareness about sustainable recycling practices.",
      icon: "📚",
    },
  ];

  return (
    <div className="container py-16 space-y-16">
      {/* Mission Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Our Mission & Vision</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To lead Nigeria&apos;s transition to sustainable waste management through
              innovative recycling solutions while educating and empowering
              communities to make environmentally conscious decisions.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To be Nigeria&apos;s foremost recycling company, setting industry
              standards for sustainable practices and creating a cleaner,
              greener future for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="p-6 bg-background rounded-lg border space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl">{value.icon}</span>
                <h3 className="text-xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-accent/50 rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">1000+</div>
            <p className="text-sm text-muted-foreground">Tons of Waste Recycled</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">50+</div>
            <p className="text-sm text-muted-foreground">Partner Organizations</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">10+</div>
            <p className="text-sm text-muted-foreground">Nigerian States Served</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Join Us in Making a Difference</h2>
        <p className="text-muted-foreground">
          Be part of our mission to create a sustainable future
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Partner With Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/collection-process">Learn How It Works</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}