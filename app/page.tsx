import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ServiceCard from './components/ServiceCard';
import ContactSection from './components/ContactSection';
import HeroCarousel from './components/HeroCarousel';

export const metadata: Metadata = {
  title: 'Home',
  description: 'SKMRD & Associates - Trusted Chartered Accountants in Nashik providing expert tax, GST, audit, and compliance services. Over 35 years of professional excellence serving businesses across India.',
  keywords: ['Chartered Accountants Nashik', 'CA Firm Nashik', 'Tax Services', 'GST Services', 'Audit Services', 'Accounting Services', 'Financial Advisory', 'Tax Consultant Nashik'],
  openGraph: {
    title: 'SKMRD & Associates | Chartered Accountants | Nashik',
    description: 'Trusted Chartered Accountants in Nashik providing expert tax, GST, audit, and compliance services. Over 35 years of professional excellence.',
    url: '/',
    images: ['/images/footer-logoo.png'],
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section - Carousel */}
      <HeroCarousel
        slides={[
          {
            title: 'Trusted Chartered Accountants for Tax, GST & Compliance Solutions',
            description: 'Providing reliable accounting, taxation, audit, and advisory services to individuals, startups, and growing businesses with accuracy and integrity.',
            image: '/images/1abb6196e142f17f533a7e3c15ae5ffb09e8fcb1.jpg',
            buttonText: 'CALL US NOW',
            buttonLink: '/contact'
          },
          {
            title: 'Expert Financial Advisory & Strategic Planning Services',
            description: 'Comprehensive financial solutions tailored to your business needs, helping you make informed decisions and achieve your financial goals.',
            image: '/images/07a218b42ba9b47ead7dbb5118c354ba40d191b6.jpg',
            buttonText: 'GET STARTED',
            buttonLink: '/contact'
          },
          {
            title: 'Professional Audit & Assurance Services You Can Trust',
            description: 'Rigorous audit processes and compliance solutions ensuring your business meets all regulatory requirements with confidence.',
            image: '/images/d7b411f0d5119b394fee184dc05ce3b4caf98d3d.jpg',
            buttonText: 'LEARN MORE',
            buttonLink: '/services'
          }
        ]}
      />

      {/* Why Choose Us Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-8">
                <div className="inline-block relative mb-6">
                  <h2 
                    className="font-extrabold tracking-tight uppercase"
                    style={{ 
                      fontSize: '24px', 
                      color: '#FF541F'
                    }}
                  >
                    WHY CHOOSE US
                  </h2>
                  <div 
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
                    style={{ backgroundColor: '#056385' }}
                  ></div>
                </div>
            <p 
              className="max-w-3xl mx-auto"
              style={{ 
                fontSize: '20px', 
                color: '#0000008A'
              }}
            >
              Providing reliable accounting, taxation, audit, and advisory services to individuals, startups, and growing businesses with accuracy and integrity.
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-8 md:mt-12 items-stretch">
            {/* Left Side - 2x2 Grid */}
            <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Card 1: Experienced Professionals */}
              <div className="bg-white rounded-xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 border border-gray-400">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src="/images/professional.png"
                    alt="Professional"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2 uppercase text-lg sm:text-xl md:text-2xl" style={{ color: '#023F55' }}>
                  EXPERIENCED PROFESSIONALS
                </h3>
                <p className="text-sm sm:text-base md:text-lg" style={{ color: '#0000008A' }}>
                  Qualified Chartered Accountants With Hands-On Experience Across Taxation, Audit, And Regulatory Compliance.
                </p>
              </div>

              {/* Card 2: Timely Compliance */}
              <div className="bg-white rounded-xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 border border-gray-400">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src="/images/timely.png"
                    alt="Timely"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2 uppercase text-lg sm:text-xl md:text-2xl" style={{ color: '#023F55' }}>
                  TIMELY COMPLIANCE
                </h3>
                <p className="text-sm sm:text-base md:text-lg" style={{ color: '#0000008A' }}>
                  Structured Processes And Proactive Reminders Ensure All Statutory Filings And Deadlines Are Met Without Last-Minute Stress.
                </p>
              </div>

              {/* Card 3: Practical Solutions */}
              <div className="bg-white rounded-xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 border border-gray-400">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src="/images/Group.png"
                    alt="Practical Solutions"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2 uppercase text-lg sm:text-xl md:text-2xl" style={{ color: '#023F55' }}>
                  PRACTICAL SOLUTIONS
                </h3>
                <p className="text-sm sm:text-base md:text-lg" style={{ color: '#0000008A' }}>
                  Advice That Is Clear, Actionable, And Aligned With Your Business Realities – Not Just Theoretical Interpretations.
                </p>
              </div>

              {/* Card 4: Client-Focused Approach */}
              <div className="bg-white rounded-xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 border border-gray-400">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src="/images/Vector.png"
                    alt="Client-Focused Approach"
                    width={30}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2 uppercase text-lg sm:text-xl md:text-2xl" style={{ color: '#023F55' }}>
                  CLIENT-FOCUSED APPROACH
                </h3>
                <p className="text-sm sm:text-base md:text-lg" style={{ color: '#0000008A' }}>
                  Personalized Attention, Transparent Communication, And Solutions Tailored To Your Specific Requirements.
                </p>
              </div>
            </div>

            {/* Right Side - Large Card */}
            <div className="w-full lg:w-[50%] flex">
              <div className="bg-white rounded-xl border border-gray-400 overflow-hidden w-full flex flex-col">
                {/* Image */}
                <div className="w-full h-1/2 relative">
                  <Image
                    src="/images/024d546ae1f8a1e7f688d26bf57ae6a52b6c5d37.jpg"
                    alt="Interlocked Hands - Growth Partners"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <p 
                    className="uppercase mb-2"
                    style={{ 
                      fontSize: '18px', 
                      color: '#F37920',
                    }}
                  >
                    MEET YOUR GROWTH PARTNERS
                  </p>
                  <h3 
                    className="font-bold mb-4"
                    style={{ 
                      fontSize: '32px', 
                      color: '#023F55'
                    }}
                  >
                    GROWTH PARTNERS
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ 
                      fontSize: '18px', 
                      color: '#0000008A'
                    }}
                  >
                    We Believe That Great Financial Advice Is Built On Great Relationships. Our Team Is A Dynamic Mix Of Experienced Veterans And Innovative Young Professionals Who Understand The Pulse Of Modern Business. We Move Beyond Traditional 'compliance-Only' Roles To Act As Your Dedicated Business Partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Button Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <Link 
              href="/about-us"
              className="bg-white rounded-lg border-[1px] px-8 py-4 flex items-center gap-3 hover:opacity-90 transition-opacity border-gray-400 cursor-pointer"
            >
              <span className="text-[16px] text-[#F37920]">MEET OUR TEAM MEMBERS</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#F37920' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Logo with reduced opacity */}
        <div className="absolute inset-0 pointer-events-none opacity-5" >
          <Image
            src="/images/footer-logo.png"
            alt="Background Logo"
            fill
            className="object-cover"
            style={{ objectPosition: 'left center' }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block relative mb-6 md:mb-8">
              <h2 
                className="font-extrabold tracking-tight uppercase"
                style={{ 
                  fontSize: '24px', 
                  color: '#FF541F'
                }}
              >
                KEY SERVICES
              </h2>
              <div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
                style={{ backgroundColor: '#056385' }}
              ></div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {/* Top Row - 3 Cards */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 md:gap-8 lg:gap-10">
              {/* Card 1: Audit & Assurance */}
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                }
                title="AUDIT & ASSURANCE"
                description="Statutory, Internal, And Tax Audits Conducted With Professional Rigor To Ensure Transparency, Accuracy, And Regulatory Compliance."
              />

              {/* Card 2: Advisory */}
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
                title="ADVISORY"
                description="Business Consulting, Financial Restructuring, Strategic Planning, And Risk Advisory To Help Organizations Make Informed Decisions."
              />

              {/* Card 3: Taxation */}
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="TAXATION"
                description="Corporate Tax Planning, Personal Tax Services, Indirect Tax (GST/VAT) Advisory, And Comprehensive Tax Compliance Solutions."
              />
            </div>

            {/* Bottom Row - 2 Cards */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 md:gap-8 lg:gap-10">
              {/* Card 4: Accounting & Bookkeeping */}
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                }
                title="ACCOUNTING & BOOKKEEPING"
                description="Financial Statement Preparation, Payroll Services, Management Accounting, And Virtual CFO Services For Comprehensive Financial Management."
              />

              {/* Card 5: Corporate Services */}
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
                title="CORPORATE SERVICES"
                description="Company Formation, Secretarial Services, Corporate Governance, And Regulatory Compliance Support For Companies And LLPs."
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block relative mb-6">
              <h2 
                className="font-extrabold tracking-tight uppercase"
                style={{ 
                  fontSize: '24px', 
                  color: '#FF541F'
                }}
              >
                HOW WE WORK
              </h2>
              <div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
                style={{ backgroundColor: '#056385' }}
              ></div>
            </div>
            <p 
              className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg px-4"
              style={{ 
                fontSize: '16px', 
                color: '#0000008A'
              }}
            >
              Providing reliable accounting, taxation, audit, and advisory services to individuals, startups, and growing businesses with accuracy and integrity.
            </p>
          </div>

          {/* Main Content Area - 3x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Top Row: Text | Image | Text */}
            {/* Know Your Business - Top Left */}
            <div className="text-center order-2 md:order-1">
              <h3 
                className="font-bold mb-3 uppercase"
                style={{ 
                  color: '#056385', 
                  fontSize: '20px',
                  lineHeight: '1.3'
                }}
              >
                KNOW YOUR BUSINESS
              </h3>
              <p 
                style={{ 
                  color: '#0000008A', 
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                We Begin By Understanding Your Business Structure, Operations, And Specific Requirements Through Detailed Discussions.
              </p>
            </div>

            {/* Image - Top Center */}
            <div className="w-full flex justify-center order-1 md:order-2">
              <Image
                src="/images/024d546ae1f8a1e7f688d26bf57ae6a52b6c5d37.jpg"
                alt="How We Work"
                width={400}
                height={200}
                className="rounded-xl object-cover w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto aspect-[4/2]"
              />
            </div>

            {/* Consulting - Top Right */}
            <div className="text-center order-3 md:order-3">
              <h3 
                className="font-bold mb-3 uppercase"
                style={{ 
                  color: '#056385', 
                  fontSize: '20px',
                  lineHeight: '1.3'
                }}
              >
                CONSULTING
              </h3>
              <p 
                style={{ 
                  color: '#0000008A', 
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                Our Expert Team Provides Professional Advice And Guidance Tailored To Your Business Needs And Compliance Requirements.
              </p>
            </div>

            {/* Bottom Row: Text | Text | Text */}
            {/* Planning and Execution - Bottom Left */}
            <div className="text-center order-4">
              <h3 
                className="font-bold mb-3 uppercase"
                style={{ 
                  color: '#056385', 
                  fontSize: '20px',
                  lineHeight: '1.3'
                }}
              >
                PLANNING AND EXECUTION
              </h3>
              <p 
                style={{ 
                  color: '#0000008A', 
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                We Develop Strategic Plans And Execute All Filings, Documentation, And Regulatory Procedures With Accuracy And Timeliness.
              </p>
            </div>

            {/* Analysis and Reporting - Bottom Center */}
            <div className="text-center order-5">
              <h3 
                className="font-bold mb-3 uppercase"
                style={{ 
                  color: '#056385', 
                  fontSize: '20px',
                  lineHeight: '1.3'
                }}
              >
                ANALYSIS AND REPORTING
              </h3>
              <p 
                style={{ 
                  color: '#0000008A', 
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                Our Team Reviews Your Financial Position, Identifies Risks And Opportunities, And Provides Comprehensive Reports.
              </p>
            </div>

            {/* Ongoing Support - Bottom Right */}
            <div className="text-center order-6">
              <h3 
                className="font-bold mb-3 uppercase"
                style={{ 
                  color: '#056385', 
                  fontSize: '20px',
                  lineHeight: '1.3'
                }}
              >
                ONGOING SUPPORT
              </h3>
              <p 
                style={{ 
                  color: '#0000008A', 
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}
              >
                Continuous Assistance, Updates, And Advisory Support To Ensure Ongoing Compliance And Informed Decision-Making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 md:py-16 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/07a218b42ba9b47ead7dbb5118c354ba40d191b6.jpg"
            alt="Background"
            fill
            className="object-cover"
            style={{ filter: 'blur(4px)', objectPosition: 'top' }}
          />
          <div className="absolute inset-0 bg-[#044860] opacity-90"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 py-8 md:py-12 lg:py-16">
          {/* Top Section - Heading and Description */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-8 md:mb-12 lg:mb-16">
            {/* Left - Main Heading */}
            <div className="w-full lg:w-[70%]">
              <h2 
                className="text-white font-bold leading-tight"
                style={{ 
                  fontSize: '24px',
                  lineHeight: '1.3'
                }}
              >
                NUMBERS THAT SPEAK TO WHAT<br />WE'VE BUILT OVER THE YEARS
              </h2>
            </div>

            {/* Right - Description */}
            <div className="w-full lg:w-[30%] flex items-center">
              <p 
                className="text-white text-sm md:text-base"
                style={{ 
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}
              >
                Years Of Work Across Industries. Hundreds Of Businesses Kept Compliant. Trust Earned One Client At A Time.
              </p>
            </div>
          </div>

          {/* Data Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Experience */}
            <div className="backdrop-blur-sm rounded-xl border border-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div 
                className="text-white font-bold mb-2 md:mb-3"
                style={{ fontSize: '36px' }}
              >
                30+
              </div>
              <div 
                className="text-white uppercase text-xs sm:text-sm md:text-base"
                style={{ fontSize: '14px' }}
              >
                EXPERIENCE
              </div>
            </div>

            {/* Client */}
            <div className="backdrop-blur-sm rounded-xl border border-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div 
                className="text-white font-bold mb-2 md:mb-3"
                style={{ fontSize: '36px' }}
              >
                1000+
              </div>
              <div 
                className="text-white uppercase text-xs sm:text-sm md:text-base"
                style={{ fontSize: '14px' }}
              >
                CLIENT
              </div>
            </div>

            {/* Industry Covered */}
            <div className="backdrop-blur-sm rounded-xl border border-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div 
                className="text-white font-bold mb-2 md:mb-3"
                style={{ fontSize: '36px' }}
              >
                20+
              </div>
              <div 
                className="text-white uppercase text-xs sm:text-sm md:text-base"
                style={{ fontSize: '14px' }}
              >
                INDUSTRY COVERED
              </div>
            </div>

            {/* Branches */}
            <div className="backdrop-blur-sm rounded-xl border border-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div 
                className="text-white font-bold mb-2 md:mb-3"
                style={{ fontSize: '36px' }}
              >
                5+
              </div>
              <div 
                className="text-white uppercase text-xs sm:text-sm md:text-base"
                style={{ fontSize: '14px' }}
              >
                BRANCHES
              </div>
            </div>

            {/* Experts */}
            <div className="backdrop-blur-sm rounded-xl border border-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div 
                className="text-white font-bold mb-2 md:mb-3"
                style={{ fontSize: '36px' }}
              >
                5+
              </div>
              <div 
                className="text-white uppercase text-xs sm:text-sm md:text-base"
                style={{ fontSize: '14px' }}
              >
                EXPERTS
              </div>
            </div>

            {/* Team */}
            <div className="backdrop-blur-sm rounded-xl border border-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <div 
                className="text-white font-bold mb-2 md:mb-3"
                style={{ fontSize: '36px' }}
              >
                20+
              </div>
              <div 
                className="text-white uppercase text-xs sm:text-sm md:text-base"
                style={{ fontSize: '14px' }}
              >
                TEAM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}

    </div>
  );
}
