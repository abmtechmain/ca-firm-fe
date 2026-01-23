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
