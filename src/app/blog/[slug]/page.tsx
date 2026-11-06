import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { PostDetailPage } from "@/features/blog/post-detail-page";
import { getPost, getPosts } from "@/features/blog/lib/posts";
import { staticContentParams } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { postStructuredData } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return staticContentParams(getPosts().map((post) => post.slug));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return pageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${post.slug}`,
    image: post.cover,
    imageAlt: post.coverAlt,
    article: {
      publishedTime: post.date,
      modifiedTime: post.updated,
      tags: post.tags,
    },
    noIndex: post.placeholder,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <>
      <JsonLd data={postStructuredData(post)} />
      <PostDetailPage post={post} />
    </>
  );
}
