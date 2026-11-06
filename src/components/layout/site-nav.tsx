import Link from "next/link";

import { navigation } from "@/config/navigation";

import styles from "./site-header.module.css";

export function SiteNav({ currentPath = "/" }: { currentPath?: string }) {
  return (
    <nav className={styles.desktopNav} aria-label="Main navigation">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={currentPath.startsWith(item.href) ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
