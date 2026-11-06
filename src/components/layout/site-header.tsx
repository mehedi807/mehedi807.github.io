import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { contact } from "@/config/contact";
import { site } from "@/config/site";

import { MobileNav } from "./mobile-nav";
import { SiteNav } from "./site-nav";
import styles from "./site-header.module.css";

export function SiteHeader({ currentPath = "/" }: { currentPath?: string }) {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <div className={styles.inner}>
        <Link
          className={styles.wordmark}
          href="/"
          aria-label={`${site.name} home`}
        >
          mehedi<span> hasan</span>
        </Link>
        <div className={styles.navigationGroup}>
          <SiteNav currentPath={currentPath} />
          <a className={styles.contactLink} href={contact.emailHref}>
            Let’s talk <ArrowUpRightIcon />
          </a>
          <ThemeToggle />
          <MobileNav currentPath={currentPath} />
        </div>
      </div>
    </header>
  );
}
