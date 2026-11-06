import type { ProjectSummary } from "../types/project";
import { ProjectCard } from "./project-card";
import styles from "./projects.module.css";

export function ProjectGrid({
  projects,
}: {
  projects: readonly ProjectSummary[];
}) {
  return (
    <ul className={styles.grid}>
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
