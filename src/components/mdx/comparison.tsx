import styles from "./mdx.module.css";

export function Comparison({
  title,
  items,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  title: string;
  items: readonly { label: string; before: string; after: string }[];
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div
      className={styles.tableWrap}
      tabIndex={0}
      role="region"
      aria-label={title}
    >
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th scope="col">Concern</th>
            <th scope="col">{beforeLabel}</th>
            <th scope="col">{afterLabel}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.label}>
              <th scope="row">{item.label}</th>
              <td>{item.before}</td>
              <td>{item.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
