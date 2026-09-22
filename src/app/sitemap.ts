import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
import { localePath } from "@/lib/locale";
import { navItems } from "@/content/nav";

const staticPaths = [
  "",
  ...navItems.map((item) => `/${item.slug}`),
  "/registration",
  "/privacy",
  "/terms",
  "/refund",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["id", "en"] as const;

  return locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteUrl}${localePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.6,
    })),
  );
}
