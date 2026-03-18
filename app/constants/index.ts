import {
  BlogPost,
  DownloadItem,
  CaseStudy,
  StrengthItem,
  StrengthMain,
  TeamMember,
  Founder,
  KeyPerson,
  ImportantLink,
  GalleryPreviewImage,
} from '../types';

// Government Websites & CA Governance
export const IMPORTANT_LINKS: ImportantLink[] = [
  { id: '1', name: 'RBI', url: 'http://rbi.org.in/', category: 'government' },
  { id: '2', name: 'Income Tax', url: 'https://www.incometax.gov.in/iec/foportal/', category: 'government' },
  { id: '3', name: 'GST', url: 'https://www.gst.gov.in/', category: 'government' },
  { id: '4', name: 'Maha Rera', url: 'https://maharera.mahaonline.gov.in/', category: 'government' },
  { id: '5', name: 'Ministry of Corporate Affairs', url: 'https://www.mca.gov.in/', category: 'government' },
  { id: '6', name: 'Directorate General of Foreign Trade', url: 'https://www.dgft.gov.in/', category: 'government' },
  { id: '7', name: 'Maha GST', url: 'https://mahagst.gov.in/', category: 'government' },
  { id: '8', name: 'GeM (Government e-Marketplace)', url: 'https://gem.gov.in/', category: 'government' },
  {
    id: '9',
    name: 'Charity Commissioner',
    url: 'https://charity.maharashtra.gov.in',
    category: 'government',
  },
  { id: '10', name: 'ICAI', url: 'https://www.icai.org/', category: 'ca' },
  { id: '11', name: 'ICAI UDIN', url: 'https://udin.icai.org/', category: 'ca' },
];

/**
 * Gallery Preview (/gallery-preview)
 * To add photos: { id: 'unique', src: '/images/gallery/file.jpg', alt: 'Short description for accessibility' }
 */
