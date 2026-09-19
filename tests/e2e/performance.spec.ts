import { test, expect } from "@playwright/test";

// Lightweight, environment-agnostic performance smoke test — not a
// substitute for a full Lighthouse audit, but catches regressions like an
// unoptimized image or a render-blocking script slipping into the homepage.
test("id homepage loads and paints quickly on a production build", async ({
  page,
}) => {
  const start = Date.now();
  await page.goto("/id", { waitUntil: "load" });
  const loadMs = Date.now() - start;

  const metrics = await page.evaluate(() => {
    const nav = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType("paint");
    const fcp = paint.find((p) => p.name === "first-contentful-paint");
    const transferSize = performance
      .getEntriesByType("resource")
      .reduce(
        (sum, r) => sum + ((r as PerformanceResourceTiming).transferSize ?? 0),
        0,
      );
    return {
      domContentLoaded: nav?.domContentLoadedEventEnd ?? null,
      firstContentfulPaint: fcp?.startTime ?? null,
      transferSizeKb: Math.round(transferSize / 1024),
    };
  });

  // Generous thresholds for a local production server — these exist to
  // catch a gross regression, not to enforce a Lighthouse score.
  expect(loadMs, "full page load").toBeLessThan(5000);
  if (metrics.firstContentfulPaint !== null) {
    expect(metrics.firstContentfulPaint, "first contentful paint").toBeLessThan(
      3000,
    );
  }
  expect(metrics.transferSizeKb, "total transferred KB").toBeLessThan(3000);
});
