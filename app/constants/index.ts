import { BlogPost, DownloadItem, CaseStudy } from '../types';

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
  imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800'
};

export const BRAND_COLORS = {
  primary: '#0e6d8a',
  textMuted: '#71717a', // Slightly adjusted for exact match
  textHeading: '#18181b',
};
