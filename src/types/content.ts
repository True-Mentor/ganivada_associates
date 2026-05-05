export interface PracticeArea {
  slug: string;
  title: string;
  summary: string;
  icon: string;
  order: number;
  content: string;
  faqs?: { q: string; a: string }[];
  related?: string[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
  ogImage?: string;
  content: string;
  readingTime: string;
}

export interface TeamMemberContent {
  slug: string;
  name: string;
  designation: string;
  photo: string;
  practiceAreas: string[];
  education: { institution: string; degree: string; year: string; grade?: string }[];
  experience: { org: string; role: string; period: string; location?: string; description?: string }[];
  memberships: string[];
  languages: string[];
  email?: string;
  linkedin?: string;
  content: string;
}
