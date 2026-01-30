import Image from 'next/image';
import Link from 'next/link';
import ServiceCard from './components/ServiceCard';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 lg:max-h-[60vh]">
          {/* Left Section - 70% */}
          <div className="w-full lg:w-[70%] lg:pr-8 flex flex-col justify-between gap-4 md:gap-6">
            <h1 
              className="leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px]"
              style={{ 
                color: '#044860',
                fontWeight: 'bold'
              }}
            >
              Trusted Chartered Accountants for Tax, GST & Compliance Solutions
            </h1>
            <p 
              className="leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl"
              style={{ 
                color: '#0000008A'
              }}
            >
              Providing reliable accounting, taxation, audit, and advisory services to individuals, startups, and growing businesses with accuracy and integrity.
            </p>
            <Link 
              href="/contact"
              className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-fit cursor-pointer inline-block text-center"
              style={{ 
                backgroundColor: '#F37920'
              }}
            >
              CALL US NOW
            </Link>
          </div>

          {/* Right Section - 30% */}
          <div className="w-full lg:w-[30%] relative lg:ml-auto">
            <Image
              src="/images/1abb6196e142f17f533a7e3c15ae5ffb09e8fcb1.jpg"
              alt="Professional Portrait"
              width={500}
              height={700}
              className="w-full h-full object-contain object-right rounded-lg"
              priority
            />
            {/* Rating Card on Top Left */}
            <div className="hidden md:block absolute top-2 md:top-4 lg:-top-6 left-2 md:left-4 lg:-left-6 xl:-left-8 bg-white rounded-2xl md:rounded-3xl lg:rounded-4xl shadow-lg p-2 md:p-3 px-3 md:px-6 lg:px-8 z-10 flex items-center gap-2 md:gap-3 font-poppins border border-gray-200">
              <div className='flex items-center gap-2 md:gap-4'>
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                <Image src="/images/Star 1.svg" alt="Star" width={50} height={50} className="w-full h-full" />
              </div>
              <div>
                <div className="text-base md:text-lg lg:text-xl xl:text-[24px] font-medium text-black">4.9</div>
                <div className="text-xs md:text-sm lg:text-base xl:text-[18px] text-gray-600">Review</div>
              </div>
              </div>
            </div>
            {/* Experience Card on Bottom Left */}
            <div className="hidden md:block absolute bottom-2 md:bottom-4 lg:-bottom-6 left-2 md:left-4 lg:-left-8 xl:-left-12 bg-white rounded-2xl md:rounded-3xl shadow-lg p-2 md:p-3 px-3 md:px-4 lg:px-6 z-10 flex items-center gap-2 md:gap-3 font-poppins border border-gray-200">
              <div className='flex items-center gap-2 md:gap-4'>
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#056385] rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-medium text-base md:text-lg lg:text-xl xl:text-[24px]">35</span>
              </div>
              <div>
                <div className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-[20px]">Years of</div>
                <div className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-[20px]">Experience</div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

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
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 md:py-16 bg-white relative overflow-hidden">
        {/* Background Logo with 20% opacity */}
        <div className="absolute inset-0 pointer-events-none" >
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
              <div className="text-center mb-12">
                <div className="inline-block relative mb-6">
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
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Top Row - 3 Cards */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {/* Card 1: Advisory */}
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
                title="ADVISORY"
                description="Practical Business And Compliance Advisory To Help Organizations Make Informed Decisions, Manage Risks, And Stay Legally Compliant."
              />

              {/* Card 2: Income Tax */}
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
                title="INCOME TAX"
                description="Personal And Business Income Tax Planning, Return Filing, And Assessments With A Focus On Compliance And Tax Efficiency."
              />

              {/* Card 3: Audit & Assurance */}
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                }
                title="AUDIT & ASSURANCE"
                description="Statutory, Internal, And Tax Audits Conducted With Professional Rigor To Ensure Transparency, Accuracy, And Regulatory Compliance."
              />
            </div>

            {/* Bottom Row - 2 Cards */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {/* Card 4: GST */}
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                }
                title="GST"
                description="GST Registration, Return Filing, Compliance, And Advisory Services To Help Businesses Navigate GST Regulations Effectively."
              />

              {/* Card 5: Company Law */}
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                }
                title="COMPANY LAW"
                description="Incorporation, Compliance, Secretarial Services, And Corporate Governance Support For Companies And LLPs."
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
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

          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-8 md:mt-12 lg:mt-16">
            {/* Left Column */}
            <div className="w-full lg:flex-1 flex flex-col gap-8 md:gap-10 lg:gap-12">
              {/* Consultation */}
              <div className="text-left lg:text-left">
                <h3 
                  className="font-bold mb-3 uppercase"
                  style={{ 
                    color: '#056385', 
                    fontSize: '20px',
                    lineHeight: '1.3'
                  }}
                >
                  CONSULTATION
                </h3>
                <p 
                  style={{ 
                    color: '#0000008A', 
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  We Begin By Understanding Your Requirements, Business Structure, And Compliance Needs Through A Detailed Discussion.
                </p>
              </div>

              {/* Analysis */}
              <div className="text-left lg:text-left">
                <h3 
                  className="font-bold mb-3 uppercase"
                  style={{ 
                    color: '#056385', 
                    fontSize: '20px',
                    lineHeight: '1.3'
                  }}
                >
                  ANALYSIS
                </h3>
                <p 
                  style={{ 
                    color: '#0000008A', 
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  Our Team Reviews Your Financial And Regulatory Position To Identify Risks, Obligations, And Opportunities.
                </p>
              </div>
            </div>

            {/* Central Image */}
            <div className="w-full lg:flex-shrink-0 lg:w-auto flex justify-center my-4 lg:my-0">
              <Image
                src="/images/024d546ae1f8a1e7f688d26bf57ae6a52b6c5d37.jpg"
                alt="How We Work"
                width={400}
                height={500}
                className="rounded-xl object-cover w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto aspect-[4/5]"
              />
            </div>

            {/* Right Column */}
            <div className="w-full lg:flex-1 flex flex-col gap-8 md:gap-10 lg:gap-12">
              {/* Execution */}
              <div className="text-left lg:text-right">
                <h3 
                  className="font-bold mb-3 uppercase"
                  style={{ 
                    color: '#056385', 
                    fontSize: '20px',
                    lineHeight: '1.3'
                  }}
                >
                  EXECUTION
                </h3>
                <p 
                  style={{ 
                    color: '#0000008A', 
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}
                >
                  We Handle All Filings, Documentation, And Regulatory Procedures With Accuracy And Timely Execution.
                </p>
              </div>

              {/* Ongoing Support */}
              <div className="text-left lg:text-right">
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
