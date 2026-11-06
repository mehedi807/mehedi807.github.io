"use client";

import { SearchInput } from "@/components/ui/search-input";
import { TagFilter } from "@/components/ui/tag-filter";
import styles from "@/components/layout/collection.module.css";
import type { useBlogFilters } from "../hooks/use-blog-filters";

export function BlogFilters({
  filters,
}: {
  filters: ReturnType<typeof useBlogFilters>;
}) {
  return (
    <div className={styles.filters}>
      <div className={styles.singleSearch}>
        <SearchInput
          value={filters.query}
          onChange={filters.setQuery}
          label="Search articles"
          placeholder="Search titles, summaries, and topics…"
          controls="post-results"
        />
      </div>
      <TagFilter
        tags={filters.tags}
        selected={filters.tag}
        onSelect={filters.setTag}
      />
    </div>
  );
}
