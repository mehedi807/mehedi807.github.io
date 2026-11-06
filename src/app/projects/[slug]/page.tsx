import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { ProjectDetailPage } from "@/features/projects/project-detail-page";
import { getProject, getProjects } from "@/features/projects/lib/projects";
import { staticContentParams } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { projectStructuredData } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return staticContentParams(getProjects().map((project) => project.slug));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return pageMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
    image: project.cover,
    imageAlt: project.coverAlt,
    article: { tags: project.tags },
    noIndex: project.placeholder,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <JsonLd data={projectStructuredData(project)} />
      <ProjectDetailPage project={project} />
    </>
  );
}
