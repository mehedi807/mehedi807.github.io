import Link from "next/link";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";
import { Tags } from "@/components/ui/tag";
import page from "@/components/layout/page.module.css";
import type { ProjectSummary } from "../types/project";
import { ProjectLinks } from "./project-links";
import styles from "./projects.module.css";

export function ProjectHeader({ project }: { project: ProjectSummary }) {
  return (
    <header>
      <Link href="/projects" className={page.backLink}>
        Back to projects
      </Link>
      <h1 className={page.title}>{project.title}</h1>
      <p className={page.intro}>{project.summary}</p>
      <dl className={styles.headerDetails}>
        <div>
          <dt>Focus</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Category</dt>
          <dd>{project.category}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>
      </dl>
      <div className={page.row}>
        <Tags items={project.tags} />
        <ProjectLinks project={project} />
      </div>
      {project.placeholder && (
        <PlaceholderNotice title="Draft case study">
          The overview uses résumé facts. Detailed ownership, diagrams, dates,
          and outcomes are still marked for review.
        </PlaceholderNotice>
      )}
    </header>
  );
}
