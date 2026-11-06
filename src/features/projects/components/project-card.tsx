import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Tags } from "@/components/ui/tag";
import type { ProjectSummary } from "../types/project";
import styles from "./projects.module.css";

export function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <div className={styles.visual}>
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            sizes="(max-width: 680px) 100vw, 50vw"
            unoptimized
          />
        ) : (
          <>
            <span className={styles.coverName}>{project.title}</span>
            <span className={styles.coverCategory}>{project.category}</span>
            <span className={styles.coverNotice}>Product imagery to add</span>
          </>
        )}
      </div>
      <div className={styles.titleRow}>
        <h2>{project.title}</h2>
        <ArrowRightIcon />
      </div>
      <p className={styles.summary}>{project.summary}</p>
      <Tags items={project.tags} />
      {project.placeholder && (
        <span className={styles.draft}>Draft case study</span>
      )}
    </Link>
  );
}
