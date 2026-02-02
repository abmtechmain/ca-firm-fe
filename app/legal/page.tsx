import { Metadata } from 'next';
import Hero from '../components/Hero';
import { LegalInformation } from '../components/LegalInformation';

export const metadata: Metadata = {
  title: 'Legal Information',
  description: 'Privacy Policy, Terms & Conditions, and Disclaimer for SKMRD & Associates. Learn about our data protection practices and terms of service.',
  keywords: ['Privacy Policy', 'Terms and Conditions', 'Disclaimer', 'Legal Information', 'Data Protection', 'Terms of Service'],
  openGraph: {
    title: 'Legal Information | SKMRD & Associates',
    description: 'Privacy Policy, Terms & Conditions, and Disclaimer for SKMRD & Associates.',
    url: '/legal',
    images: ['/images/footer-logoo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Legal() {
  return (
    <div>
      {/* <Hero
        image="/images/d7b411f0d5119b394fee184dc05ce3b4caf98d3d.jpg"
        title="Legal Information"
        subtext="Privacy Policy, Terms & Conditions, and Disclaimer"
      /> */}
      <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 md:py-16 bg-white">
        <LegalInformation />
      </section>
    </div>
  );
}

