import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import KeyServicesCards from './components/KeyServicesCards';
import AuditIcon from './components/AuditIcon';
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
            buttonText: 'CALL US NOW',
            buttonLink: '/contact'
          },
          {
            title: 'Professional Audit & Assurance Services You Can Trust',
            description: 'Rigorous audit processes and compliance solutions ensuring your business meets all regulatory requirements with confidence.',
            image: '/images/hero-slide-3-signboard.png',
            buttonText: 'CALL US NOW',
            buttonLink: '/contact'
          }
        ]}
      />

      {/* Why Choose Us Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-8">
                <div className="inline-block relative w-fit mb-6">
                  <h2 
                    className="page-headers"
                    style={{ color: '#FF541F' }}
                  >
                    WHY CHOOSE US
                  </h2>
                  <div 
                    className="absolute -bottom-3 left-0 w-full h-1"
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
              <div className="bg-white rounded-xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 border border-gray-400 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:border-white">
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: 'linear-gradient(to bottom, #044860, #056385)'
                  }}
                ></div>
                
                {/* Top Right Circular Blur */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Bottom Middle Circle - Solid center with blurred edges */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Blurred outer circle - behind */}
                  <div className="absolute w-40 h-40 bg-white rounded-full blur-3xl opacity-80" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
                </div>

                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Image
                    src="/images/professional.png"
                    alt="Professional"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2 uppercase text-lg sm:text-xl md:text-2xl text-[#023F55] group-hover:!text-white transition-colors duration-300 relative z-10">
                  EXPERIENCED PROFESSIONALS
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#0000008A] group-hover:!text-white transition-colors duration-300 relative z-10">
                  Qualified Chartered Accountants With Hands-On Experience Across Taxation, Audit, And Regulatory Compliance.
                </p>
              </div>

              {/* Card 2: Timely Compliance */}
              <div className="bg-white rounded-xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 border border-gray-400 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:border-white">
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: 'linear-gradient(to bottom, #044860, #056385)'
                  }}
                ></div>
                
                {/* Top Right Circular Blur */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Bottom Middle Circle - Solid center with blurred edges */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Blurred outer circle - behind */}
                  <div className="absolute w-40 h-40 bg-white rounded-full blur-3xl opacity-80" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
                </div>

                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Image
                    src="/images/timely.png"
                    alt="Timely"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2 uppercase text-lg sm:text-xl md:text-2xl text-[#023F55] group-hover:!text-white transition-colors duration-300 relative z-10">
                  TIMELY COMPLIANCE
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#0000008A] group-hover:!text-white transition-colors duration-300 relative z-10">
                  Structured Processes And Proactive Reminders Ensure All Statutory Filings And Deadlines Are Met Without Last-Minute Stress.
                </p>
              </div>

              {/* Card 3: Practical Solutions */}
              <div className="bg-white rounded-xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 border border-gray-400 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:border-white">
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: 'linear-gradient(to bottom, #044860, #056385)'
                  }}
                ></div>
                
                {/* Top Right Circular Blur */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Bottom Middle Circle - Solid center with blurred edges */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Blurred outer circle - behind */}
                  <div className="absolute w-40 h-40 bg-white rounded-full blur-3xl opacity-80" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
                </div>

                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Image
                    src="/images/Group.png"
                    alt="Practical Solutions"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2 uppercase text-lg sm:text-xl md:text-2xl text-[#023F55] group-hover:!text-white transition-colors duration-300 relative z-10">
                  PRACTICAL SOLUTIONS
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#0000008A] group-hover:!text-white transition-colors duration-300 relative z-10">
                  Advice That Is Clear, Actionable, And Aligned With Your Business Realities – Not Just Theoretical Interpretations.
                </p>
              </div>

              {/* Card 4: Client-Focused Approach */}
              <div className="bg-white rounded-xl px-4 sm:px-6 py-6 sm:py-8 md:py-10 border border-gray-400 transition-all duration-300 cursor-pointer group relative overflow-hidden hover:border-white">
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: 'linear-gradient(to bottom, #044860, #056385)'
                  }}
                ></div>
                
                {/* Top Right Circular Blur */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Bottom Middle Circle - Solid center with blurred edges */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Blurred outer circle - behind */}
                  <div className="absolute w-40 h-40 bg-white rounded-full blur-3xl opacity-80" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
                </div>

                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Image
                    src="/images/Vector.png"
                    alt="Client-Focused Approach"
                    width={30}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2 uppercase text-lg sm:text-xl md:text-2xl text-[#023F55] group-hover:!text-white transition-colors duration-300 relative z-10">
                  CLIENT-FOCUSED APPROACH
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-[#0000008A] group-hover:!text-white transition-colors duration-300 relative z-10">
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
                    src="/images/growth-partners-team.png"
                    alt="Meet your growth partners - our professional team"
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
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <Link 
              href="/about-us"
              className="rounded-lg px-8 sm:px-10 py-4 sm:py-5 flex items-center gap-3 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, #F37920 0%, #FF8C42 100%)',
              }}
            >
              <span className="text-white font-semibold text-sm sm:text-base md:text-lg uppercase">
                MEET OUR TEAM MEMBERS
              </span>
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 pt-0 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-white relative overflow-hidden">
        {/* Background Logo with reduced opacity */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
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
            <div className="inline-block relative w-fit mb-6 md:mb-8">
              <h2
                className="page-headers"
                style={{ color: '#FF541F' }}
              >
                KEY SERVICES
              </h2>
              <div
                className="absolute -bottom-3 left-0 w-full h-1"
                style={{ backgroundColor: '#056385' }}
              ></div>
            </div>
          </div>

          {/* Service Cards Layout */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-8 md:mt-12 items-stretch">
            {/* Left Side - Large Card for Audit & Assurance */}
            <div className="w-full lg:w-[50%] flex">
              <div className="bg-white border rounded-2xl overflow-hidden w-full flex flex-col shadow-sm">
                {/* Image */}
                <div className="w-full h-1/2 relative">
                  <Image
                    src="/images/key-services.png"
                    alt="Accounting and financial services"
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
                    PROFESSIONAL AUDIT SERVICES
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#F37920]">
                      <AuditIcon />
                    </div>
                    <h3 
                      className="font-bold"
                      style={{ 
                        fontSize: '32px', 
                        color: '#023F55'
                      }}
                    >
                      AUDIT & ASSURANCE
                    </h3>
                  </div>
                  <p 
                    className="leading-relaxed"
                    style={{ 
                      fontSize: '18px', 
                      color: '#0000008A'
                    }}
                  >
                    Statutory, Internal, And Tax Audits Conducted With Professional Rigor To Ensure Transparency, Accuracy, And Regulatory Compliance For Your Business Operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - 2x2 Grid for Other Services */}
            <KeyServicesCards />
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 pt-0 pb-8 sm:pb-12 md:pb-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block relative w-fit mb-6">
              <h2 
                className="page-headers"
                style={{ color: '#FF541F' }}
              >
                HOW WE WORK
              </h2>
              <div 
                className="absolute -bottom-3 left-0 w-full h-1"
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
            <div className="bg-white rounded-xl px-6 py-6 border border-gray-400 text-center order-2 md:order-1 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F37920' }}>
                  <span className="text-white font-bold text-xl">1</span>
                </div>
              </div>
              <h3 
                className="font-bold mb-3 uppercase"
                style={{ 
                  color: '#023F55', 
                  fontSize: '18px',
                  lineHeight: '1.3'
                }}
              >
                KNOW YOUR BUSINESS
              </h3>
              <p 
                style={{ 
                  color: '#0000008A', 
                  fontSize: '15px',
                  lineHeight: '1.6'
                }}
              >
                We Begin By Understanding Your Business Structure, Operations, And Specific Requirements Through Detailed Discussions.
              </p>
            </div>

            {/* Image - Top Center */}
            <div className="w-full flex justify-center order-1 md:order-2">
              <Image
                src="/images/how-we-work.png"
                alt="Our office and team at work"
                width={400}
                height={200}
                className="rounded-xl object-cover w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto aspect-[4/2]"
              />
            </div>

            {/* Consulting - Top Right */}
            <div className="bg-white rounded-xl px-6 py-6 border border-gray-400 text-center order-3 md:order-3 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F37920' }}>
                  <span className="text-white font-bold text-xl">2</span>
                </div>
              </div>
              <h3 
                className="font-bold mb-3 uppercase"
                style={{ 
                  color: '#023F55', 
                  fontSize: '18px',
                  lineHeight: '1.3'
                }}
              >
                CONSULTING
              </h3>
              <p 
                style={{ 
                  color: '#0000008A', 
                  fontSize: '15px',
                  lineHeight: '1.6'
                }}
              >
                Our Expert Team Provides Professional Advice And Guidance Tailored To Your Business Needs And Compliance Requirements.
              </p>
            </div>

            {/* Bottom Row: Text | Text | Text */}
            {/* Planning and Execution - Bottom Left */}
            <div className="bg-white rounded-xl px-6 py-6 border border-gray-400 text-center order-4 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F37920' }}>
                  <span className="text-white font-bold text-xl">3</span>
                </div>
              </div>
              <h3 
                className="font-bold mb-3 uppercase"
                style={{ 
                  color: '#023F55', 
                  fontSize: '18px',
                  lineHeight: '1.3'
                }}
              >
                PLANNING AND EXECUTION
              </h3>
              <p 
                style={{ 
                  color: '#0000008A', 
                  fontSize: '15px',
                  lineHeight: '1.6'
                }}
              >
                We Develop Strategic Plans And Execute All Filings, Documentation, And Regulatory Procedures With Accuracy And Timeliness.
              </p>
            </div>

            {/* Analysis and Reporting - Bottom Center */}
            <div className="bg-white rounded-xl px-6 py-6 border border-gray-400 text-center order-5 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F37920' }}>
                  <span className="text-white font-bold text-xl">4</span>
                </div>
              </div>
              <h3 
                className="font-bold mb-3 uppercase"
                style={{ 
                  color: '#023F55', 
                  fontSize: '18px',
                  lineHeight: '1.3'
                }}
              >
                ANALYSIS AND REPORTING
              </h3>
              <p 
                style={{ 
                  color: '#0000008A', 
                  fontSize: '15px',
                  lineHeight: '1.6'
                }}
              >
                Our Team Reviews Your Financial Position, Identifies Risks And Opportunities, And Provides Comprehensive Reports.
              </p>
            </div>

            {/* Ongoing Support - Bottom Right */}
            <div className="bg-white rounded-xl px-6 py-6 border border-gray-400 text-center order-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F37920' }}>
                  <span className="text-white font-bold text-xl">5</span>
                </div>
              </div>
              <h3 
                className="font-bold mb-3 uppercase"
                style={{ 
                  color: '#023F55', 
                  fontSize: '18px',
                  lineHeight: '1.3'
                }}
              >
                ONGOING SUPPORT
              </h3>
              <p 
                style={{ 
                  color: '#0000008A', 
                  fontSize: '15px',
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
