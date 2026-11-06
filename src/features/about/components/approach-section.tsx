import { PlaceholderNotice } from "@/components/ui/placeholder-notice";
import page from "@/components/layout/page.module.css";
import { aboutContent } from "../data/about-content";
import styles from "./about.module.css";

export function ApproachSection() {
  return (
    <section
      className={`${page.section} ${page.sectionGrid}`}
      aria-labelledby="approach-heading"
    >
      <h2 id="approach-heading" className={page.sectionTitle}>
        How I approach the work.
      </h2>
      <div>
        <div className={styles.approach}>
          {aboutContent.approach.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
