import { isValidElement } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { CopyCodeButton } from "./copy-code-button";
import styles from "./mdx.module.css";

function codeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(codeText).join("");
  if (isValidElement<{ children?: ReactNode }>(node))
    return codeText(node.props.children);
  return "";
}

export function CodeBlock({
  children,
  ...props
}: ComponentPropsWithoutRef<"pre">) {
  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeTools}>
        <CopyCodeButton code={codeText(children)} />
      </div>
      <pre
        {...props}
        className={styles.pre}
        tabIndex={0}
        aria-label="Code example"
      >
        {children}
      </pre>
    </div>
  );
}
