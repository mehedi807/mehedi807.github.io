import type { ComponentPropsWithoutRef } from "react";

import { ArchitectureDiagram } from "./architecture-diagram";
import { Callout } from "./callout";
import { CodeBlock } from "./code-block";
import { Comparison } from "./comparison";
import { Demo } from "./demo";
import { Figure, MarkdownImage } from "./figure";
import styles from "./mdx.module.css";

function MdxLink({ href, children, ...props }: ComponentPropsWithoutRef<"a">) {
  if (!href || !/^(https?:|mailto:|\/(?!\/)|#)/.test(href))
    return <span>{children}</span>;
  const external = /^https?:/.test(href);
  return (
    <a
      {...props}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}

function MdxTable(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div
      className={styles.tableWrap}
      tabIndex={0}
      role="region"
      aria-label="Scrollable table"
    >
      <table {...props} />
    </div>
  );
}

export const mdxComponents = {
  a: MdxLink,
  pre: CodeBlock,
  img: MarkdownImage,
  table: MdxTable,
  Callout,
  Figure,
  ArchitectureDiagram,
  Comparison,
  Demo,
};
