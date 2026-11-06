import type { Metadata } from "next";

import { getSiteUrl, isSiteIndexable, pageUrl, site } from "@/config/site";

export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  article,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string | null;
  imageAlt?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string | null;
    tags: readonly string[];
  };
  noIndex?: boolean;
}): Metadata {
  const base = getSiteUrl();
  const canonical = base ? pageUrl(path, base) : null;
  const allowIndexing = isSiteIndexable();
  const indexable = allowIndexing && !noIndex;
  const displayTitle = title === site.title ? title : `${title} — ${site.name}`;
  const socialImage = base
    ? {
        url: new URL(image || site.socialImage.path, base).toString(),
        alt: image ? (imageAlt ?? title) : site.socialImage.alt,
        ...(!image
          ? { width: site.socialImage.width, height: site.socialImage.height }
          : {}),
      }
    : null;
  return {
    title,
    description,
    authors: [
      {
        name: site.name,
        ...(base ? { url: pageUrl("/about", base) } : {}),
      },
    ],
    creator: site.name,
    publisher: site.name,
    ...(base ? { metadataBase: base } : {}),
    ...(canonical ? { alternates: { canonical } } : {}),
    robots: {
      index: indexable,
      follow: allowIndexing,
      googleBot: {
        index: indexable,
        follow: allowIndexing,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: displayTitle,
      description,
      siteName: site.name,
      locale: site.locale,
      ...(article
        ? {
            type: "article" as const,
            ...(article.publishedTime
              ? { publishedTime: article.publishedTime }
              : {}),
            ...(article.modifiedTime
              ? { modifiedTime: article.modifiedTime }
              : {}),
            ...(base ? { authors: [pageUrl("/about", base)] } : {}),
            tags: [...article.tags],
          }
        : { type: "website" as const }),
      ...(canonical ? { url: canonical } : {}),
      ...(socialImage ? { images: [socialImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description,
      ...(socialImage ? { images: [socialImage] } : {}),
    },
  };
}
