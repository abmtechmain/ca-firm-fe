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
      
      <section className="w-full px-4 sm:px-6 lg:px-18 py-10 sm:py-12 md:py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
          {/* Consultation Section */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left Side: Text & Socials */}
            <div className="space-y-5 md:space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: BRAND_COLORS.primary, backgroundColor: `${BRAND_COLORS.primary}10` }}
              >
                Contact
              </div>
              <div className="inline-block relative w-fit">
                <h2 
                  className="font-extrabold tracking-tight uppercase"
                  style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
                >
                  Request A Consultation
                </h2>
                <div 
                  className="absolute -bottom-3 left-0 w-full h-1"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                ></div>
              </div>
              <p 
                className="text-slate-600 text-sm leading-relaxed max-w-md"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
              >
                Share your requirements and we’ll recommend the right service path. Our team responds with clear next steps and a practical scope.
              </p>

              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_COLORS.accent }}></span>
                  Response within 24 business hours
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_COLORS.accent }}></span>
                  Confidential handling of your information
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_COLORS.accent }}></span>
                  Clear, actionable guidance
                </li>
              </ul>

              <div className="rounded-xl bg-white/70 ring-1 ring-black/5 p-4 sm:p-5">
                <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: BRAND_COLORS.accent }}>
                  Contact
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="font-semibold">Email:</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">{CONTACT_INFO.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="font-semibold">Landline:</span>
                    <span>{CONTACT_INFO.landline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form Card */}
            <div 
              className="bg-white rounded-2xl shadow-lg border border-slate-100 p-5 sm:p-7 md:p-8 lg:p-10"
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
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your full name"
                    required
                    className="w-full border border-slate-200 rounded-xl p-3 px-4 text-sm outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/15 transition-colors text-slate-700 placeholder:text-slate-400 bg-white"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="name@company.com"
                      required
                      className="w-full border border-slate-200 rounded-xl p-3 px-4 text-sm outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/15 transition-colors text-slate-700 placeholder:text-slate-400 bg-white"
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Mobile</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="10-digit number"
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit mobile number"
                      maxLength={10}
                      className="w-full border border-slate-200 rounded-xl p-3 px-4 text-sm outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/15 transition-colors text-slate-700 placeholder:text-slate-400 bg-white"
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Service Required</label>
                  <select 
                    name="service"
                    required
                    className="w-full border border-slate-200 rounded-xl p-3 px-4 text-sm outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/15 transition-colors text-slate-700 bg-white appearance-none"
                    style={{ fontSize: '16px' }}
                  >
                    <option value="">Service Required</option>
                    <option value="Audit & Assurance">Audit & Assurance</option>
                    <option value="Taxation">Taxation</option>
                    <option value="Business Advisory">Business Advisory</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="absolute right-4 top-[52px] -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="w-full">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">Message</label>
                  <textarea 
                    name="message"
                    placeholder="Briefly describe your requirement"
                    rows={4}
                    required
                    className="w-full border border-slate-200 rounded-xl p-4 text-sm outline-none focus:border-[#006080] focus:ring-2 focus:ring-[#006080]/15 transition-colors text-slate-700 placeholder:text-slate-400 resize-none bg-white"
                    style={{ fontSize: '16px' }}
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
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
                    className="bg-[#006080] hover:bg-[#004d66] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 px-8 rounded-xl transition-all text-xs tracking-wider uppercase shadow-md active:scale-95"
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
            <div className="text-center">
              <div className="inline-block relative w-fit">
                <h3 
                  className="text-[#F37920] font-bold tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '28px' }}
                >
                  HEAD OFFICES
                </h3>
                <div 
                  className="absolute -bottom-2 left-0 w-full h-1"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                ></div>
              </div>
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
            <div className="text-center">
              <div className="inline-block relative w-fit">
                <h3 
                  className="text-[#F37920] font-bold tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '28px' }}
                >
                  BRANCHES
                </h3>
                <div 
                  className="absolute -bottom-2 left-0 w-full h-1"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                ></div>
              </div>
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
