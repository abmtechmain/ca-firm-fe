'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Hero from '../components/Hero';

export default function Careers() {
  const [fileName, setFileName] = useState<string>('');
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
  };

  return (
    <div>
      <Hero
        image="/images/d7b411f0d5119b394fee184dc05ce3b4caf98d3d.jpg"
        title="Build Your Career with Professionals Who Value Integrity"
        subtext="Work with experienced chartered accountants, gain real-world exposure, and grow in a culture built on ethics, learning, and responsibility."
      />
      
      <section className="w-full px-18 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[60%_40%] items-start">
            {/* Left Side: Job Opening Details (Slightly larger) */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div 
                  className="bg-[#006080] text-white px-2 py-4 text-2xl font-semibold shadow-sm"
                  style={{ fontFamily: 'var(--font-roboto), sans-serif' }}
                >
                  01
                </div>
                <div className="space-y-2">
                  <h2 
                    className="text-[#006080] font-bold uppercase tracking-tight leading-tight"
                    style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '24px' }}
                  >
                    OPENING FOR CA LOCATION: MUMBAI
                  </h2>
                  <p 
                    className="text-gray-700 text-base leading-relaxed max-w-lg"
                    style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
                  >
                    We are committed to protecting the privacy and confidentiality of information shared with us.
                  </p>
                </div>
              </div>

              <div className="space-y-6 pl-0 md:pl-14">
                <div 
                  className="space-y-5 font-gray-700 font-[20px]"
                  style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
                >
                  <p>Opening for CA</p>
                  <p>Location: BKC Mumbai</p>
                  <p>Company name: SKMRD & Associate</p>
                  <p>Sector: Capital Markets</p>
                  <p>Post qualification experience: 5 yrs</p>
                  <p>Any specialization: MIS & Accounts proficiency</p>
                  <p>Salary offered: 20 lacs pa</p>
                  <p>Email Id: hr@bobcaps.in</p>
                  <p>Ref: CA Job Community</p>
                  <p>Note: Apply for the opening only and only if you have above</p>
                  <p>mentioned PQE and Expected Specialization.</p>
                </div>
              </div>
            </div>

            {/* Right Side: Join Our Team Form (Slightly smaller) */}
            <div 
              className="bg-white rounded-3xl shadow-xl p-6 border border-slate-100 w-full"
              style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
            >
              <h3 className="text-center text-[28px] text-slate-800 mb-4 tracking-tight">Join Our Team</h3>
              
              <form className="space-y-5">
                <div className="space-y-4">
                  <div className="bg-[#f0f0f0] rounded-xl flex items-center min-h-[60px] border border-transparent focus-within:border-slate-300 transition-all px-5">
                    <input 
                      type="text" 
                      placeholder="Name :"
                      className="bg-transparent w-full text-slate-700 outline-none placeholder:text-slate-400" 
                      style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                    />
                  </div>
                  
                  <div className="bg-[#f0f0f0] rounded-xl flex items-center min-h-[60px] border border-transparent focus-within:border-slate-300 transition-all px-5">
                    <input 
                      type="email" 
                      placeholder="Email :"
                      className="bg-transparent w-full text-slate-700 outline-none placeholder:text-slate-400" 
                      style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                    />
                  </div>

                  <div className="bg-[#f0f0f0] rounded-xl flex items-center min-h-[60px] border border-transparent focus-within:border-slate-300 transition-all px-5">
                    <input 
                      type="tel" 
                      placeholder="Mobile No :"
                      className="bg-transparent w-full text-slate-700 outline-none placeholder:text-slate-400" 
                      style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                    />
                  </div>

                  <div className="bg-[#f0f0f0] rounded-xl flex items-center min-h-[60px] border border-transparent focus-within:border-slate-300 transition-all px-5">
                    <input 
                      type="text" 
                      placeholder="Adress :"
                      className="bg-transparent w-full text-slate-700 outline-none placeholder:text-slate-400" 
                      style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="file"
                      id="resume-upload"
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
                      {fileName ? fileName : 'Upload Resume'}
                    </label>
                  </div>

                  <div className="bg-[#f0f0f0] rounded-xl p-6 min-h-[160px] flex flex-col border border-transparent focus-within:border-slate-300 transition-all">
                    <textarea 
                      className="bg-transparent w-full text-slate-700 outline-none flex-1 resize-none leading-relaxed placeholder:text-slate-400" 
                      placeholder="Message :"
                      style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                    />
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                    onChange={handleRecaptchaChange}
                  />
                </div>

                <div className="flex justify-center">
                  <button 
                    type="submit" 
                    className="px-12 py-2 bg-[#006080] hover:bg-[#004d66] text-white font-bold rounded-md transition-all active:scale-[0.98]"
                    style={{ fontFamily: 'var(--font-instrument-sans), sans-serif', fontSize: '16px' }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
