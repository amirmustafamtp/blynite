import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const policyPath = "/apps/qr-barcode-toolkit/privacy";

test("app privacy directory is linked separately from the website policy", async ({
  page,
}) => {
  await page.goto("/privacy");
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "App Privacy", exact: true })
    .click();
  await expect(page).toHaveURL(/\/apps\/privacy$/);
  await expect(page.locator("h1")).toHaveText("App privacy policies.");
  await expect(
    page.getByRole("link", { name: "website Privacy Policy" }),
  ).toHaveAttribute("href", "/privacy");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://blynite.com/apps/privacy",
  );
  const missing = await page.goto("/apps/not-a-real-app/privacy");
  expect(missing?.status()).toBe(404);
});

test("app policy preview is readable and accessible on mobile and desktop", async ({
  page,
}) => {
  const response = await page.goto(policyPath);
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1")).toHaveText("QR & Barcode Toolkit");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /noindex/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  await expect(page.locator('meta[property="og:url"]')).toHaveCount(0);
  await expect(page.getByLabel("Policy preview status")).toBeVisible();
  await expect(page.getByLabel("Policy preview status")).toContainText(
    "DRAFT — NOT FOR PUBLICATION",
  );
  await expect(page.locator("#policy-location")).toContainText(
    "Final policy approval",
  );
  await expect(
    page.locator(`main a[href="https://blynite.com${policyPath}"]`),
  ).toHaveCount(1);
  await expect(page.locator("main")).not.toContainText(
    /TODO:|INTERNAL REVIEWER NOTES|Future Connect|fc\.net\.pk|\/Users\//,
  );
  await expect(page.locator("main")).toContainText(
    "Clear history preserves favorites",
  );
  await expect(page.locator("main")).toContainText(
    "excludes the password and original payload from history",
  );
  await expect(
    page.locator('main a[href="mailto:support@blynite.com"]').first(),
  ).toBeVisible();
  for (const width of [1440, 390, 360]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/apps/privacy", policyPath]) {
      await page.goto(route);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    }
    await page.screenshot({
      path: `test-results/app-policy-${width}.png`,
      fullPage: true,
    });
  }
  const contents = page.getByRole("navigation", { name: "Policy sections" });
  for (const link of await contents.getByRole("link").all()) {
    const href = await link.getAttribute("href");
    await expect(page.locator(href!)).toHaveCount(1);
  }
  await contents.getByRole("link", { name: "Retention and deletion" }).click();
  await expect(page).toHaveURL(/#retention-and-deletion$/);
});

test("production serves the authorized public draft without indexing it", async ({
  request,
}) => {
  const base = "http://127.0.0.1:3001";
  const policy = await request.get(`${base}${policyPath}`);
  expect(policy.status()).toBe(200);
  const html = await policy.text();
  expect(html).toContain("DRAFT — NOT FOR PUBLICATION");
  expect(html).toContain("noindex");
  expect(html).toContain("Pending final approval");
  expect(html).not.toContain("available only in local development");
  const directory = await request.get(`${base}/apps/privacy`);
  expect(directory.status()).toBe(200);
  expect(await directory.text()).toContain("QR &amp; Barcode Toolkit");
  const sitemap = await (await request.get(`${base}/sitemap.xml`)).text();
  expect(sitemap).toContain("https://blynite.com/apps/privacy");
  expect(sitemap).not.toContain(policyPath);
  expect(sitemap).toContain("https://blynite.com/privacy");
});
