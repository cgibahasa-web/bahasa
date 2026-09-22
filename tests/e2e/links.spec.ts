import { test, expect } from "@playwright/test";
import { allRoutes } from "./routes";

test("no broken internal links across the site", async ({ page, request }) => {
  const discovered = new Set<string>();

  for (const route of allRoutes) {
    await page.goto(route);
    const hrefs = await page
      .locator("a[href]")
      .evaluateAll((els) =>
        els.map((el) => el.getAttribute("href")).filter((h): h is string => !!h),
      );
    for (const href of hrefs) {
      if (href.startsWith("/") && !href.startsWith("//")) {
        discovered.add(href);
      }
    }
  }

  expect(discovered.size, "should have discovered internal links").toBeGreaterThan(0);

  const broken: { href: string; status: number }[] = [];
  for (const href of discovered) {
    const res = await request.get(href);
    if (res.status() >= 400) {
      broken.push({ href, status: res.status() });
    }
  }

  expect(broken, `broken internal links: ${JSON.stringify(broken)}`).toEqual(
    [],
  );
});

test("unknown routes render the branded 404 page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByText("Halaman tidak ditemukan")).toBeVisible();
});
