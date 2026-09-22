export const paths = [
  "",
  "/about",
  "/program",
  "/venue",
  "/participant-guide",
  "/travel-visa",
  "/faq",
  "/registration",
  "/privacy",
  "/terms",
  "/refund",
];

export const locales = ["id", "en"] as const;

export const allRoutes = locales.flatMap((locale) =>
  paths.map((path) => (locale === "id" ? path || "/" : `/en${path}`)),
);
