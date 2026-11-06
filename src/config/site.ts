export const site = {
  name: "Mehedi Hasan",
  title: "Mehedi Hasan — Backend & AI Engineer",
  description:
    "Backend engineering and applied AI. Selected work, project notes, and writing by Mehedi Hasan.",
  url: "https://mehedi807.github.io/",
  indexingEnabled: true,
  language: "en",
  locale: "en_US",
  socialImage: {
    path: "/images/mehedi.jpeg",
    alt: "Mehedi Hasan — backend and AI engineer",
    width: 1195,
    height: 896,
  },
  // Set a public PDF path or HTTPS URL; leave empty for the email-request link.
  resumeUrl: "",
} as const;

export function getSiteUrl(): URL | null {
  try {
    const url = new URL(site.url);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      ["example.com", "www.example.com", "localhost", "127.0.0.1"].includes(
        url.hostname,
      )
    )
      return null;
    return new URL(url.origin);
  } catch {
    return null;
  }
}

export function isSiteIndexable(): boolean {
  return site.indexingEnabled && getSiteUrl() !== null;
}

// Keep document URLs consistent with trailingSlash in next.config.ts.
// Asset URLs (images, robots.txt, sitemap.xml) use new URL directly.
export function pageUrl(path: string, base: URL): string {
  return new URL(`${path.replace(/\/+$/, "")}/`, base).toString();
}

export function getResumeUrl(): string | null {
  const value = site.resumeUrl.trim();
  if (value.startsWith("/") && !value.startsWith("//")) return value;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}
