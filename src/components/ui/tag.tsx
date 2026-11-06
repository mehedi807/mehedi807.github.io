import type { ReactNode } from "react";
import styles from "./ui.module.css";

export function Tag({ children }: { children: ReactNode }) {
  return <span className={styles.tag}>{children}</span>;
}

export function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.tagList} aria-label="Topics">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
