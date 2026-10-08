export type Locale = "id" | "en";

/**
 * English is the default locale and is served unprefixed (e.g. "/about"),
 * matching the `(en)` route group. Indonesian stays under "/id".
 */
export function localePath(locale: Locale, path: string = ""): string {
  const clean = path === "/" ? "" : path;
  return locale === "en" ? clean || "/" : `/id${clean}`;
}
