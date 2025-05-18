import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Associations & Partners | ATEP Recycling",
  description: "Learn about ATEP Recycling's partnerships and affiliations with environmental organizations",
};

export default function Associations() {
  const partners = [
    {
      name: "Nigeria Environmental Society",
      type: "Environmental Organization",
      description: "Working together to promote environmental awareness and sustainable practices across Nigeria.",
      partnership: "Joint educational programs and community outreach initiatives.",
    },
    {
      name: "Lagos State Environmental Protection Agency",
      type: "Government Agency",
      description: "Collaborating to ensure compliance with environmental regulations and standards.",
      partnership: "Official recycling partner for various state programs.",
    },
    {
      name: "Nigerian Conservation Foundation",
      type: "Environmental NGO",
      description: "Partnership focused on preserving Nigeria's natural environment through sustainable practices.",
      partnership: "Collaborative research and environmental impact assessment.",
    },
    {
      name: "Manufacturers Association of Nigeria",
      type: "Industry Association",
      description: "Working with manufacturers to implement sustainable production practices.",
      partnership: "Industrial recycling programs and circular economy initiatives.",
    },
    {
      name: "Nigerian Green Building Council",
      type: "Industry Organization",
      description: "Promoting sustainable building practices and materials recycling.",
      partnership: "Construction waste management programs.",
    },
    {
      name: "Waste Management Society of Nigeria",
      type: "Professional Association",
      description: "Collaborating on best practices in waste management and recycling.",
      partnership: "Professional development and industry standardization.",
    },
  ];

  const certifications = [
    "ISO 14001:2015 Environmental Management",
    "Quality Management System Certification",
    "Nigerian Environmental Standards Compliance",
  ];

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Associations & Partners</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Working together with leading organizations to advance sustainable practices in Nigeria
        </p>
      </div>

      {/* Partners Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <Card key={partner.name}>
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
      </div>

      {/* Certifications Section */}
      <section className="bg-accent/50 rounded-lg p-8 text-center space-y-6">
        <h2 className="text-2xl font-bold">Our Certifications</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-background rounded-full px-4 py-2 text-sm border"
            >
              {cert}
            </div>
          ))}
        </div>
        <Button asChild variant="outline">
          <Link href="/certifications">View All Certifications</Link>
        </Button>
      </section>

      {/* Partnership CTA */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Interested in Partnering with Us?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our network of organizations committed to environmental sustainability
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Become a Partner</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/mission-vision-values">Learn About Our Values</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}