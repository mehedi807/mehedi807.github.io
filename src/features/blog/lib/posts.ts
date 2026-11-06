import { cache } from "react";

import {
  contentDate,
  contentLink,
  contentString,
  contentStrings,
  readCollection,
  readingMinutes,
} from "@/lib/content";

import type { Post, PostSummary } from "../types/post";

export const getPosts = cache((): Post[] =>
  readCollection("blog")
    .map(({ slug, data, body }) => {
      const date = contentDate(data, "date");
      const updated =
        data.updated === undefined ? null : contentDate(data, "updated");
      if (updated && updated < date) {
        throw new Error(`Article updated date precedes publication: ${slug}`);
      }
      return {
        slug,
        title: contentString(data, "title"),
        summary: contentString(data, "summary"),
        date,
        updated,
        tags: contentStrings(data, "tags"),
        placeholder: data.placeholder === true,
        minutes: readingMinutes(body),
        cover: contentLink(data, "cover"),
        coverAlt: contentString(data, "coverAlt", contentString(data, "title")),
        body,
      };
    })
    .sort(
      (a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title),
    ),
);

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

export function getPostSummaries(): PostSummary[] {
  return getPosts().map(({ body: _body, ...summary }) => {
    void _body;
    return summary;
  });
}
