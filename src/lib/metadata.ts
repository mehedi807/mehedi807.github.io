import type { Metadata } from "next";

import { getSiteUrl, site } from "@/config/site";

export function pageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string | null;
  noIndex?: boolean;
}): Metadata {
  const base = getSiteUrl();
  const canonical = base ? new URL(path, base).toString() : null;
  return {
    title,
    description,
    ...(base ? { metadataBase: base } : {}),
    ...(canonical ? { alternates: { canonical } } : {}),
    robots: { index: !!base && !noIndex, follow: !!base && !noIndex },
    openGraph: {
      title,
      description,
      siteName: site.name,
      type: "website",
      ...(canonical ? { url: canonical } : {}),
      ...(base
        ? { images: [{ url: image ?? "/images/mehedi.jpeg", alt: title }] }
        : {}),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
