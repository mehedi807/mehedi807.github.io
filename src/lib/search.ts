export function normalizeSearch(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function matchesSearch(
  query: string,
  fields: readonly string[],
): boolean {
  const text = normalizeSearch(fields.join(" "));
  return normalizeSearch(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => text.includes(word));
}

export function collectionTags(
  items: readonly { tags: readonly string[] }[],
): string[] {
  return [...new Set(items.flatMap((item) => [...item.tags]))].sort((a, b) =>
    a.localeCompare(b),
  );
}
