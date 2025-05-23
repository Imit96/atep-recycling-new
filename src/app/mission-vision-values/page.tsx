import { MissionVisionClient } from "@/components/mission-vision-client";

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

  return <MissionVisionClient coreValues={coreValues} />;
}
