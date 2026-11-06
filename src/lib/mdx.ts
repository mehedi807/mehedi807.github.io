import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";

export type ContentHeading = { id: string; text: string; level: number };

type SyntaxNode = {
  type?: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: SyntaxNode[];
};

function nodeText(node: SyntaxNode): string {
  return node.value ?? node.children?.map(nodeText).join("") ?? "";
}

export async function compileMdx(source: string) {
  const headings: ContentHeading[] = [];
  const usedIds = new Set<string>(["main-content"]);

  function headingIds() {
    return (tree: unknown) => {
      function visit(node: SyntaxNode) {
        if (node.tagName === "h2" || node.tagName === "h3") {
          const text = nodeText(node);
          const base =
            text
              .toLowerCase()
              .normalize("NFKD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/[^a-z0-9\s-]/g, "")
              .trim()
              .replace(/\s+/g, "-") || "section";
          let id = base;
          let suffix = 2;
          while (usedIds.has(id)) id = `${base}-${suffix++}`;
          usedIds.add(id);
          node.properties = { ...node.properties, id };
          headings.push({ id, text, level: node.tagName === "h2" ? 2 : 3 });
        }
        node.children?.forEach(visit);
      }
      visit(tree as SyntaxNode);
    };
  }

  // This compiler accepts trusted local repository content only. MDX executes
  // JavaScript and must not receive visitor-submitted or remote input.
  const module = await evaluate(source, {
    ...runtime,
    development: false,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [headingIds],
  });
  return { Content: module.default, headings };
}
