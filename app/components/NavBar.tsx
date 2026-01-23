import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="bg-white pt-4 px-4 sm:px-6 lg:px-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Image
              src="/images/logo-mav.png"
              alt="SKMRD & ASSOCIATES"
              width={200}
              height={45}
              className="h-[35px] md:h-[45px] w-auto"
              priority
            />
          </div>

          {/* Navigation items on the right */}
          <div className="flex flex-wrap items-center justify-center border-2 border-gray-200 gap-2 sm:gap-4 md:gap-8 lg:gap-12 rounded-2xl px-3 sm:px-4 md:px-6 py-2 md:py-3">
            <Link href="/" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              HOME
            </Link>
            <Link href="/about-us" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              ABOUT US
            </Link>
            <Link href="/services" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              SERVICES
            </Link>
            <Link href="/resources" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              RESOURCES
            </Link>
            <Link href="/contact" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              CONTACT
            </Link>
            <Link href="/careers" className="text-xs sm:text-sm md:text-base font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              CAREERS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
