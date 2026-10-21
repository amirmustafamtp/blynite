import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/services",
  "/products",
  "/work",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/services/custom-software",
  "/services/ai-automation",
  "/services/saas-development",
  "/services/web-mobile",
  "/services/cloud-integrations",
  "/services/enterprise-solutions",
];

for (const width of [1440, 1024, 768, 390, 360]) {
  test(`all pages fit ${width}px and expose accessible headings`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `https://blynite.com${route === "/" ? "" : route}`,
      );
    }
    expect(errors).toEqual([]);
    await page.goto("/");
    await page.screenshot({
      path: `test-results/home-${width}.png`,
      fullPage: true,
    });
  });
}

test("desktop and mobile pages pass automated accessibility checks", async ({
  page,
}) => {
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/services",
      "/products",
      "/work",
      "/about",
      "/contact",
      "/privacy",
      "/services/ai-automation",
    ]) {
      await page.goto(route);
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect
        .soft(
          result.violations.map((v) => ({
            id: v.id,
            nodes: v.nodes.map((n) => ({
              target: n.target,
              summary: n.failureSummary,
            })),
          })),
          `${width} ${route}`,
        )
        .toEqual([]);
    }
  }
});

test("keyboard skip link and mobile navigation support focus, Escape, and navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  const menu = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(menu).toBeVisible();
  await expect(menu.getByRole("link").first()).toBeFocused();
  const a11y = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(a11y.violations).toEqual([]);
  await page.keyboard.press("Shift+Tab");
  await expect(
    page.getByRole("button", { name: "Close navigation" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(menu.getByRole("link").last()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await menu.getByRole("link", { name: /Services/ }).click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(menu).not.toBeVisible();
});

test("unconfigured contact form stays visible without accepting or sending inquiries", async ({
  page,
  request,
}) => {
  await page.goto("/contact?service=ai-automation");
  await expect(
    page.getByText("Online inquiries are not open yet."),
  ).toBeVisible();
  await expect(
    page.getByRole("form", { name: "Project inquiry" }),
  ).toBeVisible();
  await expect(page.getByLabel("Full name", { exact: true })).toBeVisible();
  for (const field of await page
    .locator(
      ".form-grid input, .form-grid select, .form-grid textarea, .form-consent input",
    )
    .all()) {
    await expect(field).toBeDisabled();
  }
  await expect(page.getByLabel("Service of interest")).toHaveValue(
    "ai-automation",
  );
  await expect(
    page.getByRole("button", { name: "Send inquiry" }),
  ).toBeDisabled();
  const response = await request.post("/api/contact", {
    headers: { Origin: "https://blynite.com" },
    data: {},
  });
  expect(response.status()).toBe(503);
  const foreign = await request.post("/api/contact", {
    headers: { Origin: "https://example.org" },
    data: {},
  });
  expect(foreign.status()).toBe(403);
  expect(await (await request.get("/api/contact")).json()).toEqual({
    available: false,
  });
});

test("unknown and unpublished content is absent; SEO endpoints expose public pages", async ({
  page,
  request,
}) => {
  for (const route of [
    "/products/unapproved",
    "/work/confidential",
    "/services/unknown",
  ]) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "That page isn’t here.",
    );
  }
  const xml = await (await request.get("/sitemap.xml")).text();
  expect(xml).toContain("https://blynite.com/services/ai-automation");
  expect(xml).not.toContain("/privacy");
  expect(xml).not.toContain("/terms");
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "Sitemap: https://blynite.com/sitemap.xml",
  );
  await page.goto("/privacy");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
  await page.goto("/");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://blynite.com/brand/social-cover.jpg",
  );
  const org = await page
    .locator('script[type="application/ld+json"]')
    .textContent();
  expect(JSON.parse(org!).name).toBe("Blynite");
});

test("reduced motion stops decorative animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator(".connection-pulse")
      .evaluate((el) => parseFloat(getComputedStyle(el).animationDuration)),
  ).toBeLessThan(0.01);
  const core = page.locator(".system-core");
  const first = await core.evaluate((el) => getComputedStyle(el).transform);
  await page.waitForTimeout(300);
  expect(await core.evaluate((el) => getComputedStyle(el).transform)).toBe(
    first,
  );
});
