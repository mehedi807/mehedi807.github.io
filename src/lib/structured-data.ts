import { contact } from "@/config/contact";
import { getSiteUrl, pageUrl, site } from "@/config/site";
import type { PostSummary } from "@/features/blog/types/post";
import type { ProjectSummary } from "@/features/projects/types/project";

export type StructuredData = Readonly<Record<string, unknown>>;
type PageLink = Readonly<{ name: string; path: string }>;

function graph(nodes: readonly StructuredData[]): StructuredData {
  return { "@context": "https://schema.org", "@graph": nodes };
}

function breadcrumbs(base: URL, links: readonly PageLink[]): StructuredData {
  const current = links[links.length - 1];
  return {
    "@type": "BreadcrumbList",
    ...(current ? { "@id": `${pageUrl(current.path, base)}#breadcrumbs` } : {}),
    itemListElement: links.map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.name,
      item: pageUrl(link.path, base),
    })),
  };
}

export function siteStructuredData(): StructuredData | null {
  const base = getSiteUrl();
  if (!base) return null;
  const personId = new URL("#person", base).toString();

  return graph([
    {
      "@type": "Person",
      "@id": personId,
      name: site.name,
      url: pageUrl("/about", base),
      image: new URL(site.socialImage.path, base).toString(),
      jobTitle: "Backend and AI engineer",
      sameAs: contact.socials.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": new URL("#website", base).toString(),
      name: site.name,
      description: site.description,
      url: base.toString(),
      inLanguage: site.language,
      publisher: { "@id": personId },
    },
  ]);
}

export function pageStructuredData({
  title,
  description,
  path,
  type = "WebPage",
  items,
}: {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "ProfilePage" | "CollectionPage";
  items?: readonly PageLink[];
}): StructuredData | null {
  const base = getSiteUrl();
  if (!base || (type === "CollectionPage" && !items?.length)) return null;
  const url = pageUrl(path, base);
  const nodes: StructuredData[] = [
    {
      "@type": type,
      "@id": `${url}#webpage`,
      name: title,
      description,
      url,
      inLanguage: site.language,
      isPartOf: { "@id": new URL("#website", base).toString() },
      ...(type === "ProfilePage"
        ? { mainEntity: { "@id": new URL("#person", base).toString() } }
        : { about: { "@id": new URL("#person", base).toString() } }),
      ...(items?.length
        ? {
            mainEntity: {
              "@type": "ItemList",
              itemListElement: items.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                url: pageUrl(item.path, base),
              })),
            },
          }
        : {}),
      ...(path !== "/" ? { breadcrumb: { "@id": `${url}#breadcrumbs` } } : {}),
    },
  ];
  if (path !== "/") {
    nodes.push(
      breadcrumbs(base, [
        { name: "Home", path: "/" },
        { name: title, path },
      ]),
    );
  }
  return graph(nodes);
}

function articleStructuredData({
  type,
  title,
  summary,
  path,
  parent,
  tags,
  cover,
  published,
  updated,
}: {
  type: "Article" | "BlogPosting";
  title: string;
  summary: string;
  path: string;
  parent: PageLink;
  tags: readonly string[];
  cover: string | null;
  published?: string;
  updated?: string | null;
}): StructuredData | null {
  const base = getSiteUrl();
  if (!base) return null;
  const url = pageUrl(path, base);
  return graph([
    {
      "@type": type,
      "@id": `${url}#article`,
      headline: title,
      description: summary,
      url,
      inLanguage: site.language,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
        breadcrumb: { "@id": `${url}#breadcrumbs` },
      },
      author: {
        "@type": "Person",
        "@id": new URL("#person", base).toString(),
        name: site.name,
        url: pageUrl("/about", base),
      },
      isPartOf: { "@id": new URL("#website", base).toString() },
      keywords: [...tags],
      ...(cover ? { image: new URL(cover, base).toString() } : {}),
      ...(published ? { datePublished: published } : {}),
      ...(updated ? { dateModified: updated } : {}),
    },
    breadcrumbs(base, [
      { name: "Home", path: "/" },
      parent,
      { name: title, path },
    ]),
  ]);
}

export function postStructuredData(post: PostSummary): StructuredData | null {
  if (post.placeholder) return null;
  return articleStructuredData({
    type: "BlogPosting",
    title: post.title,
    summary: post.summary,
    path: `/blog/${post.slug}`,
    parent: { name: "Writing", path: "/blog" },
    tags: post.tags,
    cover: post.cover,
    published: post.date,
    updated: post.updated,
  });
}

export function projectStructuredData(
  project: ProjectSummary,
): StructuredData | null {
  if (project.placeholder) return null;
  return articleStructuredData({
    type: "Article",
    title: project.title,
    summary: project.summary,
    path: `/projects/${project.slug}`,
    parent: { name: "Projects", path: "/projects" },
    tags: project.tags,
    cover: project.cover,
  });
}
