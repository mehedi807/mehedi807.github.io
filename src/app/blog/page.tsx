import { BlogPage } from "@/features/blog/blog-page";
import { getPostSummaries } from "@/features/blog/lib/posts";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Writing",
  description:
    "Notes on backend systems, applied AI, and engineering decisions.",
  path: "/blog",
});

export default function Page() {
  return <BlogPage posts={getPostSummaries()} />;
}
