'use client';

import NavBar from './NavBar';
import ContactBar from './ContactBar';
import Marquee from './Marquee';

export default function NavigationWrapper() {
  // All pages: Same layout as home page - Marquee, then NavBar, then ContactBar
  return (
    <>
      <Marquee />
      <NavBar />
      <ContactBar />
    </>
  );
}
