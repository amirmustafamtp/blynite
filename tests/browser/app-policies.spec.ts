import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const policyPath = "/apps/qr-barcode-toolkit/privacy";

test("app privacy directory remains accessible without a footer link", async ({
  page,
}) => {
  await page.goto("/privacy");
  await expect(
    page
      .getByRole("contentinfo")
      .getByRole("link", { name: "App Privacy", exact: true }),
  ).toHaveCount(0);
  await page.goto("/apps/privacy");
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

test("final app policy is readable and accessible on mobile and desktop", async ({
  page,
}) => {
  const response = await page.goto(policyPath);
  expect(response?.status()).toBe(200);
  await expect(page.locator("h1")).toHaveText("QR & Barcode Toolkit");
  await expect(
    page.locator('meta[name="robots"][content*="noindex"]'),
  ).toHaveCount(0);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `https://blynite.com${policyPath}`,
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    `https://blynite.com${policyPath}`,
  );
  await expect(page).toHaveTitle(
    "QR & Barcode Toolkit Privacy Policy | Blynite",
  );
  await expect(page.locator('time[datetime="2026-10-23"]')).toHaveText(
    "October 23, 2026",
  );
  await expect(
    page.getByRole("link", { name: "All app privacy policies", exact: true }),
  ).toHaveCount(0);
  await expect(page.getByLabel("Policy preview status")).toHaveCount(0);
  await expect(page.locator("#policy-location")).toContainText("Policy URL:");
  await expect(
    page.locator(`main a[href="https://www.blynite.com${policyPath}"]`),
  ).toHaveCount(1);
  await expect(page.locator("main")).not.toContainText(
    /TODO:|INTERNAL REVIEWER NOTES|Future Connect|fc\.net\.pk|\/Users\/|2 business days|30 calendar days|release-checklist|DRAFT —|Pending final approval|Draft qualification|Draft evidence qualification|review draft/,
  );
  const sdk = page.locator(
    "#third-party-libraries-diagnostics-and-possible-transmissions",
  );
  await expect(sdk).toContainText("17.3.0");
  await expect(sdk).toContainText("App interactions");
  await expect(sdk).toContainText(
    "We have not verified which documented metrics actually reach Google",
  );
  await expect(page.locator("#children-s-privacy")).toContainText(
    "users aged 13–17",
  );
  const support = page.locator("#contact-and-privacy-requests");
  await expect(support).toContainText("Namecheap");
  await expect(support).toContainText(
    "within 90 days after a request is closed",
  );
  await expect(support).toContainText("up to 12 months after closure");
  await expect(support).toContainText(
    "we do not promise that all provider copies disappear within these periods",
  );
  await expect(page.locator("#retention-and-deletion")).toContainText(
    "not to app history or Google-held SDK information",
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

test("production serves and indexes the final policy", async ({ request }) => {
  const base = "http://127.0.0.1:3001";
  const policy = await request.get(`${base}${policyPath}`);
  expect(policy.status()).toBe(200);
  const html = await policy.text();
  expect(html).not.toContain("DRAFT — NOT FOR PUBLICATION");
  expect(html).not.toContain("noindex");
  expect(html).not.toContain("Pending final approval");
  expect(html).toMatch(
    /<time\b[^>]*datetime="2026-10-23"[^>]*>October 23, 2026<\/time>/i,
  );
  expect(html).not.toContain('aria-label="Policy preview status"');
  expect(html).not.toContain("available only in local development");
  const directory = await request.get(`${base}/apps/privacy`);
  expect(directory.status()).toBe(200);
  expect(await directory.text()).toContain("QR &amp; Barcode Toolkit");
  const sitemap = await (await request.get(`${base}/sitemap.xml`)).text();
  expect(sitemap).toContain("https://blynite.com/apps/privacy");
  expect(sitemap).toContain(policyPath);
  expect(sitemap).toContain("https://blynite.com/privacy");
});
