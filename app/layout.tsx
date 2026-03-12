import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Roboto } from "next/font/google";
import "./globals.css";
import NavigationWrapper from "./components/NavigationWrapper";
import StructuredData from "./components/StructuredData";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SKMRD & Associates | Chartered Accountants | Nashik",
    template: "%s | SKMRD & Associates"
  },
  description: "Professional Chartered Accountancy firm providing comprehensive accounting, taxation, audit, and compliance services in Nashik, Maharashtra. Expert CA services for individuals, startups, and businesses.",
  icons: {
    icon: '/images/footer-logoo.png',
  },
  keywords: ["Chartered Accountants", "CA Firm Nashik", "Taxation Services", "Audit Services", "GST Services", "Accounting Services", "CA Firm Maharashtra", "Tax Consultant", "Financial Advisory", "Compliance Services"],
  authors: [{ name: "SKMRD & Associates" }],
  creator: "SKMRD & Associates",
  publisher: "SKMRD & Associates",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://skmrd.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'SKMRD & Associates',
    title: 'SKMRD & Associates | Chartered Accountants | Nashik',
    description: 'Professional Chartered Accountancy firm providing comprehensive accounting, taxation, audit, and compliance services in Nashik, Maharashtra.',
    images: [
      {
        url: '/images/footer-logoo.png',
        width: 1200,
        height: 630,
        alt: 'SKMRD & Associates - Chartered Accountants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKMRD & Associates | Chartered Accountants | Nashik',
    description: 'Professional Chartered Accountancy firm providing comprehensive accounting, taxation, audit, and compliance services.',
    images: ['/images/footer-logoo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@300..700&family=Aladin&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable} ${roboto.variable} antialiased bg-white text-gray-900`}
      >
        <StructuredData />
        <NavigationWrapper />
        
        {children}
        {/* <section className="w-full px-4 sm:px-6 lg:px-18 py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <ContactSection />
        </div>
      </section> */}
        <Footer />
      </body>
    </html>
  );
}
