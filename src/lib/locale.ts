export type Locale = "id" | "en";

/**
 * Indonesian is the default locale and is served unprefixed (e.g. "/about"),
 * matching the `(id)` route group. English stays under "/en".
 */
export function localePath(locale: Locale, path: string = ""): string {
  const clean = path === "/" ? "" : path;
  return locale === "id" ? clean || "/" : `/en${clean}`;
}
