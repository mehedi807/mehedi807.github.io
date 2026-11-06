import page from "@/components/layout/page.module.css";
import { aboutContent } from "../data/about-content";
import styles from "./about.module.css";

export function ExpertiseSection() {
  return (
    <section
      className={`${page.section} ${page.sectionGrid}`}
      aria-labelledby="expertise-heading"
    >
      <h2 id="expertise-heading" className={page.sectionTitle}>
        Where I go deep.
      </h2>
      <div className={styles.expertise}>
        {aboutContent.expertise.map((area) => (
          <div key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <ul>
              {area.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
