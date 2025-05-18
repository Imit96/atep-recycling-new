"use client";

import { motion } from "framer-motion";
import { ScrollAnimation } from "@/components/motion/scroll-animation";
import { AnimatedHeading } from "@/components/motion/animated-text";
import { ContactForm } from "@/components/forms/contact-form";
import { InstagramIcon, FacebookIcon } from "@/components/ui/social-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ContactClientProps {
  contactInfo: {
    title: string;
    value: string;
    icon: string;
  }[];
  socialMedia: {
    platform: string;
    handle: string;
    url: string;
    icon: string;
  }[];
  officeLocations: {
    city: string;
    address: string;
    phone: string;
  }[];
}

export function ContactClient({ 
  contactInfo, 
  socialMedia, 
  officeLocations 
}: ContactClientProps) {
  return (
    <div className="container py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <ScrollAnimation className="space-y-8">
          <div className="space-y-2">
            <AnimatedHeading tag="h1" className="text-4xl font-bold">
              Contact Us
            </AnimatedHeading>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
              }}
            >
              Have questions or want to schedule a collection? Reach out to our team.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }
            }}
          >
            <ContactForm />
          </motion.div>
        </ScrollAnimation>

        {/* Contact Info Sidebar */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <ScrollAnimation delay={0.2} direction="left">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        duration: 0.5, 
                        ease: [0.22, 1, 0.36, 1], 
                        delay: index * 0.1 + 0.5 
                      }
                    }}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-muted-foreground">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Social Media */}
          <ScrollAnimation delay={0.4} direction="left">
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
                <CardDescription>
                  Stay updated with our latest news and initiatives
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                {socialMedia.map((platform, index) => (
                  <motion.a
                    key={platform.platform}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition-colors"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.5, 
                        ease: [0.22, 1, 0.36, 1], 
                        delay: index * 0.1 + 0.6 
                      }
                    }}
                  >
                    {platform.platform === "Instagram" && (
                      <InstagramIcon className="w-6 h-6 text-pink-500" />
                    )}
                    {platform.platform === "Facebook" && (
                      <FacebookIcon className="w-6 h-6 text-blue-600" />
                    )}
                    <span className="font-medium">{platform.handle}</span>
                  </motion.a>
                ))}
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Office Locations */}
          <ScrollAnimation delay={0.6} direction="left">
            <Card>
              <CardHeader>
                <CardTitle>Our Offices</CardTitle>
                <CardDescription>
                  Visit us at any of our locations across Nigeria
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={office.city}
                    className="space-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.5, 
                        ease: [0.22, 1, 0.36, 1], 
                        delay: index * 0.1 + 0.7 
                      }
                    }}
                  >
                    <div className="font-semibold">{office.city}</div>
                    <div className="text-sm text-muted-foreground">
                      {office.address}
                    </div>
                    <div className="text-sm">{office.phone}</div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}