import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { cache } from "react";

export type ContentCollection = "projects" | "blog";
export type ContentDocument = {
  slug: string;
  data: Record<string, unknown>;
  body: string;
};

export const readCollection = cache(
  (collection: ContentCollection): ContentDocument[] => {
    const directory = path.join(process.cwd(), "src", "content", collection);
    if (!existsSync(directory)) return [];

    return readdirSync(directory)
      .filter((filename) => /^[a-z0-9][a-z0-9-]*\.mdx$/.test(filename))
      .sort()
      .map((filename) => {
        const parsed = matter(
          readFileSync(path.join(directory, filename), "utf8"),
        );
        const data: unknown = parsed.data;
        if (!data || typeof data !== "object" || Array.isArray(data)) {
          throw new Error(`Invalid frontmatter in ${collection}/${filename}`);
        }
        return {
          slug: filename.slice(0, -4),
          data: data as Record<string, unknown>,
          body: parsed.content.trim(),
        };
      })
      .filter((document) => document.data.draft !== true);
  },
);

export function contentString(
  data: Record<string, unknown>,
  key: string,
  fallback?: string,
): string {
  const value = data[key];
  if (typeof value === "string" && value.trim()) return value.trim();
  if (fallback !== undefined) return fallback;
  throw new Error(`Content requires a nonempty string: ${key}`);
}

export function contentStrings(
  data: Record<string, unknown>,
  key: string,
): string[] {
  const value = data[key];
  if (
    !Array.isArray(value) ||
    !value.every((item): item is string => typeof item === "string")
  ) {
    throw new Error(`Content requires a string array: ${key}`);
  }
  return [...new Set(value.map((item) => item.trim()).filter(Boolean))];
}

export function contentLink(
  data: Record<string, unknown>,
  key: string,
): string | null {
  const value = data[key];
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string")
    throw new Error(`Invalid content link: ${key}`);
  if (value.startsWith("/") && !value.startsWith("//")) return value;
  try {
    const url = new URL(value);
    if (url.protocol === "https:") return url.toString();
  } catch {
    throw new Error(`Malformed content link: ${key}`);
  }
  throw new Error(`Content link must be a local path or HTTPS URL: ${key}`);
}

export function contentDate(
  data: Record<string, unknown>,
  key: string,
): string {
  const value = contentString(data, key);
  const parsed = new Date(`${value}T00:00:00.000Z`);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(value) ||
    Number.isNaN(parsed.getTime()) ||
    parsed.toISOString().slice(0, 10) !== value
  ) {
    throw new Error(`Content date must use YYYY-MM-DD: ${key}`);
  }
  return value;
}

export function readingMinutes(body: string): number {
  return Math.max(1, Math.ceil(body.split(/\s+/).filter(Boolean).length / 220));
}

export function formatContentDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

export function staticContentParams(slugs: readonly string[]) {
  // Next's static export requires nonempty params. This sentinel renders
  // notFound() for an empty collection and never appears in an index.
  return (slugs.length ? slugs : ["_empty"]).map((slug) => ({ slug }));
}
