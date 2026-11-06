"use client";

import styles from "./ui.module.css";

export function TagFilter({
  tags,
  selected,
  onSelect,
  label = "Filter by topic",
}: {
  tags: readonly string[];
  selected: string;
  onSelect: (tag: string) => void;
  label?: string;
}) {
  return (
    <div className={styles.tags} role="group" aria-label={label}>
      {["", ...tags].map((tag) => (
        <button
          key={tag ? `topic-${tag}` : "all-topics"}
          className={styles.filterTag}
          type="button"
          aria-pressed={selected === tag}
          onClick={() => onSelect(tag)}
        >
          {tag || "All topics"}
        </button>
      ))}
    </div>
  );
}
