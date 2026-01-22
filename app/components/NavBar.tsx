import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="bg-white pt-4 px-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Image
              src="/images/logo-mav.png"
              alt="SKMRD & ASSOCIATES"
              width={200}
              height={45}
              className="h-[45px] w-auto"
              priority
            />
          </div>

          {/* Navigation items on the right */}
          <div className="flex items-center border-2 border-gray-200 gap-12 rounded-2xl px-6 py-3">
            <Link href="/" className="font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              HOME
            </Link>
            <Link href="/about-us" className="font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              ABOUT US
            </Link>
            <Link href="/services" className="font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              SERVICES
            </Link>
            <Link href="/resources" className="font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              RESOURCES
            </Link>
            <Link href="/contact" className="font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              CONTACT
            </Link>
            <Link href="/careers" className="font-medium hover:opacity-80 transition-colors" style={{ color: '#056385' }}>
              CAREERS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
