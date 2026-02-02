import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join SKMRD & Associates - Chartered Accountants. Career opportunities for Article Assistants, CA Inter, Qualified CAs, and professionals. Build your career with a leading CA firm in Nashik.',
  keywords: ['CA Careers', 'CA Jobs', 'Article Assistant Jobs', 'CA Firm Careers', 'Accounting Jobs', 'Tax Jobs', 'CA Firm Recruitment', 'CA Jobs Nashik'],
  openGraph: {
    title: 'Careers | SKMRD & Associates',
    description: 'Join SKMRD & Associates - Career opportunities for Article Assistants, CA Inter, Qualified CAs, and professionals.',
    url: '/careers',
    images: ['/images/footer-logoo.png'],
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
