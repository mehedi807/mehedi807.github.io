"use client";

import { PageShell } from "@/components/layout/page-shell";
import { EmptyState } from "@/components/ui/empty-state";
import collection from "@/components/layout/collection.module.css";
import page from "@/components/layout/page.module.css";
import { ProjectFilters } from "./components/project-filters";
import { ProjectGrid } from "./components/project-grid";
import { projectsContent } from "./data/projects-content";
import { useProjectFilters } from "./hooks/use-project-filters";
import type { ProjectSummary } from "./types/project";

export function ProjectsPage({
  projects,
}: {
  projects: readonly ProjectSummary[];
}) {
  const filters = useProjectFilters(projects);
  return (
    <PageShell currentPath="/projects">
      <div className={page.page}>
        <div className={page.container}>
          <header className={page.masthead}>
            <h1 className={page.title}>{projectsContent.title}</h1>
            <p className={page.intro}>{projectsContent.introduction}</p>
          </header>
          <ProjectFilters filters={filters} />
          <div className={collection.results}>
            <p role="status" aria-live="polite">
              {filters.results.length}{" "}
              {filters.results.length === 1 ? "project" : "projects"}
              {filters.active ? " matching your filters" : " to explore"}
            </p>
            {filters.active && (
              <button
                type="button"
                className={collection.reset}
                onClick={filters.reset}
              >
                Clear filters
              </button>
            )}
          </div>
          <div id="project-results">
            {filters.results.length ? (
              <ProjectGrid projects={filters.results} />
            ) : (
              <EmptyState
                title={
                  projects.length
                    ? projectsContent.emptyTitle
                    : "Projects are on their way."
                }
                description={projectsContent.emptyDescription}
                onReset={filters.reset}
              />
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
