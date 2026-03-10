import React from 'react';
import { Metadata } from 'next';
import Hero from '../components/Hero';
import ConsultationForm from '../components/ConsultationForm';
import { BRAND_COLORS, SERVICES_OFFERED } from '../constants';
import {
  ClipboardCheck,
  Receipt,
  Lightbulb,
  BookOpen,
  Building2,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive CA services including Audit & Assurance, Taxation, Advisory, Accounting & Bookkeeping, and Corporate Services. Expert Chartered Accountant services in Nashik, Maharashtra.',
  keywords: ['CA Services', 'Audit Services', 'Tax Services', 'GST Services', 'Accounting Services', 'Corporate Services', 'Advisory Services', 'CA Services Nashik', 'Tax Consultant', 'Financial Services'],
  openGraph: {
    title: 'Services | SKMRD & Associates',
    description: 'Comprehensive CA services including Audit & Assurance, Taxation, Advisory, Accounting & Bookkeeping, and Corporate Services.',
    url: '/services',
    images: ['/images/footer-logoo.png'],
  },
};

const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <div className="bg-white border border-[#a0c4d1] rounded-lg overflow-hidden flex flex-col items-center p-6 text-center hover:shadow-lg transition-shadow">
    <div className="h-32 flex items-center justify-center mb-4">
      {icon}
    </div>
    <div className="w-full border-b border-[#a0c4d1] mb-4 -mx-6"></div>
    <h3 
      className="text-[#ea580c] font-bold mb-3 uppercase tracking-tight"
      style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '20px' }}
    >
      {title}
    </h3>
    <p 
      className="text-slate-500 leading-relaxed mb-6 px-2"
      style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '18px' }}
    >
      {description}
    </p>
    <button 
      className="mt-auto border border-[#a0c4d1] rounded-full px-6 py-1.5 text-[10px] text-[#006080] font-bold hover:bg-[#006080] hover:text-white transition-colors flex items-center gap-2"
      style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
    >
      VIEW DETAILS
      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
);

