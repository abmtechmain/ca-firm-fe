'use client';

import { usePathname } from 'next/navigation';
import NavBar from './NavBar';
import ContactBar from './ContactBar';
import Marquee from './Marquee';

export default function NavigationWrapper() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (isHomePage) {
    // Home page: Marquee, then NavBar above ContactBar (no margin-bottom on NavBar)
    return (
      <>
        <Marquee />
        <NavBar />
        <ContactBar />
      </>
    );
  } else {
    // Other pages: ContactBar above NavBar with margin-bottom on NavBar (no Marquee)
    return (
      <>
        <ContactBar />
        <div className="mb-8">
          <NavBar />
        </div>
      </>
    );
  }
}
