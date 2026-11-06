import { SectionHeading } from "@/components/ui/section-heading";
import { PostGrid } from "@/features/blog/components/post-grid";
import type { PostSummary } from "@/features/blog/types/post";
import page from "@/components/layout/page.module.css";
import styles from "./home-sections.module.css";

export function LatestPostsSection({
  posts,
}: {
  posts: readonly PostSummary[];
}) {
  if (posts.length === 0) return null;

  return (
    <section className={styles.section} aria-label="Latest posts">
      <div className={page.container}>
        <SectionHeading href="/blog" linkLabel="All notes">
          Lately, in writing.
        </SectionHeading>
        <PostGrid posts={posts} headingLevel={3} />
      </div>
    </section>
  );
}
