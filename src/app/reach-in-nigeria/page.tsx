import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ReachInNigeriaPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Reach in Nigeria</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          ATEP Recycling provides sustainable waste management solutions in Akure,
          Lagos, and Ibadan
        </p>
      </div>

      <div className="text-center text-muted-foreground">
        <p>Interactive map coming soon. View our service locations below.</p>
        <Button asChild variant="outline" className="mt-4">
          <Link href="/contact">Inquire About Coverage</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">Lagos</h2>
          <p className="text-muted-foreground">Lagos State</p>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Services Available</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Residential Collection</li>
              <li>Commercial Collection</li>
              <li>Industrial Recycling</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Coverage</h3>
            <p className="text-muted-foreground">Full city coverage</p>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">Ibadan</h2>
          <p className="text-muted-foreground">Oyo State</p>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Services Available</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Commercial Collection</li>
              <li>Residential Collection</li>
              <li>Industrial Recycling</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Coverage</h3>
            <p className="text-muted-foreground">Major districts and industrial areas</p>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">Akure</h2>
          <p className="text-muted-foreground">Ondo State</p>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Services Available</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Commercial Collection</li>
              <li>Residential Collection</li>
              <li>Industrial Recycling</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Coverage</h3>
            <p className="text-muted-foreground">Citywide coverage</p>
          </div>
        </Card>
      </div>

      <div className="bg-muted p-8 rounded-lg text-center space-y-4 mt-8">
        <h2 className="text-2xl font-bold">Not in our coverage area?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We&apos;re constantly expanding our reach across Nigeria. Contact us to discuss
          bringing ATEP Recycling services to your area.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">Request Coverage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/collection-process">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}