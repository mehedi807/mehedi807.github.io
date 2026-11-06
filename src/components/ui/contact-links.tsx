import { contact } from "@/config/contact";
import { ArrowUpRightIcon } from "./icons";
import styles from "./ui.module.css";

export function ContactLinks({
  includeEmail = true,
}: {
  includeEmail?: boolean;
}) {
  return (
    <ul className={styles.contacts} aria-label="Contact and social links">
      {includeEmail && (
        <li>
          <a href={contact.emailHref}>
            Email
            <ArrowUpRightIcon />
          </a>
        </li>
      )}
      {contact.socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${social.label} (opens in a new tab)`}
          >
            {social.label}
            <ArrowUpRightIcon />
          </a>
        </li>
      ))}
    </ul>
  );
}
