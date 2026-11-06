"use client";

import Link from "next/link";
import type { KeyboardEvent, MouseEvent } from "react";

import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { contact } from "@/config/contact";
import { navigation } from "@/config/navigation";

import styles from "./site-header.module.css";

function closeAfterNavigation(event: MouseEvent<HTMLAnchorElement>) {
  const menu = event.currentTarget.closest("details");
  if (menu) menu.open = false;
}

function handleMenuKeyDown(event: KeyboardEvent<HTMLDetailsElement>) {
  if (event.key !== "Escape" || !event.currentTarget.open) return;
  event.preventDefault();
  event.currentTarget.open = false;
  event.currentTarget.querySelector<HTMLElement>("summary")?.focus();
}

export function MobileNav({ currentPath = "/" }: { currentPath?: string }) {
  return (
    <details className={styles.mobileNav} onKeyDown={handleMenuKeyDown}>
      <summary aria-label="Navigation menu" className={styles.menuTrigger}>
        <MenuIcon className={styles.menuIcon} />
        <CloseIcon className={styles.closeIcon} />
      </summary>
      <nav className={styles.mobilePanel} aria-label="Mobile navigation">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={
              currentPath.startsWith(item.href) ? "page" : undefined
            }
            onClick={closeAfterNavigation}
          >
            {item.label}
          </Link>
        ))}
        <a href={contact.emailHref} onClick={closeAfterNavigation}>
          Let’s talk
        </a>
      </nav>
    </details>
  );
}
