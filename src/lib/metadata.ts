import type { Metadata } from "next";
import { eventFacts } from "@/content/event";
import { localePath } from "@/lib/locale";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bahasa-nu.vercel.app";

const ogImage = "/images/venue/osanri-03.jpg";

export function buildMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: {
  locale: "id" | "en";
  /** locale-less path, e.g. "" for home, "/about" for the about page */
  path: string;
  title: string;
  description: string;
  /** skip the root layout's title template, e.g. for the home page */
  absoluteTitle?: boolean;
}): Metadata {
  const idUrl = `${siteUrl}${localePath("id", path)}`;
  const enUrl = `${siteUrl}${localePath("en", path)}`;
  const url = locale === "id" ? idUrl : enUrl;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        id: idUrl,
        en: enUrl,
        "x-default": idUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: eventFacts.name,
      locale: locale === "id" ? "id_ID" : "en_US",
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
