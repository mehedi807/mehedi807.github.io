"use client";

import { useId } from "react";
import { SearchInput } from "@/components/ui/search-input";
import { TagFilter } from "@/components/ui/tag-filter";
import styles from "@/components/layout/collection.module.css";
import type { useProjectFilters } from "../hooks/use-project-filters";

export function ProjectFilters({
  filters,
}: {
  filters: ReturnType<typeof useProjectFilters>;
}) {
  const id = useId();
  return (
    <div className={styles.filters}>
      <div className={styles.searchRow}>
        <SearchInput
          value={filters.query}
          onChange={filters.setQuery}
          label="Search projects"
          placeholder="Search by project, technology, or problem…"
          controls="project-results"
        />
        <div className={styles.selectGroup}>
          <label htmlFor={id}>Project category</label>
          <select
            id={id}
            value={filters.category}
            onChange={(event) => filters.setCategory(event.target.value)}
            aria-controls="project-results"
          >
            <option value="">All categories</option>
            {filters.categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      <TagFilter
        tags={filters.tags}
        selected={filters.tag}
        onSelect={filters.setTag}
        label="Filter projects by technology or topic"
      />
    </div>
  );
}
