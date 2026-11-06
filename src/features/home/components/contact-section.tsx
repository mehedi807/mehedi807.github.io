import { ContactLinks } from "@/components/ui/contact-links";
import { contact } from "@/config/contact";
import page from "@/components/layout/page.module.css";
import styles from "./home-sections.module.css";

export function ContactSection() {
  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-heading"
    >
      <div className={`${page.container} ${styles.contactInner}`}>
        <h2 id="contact-heading">Have something in mind?</h2>
        <div>
          <p>
            Whether you’re building a product or growing an engineering team,
            I’d like to hear about it.
          </p>
          <a href={contact.emailHref} className={styles.email}>
            {contact.email}
          </a>
          <ContactLinks includeEmail={false} />
        </div>
      </div>
    </section>
  );
}
