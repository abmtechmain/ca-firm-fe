import Hero from '../components/Hero';
import { WhoWeAre } from '../components/WhoWeAre';
import { VisionMission } from '../components/VisionMission';
import { FounderSection } from '../components/FounderSection';
import { KeyPersons } from '../components/KeyPersons';
import { TeamSection } from '../components/TeamSection';
import { KeyStrengths } from '../components/KeyStrengths';
import { BRAND_COLORS } from '../constants';

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        image="/images/d7b411f0d5119b394fee184dc05ce3b4caf98d3d.jpg"
        title="A Professional Chartered Accountancy Firm Built on Trust & Compliance"
        subtext="We provide reliable accounting, taxation, audit, and advisory services with a practical, client-focused approach."
      />
      
      {/* Who We Are Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 md:py-16 lg:py-20 bg-white">
        <WhoWeAre />
      </section>
      
      {/* Vision & Mission Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 md:py-16 lg:py-20 bg-white">
        <VisionMission />
      </section>
      
      {/* Founder Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 md:py-16 lg:py-20 bg-white">
        <FounderSection />
      </section>
      
      {/* Key Persons Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block relative">
              <h2 
                className="font-extrabold tracking-tight uppercase"
                style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
              >
                KEY PERSONS
              </h2>
              <div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              ></div>
            </div>
          </div>
          <KeyPersons />
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block relative">
              <h2 
                className="font-extrabold tracking-tight uppercase"
                style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
              >
                TEAM MEMBERS
              </h2>
              <div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
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
