import { ContactClient } from "@/components/contact-client";

export const metadata = {
  title: "Contact Us | ATEP Recycling",
  description: "Get in touch with ATEP Recycling for your recycling needs and inquiries",
};

export default function Contact() {
  const contactInfo = [
    {
      title: "Email",
      value: "Ateprecycling@gmail.com",
      icon: "✉️",
    },
    {
      title: "Phone",
      value: "07032042101",
      icon: "📞",
    },
    {
      title: "Address",
      value: "Block 4 in chief william komolafe oluwatimilehin family estate at KLM 5 Akure Benin road, Obaile Akure.",
      icon: "📍",
    },
  ];
  
  const socialMedia = [
    {
      platform: "Instagram",
      handle: "Atep_recyclers",
      url: "https://instagram.com/Atep_recyclers",
      icon: "📸"
    },
    {
      platform: "Facebook",
      handle: "ATEP Recyclers",
      url: "https://www.facebook.com/profile.php?id=61576245786062",
      icon: "👍"
    }
  ];
  
  const officeLocations = [
    {
      city: "Akure",
      address: "Block 4 in chief william komolafe oluwatimilehin family estate at KLM 5 Akure Benin road, Obaile Akure.",
      phone: "07032042101"
    }
  ];

  return (
    <ContactClient 
      contactInfo={contactInfo}
      socialMedia={socialMedia}
      officeLocations={officeLocations}
    />
  );
}
