import { CONTACT_INFO } from '../constants';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'SKMRD & Associates',
    alternateName: 'S K M R D & Associates, Chartered Accountants',
    description: 'A professionally managed Chartered Accountancy firm providing comprehensive accounting, taxation, audit, and compliance services.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://skmrd.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://skmrd.com'}/images/footer-logoo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.offices[0].address,
      addressLocality: 'Nashik',
      addressRegion: 'Maharashtra',
      postalCode: '422002',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.landline,
      contactType: 'Customer Service',
      email: CONTACT_INFO.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
    sameAs: [
      // Add social media links when available
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: [
      'Chartered Accountancy',
      'Taxation Services',
      'Audit Services',
      'GST Services',
      'Accounting Services',
      'Corporate Services',
      'Advisory Services',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'SKMRD & Associates',
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://skmrd.com'}/images/footer-logoo.png`,
    '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://skmrd.com'}`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://skmrd.com'}`,
    telephone: CONTACT_INFO.landline,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.offices[0].address,
      addressLocality: 'Nashik',
      addressRegion: 'Maharashtra',
      postalCode: '422002',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.9975',
      longitude: '73.7898',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '10:00',
      closes: '18:30',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
