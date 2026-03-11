export interface BlogPost {
  id: string;
  number: string;
  title: string;
  imageUrl: string;
  date: string;
  location: string;
  /** When set, READ button links to this URL (e.g. external article) instead of /blog/[id] */
  externalUrl?: string;
}

export interface ImportantLink {
  id: string;
  name: string;
  url: string;
  /** 'government' | 'ca' for grouping under Important Links */
  category?: 'government' | 'ca';
}

export interface DownloadItem {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  imageUrl: string;
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface StrengthMain {
  title: string;
  description: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  /** Optional object-position for the image (e.g. 'top', 'top center') so face is properly framed */
  imagePosition?: string;
}

export interface Founder {
  tag: string;
  name: string;
  role: string;
  description: string[];
  imageUrl: string;
}

export interface KeyPerson {
  id: string;
  name: string;
  phone: string;
  email: string;
  qualification: string;
  certification?: string;
  imageUrl: string;
  /** Optional object-position so face is properly framed (e.g. 'top center') */
  imagePosition?: string;
  description: string[];
}
