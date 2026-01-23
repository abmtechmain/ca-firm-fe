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
  title: 'Experience',
  description: 'Guided by strong professional ethics and a commitment to accuracy, transparency, and long-term client relationships.',
  imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
};

export const STRENGTHS_GRID: StrengthItem[] = [
  {
    title: 'Expert Team',
    description: 'Qualified Chartered Accountants with hands-on experience across taxation, audit, and regulatory compliance.'
  },
  {
    title: 'Timely Delivery',
    description: 'Structured processes and proactive reminders ensure all statutory filings and deadlines are met without last-minute stress.'
  },
  {
    title: 'Practical Solutions',
    description: 'Advice that is clear, actionable, and aligned with your business realities – not just theoretical interpretations.'
  },
  {
    title: 'Client-Focused',
    description: 'Personalized attention, transparent communication, and solutions tailored to your specific requirements.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'TEAM MEMBER',
    role: 'Chartered Accountant',
    description: 'Specialises In Taxation, Audit, And Business Advisory With Years Of Industry Experience.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    name: 'TEAM MEMBER',
    role: 'Chartered Accountant',
    description: 'Specialises In Taxation, Audit, And Business Advisory With Years Of Industry Experience.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    name: 'TEAM MEMBER',
    role: 'Chartered Accountant',
    description: 'Specialises In Taxation, Audit, And Business Advisory With Years Of Industry Experience.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    name: 'TEAM MEMBER',
    role: 'Chartered Accountant',
    description: 'Specialises In Taxation, Audit, And Business Advisory With Years Of Industry Experience.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '5',
    name: 'TEAM MEMBER',
    role: 'Chartered Accountant',
    description: 'Specialises In Taxation, Audit, And Business Advisory With Years Of Industry Experience.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600'
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
    title: 'VISION',
    description: 'To be a trusted professional advisory firm recognized for integrity, quality, and long-term client relationships.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  mission: {
    title: 'MISSION',
    description: 'To deliver reliable and compliant financial, taxation, and advisory services through structured processes, technical expertise, and client-centric solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  }
};

export const FOUNDER_DATA: Founder = {
  tag: 'FOUNDER OF SKMRD',
  name: 'SAMARTH UX',
  role: 'CHARTED ACCOUNTANT IN NASHIK',
  description: [
    "[Partner Name] Brings Extensive Experience In Handling Taxation, Audit, And Compliance Matters Across Various Industries. Known For A Practical And Solution-Oriented Approach, They Focus On Delivering Accurate Advice While Ensuring Regulatory Compliance And Risk Management For Clients.",
    "[Partner Name] Brings Extensive Experience In Handling Taxation, Audit, And Compliance Matters Across Various Industries. Known For A Practical And Solution-Oriented Approach, They Focus On Delivering Accurate Advice While Ensuring Regulatory Compliance And Risk Management For Clients.",
    "[Partner Name] Brings Extensive Experience In Handling Taxation, Audit, And Compliance Matters Across Various Industries. Known For A Practical And Solution-Oriented Approach"
  ],
  imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
};

export const KEY_PERSONS: KeyPerson[] = Array(5).fill({
  id: '1',
  name: 'CA. SAMPAT KACHU MANDLIK',
  phone: '+91 88885 5599',
  qualification: 'FCA, M. COM',
  imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
  description: [
    "- Qualified Since 2018.",
    "- Senior Partner Of The Firm.",
    "- Having 7 Years Post Qualification Of Experience In Providing The Firm's Core And Additional Services. She Is Responsible For The Computerization & Atomization Of Several Processes, Leading To Faster Response Times And Increased Client Satisfaction Levels. In Recent Past, He Has Also Handled Assignments In The Field Of Corporate Restructuring For Our Key Clients And Conducting Audit & Advisory Services Of Various Laws Related To Taxation With Its Technical And Analytical Aspects.",
    "- Experience Of Management & Internal Audit Of Limited As Well As Listed Companies.",
    "- Experience Of Work In Various Laws E.G. Direct Taxes, Indirect Taxes, And Company Law Etc."
  ]
}).map((p, i) => ({ ...p, id: i.toString() }));

export const BRAND_COLORS = {
  primary: '#0e6d8a',
  accent: '#FF541F',
  textMuted: '#71717a', // Slightly adjusted for exact match
  textHeading: '#18181b',
};
