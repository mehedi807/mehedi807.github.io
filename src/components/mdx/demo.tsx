import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import styles from "./mdx.module.css";

export function Demo({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children?: ReactNode;
}) {
  return (
    <section className={styles.demo}>
      <h3>{title}</h3>
      {children && <div>{children}</div>}
      <a href={href} target="_blank" rel="noreferrer noopener">
        Open live project
        <ArrowUpRightIcon />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </section>
  );
}
