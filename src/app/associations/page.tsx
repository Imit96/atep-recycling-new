import { AssociationsClient } from "@/components/associations-client";

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

  return <AssociationsClient partners={partners} certifications={certifications} />;
}
