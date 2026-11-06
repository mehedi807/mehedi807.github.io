import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";
import { getPosts } from "@/features/blog/lib/posts";
import { getProjects } from "@/features/projects/lib/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) return [];
  const paths = [
    "/",
    "/about",
    "/projects",
    "/blog",
    ...getProjects()
      .filter((project) => !project.placeholder)
      .map((project) => `/projects/${project.slug}`),
    ...getPosts()
      .filter((post) => !post.placeholder)
      .map((post) => `/blog/${post.slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, base).toString() }));
}
