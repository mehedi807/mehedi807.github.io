"use client";

import { PageShell } from "@/components/layout/page-shell";
import { EmptyState } from "@/components/ui/empty-state";
import collection from "@/components/layout/collection.module.css";
import page from "@/components/layout/page.module.css";
import { BlogFilters } from "./components/blog-filters";
import { PostGrid } from "./components/post-grid";
import { blogContent } from "./data/blog-content";
import { useBlogFilters } from "./hooks/use-blog-filters";
import type { PostSummary } from "./types/post";

export function BlogPage({ posts }: { posts: readonly PostSummary[] }) {
  const filters = useBlogFilters(posts);
  return (
    <PageShell currentPath="/blog">
      <div className={page.page}>
        <div className={page.container}>
          <header className={page.masthead}>
            <h1 className={page.title}>{blogContent.title}</h1>
            <p className={page.intro}>{blogContent.introduction}</p>
          </header>
          {posts.length > 0 && <BlogFilters filters={filters} />}
          {posts.length > 0 && (
            <div className={collection.results}>
              <p role="status" aria-live="polite">
                {filters.results.length}{" "}
                {filters.results.length === 1 ? "article" : "articles"}
                {filters.active ? " matching your filters" : " to read"}
              </p>
              {filters.active && (
                <button
                  type="button"
                  className={collection.reset}
                  onClick={filters.reset}
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
          <div id="post-results">
            {posts.length === 0 ? (
              <EmptyState
                title="No articles yet."
                description="New notes will appear here when they are published."
              />
            ) : filters.results.length ? (
              <PostGrid posts={filters.results} />
            ) : (
              <EmptyState
                title={blogContent.emptyTitle}
                description={blogContent.emptyDescription}
                onReset={filters.reset}
              />
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
