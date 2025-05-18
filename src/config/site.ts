export const siteConfig = {
  name: "ATEP Recycling",
  description: "Leading recycling services provider in Nigeria",
  headerNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Mission & Vision",
      href: "/mission-vision-values",
    },
    {
      title: "Collection Process",
      href: "/collection-process",
    },
    {
      title: "Reach in Nigeria",
      href: "/reach-in-nigeria",
    },
  ],
  footerNav: [
    {
      title: "Associations",
      href: "/associations",
    },
    {
      title: "Certifications",
      href: "/certifications",
    },
  ],
  links: {
    terms: "/terms-and-conditions",
    privacy: "/privacy-policy",
    contact: "/contact",
  },
} as const;

export type SiteConfig = typeof siteConfig;