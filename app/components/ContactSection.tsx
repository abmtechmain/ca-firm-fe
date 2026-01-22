'use client';

import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, description, value }) => (
  <div className="flex flex-col items-center md:items-start space-y-3 text-center md:text-left group">
    <div className="text-[#056385] transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <h3 
      className="font-bold uppercase"
      style={{ 
        fontSize: '20px', 
        color: '#056385'
      }}
    >
      {title}
    </h3>
    <p 
      className="max-w-[220px]"
      style={{ 
        fontSize: '16px', 
        color: '#0000008A'
      }}
    >
      {description}
    </p>
    <p 
      className="font-bold break-all md:break-normal"
      style={{ 
        fontSize: '16px', 
        color: '#000000'
      }}
    >
      {value}
    </p>
  </div>
);

const ContactSection: React.FC = () => {
  const contacts = [
    {
      icon: <Mail size={32} />,
      title: "EMAIL",
      description: "Send us a message and we'll respond within hours.",
      value: "samarthkale33@gmail.com"
    },
    {
      icon: <Phone size={32} />,
      title: "PHONE",
      description: "Prefer to talk? We're here to take your call.",
      value: "+91 654 356 6589"
    },
    {
      icon: <Clock size={32} />,
      title: "OFFICE TIME",
      description: "Prefer to talk? We're here to take your call.",
      value: "10:00 to 5:00"
    }
  ];

  const locations = [
    {
      icon: <MapPin size={32} />,
      title: "OFFICE",
      description: "Visit us or find us on the map below.",
      value: "Office: xyz, 123, mumbai, maharashtra"
    },
    {
      icon: <MapPin size={32} />,
      title: "OFFICE",
      description: "Visit us or find us on the map below.",
      value: "Office: xyz, 123, mumbai, maharashtra"
    },
    {
      icon: <MapPin size={32} />,
      title: "OFFICE",
      description: "Visit us or find us on the map below.",
      value: "Office: xyz, 123, mumbai, maharashtra"
    }
  ];

  return (
    <div className="border-2 border-gray-100 rounded-2xl p-8 md:p-16 mx-auto" style={{ backgroundColor: 'rgba(5, 99, 133, 0.02)' }}>
      <div className="text-center mb-16">
        <h2 
          className="uppercase font-instrument-sans relative inline-block mb-4"
          style={{ 
            fontSize: '24px', 
            color: '#056385',
            fontWeight: 'bold'
          }}
        >
          CONTACT US
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#056385] rounded-full"></span>
        </h2>
        <p 
          className="mt-6 max-w-2xl mx-auto leading-relaxed"
          style={{ 
            fontSize: '18px', 
            color: '#0000008A'
          }}
        >
          Let's talk about what your business needs. A quick conversation can clear the path ahead.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
        {contacts.map((item, idx) => (
          <ContactItem key={`contact-${idx}`} {...item} />
        ))}
        {locations.map((item, idx) => (
          <ContactItem key={`location-${idx}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
