import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '../../components/Hero';
import { BLOG_POSTS, BRAND_COLORS } from '../../constants';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}): Promise<Metadata> {
  const { id } = await params;
  const blog = BLOG_POSTS.find(post => post.id === id);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.title,
    openGraph: {
      title: blog.title,
      description: blog.title,
      images: [blog.imageUrl],
    },
  };
}

export default async function BlogDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const blog = BLOG_POSTS.find(post => post.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <Hero
        image={blog.imageUrl}
        title={blog.title}
        subtext={`${blog.date} | ${blog.location}`}
      />
      
      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="font-medium">{blog.date}</span>
              <span>•</span>
              <span>{blog.location}</span>
            </div>
            
            <h1 
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ color: BRAND_COLORS.primary }}
            >
              {blog.title}
            </h1>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              <p className="text-xl font-medium text-gray-800 mb-8">
                In today's rapidly evolving business landscape, staying informed about regulatory changes, 
                compliance requirements, and strategic opportunities is crucial for success.
              </p>
              
              <p>
                As a leading Chartered Accountancy firm, we understand the challenges businesses face in navigating 
                complex taxation and compliance matters. This article provides comprehensive insights into {blog.title.toLowerCase()}, 
                helping you make informed decisions for your business.
              </p>

              <h2 
                className="text-2xl font-bold mt-10 mb-6"
                style={{ color: BRAND_COLORS.primary }}
              >
                Understanding the Landscape
              </h2>
              
              <p>
                The regulatory environment continues to evolve, with new amendments and notifications being issued regularly. 
                Businesses must stay updated with these changes to ensure compliance and optimize their operations. 
                Our team of experienced professionals closely monitors these developments to provide timely guidance to our clients.
              </p>

              <p>
                Recent changes in taxation laws have significant implications for businesses across various sectors. 
                From GST compliance to income tax regulations, understanding these nuances is essential for effective 
                financial planning and risk management.
              </p>

              <h2 
                className="text-2xl font-bold mt-10 mb-6"
                style={{ color: BRAND_COLORS.primary }}
              >
                Key Considerations
              </h2>
              
              <ul className="list-disc pl-6 space-y-3 my-6">
                <li className="pl-2">
                  <strong>Regulatory Compliance:</strong> Ensuring adherence to all applicable laws and regulations 
                  to avoid penalties and maintain good standing with authorities.
                </li>
                <li className="pl-2">
                  <strong>Strategic Planning:</strong> Developing comprehensive strategies that align with business 
                  objectives while optimizing tax efficiency.
                </li>
                <li className="pl-2">
                  <strong>Documentation:</strong> Maintaining proper records and documentation to support compliance 
                  and facilitate smooth audits.
                </li>
                <li className="pl-2">
                  <strong>Timely Action:</strong> Meeting all statutory deadlines and taking proactive measures to 
                  address potential issues before they escalate.
                </li>
                <li className="pl-2">
                  <strong>Professional Guidance:</strong> Seeking expert advice to navigate complex situations and 
                  make informed decisions.
                </li>
              </ul>

              <h2 
                className="text-2xl font-bold mt-10 mb-6"
                style={{ color: BRAND_COLORS.primary }}
              >
                Practical Implementation
              </h2>
              
              <p>
                Implementing effective compliance and planning strategies requires a systematic approach. Our firm 
                assists clients in developing customized solutions that address their specific needs and circumstances. 
                We work closely with businesses to understand their operations, identify potential risks, and implement 
                appropriate safeguards.
              </p>

              <p>
                The key to successful implementation lies in maintaining regular communication with professional advisors, 
                staying informed about regulatory changes, and being proactive in addressing compliance requirements. 
                Our team provides ongoing support to ensure that our clients remain compliant while optimizing their 
                business operations.
              </p>

              <div 
                className="bg-blue-50 border-l-4 p-6 my-8 rounded-r-lg"
                style={{ borderColor: BRAND_COLORS.primary }}
              >
                <p className="text-base font-semibold mb-2" style={{ color: BRAND_COLORS.primary }}>
                  Need Professional Assistance?
                </p>
                <p className="text-gray-700 text-base">
                  Our experienced team is here to help you navigate complex compliance and planning matters. 
                  Contact us for personalized guidance tailored to your specific situation.
                </p>
              </div>

              <h2 
                className="text-2xl font-bold mt-10 mb-6"
                style={{ color: BRAND_COLORS.primary }}
              >
                Conclusion
              </h2>
              
              <p>
                Staying compliant and strategically positioned in today's business environment requires continuous 
                attention and expert guidance. By partnering with experienced professionals, businesses can ensure 
                they meet all regulatory requirements while optimizing their operations for success.
              </p>

              <p>
                At SKMRD & Associates, we are committed to providing comprehensive support to our clients across 
                all aspects of taxation, compliance, and business advisory. Our team's expertise and dedication 
                ensure that you receive the highest quality service and guidance.
              </p>
            </div>
          </div>

          {/* Back to Resources Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
              style={{ color: BRAND_COLORS.primary }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Resources</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
