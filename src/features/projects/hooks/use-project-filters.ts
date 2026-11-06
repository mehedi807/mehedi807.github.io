"use client";

import { useState } from "react";
import { collectionTags, matchesSearch } from "@/lib/search";
import type { ProjectSummary } from "../types/project";

export function useProjectFilters(projects: readonly ProjectSummary[]) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");
  const tags = collectionTags(projects);
  const categories = [
    ...new Set(projects.map((project) => project.category)),
  ].sort();
  const results = projects.filter(
    (project) =>
      (!tag || project.tags.includes(tag)) &&
      (!category || project.category === category) &&
      matchesSearch(query, [
        project.title,
        project.summary,
        project.category,
        ...project.tags,
      ]),
  );
  function reset() {
    setQuery("");
    setTag("");
    setCategory("");
  }
  return {
    query,
    setQuery,
    tag,
    setTag,
    category,
    setCategory,
    tags,
    categories,
    results,
    reset,
    active: !!(query || tag || category),
  };
}
