export type FeaturedProject = Readonly<{
  slug: string;
  name: string;
  headline: string;
  summary: string;
  technologies: readonly string[];
  siteUrl: string | null;
  href: string;
  placeholder: boolean;
  cover: string | null;
  coverAlt: string;
}>;

export type ProjectSummary = Readonly<{
  slug: string;
  title: string;
  summary: string;
  headline: string;
  category: string;
  tags: readonly string[];
  role: string;
  year: string;
  featured: boolean;
  order: number;
  placeholder: boolean;
  cover: string | null;
  coverAlt: string;
  liveUrl: string | null;
  sourceUrl: string | null;
}>;

export type Project = ProjectSummary & { body: string };
