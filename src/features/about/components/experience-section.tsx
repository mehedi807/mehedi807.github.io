import page from "@/components/layout/page.module.css";
import { aboutContent } from "../data/about-content";
import styles from "./about.module.css";

export function ExperienceSection() {
  return (
    <section
      className={`${page.section} ${page.sectionGrid}`}
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className={page.sectionTitle}>
        Experience &amp; education.
      </h2>
      <div className={styles.experience}>
        {aboutContent.experience.map((experience) => (
          <div key={experience.company}>
            <h3>{experience.company}</h3>
            <p className={styles.role}>{experience.role}</p>
            <p className={styles.period}>{experience.period}</p>
            <ul>
              {experience.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.education}>
          <h3>{aboutContent.education.institution}</h3>
          <p className={styles.role}>{aboutContent.education.qualification}</p>
          <p className={styles.period}>{aboutContent.education.completed}</p>
        </div>
      </div>
    </section>
  );
}
