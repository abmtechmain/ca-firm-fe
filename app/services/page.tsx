import React from 'react';
import Hero from '../components/Hero';
import ConsultationForm from '../components/ConsultationForm';
import { BRAND_COLORS } from '../constants';

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
          <div className="text-center space-y-6 mb-12">
            <div className="inline-block relative">
              <h2 
                className="font-extrabold tracking-tight uppercase"
                style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
              >
                SERVICES OVERVIEW
              </h2>
              <div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              ></div>
            </div>
            <p 
              className="text-slate-500 text-xs md:text-sm max-w-2xl mx-auto font-light leading-relaxed px-4"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              Our services cover essential taxation, audit, compliance, and advisory requirements for individuals, startups, and growing businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.65fr] gap-6 md:gap-8">
            {/* Services Grid */}
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
            </div>

            {/* Industries Served Sidebar */}
            <div 
              className="bg-white border border-[#a0c4d1] rounded-lg p-8 h-full"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              <div className="inline-block relative mb-8">
                <h3 
                  className="font-extrabold tracking-tight uppercase"
                  style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
                >
                  INDUSTRIES SERVED
                </h3>
                <div 
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                ></div>
              </div>
              <ul className="space-y-4">
                {industries.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-3 text-[#006080] font-bold tracking-tight"
                    style={{ fontSize: '20px', lineHeight: '1.8' }}
                  >
                    <span className="w-1 h-1 bg-[#006080] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <ConsultationForm />
    </div>
  );
}
