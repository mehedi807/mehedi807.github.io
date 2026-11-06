import type { StructuredData } from "@/lib/structured-data";

export function JsonLd({ data }: { data: StructuredData | null }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
