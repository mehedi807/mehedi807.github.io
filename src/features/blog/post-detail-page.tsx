import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { MdxContent } from "@/components/mdx/mdx-content";
import page from "@/components/layout/page.module.css";
import { PostHeader } from "./components/post-header";
import type { Post } from "./types/post";

export function PostDetailPage({ post }: { post: Post }) {
  return (
    <PageShell currentPath="/blog">
      <article className={page.page}>
        <div className={page.container}>
          <PostHeader post={post} />
          <MdxContent source={post.body} />
          <div className={page.articleEnd}>
            <Link href="/blog" className={page.textLink}>
              All notes
            </Link>
            <Link href="/projects" className={page.textLink}>
              Explore the work
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
