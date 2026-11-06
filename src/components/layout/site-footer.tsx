import Link from "next/link";

import { ContactLinks } from "@/components/ui/contact-links";
import { site } from "@/config/site";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <Link className={styles.name} href="/">
            {site.name}
          </Link>
          <p>Backend engineering &amp; applied AI.</p>
        </div>
        <ContactLinks />
      </div>
      <div className={styles.bottom}>
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
