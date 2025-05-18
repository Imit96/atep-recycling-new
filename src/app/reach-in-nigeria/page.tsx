import { ReachInNigeriaClient } from "@/components/reach-nigeria-client";

export const metadata = {
  title: "Our Location | ATEP Recycling",
  description: "Learn about ATEP Recycling's location and services in Akure, Ondo State",
};

export default function ReachInNigeriaPage() {
  const locations = [
    {
      city: "Akure, Ondo State",
      active: true,
      address: "Block 4 in chief william komolafe oluwatimilehin family estate at KLM 5 Akure Benin road, Obaile Akure.",
      services: [
        "PET Plastic Collection",
        "PET Processing",
        "Sustainable Waste Management"
      ],
    },
  ];

  const partners = [
    {
      name: "Ondo State Environmental Protection Agency",
      location: "Ondo State",
      type: "Environmental Compliance Partner"
    },
    {
      name: "Local Communities",
      location: "Akure",
      type: "Collection Network"
    }
  ];

  return (
    <ReachInNigeriaClient 
      locations={locations}
      partners={partners}
    />
  );
}
