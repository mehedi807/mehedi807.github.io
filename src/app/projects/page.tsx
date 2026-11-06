import { ProjectsPage } from "@/features/projects/projects-page";
import { JsonLd } from "@/components/seo/json-ld";
import { getProjectSummaries } from "@/features/projects/lib/projects";
import { pageMetadata } from "@/lib/metadata";
import { pageStructuredData } from "@/lib/structured-data";

const description = "Projects and engineering case studies by Mehedi Hasan.";

export function generateMetadata() {
  return pageMetadata({
    title: "Projects",
    description,
    path: "/projects",
    noIndex: !getProjectSummaries().some((project) => !project.placeholder),
  });
}

export default function Page() {
  const projects = getProjectSummaries();
  return (
    <>
      <JsonLd
        data={pageStructuredData({
          title: "Projects",
          description,
          path: "/projects",
          type: "CollectionPage",
          items: projects
            .filter((project) => !project.placeholder)
            .map((project) => ({
              name: project.title,
              path: `/projects/${project.slug}`,
            })),
        })}
      />
      <ProjectsPage projects={projects} />
    </>
  );
}
