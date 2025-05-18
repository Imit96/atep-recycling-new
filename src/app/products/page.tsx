import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { formatPageTitle, defaultKeywords } from "@/lib/metadata";

export const metadata: Metadata = {
  title: formatPageTitle("Recyclable Products"),
  description: "Discover the types of materials we recycle at ATEP Recycling",
  keywords: [...defaultKeywords, "plastic recycling", "metal recycling", "paper recycling", "e-waste"],
};

export default function Products() {
  const materials = [
    {
      category: "Plastics",
      items: [
        "PET Bottles",
        "HDPE Containers",
        "PVC Materials",
        "LDPE Products",
        "Polypropylene Items",
      ],
      description:
        "We accept various types of plastic materials, properly sorted by resin type.",
      icon: "🔄",
    },
    {
      category: "Paper & Cardboard",
      items: [
        "Cardboard Boxes",
        "Office Paper",
        "Newspapers",
        "Magazines",
        "Paper Packaging",
      ],
      description:
        "Clean paper and cardboard materials suitable for recycling.",
      icon: "📄",
    },
    {
      category: "Metal",
      items: [
        "Aluminum Cans",
        "Steel Containers",
        "Scrap Metal",
        "Metal Packaging",
        "Copper Wire",
      ],
      description:
        "All types of metal materials are accepted for processing.",
      icon: "🔧",
    },
    {
      category: "Glass",
      items: [
        "Glass Bottles",
        "Glass Jars",
        "Window Glass",
        "Glass Containers",
      ],
      description:
        "Clear and colored glass products are accepted for recycling.",
      icon: "🍶",
    },
    {
      category: "E-Waste",
      items: [
        "Old Computers",
        "Mobile Phones",
        "Electronic Parts",
        "Batteries",
        "Cables",
      ],
      description:
        "Electronic waste is handled with proper environmental considerations.",
      icon: "💻",
    },
    {
      category: "Textiles",
      items: [
        "Old Clothing",
        "Fabric Scraps",
        "Industrial Textiles",
        "Bags",
        "Shoes",
      ],
      description:
        "We process textile waste for various recycling applications.",
      icon: "👕",
    },
  ];

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Recyclable Materials</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          ATEP Recycling accepts a wide range of materials for sustainable processing
        </p>
      </div>

      {/* Materials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {materials.map((material) => (
          <div
            key={material.category}
            className="p-6 bg-background rounded-lg border space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl">{material.icon}</span>
              <h2 className="text-xl font-semibold">{material.category}</h2>
            </div>
            <p className="text-muted-foreground">{material.description}</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {material.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Guidelines Section */}
      <div className="bg-accent/50 rounded-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Recycling Guidelines</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Clean Materials</h3>
            <p className="text-sm text-muted-foreground">
              Ensure all items are clean and free from contaminants
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Proper Sorting</h3>
            <p className="text-sm text-muted-foreground">
              Sort materials by category for efficient processing
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Safe Handling</h3>
            <p className="text-sm text-muted-foreground">
              Handle hazardous materials with appropriate care
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Ready to Recycle?</h2>
        <p className="text-muted-foreground">
          Contact us to learn more about our recycling services
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/collection-process">View Collection Process</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}