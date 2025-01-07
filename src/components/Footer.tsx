// components/Footer.tsx

import React from "react";
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const stadium = [
  {
    text: "Stadium",
    className: "text-white-500 dark:text-yellow-500 text-2xl",
  },
  {
    text: "Booking",
    className: "text-yellow-500 dark:text-yellow-500 text-2xl",
  },
];

const business = [
  {
    text: "Business",
    className: "text-white-500 dark:text-yellow-500 text-xl",
  },
  {
    text: "Hours",
    className: "text-yellow-500 dark:text-yellow-500 text-xl",
  },
];

const location = [
  {
    text: "Location",
    className: "text-white-500 dark:text-yellow-500 text-xl",
  },
];

const contact = [
  {
    text: "Contact",
    className: "text-white-500 dark:text-yellow-500 text-xl",
  },
  {
    text: "Us",
    className: "text-yellow-500 dark:text-yellow-500 text-xl",
  },
];

const week = 'Monday - Friday: 4:00 PM - 9:00 PM';
const saturday = 'Saturday: 8:00 AM - 9:00 PM';
const sunday = 'Sunday: 10:00 AM - 6:00 PM';
const locate = 'Lafayette High School, 17050 Clayton Rd, Wildwood, MO 63011';
const number = '+1 (636) 733-4100'; 
const email = 'sumnerjonathon@rsdmo.org';  
const website = 'https://lafayette.rsdmo.org/'; 

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: "20px", backgroundColor: "#333", color: "#fff", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TypewriterEffectSmooth words={stadium} />
          </div>

          <div
          style={{
            display: "flex", // Flexbox to align items horizontally
            justifyContent: "center", // Center the items horizontally
            gap: "30px", // Space between the sections
            textAlign: "center", // Center-align content within each section
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TypewriterEffectSmooth words={business} />
            <TextGenerateEffect words={week} />
            <TextGenerateEffect words={saturday} />
            <TextGenerateEffect words={sunday} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <TypewriterEffectSmooth words={location} />
          <section>
            <TextGenerateEffect words={locate} />
            <div
              style={{
                marginTop: "16px", // Adds spacing between the address and the map
                display: "flex", // Ensures alignment for map
                justifyContent: "center", // Centers the map
                width: "100%", // Ensures the container takes full width
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.6582369322114!2d-90.638122146671!3d38.596213338995604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88603e3cd46c2c85%3A0x5426222ae71dcbd2!2sLafayette%20High%20School!5e0!3m2!1sen!2sus!4v1736146807470!5m2!1sen!2sus"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <TypewriterEffectSmooth words={contact} />
            <div>
              <TextGenerateEffect words={number} />
              <TextGenerateEffect words={email} />
              <TextGenerateEffect words={website} />
            </div>
          </div>
    </div>

    </footer>
  );
};

export default Footer;
