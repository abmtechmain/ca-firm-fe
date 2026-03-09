'use client';

import { useState, useRef } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import Hero from '../components/Hero';
import { BRAND_COLORS, CONTACT_INFO } from '../constants';

export default function Careers() {
  const [fileName, setFileName] = useState<string>('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  // const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  // const recaptchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setResumeFile(file);
    }
  };

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
    
    // Add formType
    formData.append('formType', 'career');
    
    // Add resume file if exists
    if (resumeFile) {
      formData.append('resume', resumeFile);
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setSubmitMessage({ type: 'error', text: result.error || 'Failed to submit application. Please try again.' });
      } else {
        setSubmitMessage({ type: 'success', text: 'Application submitted successfully! We will contact you soon.' });
        formRef.current?.reset();
        setFileName('');
        setResumeFile(null);
        // recaptchaRef.current?.reset();
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Hero
        image="/images/d7b411f0d5119b394fee184dc05ce3b4caf98d3d.jpg"
        title="Build Your Career with Professionals Who Value Integrity"
        subtext="Work with experienced chartered accountants, gain real-world exposure, and grow in a culture built on ethics, learning, and responsibility."
      />
      
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-10 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          {/* Careers at Our Firm Section */}
          <div className="space-y-6 md:space-y-8 text-center">
            <div className="inline-block relative w-fit">
              <h2 
                className="page-headers"
                style={{ color: BRAND_COLORS.accent }}
              >
                CAREERS AT OUR FIRM
              </h2>
              <div 
                className="absolute -bottom-3 left-0 w-full h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              ></div>
            </div>
            
            <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <p 
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
              >
                At our firm, we believe our people are our greatest strength. We provide a professional, ethical, and growth-oriented work environment where learning never stops. Our team works across diverse industries, offering excellent exposure in audit, taxation, advisory, and compliance services.
              </p>
              <p 
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
              >
                We encourage young talent and experienced professionals to grow with us through hands-on experience, mentorship, and continuous professional development.
              </p>
            </div>
          </div>

          {/* Why Join Us Section */}
          <div className="space-y-6 md:space-y-8 text-center">
            <div className="inline-block relative w-fit">
              <h2 
                className="page-headers"
                style={{ color: BRAND_COLORS.accent }}
              >
                WHY JOIN US
              </h2>
              <div 
                className="absolute -bottom-3 left-0 w-full h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
              {[
                'Exposure to diverse clients and industries',
                'Strong learning culture and professional guidance',
                'Opportunities for growth and skill enhancement',
                'Ethical, transparent, and supportive work environment'
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p 
                    className="text-gray-700 text-base md:text-lg leading-relaxed text-center"
                    style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p 
              className="text-gray-700 text-base md:text-lg leading-relaxed pt-6 md:pt-8 max-w-4xl mx-auto"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              Whether you are an Article Assistant, Semi-Qualified CA, or Qualified Chartered Accountant, we welcome passionate professionals who are eager to build a long-term career with us.
            </p>
          </div>

          {/* Job Openings and Form Section */}
          <div className="grid lg:grid-cols-[50%_50%] gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left Side: Job Openings */}
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block relative w-fit">
                <h2 
                  className="page-headers"
                  style={{ color: BRAND_COLORS.accent }}
                >
                  CURRENT OPENINGS
                </h2>
                <div 
                  className="absolute -bottom-3 left-0 w-full h-1"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                ></div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 
                  className="font-bold text-lg md:text-xl"
                  style={{ color: BRAND_COLORS.primary }}
                >
                  Trainee Positions:
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    'Article Assistant / Articled Trainee',
                    'Audit Trainee',
                    'Accounts Trainee',
                    'Taxation Trainee',
                    'Industrial Trainee (CA Final)',
                    'CA Inter (Semi-Qualified Accountant)'
                  ].map((position, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span 
                        className="text-lg md:text-xl font-bold mt-0.5 flex-shrink-0"
                        style={{ color: BRAND_COLORS.accent }}
                      >
                        •
                      </span>
                      <span 
                        className="text-gray-700 text-base md:text-lg leading-relaxed"
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
                      >
                        {position}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 md:space-y-4 pt-4">
                <h3 
                  className="font-bold text-lg md:text-xl"
                  style={{ color: BRAND_COLORS.primary }}
                >
                  Executive Positions:
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    'Audit Executive',
                    'Tax Executive (Direct / Indirect Tax)',
                    'Accounts Executive',
                    'GST Executive',
                    'Compliance Executive'
                  ].map((position, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span 
                        className="text-lg md:text-xl font-bold mt-0.5 flex-shrink-0"
                        style={{ color: BRAND_COLORS.accent }}
                      >
                        •
                      </span>
                      <span 
                        className="text-gray-700 text-base md:text-lg leading-relaxed"
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
                      >
                        {position}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side: Career Application Form */}
            <div>
              <div 
                className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 border border-slate-100 w-full sticky top-8"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
              >
                <h3 className="text-center text-xl sm:text-2xl md:text-[28px] text-slate-800 mb-6 tracking-tight">Career Application Form</h3>
                
                 <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {submitMessage && (
                    <div className={`p-4 rounded-lg text-center ${
                      submitMessage.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}>
                      {submitMessage.text}
                    </div>
                  )}
                  <div className="space-y-4">
                    {/* Full Name */}
                    <div className="bg-[#f0f0f0] rounded-xl flex items-center min-h-[60px] border border-transparent focus-within:border-slate-300 transition-all px-5">
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Full Name"
                        required
                        className="bg-transparent w-full text-slate-700 outline-none placeholder:text-slate-400" 
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="bg-[#f0f0f0] rounded-xl flex items-center min-h-[60px] border border-transparent focus-within:border-slate-300 transition-all px-5">
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        required
                        className="bg-transparent w-full text-slate-700 outline-none placeholder:text-slate-400" 
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="bg-[#f0f0f0] rounded-xl flex items-center min-h-[60px] border border-transparent focus-within:border-slate-300 transition-all px-5">
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="Mobile Number"
                        required
                        className="bg-transparent w-full text-slate-700 outline-none placeholder:text-slate-400" 
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                      />
                    </div>

                    {/* Position Applied For */}
                    <div className="relative">
                      <select 
                        name="position"
                        required
                        className="w-full bg-[#f0f0f0] rounded-xl min-h-[60px] border border-transparent focus:border-slate-300 transition-all px-5 text-slate-700 outline-none appearance-none"
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                      >
                        <option value="">Position Applied For</option>
                        <option value="Article Assistant / Articled Trainee">Article Assistant / Articled Trainee</option>
                        <option value="Audit Trainee">Audit Trainee</option>
                        <option value="Accounts Trainee">Accounts Trainee</option>
                        <option value="Taxation Trainee">Taxation Trainee</option>
                        <option value="Industrial Trainee (CA Final)">Industrial Trainee (CA Final)</option>
                        <option value="CA Inter (Semi-Qualified Accountant)">CA Inter (Semi-Qualified Accountant)</option>
                        <option value="Audit Executive">Audit Executive</option>
                        <option value="Tax Executive (Direct / Indirect Tax)">Tax Executive (Direct / Indirect Tax)</option>
                        <option value="Accounts Executive">Accounts Executive</option>
                        <option value="GST Executive">GST Executive</option>
                        <option value="Compliance Executive">Compliance Executive</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="bg-[#f0f0f0] rounded-xl flex items-center min-h-[60px] border border-transparent focus-within:border-slate-300 transition-all px-5">
                      <input 
                        type="text" 
                        name="experience"
                        placeholder="Experience (Fresher / ___ Years)"
                        required
                        className="bg-transparent w-full text-slate-700 outline-none placeholder:text-slate-400" 
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                      />
                    </div>

                    {/* Upload Resume */}
                    <div className="relative">
                      <input
                        type="file"
                        id="resume-upload"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="w-full bg-[#f0f0f0] hover:bg-slate-200 text-slate-400 rounded-xl py-4 flex items-center justify-center gap-3 transition-all cursor-pointer"
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        {fileName ? fileName : 'Upload Resume (PDF / DOC)'}
                      </label>
                    </div>

                    {/* Message (Optional) */}
                    <div className="bg-[#f0f0f0] rounded-xl p-6 min-h-[160px] flex flex-col border border-transparent focus-within:border-slate-300 transition-all">
                      <textarea 
                        name="message"
                        className="bg-transparent w-full text-slate-700 outline-none flex-1 resize-none leading-relaxed placeholder:text-slate-400" 
                        placeholder="Message (Optional) - Short note about yourself"
                        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                      />
                    </div>
                  </div>

                  {/* <div className="flex justify-center py-2">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                      onChange={handleRecaptchaChange}
                    />
                  </div> */}

                  <div className="flex justify-center">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-12 py-2 bg-[#006080] hover:bg-[#004d66] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-md transition-all active:scale-[0.98] cursor-pointer"
                      style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Apply With Us Section - Bottom of Page */}
          <div className="pt-8 md:pt-12 border-t border-gray-200 space-y-4 max-w-4xl mx-auto text-center">
            <h3 
              className="font-bold text-xl md:text-2xl"
              style={{ color: BRAND_COLORS.primary }}
            >
              Apply With Us
            </h3>
            <p 
              className="text-gray-700 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              If you are committed to excellence and professional integrity, we would love to hear from you.
            </p>
            <div className="space-y-2">
              <p 
                className="text-gray-700 text-base md:text-lg font-medium"
                style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
              >
                Send your resume to:
              </p>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-[#006080] hover:text-[#004d66] font-semibold text-base md:text-lg transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
