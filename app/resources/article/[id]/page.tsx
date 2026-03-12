import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '../../../components/Hero';
import { BLOG_POSTS, BRAND_COLORS } from '../../../constants';

export async function generateStaticParams() {
  return BLOG_POSTS.filter((post) => post.content).map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = BLOG_POSTS.find((p) => p.id === id);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.content
      ? article.content.slice(0, 160).replace(/\n/g, ' ') + '...'
      : article.title,
    openGraph: {
      title: article.title,
      description: article.title,
      images: [article.imageUrl],
    },
  };
}

function renderContent(text: string) {
  return text.split(/\n\n+/).map((block, i) => {
    const trimmed = block.trim();
    const headingMatch = trimmed.match(/^\*\*(.+?)\*\*$/);
    if (headingMatch && trimmed.indexOf('\n') === -1) {
      return (
        <h2
          key={i}
          className="text-xl font-bold mt-8 mb-4 first:mt-0"
          style={{ color: BRAND_COLORS.primary }}
        >
          {headingMatch[1]}
        </h2>
      );
    }
    const html = trimmed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    return (
      <p key={i} className="mb-4 leading-relaxed text-gray-700" style={{ fontSize: '17px', lineHeight: '1.8' }}>
        <span dangerouslySetInnerHTML={{ __html: html }} />
      </p>
    );
  });
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = BLOG_POSTS.find((p) => p.id === id);

  if (!article) {
    notFound();
  }

  if (!article.content) {
    notFound();
  }

  return (
    <div>
      <Hero
        image={article.imageUrl}
        title={article.title}
        subtext={`${article.date} | ${article.location}`}
      />

      <article className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 pb-8 border-b border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              {article.date} · {article.location}
            </p>
            <h1
              className="text-2xl md:text-3xl font-bold leading-tight"
              style={{ color: BRAND_COLORS.primary }}
            >
              {article.title}
            </h1>
          </div>

          <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-10">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>

          <div className="text-gray-700 space-y-2">
            {renderContent(article.content)}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
              style={{ color: BRAND_COLORS.primary }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Resources
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