export const GALLERY_PREVIEW_IMAGES: GalleryPreviewImage[] = [
  { id: '1', src: '/images/how-we-work.png', alt: 'Our office and team' },
  { id: '2', src: '/images/key-strengths-office.png', alt: 'Professional environment' },
  { id: '3', src: '/images/growth-partners-team.png', alt: 'Growth partners' },
  { id: '4', src: '/images/firm-overview.png', alt: 'Firm overview' },
  { id: '5', src: '/images/hero-slide-1.png', alt: 'Firm presence' },
  { id: '6', src: '/images/key-services.png', alt: 'Key services' },
  {
    id: '7',
    src: '/images/gallery/team-office-dsc00835.png',
    alt: 'SKMRD & Associates Chartered Accountants — full team at office entrance',
  },
  {
    id: '8',
    src: '/images/gallery/team-office-dsc00838.png',
    alt: 'SKMRD & Associates team members in professional office setting',
  },
  {
    id: '9',
    src: '/images/gallery/office-reception-dsc00803.png',
    alt: 'SKMRD & Associates modern office interior with reception and workstations',
  },
  {
    id: '10',
    src: '/images/gallery/office-entrance-dsc00800.png',
    alt: 'SKMRD & Associates office entrance and firm signage',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    number: '01',
    date: 'February 19, 2026',
    location: 'Nashik Maharashtra',
    title: 'ITR Filing for Salaried Employees',
    imageUrl: '/images/resources/itr-filing-salaried.png',
    content: `Filing Income Tax Returns (ITR) is a statutory obligation for salaried employees whose income exceeds the basic exemption limit. This article outlines the process, documents required, and key points to remember for salaried individuals.

**Who should file ITR?**
Salaried employees with gross total income exceeding ₹2,50,000 (₹3,00,000 for senior citizens, ₹5,00,000 for super seniors) in a financial year must file their return. Even if tax is deducted at source (TDS), filing the return helps in claiming refunds and declaring additional income or deductions.

**Documents required**
You will need Form 16 (from employer), salary slips, bank statements, proof of tax-saving investments (e.g. under Section 80C, 80D), and details of any other income such as interest, rent, or capital gains. Keep Aadhaar and PAN handy for e-filing.

**Choosing the right ITR form**
Most salaried individuals with income from salary, one house property, and other sources use ITR-1 (Sahaj). If you have capital gains, multiple house properties, or income above ₹50 lakh from specified sources, you may need ITR-2. Ensure you pick the correct form to avoid notices.

**Steps to e-file**
Register on the Income Tax e-filing portal, add the relevant assessment year, select the appropriate ITR form, and fill in details from Form 16 and other documents. Compute tax and pay any self-assessment tax if due, then submit the return. After submission, verify using EVC, Aadhaar OTP, or by sending a signed ITR-V to CPC within 30 days.

**Key deadlines**
The due date for filing ITR for individuals (other than those requiring audit) is typically July 31 of the assessment year. Late filing may attract interest and penalty. Filing on time also ensures faster refund processing and avoids last-minute rush.`
  },
  {
    id: '2',
    number: '02',
    date: 'February 13, 2026',
    location: 'Nashik Maharashtra',
    title: 'Belated Income Tax Return vs Revised Income Tax Return',
    imageUrl: '/images/resources/belated-vs-revised-itr.png',
    content: `Understanding the difference between a belated return and a revised return helps you comply with tax laws and avoid unnecessary cost and hassle.

**Belated return**
A belated return is one filed after the original due date (e.g. after July 31 for individuals). You can file a belated return until the end of the relevant assessment year (e.g. until 31 March 2027 for FY 2025-26). Late filing fees may apply under Section 234F. Interest under Section 234A can be levied for delay. You can still claim refunds and carry forward losses in certain cases, but the option to carry forward loss may be restricted if the return is filed very late.

**Revised return**
A revised return is filed to correct errors or omissions in an return already filed within the original due date. You can revise under Section 139(5) before the end of the assessment year or before completion of assessment, whichever is earlier. No late fee is applicable for merely revising a return. Use it to correct mistakes in income, deductions, or tax computation.

**When to use which**
File a belated return if you missed the original due date but want to disclose income and pay tax (or claim a refund). File a revised return only if you had already filed a return in time and need to correct it. You cannot revise a return that was itself belated in certain scenarios beyond the permitted timeline.

**Practical tips**
Plan to file within the original due date to avoid late fee and interest. If you discover an error after filing, use the revised return option at the earliest. Keep supporting documents ready for any change in income or deductions.`
  },
  {
    id: '3',
    number: '03',
    date: 'February 09, 2026',
    location: 'Nashik Maharashtra',
    title: 'Income Tax Return (ITR) Due Date FY 2025-26',
    imageUrl: '/images/resources/itr-due-dates-fy2025-26.png',
    content: `Timely filing of Income Tax Returns ensures compliance, avoids interest and penalties, and facilitates smooth processing of refunds. Here are the key due dates for FY 2025-26 (AY 2026-27).

**General due date (individuals / HUF / others not requiring audit)**
31 July 2026 – This is the due date for most salaried individuals and those with income from house property, other sources, and capital gains (without audit). File your return and pay any self-assessment tax by this date to avoid interest under Section 234A and late fee under Section 234F.

**Due date for taxpayers requiring audit**
31 October 2026 – If your accounts are required to be audited (e.g. business turnover above specified limits, or certain professional receipts), the due date for filing the return is 31 October 2026. Ensure the audit is completed and the report is uploaded before filing.

**Due date for transfer pricing**
30 November 2026 – For assessees covered under transfer pricing (e.g. certain international transactions), the return filing due date is 30 November 2026. This allows time for the transfer pricing report and documentation.

**Consequences of missing the due date**
Filing after the due date attracts a late fee of up to ₹5,000 (₹1,000 for income up to ₹5 lakh). Interest under Section 234A is levied for the period of delay. Refunds may be delayed, and in some cases carry-forward of losses may be affected. It is advisable to file on or before the due date and pay any tax due in advance to minimise interest.`
  }
];

