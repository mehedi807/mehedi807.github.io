import Link from "next/link";
import { Tags } from "@/components/ui/tag";
import type { PostSummary } from "../types/post";
import styles from "./posts.module.css";

export function PostCard({
  post,
  headingLevel = 2,
}: {
  post: PostSummary;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  return (
    <article className={styles.post}>
      <div>
        <Heading className={styles.title}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </Heading>
        <p className={styles.summary}>{post.summary}</p>
        <Tags items={post.tags} />
      </div>
      <div className={styles.meta}>
        <time dateTime={post.date}>
          {new Intl.DateTimeFormat("en", {
            dateStyle: "medium",
            timeZone: "UTC",
          }).format(new Date(`${post.date}T00:00:00Z`))}
        </time>
        <span>{post.minutes} min read</span>
        {post.placeholder && (
          <span className={styles.sample}>Sample article</span>
        )}
      </div>
    </article>
  );
}
