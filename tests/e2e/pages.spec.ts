import { test, expect } from "@playwright/test";
import { allRoutes } from "./routes";

for (const route of allRoutes) {
  test(`${route} loads with no console errors and exactly one h1`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));

    const response = await page.goto(route);
    expect(response?.status(), `HTTP status for ${route}`).toBeLessThan(400);

    await expect(
      page.locator("h1"),
      `${route} should have exactly one <h1>`,
    ).toHaveCount(1);

    expect(errors, `console/page errors on ${route}`).toEqual([]);
  });
}
