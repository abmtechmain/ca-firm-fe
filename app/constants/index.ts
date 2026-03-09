import { BlogPost, DownloadItem, CaseStudy, StrengthItem, StrengthMain, TeamMember, Founder, KeyPerson } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    number: '01',
    date: 'May 14, 2025',
    location: 'Nashik Maharashtra',
    title: 'Product Launch & Announcements',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    number: '02',
    date: 'May 14, 2025',
    location: 'Nashik Maharashtra',
    title: 'Market Trends and Global Business Insights',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    number: '03',
    date: 'May 14, 2025',
    location: 'Nashik Maharashtra',
    title: 'Strategic Tax Planning for Corporates',
    imageUrl: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    number: '04',
    date: 'May 14, 2025',
    location: 'Nashik Maharashtra',
    title: 'Product Launch & Announcements',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    number: '05',
    date: 'May 14, 2025',
    location: 'Nashik Maharashtra',
    title: 'Digital Transformation in Modern Business',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    number: '06',
    date: 'May 14, 2025',
    location: 'Nashik Maharashtra',
    title: 'Product Launch & Announcements',
    imageUrl: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&q=80&w=800'
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
  description: 'Over 35 years of proven expertise in the Accounting, Auditing and Finance Industry.',
  imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
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
    name: 'SAYALI',
    role: 'Administration & Management',
    description: 'Specializes in administration and management services with expertise in organizational operations and efficiency.',
    imageUrl: '/images/team/Sayali Mandlik.jpeg'
  },
  {
    id: '2',
    name: 'KESHAV',
    role: 'Secretarial & Corporate Services',
    description: 'Specializes in secretarial and corporate services with extensive knowledge of compliance and corporate governance.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    name: 'RESHMA',
    role: 'Business & Labour Law',
    description: 'Specializes in business and labour law with expertise in legal compliance and regulatory matters.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    name: 'DEEPAK',
    role: 'Investment Advisory',
    description: 'Specializes in investment advisory services with expertise in financial planning and investment strategies.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '5',
    name: 'AKKASHA',
    role: 'Bookkeeping & Accounting',
    description: 'Specializes in bookkeeping and accounting services with expertise in financial record management and reporting.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600'
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
    name: 'CA. Rashmi Sampat Mandlik',
    phone: '+91 88885 55998',
    email: 'ca.rashmi@skmrd.com',
    qualification: 'FCA, M. Com, DISA',
    certification: 'FAFD, Concurrent Audit of Banks (appear), AI (appear)',
    imageUrl: '/images/team/CA Rashmi Mandlik.jpeg',
    description: [
      'Qualified since 2018.',
      'Senior partner of the firm.',
      'Having 7 Years post qualification of experience in providing the firm\'s core and additional services. She is responsible for the computerization & atomization of several processes, leading to faster response times and increased client satisfaction levels. In recent past, he has also handled assignments in the field of Corporate Restructuring for our key clients and conducting audit & advisory services of various laws related to taxation with its technical and analytical aspects',
      'Experience of Management & Internal Audit of Limited as well as Listed Companies.',
      'Experience of work in various laws e.g. Direct Taxes, Indirect Taxes, and Company Law etc.'
    ]
  },
  {
    id: '2',
    name: 'CA. Sangita Rajendra Kadam',
    phone: '+91 90968 63674',
    email: 'ca.sangita@skmrd.com',
    qualification: 'FCA, M. Com, DISA',
    certification: 'Concurrent Audit of Banks (appear), AI (appear)',
    imageUrl: '/images/team/CA Sangeeta Kadam.jpeg',
    description: [
      'Qualified since 2016.',
      'Senior partner of the firm.',
      'Having 9 Years post qualification of experience and 10 & more year of experience in CA field in conducting audit & advisory services of various laws related to taxation with its technical and analytical aspects',
      'Experience of Management & Internal Audit of Limited as well as Listed Companies.',
      'Experience of work in various laws e.g. Direct Taxes, Indirect Taxes, and Company Law etc.',
      'Attending Assessments & appeals in front of various Tax Authorities.',
      'Bank Audits',
      'Government Audits.'
    ]
  },
  {
    id: '3',
    name: 'CA. Nivrutti Ramesh Shinde',
    phone: '+91 97623 09538',
    email: 'ca.nivrutti@skmrd.com',
    qualification: 'FCA, M. Com, DISA',
    certification: 'Concurrent Audit of Banks (appear), Ind AS (appear)',
    imageUrl: '/images/team/CA Nivrutti Shinde.jpeg',
    description: [
      'Qualified Since 2018.',
      'Having 8 Years post qualification of experience and 10 & more year of experience in CA field in conducting internal audit & advisory services of various laws with its technical and analytical aspects.',
      'Having experience in co-operative sector auditing, consultancy, advisory, new society registration.',
      'Experience in various type of Audit & Assurance Services like - Statutory Audit, Internal & Management Audit, Bank Audit, IS Audit etc.',
      'Attending Assessments & appeals in front of various Tax Authorities.',
      'Government Audits.'
    ]
  },
  {
    id: '4',
    name: 'CA. Kunwarr Diggaa',
    phone: '+91 60033 66231',
    email: 'ca.kunwarr@skmrd.com',
    qualification: 'FCA, B. Com',
    certification: 'Concurrent Audit of Banks, FAFD (Appear)',
    imageUrl: '/images/team/CA Kunwarr Digga.jpeg',
    description: [
      'Qualified since 2019.',
      'Having 6 Years post qualification of experience in CA field in conducting audit & advisory services of various laws related to taxation with its technical and analytical aspects.',
      'Experience of Management & Internal Audit of Private as well as Public Companies.',
      'Experience of work in various laws e.g. Direct & Indirect Taxes, and Company Law etc.',
      'Attending Assessments & appeals in front of various Tax Authorities.',
      'Performed comprehensive statutory audits, ensuring compliance with regulatory standards and delivering actionable insights for organizational improvement',
      'Bank Audits',
      'Design & monitoring the Internal Controls and SOPs and ensure that they are properly placed & working.'
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
    'S K M R D & ASSOCIATES, CHARTERED ACCOUNTANTS is the medium size MULTI STATE CA firm in India with its head office in Nashik (MH) and having 4 branch offices i.e. Golaghat (Assam), Pune (MH), Chandwad (MH) and Jalgaon (MH).',
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
      mapLink: 'https://share.google/C6cJt1Uw8fcduqsJo'
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
