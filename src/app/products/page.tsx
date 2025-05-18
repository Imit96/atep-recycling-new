import { Metadata } from "next";
import { formatPageTitle, defaultKeywords } from "@/lib/metadata";
import { ProductsClient } from "@/components/products-client";

export const metadata: Metadata = {
  title: formatPageTitle("Recyclable Products"),
  description: "Learn about our PET plastic recycling services at ATEP Recycling",
  keywords: [...defaultKeywords, "PET recycling", "plastic recycling", "PET bottles", "polyethylene terephthalate"],
};

export default function Products() {
  const materials = [
    {
      category: "PET Plastic",
      items: [
        "PET Bottles",
        "PET Containers",
        "Clear PET Materials",
        "Colored PET Materials"
      ],
      description:
        "We specialize in collection and processing of PET (polyethylene terephthalate) waste.",
      icon: "🔄",
    }
  ];

  return <ProductsClient materials={materials} />;
}