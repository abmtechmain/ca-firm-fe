'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Hero from '../components/Hero';

export default function Contact() {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const locations = [
    {
      city: 'BANGALORE',
      address: '4/1, Brunton Road, Opp To Old Passport Office, Off M.G. Road, Bangalore - 560025, Karnataka'
    },
    {
      city: 'HYDERABAD',
      address: '4th Floor, Nest Vault Co-Working, Apurupa Turbo Tower, No:36 Pillar No:1680, Jubilee Hills, Hyderabad, Telangana 500033.'
    },
    {
      city: 'MUMBAI',
      address: '5th Floor, NO, Quest Technopolis Knowledge Park, Mahankali Caves Road, Andheri East, Mumbai, Mumbai Suburban, Maharashtra, 400093'
    },
    {
      city: 'NASHIK',
      address: 'Rajnarayan Towers, 4th Floor 70, Race Course Road, Gopalapuram, Coimbatore - 641018, Nashik'
    }
  ];

  return (
    <div>
      <Hero
        image="/images/d7b411f0d5119b394fee184dc05ce3b4caf98d3d.jpg"
        title="Get in Touch with Our Team"
        subtext="Connect with us for professional guidance on taxation, compliance, and advisory matters."
      />
      
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 lg:space-y-24">
          {/* Consultation Section */}
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left Side: Text & Socials */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <h2 
                className="text-[#006080] font-bold uppercase tracking-tight"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '24px' }}
              >
                REQUEST A CONSULTATION
              </h2>
              <p 
                className="text-slate-500 text-sm leading-relaxed max-w-sm"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
              >
                Our articles cover important developments, regulatory updates, and practical guidance on taxation, compliance, and business matters.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="mailto:contact@example.com" 
                  className="w-10 h-10 rounded-full bg-[#006080] text-white flex items-center justify-center hover:bg-[#004d66] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  className="w-10 h-10 rounded-full bg-[#006080] text-white flex items-center justify-center hover:bg-[#004d66] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="w-10 h-10 rounded-full bg-[#006080] text-white flex items-center justify-center hover:bg-[#004d66] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div 
              className="bg-white rounded-xl shadow-xl border border-slate-100 p-4 sm:p-6 md:p-8 lg:p-10"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              <form className="space-y-4">
                <div className="w-full">
                  <input 
                    type="text" 
                    placeholder="Name :" 
                    className="w-full border border-slate-200 rounded-lg p-3 px-5 text-sm outline-none focus:border-[#006080] transition-colors text-slate-700 placeholder:text-slate-400"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    placeholder="Email :" 
                    className="w-full border border-slate-200 rounded-lg p-3 px-5 text-sm outline-none focus:border-[#006080] transition-colors text-slate-700 placeholder:text-slate-400"
                    style={{ fontSize: '16px' }}
                  />
                  <input 
                    type="tel" 
                    placeholder="Mobile No :" 
                    className="w-full border border-slate-200 rounded-lg p-3 px-5 text-sm outline-none focus:border-[#006080] transition-colors text-slate-700 placeholder:text-slate-400"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div className="relative">
                  <select 
                    className="w-full border border-slate-200 rounded-lg p-3 px-5 text-sm outline-none focus:border-[#006080] transition-colors text-slate-400 bg-white appearance-none"
                    style={{ fontSize: '16px' }}
                  >
                    <option value="">Service Required</option>
                    <option value="audit">Audit & Assurance</option>
                    <option value="tax">Taxation</option>
                    <option value="advisory">Business Advisory</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="w-full">
                  <textarea 
                    placeholder="Message :" 
                    rows={5}
                    className="w-full border border-slate-200 rounded-lg p-5 text-sm outline-none focus:border-[#006080] transition-colors text-slate-700 placeholder:text-slate-400 resize-none"
                    style={{ fontSize: '16px' }}
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                      onChange={handleRecaptchaChange}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="bg-[#006080] hover:bg-[#004d66] text-white font-bold py-3 px-8 rounded-lg transition-all text-xs tracking-wider uppercase shadow-md active:scale-95"
                    style={{ fontSize: '16px' }}
                  >
                    SUBMIT ENQUIRY
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Locations Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {locations.map((loc, idx) => (
              <div key={idx} className="space-y-3">
                <h4 
                  className="text-[#006080] font-semibold tracking-widest"
                  style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '24px' }}
                >
                  {loc.city} :
                </h4>
                <p 
                  className="text-slate-500 leading-relaxed px-4 md:px-0 font-light"
                  style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                >
                  {loc.address}
                </p>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7155099999997!2d72.8776559!3d19.1130139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c6b8b8b8b9%3A0x3b3b3b3b3b3b3b3b!2sQuest%20Technopolis%20Knowledge%20Park%2C%20Mahankali%20Caves%20Road%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400093!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
