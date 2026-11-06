import Link from "next/link";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";
import { Tags } from "@/components/ui/tag";
import { formatContentDate } from "@/lib/content";
import page from "@/components/layout/page.module.css";
import type { PostSummary } from "../types/post";

export function PostHeader({ post }: { post: PostSummary }) {
  return (
    <header>
      <Link href="/blog" className={page.backLink}>
        Back to all notes
      </Link>
      <h1 className={page.title}>{post.title}</h1>
      <p className={page.intro}>{post.summary}</p>
      <div className={page.meta}>
        <time dateTime={post.date}>{formatContentDate(post.date)}</time>
        {post.updated && post.updated !== post.date && (
          <span>
            Updated{" "}
            <time dateTime={post.updated}>
              {formatContentDate(post.updated)}
            </time>
          </span>
        )}
        <span>{post.minutes} min read</span>
      </div>
      <div style={{ marginTop: 18 }}>
        <Tags items={post.tags} />
      </div>
      {post.placeholder && (
        <PlaceholderNotice title="Sample article">
          This article is placeholder content for reviewing the site. It has not
          been approved as the owner’s published writing.
        </PlaceholderNotice>
      )}
    </header>
  );
}
