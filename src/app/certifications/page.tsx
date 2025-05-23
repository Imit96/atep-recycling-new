import { CertificationsClient } from "@/components/certifications-client";

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

  return (
    <CertificationsClient certifications={certifications} />
  );
}
