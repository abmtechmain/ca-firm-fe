import React from 'react';
import { Metadata } from 'next';
import Hero from '../components/Hero';
import { BlogCard } from '../components/BlogCard';
import { DownloadCard } from '../components/DownloadCard';
import { SectionHeader } from '../components/SectionHeader';
import { CaseStudySection } from '../components/CaseStudySection';
import { BLOG_POSTS, DOWNLOAD_ITEMS, CURRENT_CASE_STUDY, BRAND_COLORS, IMPORTANT_LINKS } from '../constants';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access valuable resources including blogs, case studies, downloads, GST calendars, compliance checklists, and tax forms. Stay updated with latest tax and compliance information.',
  keywords: ['CA Resources', 'Tax Resources', 'GST Calendar', 'Compliance Checklist', 'Tax Forms', 'Business Resources', 'Financial Resources', 'CA Blog'],
  openGraph: {
    title: 'Resources | SKMRD & Associates',
    description: 'Access valuable resources including blogs, case studies, downloads, GST calendars, and compliance checklists.',
    url: '/resources',
    images: ['/images/footer-logoo.png'],
  },
};

export default function Resources() {
  return (
    <div>
      <Hero
        image="/images/d7b411f0d5119b394fee184dc05ce3b4caf98d3d.jpg"
        title="Insights, Updates & Practical Guidance"
        subtext="Stay informed with timely tax updates, compliance insights, and practical resources designed to support informed decision-making."
      />
      
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Blogs & Articles Section — first */}
          <div className="mb-24">
            <div className="text-center mb-16 space-y-6">
              <div className="inline-block relative w-fit">
                <h1 
                  className="page-headers"
                  style={{ color: BRAND_COLORS.accent }}
                >
                  Blogs & Articles
                </h1>
                <div 
                  className="absolute -bottom-3 left-0 w-full h-1"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                ></div>
              </div>
              
              <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed">
                Our articles cover important developments, regulatory updates, and practical guidance on taxation, 
                compliance, and business matters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {BLOG_POSTS.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Important Links Section — second */}
          <div>
            <div className="text-center mb-16 space-y-6">
              <div className="inline-block relative w-fit">
                <h1 
                  className="page-headers"
                  style={{ color: BRAND_COLORS.accent }}
                >
                  Important Links
                </h1>
                <div 
                  className="absolute -bottom-3 left-0 w-full h-1"
                  style={{ backgroundColor: BRAND_COLORS.primary }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
              {/* Left column: 8 Government Websites */}
              <div className="min-w-0">
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Government Websites</h2>
                <ul className="space-y-3 list-none">
                  {IMPORTANT_LINKS.filter((l) => l.category === 'government').slice(0, 8).map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-colors border-b border-gray-200 pb-2 hover:border-gray-400 font-medium"
                        style={{ color: BRAND_COLORS.accent }}
                      >
                        <span className="text-gray-400">→</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right column: 8 Government links (no heading) */}
              <div className="min-w-0">
                <ul className="space-y-3 list-none mt-9">
                  {IMPORTANT_LINKS.filter((l) => l.category === 'government').slice(8, 16).map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-colors border-b border-gray-200 pb-2 hover:border-gray-400 font-medium"
                        style={{ color: BRAND_COLORS.accent }}
                      >
                        <span className="text-gray-400">→</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CA Governance — separate section like Government Websites */}
            <div className="mt-12">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">CA Governance</h2>
              <ul className="space-y-3 list-none">
                {IMPORTANT_LINKS.filter((l) => l.category === 'ca').map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors border-b border-gray-200 pb-2 hover:border-gray-400 font-medium"
                      style={{ color: BRAND_COLORS.accent }}
                    >
                      <span className="text-gray-400">→</span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer / Pagination Placeholder */}
          <div className="mt-20 text-center">
              {/* Optional: Add view all button here if needed */}
          </div>
        </div>
      </div>

      {/* Useful Downloads Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader 
          title="Useful Downloads" 
          description="Access commonly required compliance tools, calendars, and checklists to help manage statutory obligations effectively."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {DOWNLOAD_ITEMS.map((item) => (
            <DownloadCard key={item.id} item={item} />
          ))}
        </div>
      </section> */}

      {/* Case Study Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader 
          title="Case Study" 
          description="Explore real-world examples of how we've helped businesses achieve compliance and operational excellence."
        />
        <CaseStudySection caseStudy={CURRENT_CASE_STUDY} />
      </section> */}
    </div>
  );
}

