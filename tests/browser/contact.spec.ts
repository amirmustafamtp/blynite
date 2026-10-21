import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("enabled contact form validates and displays pending, failure, and success states", async ({
  page,
}) => {
  let submissions = 0;
  await page.route("**/api/contact", async (route) => {
    if (route.request().method() !== "POST") return route.continue();
    submissions++;
    const data = route.request().postDataJSON();
    expect(data.email).toBe("person@example.com");
    expect(data.consent).toBe(true);
    await new Promise((resolve) => setTimeout(resolve, 350));
    return route.fulfill({
      status: submissions === 1 ? 502 : 200,
      json: {
        message:
          submissions === 1
            ? "We couldn't confirm delivery. Please try again later."
            : "Your inquiry has been sent.",
      },
    });
  });
  await page.goto("http://127.0.0.1:3001/contact");
  const submit = page.getByRole("button", { name: "Send inquiry" });
  await expect(submit).toBeEnabled();
  await submit.click();
  await expect(
    page.getByText("Enter your full name (2–100 characters)."),
  ).toBeVisible();
  await expect(page.locator(".form-status")).toBeFocused();
  expect(submissions).toBe(0);
  await page.getByLabel("Full name", { exact: true }).fill("Example Person");
  await page.getByLabel("Business email").fill("person@example.com");
  await page.getByLabel("Service of interest").selectOption("custom-software");
  await page
    .getByLabel("Tell us about your project")
    .fill("We want to build a useful internal software platform.");
  await page.getByRole("checkbox").check();
  await submit.click();
  await expect(
    page.getByRole("button", { name: "Sending inquiry" }),
  ).toBeDisabled();
  await expect(
    page.getByText("We couldn't confirm delivery. Please try again later."),
  ).toBeVisible();
  await expect(page.getByLabel("Business email")).toHaveValue(
    "person@example.com",
  );
  await submit.click();
  await expect(page.getByRole("status")).toBeFocused();
  await expect(page.getByRole("status")).toContainText(
    "Your inquiry has been sent.",
  );
  await expect(page.getByRole("form", { name: "Project inquiry" })).toHaveCount(
    0,
  );
  expect(submissions).toBe(2);
});

test("configured API rejects invalid signatures, spam, oversized payloads, and invalid fields without delivery", async ({
  request,
}) => {
  const url = "http://127.0.0.1:3001/api/contact";
  const headers = { Origin: "https://blynite.com" };
  const result = await (await request.get(url)).json();
  expect(result.available).toBe(true);
  expect(
    (await request.post(url, { headers, data: { token: "invalid" } })).status(),
  ).toBe(400);
  expect(
    (
      await request.post(url, {
        headers,
        data: { token: result.token, website: "spam.example" },
      })
    ).status(),
  ).toBe(400);
  expect(
    (
      await request.post(url, {
        headers,
        data: { description: "x".repeat(17000) },
      })
    ).status(),
  ).toBe(413);
  await new Promise((resolve) => setTimeout(resolve, 2100));
  const invalid = await request.post(url, {
    headers,
    data: { token: result.token },
  });
  expect(invalid.status()).toBe(422);
  expect((await invalid.json()).errors.email).toBeTruthy();
});

test("mobile inquiry begins above the fold, before supporting guidance, and preserves the selected service", async ({
  page,
}) => {
  for (const width of [360, 390, 768]) {
    await page.setViewportSize({ width, height: 844 });
    await page.goto("http://127.0.0.1:3001/contact?service=web-mobile");
    await page.evaluate(() => document.fonts.ready);
    if (width === 390) {
      await page.screenshot({
        path: "test-results/contact-enabled-mobile.png",
        fullPage: true,
      });
      expect(
        (
          await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
            .analyze()
        ).violations,
      ).toEqual([]);
    }
    const name = page.getByLabel("Full name", { exact: true });
    const bounds = await name.boundingBox();
    expect(bounds!.y + bounds!.height).toBeLessThan(600);
    const form = page.getByRole("form", { name: "Project inquiry" });
    expect(
      await form.evaluate((el) =>
        Boolean(
          el.compareDocumentPosition(
            document.querySelector(".contact-aside")!,
          ) & Node.DOCUMENT_POSITION_FOLLOWING,
        ),
      ),
    ).toBe(true);
    await expect(page.getByLabel("Service of interest")).toHaveValue(
      "web-mobile",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});

test("connection failure can be retried without losing entered details", async ({
  page,
}) => {
  let attempts = 0;
  await page.route("**/api/contact", async (route) => {
    if (route.request().method() !== "GET") return route.abort();
    attempts++;
    if (attempts === 1) return route.abort();
    return route.continue();
  });
  await page.goto("http://127.0.0.1:3001/contact");
  await expect(
    page.getByRole("button", { name: "Retry connection" }),
  ).toBeVisible();
  await page.getByLabel("Full name", { exact: true }).fill("Example Person");
  await page.getByRole("button", { name: "Retry connection" }).click();
  await expect(
    page.getByRole("button", { name: "Send inquiry" }),
  ).toBeEnabled();
  await expect(page.getByLabel("Full name", { exact: true })).toHaveValue(
    "Example Person",
  );
});
