import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact SKMRD & Associates - Chartered Accountants in Nashik. Get in touch for professional accounting, taxation, audit, and compliance services. Head Office: Nashik, Maharashtra.',
  keywords: ['Contact CA', 'CA Firm Contact', 'Chartered Accountant Nashik', 'CA Office Nashik', 'Tax Consultant Contact', 'CA Firm Address', 'CA Firm Phone'],
  openGraph: {
    title: 'Contact Us | SKMRD & Associates',
    description: 'Contact SKMRD & Associates - Chartered Accountants in Nashik for professional accounting, taxation, audit, and compliance services.',
    url: '/contact',
    images: ['/images/footer-logoo.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
