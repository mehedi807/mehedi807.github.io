import type { MetadataRoute } from "next";
import { getSiteUrl, isSiteIndexable } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return base && isSiteIndexable()
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: new URL("/sitemap.xml", base).toString(),
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
