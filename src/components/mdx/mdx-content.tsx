import { compileMdx } from "@/lib/mdx";
import { mdxComponents } from "./mdx-components";
import { TableOfContents } from "./table-of-contents";
import styles from "./mdx.module.css";
import page from "@/components/layout/page.module.css";

type CompiledContent = Awaited<ReturnType<typeof compileMdx>>["Content"];
type ComponentMap = NonNullable<
  NonNullable<Parameters<CompiledContent>[0]>["components"]
>;

export async function MdxContent({
  source,
  components = mdxComponents,
}: {
  source: string;
  components?: ComponentMap;
}) {
  const { Content, headings } = await compileMdx(source);
  const hasToc = headings.length >= 2;
  return (
    <div
      className={`${page.articleLayout} ${hasToc ? "" : page.articleWithoutToc}`}
    >
      <TableOfContents headings={headings} />
      <div className={`${page.articleBody} ${styles.prose}`}>
        <Content components={components} />
      </div>
    </div>
  );
}
