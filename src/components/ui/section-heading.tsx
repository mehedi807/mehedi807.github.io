import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowRightIcon } from "./icons";
import styles from "./ui.module.css";

export function SectionHeading({
  children,
  href,
  linkLabel,
}: {
  children: ReactNode;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <h2>{children}</h2>
      {href && linkLabel && (
        <Link href={href}>
          {linkLabel}
          <ArrowRightIcon />
        </Link>
      )}
    </div>
  );
}
