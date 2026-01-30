export interface BlogPost {
  id: string;
  number: string;
  title: string;
  imageUrl: string;
  date: string;
  location: string;
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
  description: string[];
}
