import Hero from '../components/Hero';
import { LegalInformation } from '../components/LegalInformation';

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

