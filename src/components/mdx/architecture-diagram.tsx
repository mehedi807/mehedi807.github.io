import { ArrowRightIcon } from "@/components/ui/icons";
import styles from "./mdx.module.css";

export function ArchitectureDiagram({
  title,
  steps,
  caption,
}: {
  title: string;
  steps: readonly string[];
  caption?: string;
}) {
  return (
    <figure className={styles.diagram} aria-label={title}>
      <strong className={styles.diagramTitle}>{title}</strong>
      <ol>
        {steps.map((step, index) => (
          <li key={`${index}-${step}`}>
            <span>{step}</span>
            {index < steps.length - 1 && <ArrowRightIcon />}
          </li>
        ))}
      </ol>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
