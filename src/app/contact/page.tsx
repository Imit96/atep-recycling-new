import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = {
  title: "Contact Us | ATEP Recycling",
  description: "Get in touch with ATEP Recycling for your recycling needs and inquiries",
};

export default function Contact() {
  const contactInfo = [
    {
      title: "Email",
      value: "info@ateprecycling.com",
      icon: "✉️",
    },
    {
      title: "Phone",
      value: "+234 XXX XXX XXXX",
      icon: "📞",
    },
    {
      title: "Address",
      value: "Lagos, Nigeria",
      icon: "📍",
    },
  ];

  return (
    <div className="container py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get in touch with us for any inquiries about our recycling services
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-center gap-4 p-4 rounded-lg border"
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <div className="font-semibold">{info.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>
                Our office is open during these hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-muted-foreground">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-muted-foreground">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="aspect-video bg-accent/50 rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">
          Map integration coming soon
        </p>
      </div>
    </div>
  );
}