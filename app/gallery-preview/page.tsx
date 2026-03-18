import { Metadata } from 'next';
import Hero from '../components/Hero';
import { GalleryPreviewSection } from '../components/GalleryPreviewSection';
import { BRAND_COLORS } from '../constants';

export const metadata: Metadata = {
  title: 'Gallery Preview',
  description:
    'Photo gallery of SKMRD & Associates — office, team, and events. Browse highlights from our Chartered Accountancy practice in Nashik and branches.',
  openGraph: {
    title: 'Gallery Preview | SKMRD & Associates',
    description: 'Photo gallery — office, team, and firm highlights.',
    url: '/gallery-preview',
    images: ['/images/footer-logoo.png'],
  },
};

export default function GalleryPreviewPage() {
  return (
    <div>
      <Hero
        image="/images/key-strengths-office.png"
        title="Photo Gallery"
        expanded
        subtext="Explore SKMRD & Associates through images — our Nashik head office, branch locations, and the people who deliver audit, tax, GST, and advisory services every day."
        text="This gallery reflects our culture of professionalism, teamwork, and client focus. From statutory compliance to strategic guidance, the same commitment you see here is what we bring to every engagement. Scroll down to browse more moments from our firm."
      />

      <section className="w-full px-4 sm:px-6 lg:px-18 py-12 md:py-16 lg:py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          <div className="text-center">
            <div className="inline-block relative w-fit">
              <h2 className="page-headers" style={{ color: BRAND_COLORS.accent }}>
                PHOTO GALLERY
              </h2>
              <div
                className="absolute -bottom-3 left-0 w-full h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/team-group-photo.png"
              alt="SKMRD & Associates — our professional team"
              className="w-full h-auto object-contain"
              loading="eager"
            />
          </div>

          <GalleryPreviewSection />
        </div>
      </section>
    </div>
  );
}
