import { PrivacyPolicyClient } from "@/components/privacy-policy-client";

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

  return <PrivacyPolicyClient sections={sections} />;
}