export default function Services() {
  const industries = [
    "MANUFACTURING",
    "REAL ESTATE AND CONSTRUCTION",
    "INFORMATION TECHNOLOGY",
    "FINANCIAL INSTITUTION",
    "HEALTHCARE",
    "RETAIL AND CONSUMER GOODS",
    "HOSPITALITY",
    "TRANSPORTATION AND LOGISTICS",
    "TEXTILE INDUSTRY",
    "AGRO BASED INDUSTRIES",
    "AUTOMOBILE INDUSTRY",
    "PHARMA INDUSTRY",
    "CO OPERATIVE SOCIETY",
    "GOVERNMENT",
    "TRUST / NGO / NPO"
  ];

  return (
    <div>
      <Hero
        image="/images/d7b411f0d5119b394fee184dc05ce3b4caf98d3d.jpg"
        title="Professional Accounting, Taxation & Compliance Services"
        subtext="Comprehensive services designed to meet statutory requirements, reduce compliance risks, and support informed business decisions."
      />
      
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          {/* <div className="text-center space-y-6 mb-12">
            <div className="inline-block relative w-fit">
              <h2 
                className="page-headers"
                style={{ color: BRAND_COLORS.accent }}
              >
                SERVICES OVERVIEW
              </h2>
              <div 
                className="absolute -bottom-3 left-0 w-full h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              ></div>
            </div>
            <p 
              className="text-slate-500 text-xs md:text-sm max-w-2xl mx-auto font-light leading-relaxed px-4"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              Our services cover essential taxation, audit, compliance, and advisory requirements for individuals, startups, and growing businesses.
            </p>
          </div> */}

          {/* <div className="grid lg:grid-cols-[1fr_0.65fr] gap-6 md:gap-8">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <ServiceCard 
                title="GST REGISTRATION & FILING"
                description="Complete Assistance For GST Registration, Return Filing, Reconciliations, And Ongoing Compliance To Ensure Timely And Accurate Submissions."
                icon={
                  <div className="relative flex gap-1">
                    <div className="bg-slate-200 w-16 h-20 rounded-sm flex items-center justify-center relative">
                       <div className="bg-[#006080] w-12 h-14 rounded-sm flex flex-col p-1 text-white gap-0.5">
                          <span className="text-lg font-bold">%</span>
                          <div className="w-full h-0.5 bg-white opacity-40"></div>
                          <div className="w-3/4 h-0.5 bg-white opacity-40"></div>
                       </div>
                    </div>
                    <div className="bg-white border-2 border-slate-100 shadow-sm w-12 h-14 rounded-sm absolute -bottom-2 -right-6 p-1">
                       <div className="flex flex-col gap-1">
                          <div className="flex gap-1 items-center"><div className="w-1 h-1 bg-slate-300"></div><div className="w-4 h-0.5 bg-slate-300"></div></div>
                          <div className="flex gap-1 items-center"><div className="w-1 h-1 bg-slate-300"></div><div className="w-4 h-0.5 bg-slate-300"></div></div>
                          <div className="w-full h-4 bg-slate-50 mt-1 rounded-sm grid grid-cols-3 gap-0.5 p-0.5">
                            <div className="bg-slate-200"></div><div className="bg-slate-200"></div><div className="bg-slate-200"></div>
                            <div className="bg-slate-200"></div><div className="bg-slate-200"></div><div className="bg-slate-200"></div>
                          </div>
                       </div>
                    </div>
                  </div>
                }
              />
              <ServiceCard 
                title="INCOME TAX RETURNS"
                description="Income Tax Return Filing And Tax Planning Services For Individuals, Professionals, And Businesses With A Focus On Compliance And Efficiency."
                icon={
                  <div className="relative">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M20 30H80V85H20V30Z" stroke="#006080" strokeWidth="1.5" />
                       <path d="M30 45H70" stroke="#a0c4d1" strokeWidth="1.5" />
                       <path d="M30 55H50" stroke="#a0c4d1" strokeWidth="1.5" />
                       <path d="M30 65L45 55L60 65L75 45" stroke="#006080" strokeWidth="2" strokeLinecap="round" />
                       <circle cx="25" cy="20" r="5" fill="#a0c4d1" />
                       <circle cx="75" cy="20" r="5" fill="#a0c4d1" />
                       <path d="M40 15L60 15" stroke="#006080" strokeWidth="2" />
                    </svg>
                  </div>
                }
              />
              <ServiceCard 
                title="COMPANY & LLP COMPLIANCE"
                description="End-To-End Compliance Management For Companies And LLPs, Including ROC Filings And Statutory Obligations."
                icon={
                  <div className="relative">
                     <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="50" y="20" width="30" height="60" fill="#006080" />
                        <rect x="20" y="40" width="30" height="40" stroke="#006080" strokeWidth="1.5" />
                        <path d="M55 30H75M55 40H75M55 50H75" stroke="white" strokeWidth="1.5" />
                        <path d="M25 50H45M25 60H45" stroke="#006080" strokeWidth="1.5" />
                     </svg>
                  </div>
                }
              />
              <ServiceCard 
                title="ADVISORY SERVICES"
                description="Practical Business And Regulatory Advisory To Support Decision-Making, Risk Management, And Sustainable Growth."
                icon={
                  <div className="relative">
                     <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="40" width="100" height="30" rx="2" fill="#f8fafc" stroke="#a0c4d1" strokeWidth="1" />
                        <path d="M20 60L40 45L60 55L85 30" stroke="#006080" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="85" cy="30" r="3" fill="#ea580c" />
                        <path d="M30 40V70M50 40V70M70 40V70M90 40V70" stroke="#e2e8f0" strokeWidth="0.5" />
                     </svg>
                  </div>
                }
              />
            </div> */}

            {/* Detailed Services Section - shown first */}
          <div className="space-y-12">
            <div className="text-center">
              <div className="inline-block relative w-fit">
                <h2 
                  className="page-headers"
                  style={{ color: BRAND_COLORS.accent }}
                >
                  SERVICES OFFERED
                </h2>
                <div 
                  className="absolute -bottom-3 left-0 w-full h-1"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES_OFFERED.map((category, idx) => {
                const icons = [
                  ClipboardCheck,  // AUDIT & ASSURANCE
                  Receipt,        // TAXATION
                  Lightbulb,     // ADVISORY
                  BookOpen,      // ACCOUNTING & BOOKKEEPING
                  Building2,     // CORPORATE SERVICES
                  Layers,        // OTHER SERVICES
                ];
                const IconComponent = icons[idx] ?? ClipboardCheck;
                return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 md:p-7 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md relative overflow-hidden"
                  style={{ 
                    fontFamily: 'var(--font-instrument-sans), sans-serif',
                    ['--brand-primary' as any]: BRAND_COLORS.primary,
                    ['--brand-accent' as any]: BRAND_COLORS.accent
                  }}
                >
                  {/* Hover gradient background */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: 'linear-gradient(to bottom, #044860, #056385)'
                    }}
                  ></div>
                  
                  {/* Hover glow accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute w-40 h-40 bg-white rounded-full blur-3xl opacity-80" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-start">
                    <IconComponent 
                      className="w-8 h-8 flex-shrink-0 transition-colors duration-300 text-[var(--brand-primary)] group-hover:text-white" 
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 
                    className="font-bold mb-4 uppercase tracking-tight relative z-10 transition-colors duration-300 text-[var(--brand-primary)] group-hover:text-white"
                    style={{ fontSize: '20px' }}
                  >
                    {category.category}
                  </h3>
                  <div 
                    className="mb-4 h-0.5 w-12 relative z-10 transition-colors duration-300 group-hover:bg-white"
                    style={{ backgroundColor: BRAND_COLORS.accent }}
                  ></div>

                  <ul className="space-y-3 relative z-10">
                    {category.services.slice(0, 4).map((service, serviceIdx) => (
                      <li 
                        key={serviceIdx}
                        className="flex items-start gap-3 transition-colors duration-300 text-slate-600 group-hover:text-white"
                        style={{ fontSize: '15px', lineHeight: '1.6' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-300 bg-[var(--brand-primary)] group-hover:bg-white"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>

                  {category.services.length > 4 && (
                    <details className="group/details mt-4 relative z-10">
                      <summary 
                        className="cursor-pointer select-none text-sm font-semibold inline-flex items-center gap-2 transition-colors duration-300 text-[var(--brand-primary)] group-hover:text-white"
                      >
                        View all services
                        <span className="transition-transform duration-200 group-open/details:rotate-180">▾</span>
                      </summary>
                      <ul className="mt-3 space-y-3">
                        {category.services.slice(4).map((service, serviceIdx) => (
                          <li 
                            key={serviceIdx}
                            className="flex items-start gap-3 transition-colors duration-300 text-slate-600 group-hover:text-white"
                            style={{ fontSize: '15px', lineHeight: '1.6' }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-300 bg-[var(--brand-accent)] group-hover:bg-white"></span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              );
              })}
            </div>
          </div>

          {/* Industries Served Section - shown second */}
            <div 
              className="bg-white rounded-lg p-8 py-12"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              <div className="text-center mb-12">
                <div className="inline-block relative w-fit">
                  <h3 
                    className="page-headers"
                    style={{ color: BRAND_COLORS.accent }}
                  >
                    INDUSTRIES SERVED
                  </h3>
                  <div 
                    className="absolute -bottom-3 left-0 w-full h-1"
                    style={{ backgroundColor: BRAND_COLORS.primary }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {industries.map((item, index) => {
                  // Function to get icon based on industry
                  const getIndustryIcon = (industry: string) => {
                    if (industry.includes('MANUFACTURING')) {
                      // Manufacturing - Custom image
                      return (
                        <img 
                          src="/images/manufacturing.png" 
                          alt="Manufacturing" 
                          className="w-full h-full object-contain scale-[3]"
                        />
                      );
                    }
                    if (industry.includes('REAL ESTATE AND CONSTRUCTION')) {
                      // Real Estate and Construction - Custom image
                      return (
                        <img 
                          src="/images/real-estate-construction.png" 
                          alt="Real Estate and Construction" 
                          className="w-full h-full object-contain scale-[2.5]"
                        />
                      );
                    }
                    if (industry.includes('INFORMATION TECHNOLOGY')) {
                      // Information Technology - Custom image
                      return (
                        <img 
                          src="/images/information-technology.png" 
                          alt="Information Technology" 
                          className="w-full h-full object-contain scale-[2.5]"
                        />
                      );
                    }
                    if (industry.includes('FINANCIAL INSTITUTION')) {
                      // Financial Institution - Custom image
                      return (
                        <img 
                          src="/images/finance.png" 
                          alt="Financial Institution" 
                          className="w-full h-full object-contain scale-[2.5]"
                        />
                      );
                    }
                    if (industry.includes('HEALTHCARE')) {
                      // Healthcare - Custom image
                      return (
                        <img 
                          src="/images/healthcare.png" 
                          alt="Healthcare" 
                          className="w-full h-full object-contain scale-[1.3]"
                        />
                      );
                    }
                    if (industry.includes('RETAIL AND CONSUMER GOODS')) {
                      // Retail and Consumer Goods - Custom image
                      return (
                        <img 
                          src="/images/retail.png" 
                          alt="Retail and Consumer Goods" 
                          className="w-full h-full object-contain scale-[1.4]"
                        />
                      );
                    }
                    if (industry.includes('HOSPITALITY')) {
                      // Hospitality - Custom image
                      return (
                        <img 
                          src="/images/hospitality.png" 
                          alt="Hospitality" 
                          className="w-full h-full object-contain scale-[2.8]"
                        />
                      );
                    }
                    if (industry.includes('TRANSPORTATION AND LOGISTICS')) {
                      // Transportation and Logistics - Custom image
                      return (
                        <img 
                          src="/images/transport.png" 
                          alt="Transportation and Logistics" 
                          className="w-full h-full object-contain scale-[1.9]"
                        />
                      );
                    }
                    if (industry.includes('TEXTILE INDUSTRY')) {
                      // Textile Industry - Custom image
                      return (
                        <img 
                          src="/images/textile.png" 
                          alt="Textile Industry" 
                          className="w-full h-full object-contain scale-[1.5]"
                        />
                      );
                    }
                    if (industry.includes('AGRO BASED INDUSTRIES')) {
                      // Agro Based Industries - Custom image
                      return (
                        <img 
                          src="/images/agro.png" 
                          alt="Agro Based Industries" 
                          className="w-full h-full object-contain scale-[2.2]"
                        />
                      );
                    }
                    if (industry.includes('AUTOMOBILE INDUSTRY')) {
                      // Automobile Industry - Custom image
                      return (
                        <img 
                          src="/images/automobile.png" 
                          alt="Automobile Industry" 
                          className="w-full h-full object-contain scale-[1.8]"
                        />
                      );
                    }
                    if (industry.includes('PHARMA INDUSTRY')) {
                      // Pharma Industry - Custom image
                      return (
                        <img 
                          src="/images/pharma.png" 
                          alt="Pharma Industry" 
                          className="w-full h-full object-contain scale-[2]"
                        />
                      );
                    }
                    if (industry.includes('CO OPERATIVE SOCIETY')) {
                      // Co-operative Society - Custom image
                      return (
                        <img 
                          src="/images/cooprative.png" 
                          alt="Co-operative Society" 
                          className="w-full h-full object-contain scale-[2.2]"
                        />
                      );
                    }
                    if (industry.includes('GOVERNMENT')) {
                      // Government - Custom image
                      return (
                        <img 
                          src="/images/government.png" 
                          alt="Government" 
                          className="w-full h-full object-contain scale-[2.3]"
                        />
                      );
                    }
                    if (industry.includes('TRUST / NGO / NPO')) {
                      // Trust / NGO / NPO - Custom image
                      return (
                        <img 
                          src="/trust.png" 
                          alt="Trust / NGO / NPO" 
                          className="w-full h-full object-contain scale-[1.1]"
                        />
                      );
                    }
                    // Default building icon for others
                    return (
                      <svg className="w-8 h-8" stroke="#006080" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    );
                  };

                  return (
                    <div 
                      key={index} 
                      className="flex flex-col items-center text-center gap-4 group cursor-pointer"
                    >
                      {/* Icon */}
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 z-0"
                        style={{ backgroundColor: 'white' }}
                      >
                        {getIndustryIcon(item)}
                      </div>
                      
                      {/* Industry Name */}
                      <p 
                        className="relative z-10 text-[#006080] font-bold tracking-tight transition-colors duration-300 group-hover:text-[#FF541F]"
                        style={{ fontSize: '14px', lineHeight: '1.4' }}
                      >
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          {/* </div> */}
        </div>
      </section>

      {/* Consultation Form Section */}
      <ConsultationForm />
    </div>
  );
}
