import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
      <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="container py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center text-center gap-8 md:items-start md:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight animate-fade-up">
              Transforming Plastic
              <br />
              Waste into Sustainable
              <br />
              Solutions
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-up">
              At our organization, we are dedicated to recycling plastics and reducing
              environmental impact. Join us in our mission to create a cleaner, greener future
              for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
              <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
                <Link href="/mission-vision-values">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Sign Up</Link>
              </Button>
            </div>
          </div>
          <div>
            {/* Image Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg md:h-96"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container py-16 bg-accent/50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About ATEP Recycling</h2>
            <p className="text-gray-500 dark:text-gray-400">
              ATEP Recycling is at the forefront of Nigeria&apos;s recycling industry,
              providing innovative solutions for waste management and environmental
              sustainability. Our commitment to excellence and eco-friendly practices
              sets us apart as industry leaders.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-lg shadow">
              <h3 className="text-2xl font-bold text-green-600">5+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow">
              <h3 className="text-2xl font-bold text-green-600">1000+</h3>
              <p className="text-sm text-gray-500">Tons Recycled</p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow">
              <h3 className="text-2xl font-bold text-green-600">50+</h3>
              <p className="text-sm text-gray-500">Partner Companies</p>
            </div>
            <div className="p-4 bg-background rounded-lg shadow">
              <h3 className="text-2xl font-bold text-green-600">10+</h3>
              <p className="text-sm text-gray-500">Nigerian States</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Waste Collection",
              description: "Regular collection services for businesses and communities",
              icon: "🚛",
            },
            {
              title: "Material Processing",
              description: "State-of-the-art recycling facilities for various materials",
              icon: "⚙️",
            },
            {
              title: "Environmental Education",
              description: "Training and awareness programs for sustainable practices",
              icon: "📚",
            },
          ].map((service) => (
            <div key={service.title} className="p-6 bg-background rounded-lg shadow-sm border">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regions Served */}
      <section className="container py-16 bg-accent/50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Reach in Nigeria</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "Lagos",
              "Abuja",
              "Port Harcourt",
              "Kano",
              "Ibadan",
              "Calabar",
            ].map((city) => (
              <div
                key={city}
                className="p-4 text-center bg-background rounded-lg shadow-sm border"
              >
                {city}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/reach-in-nigeria">View All Locations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
