import { Button } from "./button";
import styles from "./ui.module.css";

export function EmptyState({
  title,
  description,
  onReset,
}: {
  title: string;
  description: string;
  onReset?: () => void;
}) {
  return (
    <div className={styles.empty}>
      <h2>{title}</h2>
      <p>{description}</p>
      {onReset && (
        <Button variant="secondary" onClick={onReset}>
          Clear filters
        </Button>
      )}
    </div>
  );
}
