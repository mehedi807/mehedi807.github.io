import type { ReactNode } from "react";
import styles from "./ui.module.css";

export function PlaceholderNotice({
  title = "Draft content",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className={styles.notice} role="note">
      <strong>{title}</strong>
      <p>{children}</p>
    </aside>
  );
}
