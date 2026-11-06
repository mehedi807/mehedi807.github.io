import type { ContentHeading } from "@/lib/mdx";
import styles from "./mdx.module.css";

export function TableOfContents({
  headings,
}: {
  headings: readonly ContentHeading[];
}) {
  if (headings.length < 2) return null;
  return (
    <nav className={styles.toc} aria-label="On this page">
      <p>On this page</p>
      <ol>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? styles.tocNested : undefined}
          >
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
