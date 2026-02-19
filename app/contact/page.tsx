'use client';

import { useState, useRef } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import Hero from '../components/Hero';
import { BRAND_COLORS, CONTACT_INFO } from '../constants';
import { sendEmail } from '../utils/emailService';

export default function Contact() {
  // const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  // const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // const handleRecaptchaChange = (value: string | null) => {
  //   setRecaptchaValue(value);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // if (!recaptchaValue) {
    //   setSubmitMessage({ type: 'error', text: 'Please complete the reCAPTCHA verification' });
    //   return;
    // }

    setIsSubmitting(true);
    setSubmitMessage(null);

    const formData = new FormData(e.currentTarget);
    const formValues = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
      formType: 'contact' as const,
    };

    try {
      const result = await sendEmail(formValues);
      if (result.success) {
        setSubmitMessage({ type: 'success', text: 'Thank you! Your enquiry has been submitted successfully.' });
        formRef.current?.reset();
        // recaptchaRef.current?.reset();
      } else {
        setSubmitMessage({ type: 'error', text: result.error || 'Failed to submit enquiry. Please try again.' });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const locations = CONTACT_INFO.offices.map((office, idx) => ({
    city: office.name.toUpperCase().replace('HEAD OFFICE', 'HEAD OFFICE'),
    address: office.address,
    mobile: office.mobile,
    mapLink: office.mapLink
  }));

  const branches = CONTACT_INFO.branches.map((branch, idx) => ({
    city: branch.name.toUpperCase(),
    address: branch.address,
    mobile: '',
    mapLink: branch.mapLink
  }));

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
              <div className="relative inline-block">
                <h2 
                  className="font-extrabold tracking-tight uppercase block"
                  style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
                >
                  REQUEST A CONSULTATION
                </h2>
                <div 
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                ></div>
              </div>
              <p 
                className="text-slate-500 text-sm leading-relaxed max-w-sm"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
              >
                Our articles cover important developments, regulatory updates, and practical guidance on taxation, compliance, and business matters.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
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
                {/* <a 
                  href="https://linkedin.com" 
                  className="w-10 h-10 rounded-full bg-[#006080] text-white flex items-center justify-center hover:bg-[#004d66] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a> */}
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div 
              className="bg-white rounded-xl shadow-xl border border-slate-100 p-4 sm:p-6 md:p-8 lg:p-10"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center ${
                    submitMessage.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
                <div className="w-full">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name :"
                    required
                    className="w-full border border-slate-200 rounded-lg p-3 px-5 text-sm outline-none focus:border-[#006080] transition-colors text-slate-700 placeholder:text-slate-400"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email :"
                    required
                    className="w-full border border-slate-200 rounded-lg p-3 px-5 text-sm outline-none focus:border-[#006080] transition-colors text-slate-700 placeholder:text-slate-400"
                    style={{ fontSize: '16px' }}
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Mobile No :"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    maxLength={10}
                    className="w-full border border-slate-200 rounded-lg p-3 px-5 text-sm outline-none focus:border-[#006080] transition-colors text-slate-700 placeholder:text-slate-400"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div className="relative">
                  <select 
                    name="service"
                    required
                    className="w-full border border-slate-200 rounded-lg p-3 px-5 text-sm outline-none focus:border-[#006080] transition-colors text-slate-400 bg-white appearance-none"
                    style={{ fontSize: '16px' }}
                  >
                    <option value="">Service Required</option>
                    <option value="Audit & Assurance">Audit & Assurance</option>
                    <option value="Taxation">Taxation</option>
                    <option value="Business Advisory">Business Advisory</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="w-full">
                  <textarea 
                    name="message"
                    placeholder="Message :"
                    rows={5}
                    required
                    className="w-full border border-slate-200 rounded-lg p-5 text-sm outline-none focus:border-[#006080] transition-colors text-slate-700 placeholder:text-slate-400 resize-none"
                    style={{ fontSize: '16px' }}
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                  {/* reCAPTCHA */}
                  {/* <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                      onChange={handleRecaptchaChange}
                    />
                  </div> */}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#006080] hover:bg-[#004d66] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg transition-all text-xs tracking-wider uppercase shadow-md active:scale-95"
                    style={{ fontSize: '16px' }}
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Head Offices Section */}
          <div className="space-y-10">
            <div className="relative text-center">
              <h3 
                className="text-[#F37920] font-bold tracking-widest uppercase inline-block relative"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '28px' }}
              >
                HEAD OFFICES
              </h3>
              <div 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              ></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {locations.map((loc, idx) => (
                <div 
                  key={idx} 
                  className="bg-gradient-to-br from-white to-slate-50 rounded-xl border-2 border-slate-200 p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#006080] group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: BRAND_COLORS.primary + '15' }}
                      >
                        <svg className="w-6 h-6" style={{ color: BRAND_COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 
                        className="text-[#006080] font-bold tracking-wide"
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '22px' }}
                      >
                        {loc.city}
                      </h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p 
                          className="text-slate-600 leading-relaxed text-left flex-1"
                          style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                        >
                          {loc.address}
                        </p>
                      </div>
                      
                      {loc.mobile && (
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a 
                            href={`tel:${loc.mobile}`}
                            className="text-slate-700 hover:text-[#006080] font-medium transition-colors"
                            style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                          >
                            {loc.mobile}
                          </a>
                        </div>
                      )}
                      
                      {loc.mapLink && (
                        <div className="mt-4 rounded-lg overflow-hidden border border-slate-200 h-[250px]">
                          {idx === 0 ? (
                            <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9339397322456!2d73.7848116!3d20.007362399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb002deb7717%3A0x6232df753e3ea58c!2sS%20K%20M%20R%20D%20%26%20Associates%20(%20Chartered%20Accountant)!5e1!3m2!1sen!2sin!4v1771495086717!5m2!1sen!2sin" 
                              width="100%" 
                              height="100%" 
                              style={{ border: 0 }} 
                              allowFullScreen 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                          ) : (
                            <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.26944205599!2d73.82801329424905!3d19.972219428514553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb4d976bb54d%3A0x54861f2d6c9411f9!2sSKMRD%20%26%20Associates%20formally%20Known%20as%20Shinde%20Kadam%20%26%20Associates!5e1!3m2!1sen!2sin!4v1771495141559!5m2!1sen!2sin" 
                              width="100%" 
                              height="100%" 
                              style={{ border: 0 }} 
                              allowFullScreen 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Branches Section */}
          <div className="space-y-10">
            <div className="relative text-center">
              <h3 
                className="text-[#F37920] font-bold tracking-widest uppercase inline-block relative"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '28px' }}
              >
                BRANCHES
              </h3>
              <div 
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              ></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branches.map((branch, idx) => (
                <div 
                  key={idx} 
                  className="bg-gradient-to-br from-white to-slate-50 rounded-xl border-2 border-slate-200 p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#006080] group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: BRAND_COLORS.primary + '15' }}
                      >
                        <svg className="w-5 h-5" style={{ color: BRAND_COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 
                        className="text-[#006080] font-bold tracking-wide"
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '18px' }}
                      >
                        {branch.city}
                      </h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p 
                          className="text-slate-600 leading-relaxed text-left flex-1"
                          style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '15px' }}
                        >
                          {branch.address}
                        </p>
                      </div>
                      
                      {branch.mapLink && (
                        <a
                          href={branch.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#006080] hover:text-[#004d66] font-semibold transition-all duration-200 group-hover:gap-3 mt-4"
                          style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '14px' }}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>View on Google Maps</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          {/* <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[400px]">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d73.7898!3d19.9975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzUxLjAiTiA3M8KwNDcnMjMuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=${encodeURIComponent(CONTACT_INFO.offices[0].address)}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div> */}
        </div>
      </section>
    </div>
  );
}
