import type { PostSummary } from "../types/post";
import { PostCard } from "./post-card";
import styles from "./posts.module.css";

export function PostGrid({
  posts,
  headingLevel = 2,
}: {
  posts: readonly PostSummary[];
  headingLevel?: 2 | 3;
}) {
  return (
    <ol className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <PostCard post={post} headingLevel={headingLevel} />
        </li>
      ))}
    </ol>
  );
}
