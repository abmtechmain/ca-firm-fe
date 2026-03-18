import { Metadata } from 'next';
import Image from 'next/image';
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
        title="Gallery Preview"
        subtext="A visual glimpse of our office, team, and professional journey."
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

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
            <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] bg-slate-100">
              <Image
                src="/images/gallery/team-group-photo.png"
                alt="SKMRD & Associates — our professional team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 896px) 100vw, 896px"
                priority
              />
            </div>
          </div>

          <GalleryPreviewSection />
        </div>
      </section>
    </div>
  );
}
