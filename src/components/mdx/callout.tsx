import type { ReactNode } from "react";
import styles from "./mdx.module.css";

export function Callout({
  title = "Note",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className={styles.callout} role="note">
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}
