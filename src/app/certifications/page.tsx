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
  title: "Certifications | ATEP Recycling",
  description: "View ATEP Recycling's certifications and industry recognitions",
};

export default function Certifications() {
  const certifications = [
    {
      name: "ISO 14001:2015",
      type: "Environmental Management System",
      issuer: "International Organization for Standardization",
      description: "Certification for our comprehensive environmental management system, demonstrating our commitment to environmental responsibility and continuous improvement.",
      validUntil: "2025",
      benefits: [
        "Systematic approach to environmental management",
        "Regular audits and compliance checks",
        "Continuous improvement processes",
      ],
    },
    {
      name: "Quality Management System",
      type: "ISO 9001:2015",
      issuer: "International Organization for Standardization",
      description: "Recognition of our quality management practices ensuring consistent, high-quality service delivery to all stakeholders.",
      validUntil: "2025",
      benefits: [
        "Standardized operational procedures",
        "Quality assurance protocols",
        "Customer satisfaction focus",
      ],
    },
    {
      name: "Nigerian Environmental Standards",
      type: "Regulatory Compliance",
      issuer: "Federal Ministry of Environment",
      description: "Official certification of compliance with Nigerian environmental protection standards and regulations.",
      validUntil: "2024",
      benefits: [
        "Local regulatory compliance",
        "Environmental impact assessment",
        "Waste management standards",
      ],
    },
    {
      name: "Health and Safety Certification",
      type: "Occupational Safety",
      issuer: "Occupational Safety and Health Administration",
      description: "Recognition of our commitment to maintaining high standards of workplace safety and health practices.",
      validUntil: "2024",
      benefits: [
        "Safety management systems",
        "Employee protection measures",
        "Regular safety training",
      ],
    },
  ];

  const recognitions = [
    {
      title: "Environmental Excellence Award",
      year: "2023",
      organization: "Nigeria Green Awards",
    },
    {
      title: "Best Recycling Initiative",
      year: "2023",
      organization: "Lagos State Environmental Awards",
    },
    {
      title: "Sustainability Leadership",
      year: "2022",
      organization: "Nigerian Conservation Foundation",
    },
  ];

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Certifications</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Demonstrating our commitment to excellence through industry-recognized certifications
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <Card key={cert.name}>
            <CardHeader>
              <CardTitle>{cert.name}</CardTitle>
              <CardDescription>{cert.type}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-2">Issuing Body</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Description</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Valid Until</h3>
                <p className="text-sm text-muted-foreground">{cert.validUntil}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Key Benefits</h3>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {cert.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Awards & Recognition Section */}
      <section className="bg-accent/50 rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Awards & Recognition</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recognitions.map((recognition) => (
            <div
              key={recognition.title}
              className="bg-background p-4 rounded-lg border space-y-2"
            >
              <div className="font-semibold">{recognition.title}</div>
              <div className="text-sm text-muted-foreground">
                {recognition.organization}
              </div>
              <div className="text-sm font-medium">{recognition.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Partner with a Certified Leader</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Work with a certified and recognized leader in sustainable recycling
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/associations">View Our Partners</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}