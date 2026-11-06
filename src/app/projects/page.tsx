import { ProjectsPage } from "@/features/projects/projects-page";
import { getProjectSummaries } from "@/features/projects/lib/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected backend, applied AI, publishing, and commerce projects by Mehedi Hasan.",
  path: "/projects",
});

export default function Page() {
  return <ProjectsPage projects={getProjectSummaries()} />;
}
