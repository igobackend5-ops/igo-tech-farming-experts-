export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export interface FPACTrustLogo {
  name: string;
  role: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  priceEstimate: string;
  benefits: string[];
  features: string[];
  process: string[];
}

export interface TechItem {
  id: string;
  name: string;
  description: string;
  details: string[];
  techSpec: string;
  status: "active" | "developing" | "beta";
}

export interface SuccessStory {
  id: string;
  farmerName: string;
  location: string;
  crop: string;
  yieldIncrease: string;
  incomeGrowth: string;
  highlight: string;
  imageUrl: string;
  quote: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  publishDate: string;
  authorName: string;
  authorRole: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
