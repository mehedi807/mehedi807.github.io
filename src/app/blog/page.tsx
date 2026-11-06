import { BlogPage } from "@/features/blog/blog-page";
import { JsonLd } from "@/components/seo/json-ld";
import { getPostSummaries } from "@/features/blog/lib/posts";
import { pageMetadata } from "@/lib/metadata";
import { pageStructuredData } from "@/lib/structured-data";

const description =
  "Notes on backend systems, applied AI, and engineering decisions.";

export function generateMetadata() {
  return pageMetadata({
    title: "Writing",
    description,
    path: "/blog",
    noIndex: !getPostSummaries().some((post) => !post.placeholder),
  });
}

export default function Page() {
  const posts = getPostSummaries();
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          title: "Writing",
          description,
          path: "/blog",
          type: "CollectionPage",
          items: posts
            .filter((post) => !post.placeholder)
            .map((post) => ({ name: post.title, path: `/blog/${post.slug}` })),
        })}
      />
      <BlogPage posts={posts} />
    </>
  );
}
