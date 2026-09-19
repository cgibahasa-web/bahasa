import { test, expect } from "@playwright/test";
import { allRoutes } from "./routes";

test.use({ viewport: { width: 360, height: 800 } });

for (const route of allRoutes) {
  test(`${route} has no horizontal overflow at 360px`, async ({ page }) => {
    await page.goto(route);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `${route} overflows horizontally by ${overflow}px`).toBe(
      0,
    );
  });
}
