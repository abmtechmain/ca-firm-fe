import { Metadata } from 'next';
import Hero from '../components/Hero';
import { FirmOverview } from '../components/FirmOverview';
import { WhoWeAre } from '../components/WhoWeAre';
import { VisionMission } from '../components/VisionMission';
import { KeyPersons } from '../components/KeyPersons';
import { TeamSection } from '../components/TeamSection';
import { KeyStrengths } from '../components/KeyStrengths';
import { BRAND_COLORS } from '../constants';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about SKMRD & Associates - A multi-state CA firm established in 1989 with head office in Nashik. Meet our experienced team of Chartered Accountants, partners, and professionals dedicated to excellence.',
  keywords: ['About CA Firm', 'CA Firm History', 'Chartered Accountants Team', 'CA Partners', 'CA Firm Nashik', 'Professional Team', 'CA Firm Experience'],
  openGraph: {
    title: 'About | SKMRD & Associates',
    description: 'Learn about SKMRD & Associates - A multi-state CA firm established in 1989 with experienced team of Chartered Accountants.',
    url: '/about-us',
    images: ['/images/footer-logoo.png'],
  },
};

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        image="/images/d7b411f0d5119b394fee184dc05ce3b4caf98d3d.jpg"
        title="A Professional Chartered Accountancy Firm Built on Trust & Compliance"
        subtext="We provide reliable accounting, taxation, audit, and advisory services with a practical, client-focused approach."
      />
      
      {/* Firm Overview Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 md:py-16 lg:py-20 bg-white">
        <FirmOverview />
      </section>
      
      {/* Who We Are Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 pt-12 md:pt-16 lg:pt-20 pb-4 md:pb-6 lg:pb-8 bg-white">
        <WhoWeAre />
      </section>
      
      {/* Vision & Mission Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 pt-4 md:pt-6 lg:pt-8 pb-12 md:pb-16 lg:pb-20 bg-white">
        <VisionMission />
      </section>
      
      {/* Key Persons Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <KeyPersons />
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block relative w-fit">
              <h2 
                className="page-headers"
                style={{ color: BRAND_COLORS.accent }}
              >
                TEAM MEMBERS
              </h2>
              <div 
                className="absolute -bottom-3 left-0 w-full h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              ></div>
            </div>
          </div>
          <TeamSection />
        </div>
      </section>
      
      {/* Key Strengths Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 md:py-16 lg:py-20 bg-white">
        <KeyStrengths />
      </section>
    </div>
  );
}
