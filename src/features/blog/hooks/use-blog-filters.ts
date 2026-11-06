"use client";

import { useState } from "react";
import { collectionTags, matchesSearch } from "@/lib/search";
import type { PostSummary } from "../types/post";

export function useBlogFilters(posts: readonly PostSummary[]) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const tags = collectionTags(posts);
  const results = posts.filter(
    (post) =>
      (!tag || post.tags.includes(tag)) &&
      matchesSearch(query, [post.title, post.summary, ...post.tags]),
  );
  function reset() {
    setQuery("");
    setTag("");
  }
  return {
    query,
    setQuery,
    tag,
    setTag,
    tags,
    results,
    reset,
    active: !!(query || tag),
  };
}
