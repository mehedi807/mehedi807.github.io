import { ArrowUpRightIcon } from "@/components/ui/icons";
import type { ProjectSummary } from "../types/project";
import styles from "./projects.module.css";

export function ProjectLinks({ project }: { project: ProjectSummary }) {
  const links = [
    { label: "Live project", href: project.liveUrl },
    { label: "Source code", href: project.sourceUrl },
  ];
  return (
    <div className={styles.links}>
      {links.map(
        (link) =>
          link.href && (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              {link.label}
              <ArrowUpRightIcon />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ),
      )}
    </div>
  );
}
