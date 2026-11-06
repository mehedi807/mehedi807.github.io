import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return base
    ? {
        rules: { userAgent: "*", allow: "/" },
        sitemap: new URL("/sitemap.xml", base).toString(),
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
