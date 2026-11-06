export const site = {
  name: "Mehedi Hasan",
  title: "Mehedi Hasan — Backend & AI Engineer",
  description:
    "Backend engineering and applied AI. Selected work, project notes, and writing by Mehedi Hasan.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL ?? "",
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
