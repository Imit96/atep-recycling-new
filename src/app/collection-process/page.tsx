import { CollectionProcessClient } from "@/components/collection-process-client";

export const metadata = {
  title: "Collection Process | ATEP Recycling",
  description: "Learn about ATEP Recycling's efficient waste collection and processing system",
};

export default function CollectionProcess() {
  const steps = [
    {
      title: "Schedule Collection",
      description: "Contact us to arrange a convenient collection time. We offer flexible scheduling to meet your needs.",
      icon: "📅",
    },
    {
      title: "Material Preparation",
      description: "Sort and prepare materials according to our guidelines for efficient collection.",
      icon: "📦",
    },
    {
      title: "Pickup Service",
      description: "Our professional team arrives at the scheduled time to collect your recyclable materials.",
      icon: "🚛",
    },
    {
      title: "Initial Sorting",
      description: "Materials are sorted at our facility according to type and quality.",
      icon: "♻️",
    },
    {
      title: "Processing",
      description: "Sorted materials undergo appropriate processing methods based on material type.",
      icon: "⚙️",
    },
    {
      title: "Quality Control",
      description: "Rigorous quality checks ensure materials meet recycling standards.",
      icon: "✅",
    },
  ];

  return <CollectionProcessClient steps={steps} />;
}
