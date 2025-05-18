"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900/50">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/94abc526-5e90-4ab4-b36d-be5a65f9dab3.JPG"
                alt={siteConfig.name}
                width={180}
                height={90}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-[250px]">
              Leading recycling services provider in Nigeria, offering sustainable waste management solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {siteConfig.headerNav.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/reach-in-nigeria"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Reach in Nigeria
                  </Link>
                </li>
                <li>
                  <Link
                    href="/associations"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Associations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certifications"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Certifications
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href={siteConfig.links.terms}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.links.privacy}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.links.contact}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} ATEP Recycling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}