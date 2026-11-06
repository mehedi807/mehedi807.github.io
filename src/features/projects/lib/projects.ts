import { cache } from "react";

import {
  contentLink,
  contentString,
  contentStrings,
  readCollection,
} from "@/lib/content";

import type {
  FeaturedProject,
  Project,
  ProjectSummary,
} from "../types/project";

export const getProjects = cache((): Project[] =>
  readCollection("projects")
    .map(({ slug, data, body }) => ({
      slug,
      title: contentString(data, "title"),
      summary: contentString(data, "summary"),
      headline: contentString(data, "headline", contentString(data, "title")),
      category: contentString(data, "category"),
      tags: contentStrings(data, "tags"),
      role: contentString(data, "role"),
      year: contentString(data, "year", "Year to confirm"),
      featured: data.featured === true,
      order:
        typeof data.order === "number" && Number.isFinite(data.order)
          ? data.order
          : 100,
      placeholder: data.placeholder === true,
      cover: contentLink(data, "cover"),
      coverAlt: contentString(data, "coverAlt", contentString(data, "title")),
      liveUrl: contentLink(data, "liveUrl"),
      sourceUrl: contentLink(data, "sourceUrl"),
      body,
    }))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title)),
);

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

export function getProjectSummaries(): ProjectSummary[] {
  return getProjects().map(({ body: _body, ...summary }) => {
    void _body;
    return summary;
  });
}

export function getFeaturedProjects(): FeaturedProject[] {
  return getProjects()
    .filter((project) => project.featured)
    .slice(0, 4)
    .map((project) => ({
      slug: project.slug,
      name: project.title,
      headline: project.headline,
      summary: project.summary,
      technologies: project.tags,
      siteUrl: project.liveUrl,
      href: `/projects/${project.slug}`,
      placeholder: project.placeholder,
      cover: project.cover,
      coverAlt: project.coverAlt,
    }));
}
