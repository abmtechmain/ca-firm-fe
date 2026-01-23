export default function ContactBar() {
  return (
    <div className="bg-white py-2 sm:py-[13px] px-4 sm:px-6 lg:px-[80px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-end gap-2 sm:gap-4 md:gap-8 lg:gap-12" style={{ fontFamily: 'var(--font-roboto), sans-serif', fontSize: '14px' }}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-black text-xs sm:text-sm md:text-base break-all sm:break-normal">samarthkale33@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-black text-xs sm:text-sm md:text-base">+91 654 356 6589</span>
          </div>
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-black flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-black text-xs sm:text-sm md:text-base">Office: xyz, 123, mumbai, maharashtra</span>
          </div>
        </div>
      </div>
    </div>
  );
}

