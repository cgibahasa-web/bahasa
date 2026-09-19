import { test, expect } from "@playwright/test";
import { allRoutes } from "./routes";

for (const route of allRoutes) {
  const expectedLang = route.startsWith("/en") ? "en" : "id";

  test(`${route} has alt text on every image and correct <html lang>`, async ({
    page,
  }) => {
    await page.goto(route);

    const imagesWithoutAlt = await page
      .locator("img:not([alt]), img[alt='']")
      .count();
    expect(
      imagesWithoutAlt,
      `${route} has images missing meaningful alt text`,
    ).toBe(0);

    // lang is synced client-side by SiteHeader after hydration (see its
    // comment) — the initial SSR payload always ships lang="id" from the
    // single shared root layout.
    await expect
      .poll(() => page.getAttribute("html", "lang"))
      .toBe(expectedLang);
  });
}

test("home pages expose a labelled main navigation landmark", async ({
  page,
}) => {
  await page.goto("/id");
  await expect(page.getByRole("navigation", { name: "Navigasi utama" })).toBeVisible();

  await page.goto("/en");
  await expect(page.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
});
