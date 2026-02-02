import React from 'react';
import { Metadata } from 'next';
import Hero from '../components/Hero';
import { BlogCard } from '../components/BlogCard';
import { DownloadCard } from '../components/DownloadCard';
import { SectionHeader } from '../components/SectionHeader';
import { CaseStudySection } from '../components/CaseStudySection';
import { BLOG_POSTS, DOWNLOAD_ITEMS, CURRENT_CASE_STUDY, BRAND_COLORS } from '../constants';

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
          {/* Header Section */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-block relative">
              <h1 
                className="font-extrabold tracking-tight uppercase"
                style={{ color: BRAND_COLORS.accent, fontSize: '24px' }}
              >
                Blogs & Articles
              </h1>
              <div 
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1"
                style={{ backgroundColor: BRAND_COLORS.primary }}
              ></div>
            </div>
            
            <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed">
              Our articles cover important developments, regulatory updates, and practical guidance on taxation, 
              compliance, and business matters.
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Footer / Pagination Placeholder */}
          <div className="mt-20 text-center">
              {/* Optional: Add view all button here if needed */}
          </div>
        </div>
      </div>

      {/* Useful Downloads Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader 
          title="Useful Downloads" 
          description="Access commonly required compliance tools, calendars, and checklists to help manage statutory obligations effectively."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {DOWNLOAD_ITEMS.map((item) => (
            <DownloadCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionHeader 
          title="Case Study" 
          description="Explore real-world examples of how we've helped businesses achieve compliance and operational excellence."
        />
        <CaseStudySection caseStudy={CURRENT_CASE_STUDY} />
      </section>
    </div>
  );
}

