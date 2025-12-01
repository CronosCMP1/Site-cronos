export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  metric: string;
  value: string;
  image: string;
}

export interface AIResponse {
  text: string;
  loading: boolean;
  error: string | null;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SERVICES = 'services',
  INTELLIGENCE = 'intelligence',
  SHOWCASE = 'showcase',
  CONTACT = 'contact'
}