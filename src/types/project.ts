export interface Project {
  id: number;
  slug: string;

  title: string;
  category: string;

  description: string;
  image: string;

  technologies: string[];

  liveUrl: string;

  clientRepo: string;
  serverRepo?: string;

  challenges: string;
  futurePlans: string;
}