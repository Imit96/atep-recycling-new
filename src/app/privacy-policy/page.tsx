import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Privacy Policy | ATEP Recycling",
  description: "ATEP Recycling's privacy policy and data protection practices",
};

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content: [
        "This Privacy Policy explains how ATEP Recycling ('we', 'our', or 'us') collects, uses, and protects your personal information in accordance with Nigerian data protection regulations.",
        "We are committed to ensuring your privacy is protected and your information is used appropriately.",
      ],
    },
    {
      title: "2. Information We Collect",
      content: [
        "2.1. Personal Information:",
        "- Name and contact details",
        "- Address and location information",
        "- Service preferences and history",
        "- Communication records",
        "2.2. Business Information:",
        "- Company details",
        "- Service locations",
        "- Waste management requirements",
      ],
    },
    {
      title: "3. How We Use Your Information",
      content: [
        "3.1. To provide and manage our recycling services",
        "3.2. To communicate about service schedules and updates",
        "3.3. To improve our services and customer experience",
        "3.4. To comply with legal and regulatory requirements",
        "3.5. To process payments and maintain accounts",
      ],
    },
    {
      title: "4. Data Protection",
      content: [
        "4.1. We implement appropriate security measures to protect your information",
        "4.2. Access to personal data is restricted to authorized personnel",
        "4.3. Regular security assessments and updates are performed",
        "4.4. Data is stored securely in accordance with Nigerian data protection standards",
      ],
    },
    {
      title: "5. Information Sharing",
      content: [
        "5.1. We do not sell your personal information to third parties",
        "5.2. Information may be shared with:",
        "- Service providers assisting in our operations",
        "- Regulatory authorities when required by law",
        "- Partners involved in service delivery",
        "5.3. All third parties are bound by confidentiality obligations",
      ],
    },
    {
      title: "6. Your Rights",
      content: [
        "You have the right to:",
        "6.1. Access your personal information",
        "6.2. Request corrections to your data",
        "6.3. Object to processing of your information",
        "6.4. Request deletion of your information",
        "6.5. Withdraw consent for data processing",
      ],
    },
    {
      title: "7. Cookies and Tracking",
      content: [
        "7.1. Our website uses cookies to improve user experience",
        "7.2. You can control cookie preferences through your browser",
        "7.3. We use analytics tools to understand website usage",
      ],
    },
    {
      title: "8. Changes to Privacy Policy",
      content: [
        "8.1. We reserve the right to update this policy periodically",
        "8.2. Significant changes will be communicated to users",
        "8.3. Continued use of our services constitutes acceptance of updates",
      ],
    },
    {
      title: "9. Data Retention",
      content: [
        "9.1. We retain personal data only as long as necessary",
        "9.2. Retention periods are determined by:",
        "- Legal requirements",
        "- Business needs",
        "- Service agreements",
      ],
    },
  ];

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          How we collect, use, and protect your information
        </p>
      </div>

      {/* Last Updated */}
      <div className="text-center text-sm text-muted-foreground">
        Last Updated: May 2024
      </div>

      {/* Policy Content */}
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
              For privacy-related inquiries or to exercise your rights, please contact our Data Protection Officer at:
            </p>
            <p className="text-sm">
              ATEP Recycling<br />
              Data Protection Officer<br />
              Lagos, Nigeria<br />
              Email: privacy@ateprecycling.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}