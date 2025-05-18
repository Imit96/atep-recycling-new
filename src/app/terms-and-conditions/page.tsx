import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Terms and Conditions | ATEP Recycling",
  description: "ATEP Recycling's terms and conditions for services in Nigeria",
};

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Introduction",
      content: [
        "These Terms and Conditions govern your use of ATEP Recycling's services in Nigeria. By engaging our services, you agree to these terms in full.",
        "ATEP Recycling is registered in Nigeria and operates in compliance with all applicable environmental and business regulations.",
      ],
    },
    {
      title: "2. Service Terms",
      content: [
        "2.1. ATEP Recycling provides waste collection and recycling services as described in our service documentation.",
        "2.2. Service availability is subject to location coverage as indicated on our website.",
        "2.3. Collection schedules and processing times are estimates and may vary based on operational factors.",
        "2.4. We reserve the right to refuse materials that don't meet our acceptance criteria.",
      ],
    },
    {
      title: "3. Customer Responsibilities",
      content: [
        "3.1. Proper sorting and preparation of recyclable materials as per our guidelines.",
        "3.2. Ensuring safe access to collection points during scheduled pickup times.",
        "3.3. Accurate disclosure of material types and quantities.",
        "3.4. Compliance with local waste management regulations.",
      ],
    },
    {
      title: "4. Liability",
      content: [
        "4.1. ATEP Recycling's liability is limited to the extent permitted by Nigerian law.",
        "4.2. We are not responsible for indirect losses arising from our services.",
        "4.3. Customers are responsible for any misrepresentation of materials.",
      ],
    },
    {
      title: "5. Data Protection",
      content: [
        "5.1. We process personal data in accordance with our Privacy Policy.",
        "5.2. Customer information is handled in compliance with Nigerian data protection regulations.",
        "5.3. We maintain confidentiality of business information shared during service provision.",
      ],
    },
    {
      title: "6. Service Modifications",
      content: [
        "6.1. ATEP Recycling reserves the right to modify services with reasonable notice.",
        "6.2. Price adjustments will be communicated in advance.",
        "6.3. Service areas may be expanded or modified based on operational capacity.",
      ],
    },
    {
      title: "7. Termination",
      content: [
        "7.1. Either party may terminate services with appropriate notice.",
        "7.2. Outstanding obligations remain in effect after termination.",
        "7.3. Early termination fees may apply for contracted services.",
      ],
    },
    {
      title: "8. Dispute Resolution",
      content: [
        "8.1. Disputes will be resolved through Nigerian courts under Nigerian law.",
        "8.2. Parties will attempt amicable resolution before legal proceedings.",
        "8.3. Mediation may be used as an alternative dispute resolution method.",
      ],
    },
  ];

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Please read these terms carefully before using our services
        </p>
      </div>

      {/* Last Updated */}
      <div className="text-center text-sm text-muted-foreground">
        Last Updated: May 2024
      </div>

      {/* Terms Content */}
      <Card>
        <CardContent className="p-6 space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <div className="space-y-2">
                {section.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Information */}
          <div className="mt-8 pt-8 border-t space-y-2">
            <p className="text-sm text-muted-foreground">
              For any questions about these terms, please contact us at:
            </p>
            <p className="text-sm">
              ATEP Recycling<br />
              Lagos, Nigeria<br />
              Email: legal@ateprecycling.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}