export type PostSummary = Readonly<{
  slug: string;
  title: string;
  summary: string;
  date: string;
  updated: string | null;
  tags: readonly string[];
  placeholder: boolean;
  minutes: number;
  cover: string | null;
  coverAlt: string;
}>;

export type Post = PostSummary & { body: string };