export const DOWNLOAD_ITEMS: DownloadItem[] = [
  {
    id: '1',
    title: 'GST Due Date Calendar',
    description: 'A Consolidated Calendar Outlining Key GST Filing Due Dates To Support Timely And Accurate Compliance.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Compliance Checklists',
    description: 'Simple And Structured Checklists Covering Routine Compliance Requirements For Businesses.',
    imageUrl: 'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Basic Forms & Templates',
    description: 'Frequently Used Forms And Basic Templates Required For Taxation And Regulatory Filings.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  }
];

export const CURRENT_CASE_STUDY: CaseStudy = {
  title: 'GST Compliance Streamlining For A Growing Business',
  problem: 'The Client Faced Challenges In Meeting GST Filing Deadlines And Maintaining Accurate Records.',
  solution: 'Implemented Structured Compliance Processes, Periodic Reviews, And Timely Filing Support.',
  outcome: 'Improved Compliance Accuracy, Reduced Delays, And Better Regulatory Visibility.',
  imageUrl: '/images/unsplash_6xeDIZgoPaw.png'
};

export const STRENGTHS_MAIN: StrengthMain = {
  title: 'EXPERIENCE',
  description: 'Over 30+ years of proven expertise in the Accounting, Auditing and Finance Industry.',
  imageUrl: '/images/key-strengths-office.png'
};

export const STRENGTHS_GRID: StrengthItem[] = [
  {
    title: 'GLOBAL REACH',
    description: 'Presence in major financial hubs worldwide, providing seamless services to multinational clients.'
  },
  {
    title: 'QUALIFIED TEAM',
    description: 'A team of highly qualified professionals including Chartered Accountants and tax experts.'
  },
  {
    title: 'CLIENT-CENTRIC APPROACH',
    description: 'Tailored solutions to meet the unique needs of each client, fostering long-term relationships.'
  },
  {
    title: 'TECHNOLOGY-DRIVEN',
    description: 'Leveraging cutting-edge technology and tools to deliver efficient and accurate services.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Sayli Mandlik',
    role: 'Administration & Management',
    description: 'Specializes in administration and management services with expertise in organizational operations and efficiency.',
    imageUrl: '/images/team/Sayali Mandlik.jpeg',
    imagePosition: 'center 25%'
  },
  {
    id: '2',
    name: 'Keshav Sonawane',
    role: 'Secretarial & Corporate Services',
    description: 'Specializes in secretarial and corporate services with extensive knowledge of compliance and corporate governance.',
    imageUrl: '/images/team/Keshav.png',
    imagePosition: 'top center'
  },
  {
    id: '3',
    name: 'Reshma Jadhav',
    role: 'Business & Labour Law',
    description: 'Specializes in business and labour law with expertise in legal compliance and regulatory matters.',
    imageUrl: '/images/team/reshma-ca-firm.jpeg'
  },
  {
    id: '4',
    name: 'Dipak Jondhale',
    role: 'Investment Advisory',
    description: 'Specializes in investment advisory services with expertise in financial planning and investment strategies.',
    imageUrl: '/images/team/Deepak-Jondhale.png',
    imagePosition: 'top center'
  },
  {
    id: '5',
    name: 'Akash Mate',
    role: 'Bookkeeping & Accounting',
    description: 'Specializes in bookkeeping and accounting services with expertise in financial record management and reporting.',
    imageUrl: '/images/team/Akash.png',
    imagePosition: 'top center'
  }
];

export const WHO_WE_ARE_TEXT = {
  title: 'WHO WE ARE',
  content: [
    "We are a professionally managed Chartered Accountancy firm providing comprehensive accounting, taxation, audit, and compliance services. Our focus is on delivering accurate, timely, and practical solutions to individuals, startups, and growing businesses while ensuring adherence to statutory and regulatory requirements.",
    "We believe in building long-term professional relationships by maintaining high standards of ethics, transparency, and accountability in every engagement."
  ]
};

export const VISION_MISSION = {
  vision: {
    title: 'OUR VISION',
    description: 'To be recognized as a global leader in the auditing & accounting profession, known for our expertise, innovation, and unwavering commitment to our clients\' success.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  mission: {
    title: 'OUR MISSION',
    description: 'To deliver exceptional accounting, auditing, and advisory services that empower our clients to achieve their financial and strategic objectives. We are dedicated to maintaining the highest standards of integrity, quality, and professionalism.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  }
};

export const FOUNDER_DATA: Founder = {
  tag: 'FOUNDER',
  name: 'Late CA SAMPAT KACHU MANDLIK',
  role: '(FCA, M.COM)',
  description: [
    'Late CA Sampat Kachu Mandlik (FCA, M.Com) was the pioneer and most senior partner of the firm. With more than three decades of professional excellence, he advised public limited companies, large corporates, high-net-worth individuals, and eminent professionals.',
    'His mastery in taxation, audits, and regulatory matters, along with his calm handling of challenging cases, earned him immense respect. His values, ethics, and commitment continue to inspire the firm.'
  ],
  imageUrl: '/images/team/CA S K Mandlik.jpg'
};

export const KEY_PERSONS: KeyPerson[] = [
  {
    id: '1',
    name: 'CA. Nivrutti Ramesh Shinde',
    phone: '+91 97623 09538',
    email: 'ca.nivrutti@skmrd.com',
    qualification: 'FCA, M. Com, DISA',
    imageUrl: '/images/team/CA Nivrutti Shinde.png',
    description: [
      'Qualified Since 2018.',
      'Expertise in Co-operative Sector Auditing and Registration, Bank Audits, Government Audits, Information Systems (IS) Audit, GST Consultancy.',
      'Representing clients before tax authorities for assessments and appeals.'
    ]
  },
  {
    id: '2',
    name: 'CA. Sangita Rajendra Kadam',
    phone: '+91 90968 63674',
    email: 'ca.sangita@skmrd.com',
    qualification: 'FCA, M. Com, DISA',
    imageUrl: '/images/team/CA-Sangita-Rajendra-Kadam.png',
    description: [
      'Qualified since 2016.',
      'Expertise in RERA, Bank Audit, Management & Internal Audit, Government Audit & accounting, Direct & Indirect Taxes.',
      'Attending Assessments & appeals in front of various Tax Authorities.'
    ]
  },
  {
    id: '3',
    name: 'CA. Rashmi Sampat Mandlik',
    phone: '+91 88885 55998',
    email: 'ca.rashmi@skmrd.com',
    qualification: 'FCA, M. Com, DISA',
    imageUrl: '/images/team/CA Rashmi Mandlik.jpeg',
    description: [
      'Qualified since 2018.',
      'Expertise is Trust / NGO Audits, Internal Controls and Taxations.',
      'Forensic & System Audit.'
    ]
  },
  {
    id: '4',
    name: 'CA. Kunwarr Diggaa',
    phone: '+91 60033 66231',
    email: 'ca.kunwarr@skmrd.com',
    qualification: 'FCA, B. Com',
    imageUrl: '/images/team/CA-Kunwarr-Diggaa.png',
    imagePosition: 'top center',
    description: [
      'Qualified since 2019.',
      'Expertise is Business Management & Restructuring and Internal Audit.',
      'Overseas Accounting & Consultancy.'
    ]
  }
];

export const BRAND_COLORS = {
  primary: '#0e6d8a',
  accent: '#FF541F',
  textMuted: '#71717a', // Slightly adjusted for exact match
  textHeading: '#18181b',
};

export const FIRM_OVERVIEW = {
  title: 'FIRM OVERVIEW',
  content: [
    'S K M R D & ASSOCIATES, CHARTERED ACCOUNTANTS is the medium size MULTI STATE CA firm in India with its head office in Nashik (MH) and having 4 branch offices i.e. Golaghat (Assam), Pune (MH), Nashik (MH) and Jalgaon (MH).',
    'We have dedicated team of young, passionate, experienced and energetic professionals for rendering high quality services across a range of verticals at any location within India or abroad. Since our inception in 1989, we had grown into an institution that embodies the highest standards of professional integrity, values & expertise.',
    'With the combination of experience and young team we offer, most cost-effective and high- technology services and facilities to our clients. Owing to our values, we have transparent business dealings and to make comfortable and secured environment for our valuable clients for their confidential data and information.'
  ],
  empanelments: [
    'Comptroller & Auditor General of India (C &AG ) for PSU Audit.',
    'Empanelment with Reserve Bank of India ( RBI ) for Public Sector Banks Audit.',
    'Cooperative departments for Statutory audit of Cooperative banks and credit cooperative societies.'
  ]
};

export const LEGAL_CONTENT = {
  privacyPolicy: {
    title: 'PRIVACY POLICY',
    intro: 'We are committed to protecting the privacy and confidentiality of information shared with us.',
    content: [
      {
        heading: null,
        text: 'We value your privacy and are committed to safeguarding any personal or business information provided through this website.'
      },
      {
        heading: 'Information We Collect',
        text: 'We may collect personal information such as name, phone number, email address, and details related to your enquiry when you submit a form or contact us.'
      },
      {
        heading: 'Use of Information',
        text: 'The information collected is used solely for responding to enquiries, providing professional services, and maintaining communication related to our services.'
      },
      {
        heading: 'Data Protection',
        text: 'We implement reasonable security measures to protect information against unauthorized access, disclosure, or misuse.'
      },
      {
        heading: 'Third-Party Disclosure',
        text: 'We do not sell, trade, or share personal information with third parties except where required by law or for regulatory compliance.'
      },
      {
        heading: 'Consent',
        text: 'By using this website and submitting your information, you consent to the terms of this Privacy Policy.'
      }
    ]
  },
  termsConditions: {
    title: 'TERMS & CONDITIONS',
    intro: 'Please read these terms carefully before using this website.',
    content: [
      {
        heading: null,
        text: 'By accessing or using this website, you agree to be bound by the following terms and conditions.'
      },
      {
        heading: 'Website Usage',
        text: 'The content on this website is provided for general informational purposes only and does not constitute professional advice.'
      },
      {
        heading: 'Professional Engagement',
        text: 'Any professional services will be provided only after formal engagement and agreement, as per applicable laws and professional standards.'
      },
      {
        heading: 'Accuracy of Information',
        text: 'While reasonable efforts are made to ensure accuracy, we do not guarantee that the information on this website is complete, current, or error-free.'
      },
      {
        heading: 'Limitation of Liability',
        text: 'We shall not be liable for any loss or damage arising from reliance on information available on this website.'
      },
      {
        heading: 'Governing Law',
        text: 'These terms shall be governed by and interpreted in accordance with applicable laws of India.'
      }
    ]
  },
  disclaimer: {
    title: 'DISCLAIMER',
    intro: 'The information provided on this website is for general guidance only.',
    content: [
      {
        heading: null,
        text: 'The content on this website is intended for general informational purposes and should not be considered as professional, legal, or financial advice.'
      },
      {
        heading: null,
        text: 'Professional advice should be sought before acting on any information provided on this website. We do not accept responsibility for any loss arising from actions taken based on the information available herein.'
      },
      {
        heading: null,
        text: 'Use of this website does not create a client-professional relationship unless formally agreed in writing.'
      }
    ]
  }
};

export const CONTACT_INFO = {
  email: 'ca.office@skmrd.com',
  landline: '0253 4043419',
  mobile: '+91 654 356 6589', // Keep as fallback
  offices: [
    {
      name: 'Head Office 1',
      address: 'A-1/2 AshtavinayakApt. Behind Dholya Ganapati Mandir, Ashok Stambh, Nashik- 422002',
      mobile: '+91 9822656851',
      mapLink: 'https://maps.app.goo.gl/ApHafWgRTxMdu98s7'
    },
    {
      name: 'Head Office 2',
      address: 'Flat No. 1/2, Saee Apartment, Madhav Colony, Pournima Bus Stop, Nashik Pune Road, Dwarka, Nashik- 422011',
      mobile: '+91 9511840438',
      mapLink:
        "https://www.google.com/maps/place/19%C2%B059'15.9%22N+73%C2%B047'57.3%22E/@19.9877434,73.7966805,818m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d19.9877434!4d73.7992554?hl=en&entry=ttu"
    }
  ],
  branches: [
    {
      name: 'Jalgaon',
      address: 'R No 6760, Plot No. 25/22, Gadge Baba Bagar, Pachora, Jalgaon, Maharashtra, India, 425001',
      mapLink: ''
    },
    {
      name: 'Golaghat(Assam)',
      address: 'B. B. Gaon, Dergaon, Golaghat, Golaghat, Assam, India, 785618',
      mapLink: ''
    },
    {
      name: 'Pune',
      address: 'B 808, Kiran Samruddhi B, Sr No.293/5P,213, Pune City, Pune 411021',
      mapLink: ''
    }
  ]
};

export interface ServiceCategory {
  category: string;
  services: string[];
}

export const SERVICES_OFFERED: ServiceCategory[] = [
  {
    category: 'AUDIT & ASSURANCE',
    services: [
      'Statutory Audits',
      'Internal Audits',
      'Risk Management and Compliance',
      'Forensic Audits and Investigations',
      'Financial Due Diligence'
    ]
  },
  {
    category: 'TAXATION',
    services: [
      'Corporate Tax Planning and Compliance',
      'Personal Tax Services',
      'Indirect Tax (GST/VAT) Advisory',
      'Other Tax Compliance'
    ]
  },
  {
    category: 'ADVISORY',
    services: [
      'Business Consulting',
      'Financial Restructuring',
      'Strategic Planning',
      'Risk Advisory'
    ]
  },
  {
    category: 'ACCOUNTING & BOOKKEEPING',
    services: [
      'Financial Statement Preparation',
      'Payroll Services',
      'Management Accounting',
      'Virtual CFO Services'
    ]
  },
  {
    category: 'CORPORATE SERVICES',
    services: [
      'Company Formation and Secretarial Services',
      'Corporate Governance',
      'Regulatory Compliance'
    ]
  },
  {
    category: 'OTHER SERVICES',
    services: [
      'Business License Registration',
      'RERA Compliance',
      'Labour Law & Business Advisory'
    ]
  }
];
