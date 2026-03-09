'use client';

import { useState, useRef } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';
import { BRAND_COLORS, CONTACT_INFO } from '../constants';
import { sendEmail } from '../utils/emailService';

export default function ConsultationForm() {
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
      formType: 'consultation' as const,
    };

    try {
      const result = await sendEmail(formValues);
      if (result.success) {
        setSubmitMessage({ type: 'success', text: 'Thank you! Your consultation request has been submitted successfully.' });
        formRef.current?.reset();
        // recaptchaRef.current?.reset();
      } else {
        setSubmitMessage({ type: 'error', text: result.error || 'Failed to submit request. Please try again.' });
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-18 py-10 sm:py-12 md:py-16 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
        {/* Consultation Section */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Side: Text & Socials */}
          <div className="space-y-5 md:space-y-6 lg:space-y-8">
            <div className="flex gap-2  flex-col">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] w-fit"
              style={{ color: BRAND_COLORS.primary, backgroundColor: `${BRAND_COLORS.primary}10` }}
            >
              Consultation
            </div>
            <div className="inline-block relative w-fit">
              <h2 
                className="page-headers"
                style={{ color: BRAND_COLORS.accent }}
              >
                Request A Consultation
              </h2>
              <div 
                className="absolute -bottom-3 left-0 w-full h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              ></div>
            </div>
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

        {/* Contact Banner Section */}
        {/* <div className="relative rounded-2xl overflow-hidden h-[400px]"> */}
          {/* <div className="absolute inset-0 z-0">
            <Image
              src="/images/d7b411f0d5119b394fee184dc05ce3b4caf98d3d.jpg"
              alt="Office background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div> */}
          
          {/* Light Overlay for text readability */}
          {/* <div className="absolute inset-0 bg-blue-900/60 z-[1]"></div> */}
          {/* Content */}
          {/* <div className="relative z-[2] h-full flex flex-col items-center justify-center px-8 text-center space-y-6">
            <h2 
              className="text-white font-bold text-3xl md:text-4xl uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              NOT SURE WHICH SERVICE YOU<br />NEED?
            </h2>
            <p 
              className="text-white text-base md:text-lg max-w-2xl"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              Our Team Will Help Assess Your Needs And Guide<br />
              You To The Appropriate Solution.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span 
                  className="text-white font-bold text-xl md:text-2xl"
                  style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
                >
                  {CONTACT_INFO.landline}
                </span>
              </div>
              <button 
                className="bg-gray-200 hover:bg-gray-300 border border-gray-300 rounded-lg px-6 py-3 flex items-center gap-2 transition-colors"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
              >
                <span className="text-gray-800 font-semibold text-sm uppercase tracking-wide">GET IN TOUCH</span>
                <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
