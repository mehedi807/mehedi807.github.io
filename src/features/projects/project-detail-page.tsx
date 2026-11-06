import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { MdxContent } from "@/components/mdx/mdx-content";
import page from "@/components/layout/page.module.css";
import { ProjectHeader } from "./components/project-header";
import { projectMdxComponents } from "./components/project-mdx-components";
import type { Project } from "./types/project";

export function ProjectDetailPage({ project }: { project: Project }) {
  return (
    <PageShell currentPath="/projects">
      <article className={page.page}>
        <div className={page.container}>
          <ProjectHeader project={project} />
          <MdxContent source={project.body} components={projectMdxComponents} />
          <div className={page.articleEnd}>
            <Link href="/projects" className={page.textLink}>
              All projects
            </Link>
            <Link href="/about" className={page.textLink}>
              About the engineer
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
