import type { MetadataRoute } from "next";
import { getSiteUrl, isSiteIndexable, pageUrl } from "@/config/site";
import { getPosts } from "@/features/blog/lib/posts";
import { getProjects } from "@/features/projects/lib/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base || !isSiteIndexable()) return [];
  const projects = getProjects().filter((project) => !project.placeholder);
  const posts = getPosts().filter((post) => !post.placeholder);
  const paths = [
    "/",
    "/about",
    ...(projects.length ? ["/projects"] : []),
    ...(posts.length ? ["/blog"] : []),
  ];
  return [
    ...paths.map((path) => ({ url: pageUrl(path, base) })),
    ...projects.map((project) => ({
      url: pageUrl(`/projects/${project.slug}`, base),
      ...(project.cover
        ? { images: [new URL(project.cover, base).toString()] }
        : {}),
    })),
    ...posts.map((post) => ({
      url: pageUrl(`/blog/${post.slug}`, base),
      ...(post.updated ? { lastModified: post.updated } : {}),
      ...(post.cover ? { images: [new URL(post.cover, base).toString()] } : {}),
    })),
  ];
}
