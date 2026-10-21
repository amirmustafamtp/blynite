import assert from "node:assert/strict";
import test from "node:test";
import { validateInquiry, type Inquiry } from "../src/lib/contact";
import {
  deliverInquiry,
  deliveryReady,
  issueToken,
  RateLimiter,
  verifyToken,
  type DeliveryConfig,
} from "../src/lib/contact-server";
import { isPublic } from "../src/data/catalog";

const inquiry: Inquiry = {
  name: "Test Person",
  email: "person@example.com",
  company: "Example",
  service: "custom-software",
  description: "We need an internal workflow application.",
  budget: "",
  consent: true,
};
const config: DeliveryConfig = {
  provider: "resend",
  to: "destination@example.com",
  from: "Blynite <sender@example.com>",
  apiKey: "test-only",
  secret: "a-test-only-secret-with-at-least-32-characters",
};
test("valid inquiries are normalized; invalid fields are rejected", () => {
  assert.equal(
    validateInquiry({ ...inquiry, name: " Test Person " }).data?.name,
    "Test Person",
  );
  assert.equal(Object.keys(validateInquiry({}).errors).length, 5);
  for (const change of [
    { email: "invalid" },
    { consent: false },
    { description: "short" },
    { service: "unknown" },
    { budget: "invalid" },
    { name: "x" },
    { company: "x".repeat(151) },
  ])
    assert.equal(validateInquiry({ ...inquiry, ...change }).data, undefined);
});
test("only approved published entries pass publication gates", () => {
  assert.equal(
    isPublic({ publication: "draft", approvedForPublic: true }),
    false,
  );
  assert.equal(
    isPublic({ publication: "published", approvedForPublic: false }),
    false,
  );
  assert.equal(
    isPublic({ publication: "published", approvedForPublic: true }),
    true,
  );
});
test("form signatures reject tampering, automation speed, and expiration", () => {
  const now = 1800000000000;
  const token = issueToken(config.secret!, now);
  assert.equal(verifyToken(token, config.secret!, now + 2500), true);
  assert.equal(verifyToken(token, config.secret!, now + 100), false);
  assert.equal(verifyToken(token, config.secret!, now + 3600001), false);
  assert.equal(verifyToken(token, "another secret", now + 2500), false);
  assert.equal(verifyToken(token + "x", config.secret!, now + 2500), false);
});
test("rate limits expire and remain separate per sender", () => {
  const limiter = new RateLimiter(2, 1000);
  assert.equal(limiter.allow("a", 0), true);
  assert.equal(limiter.allow("a", 10), true);
  assert.equal(limiter.allow("a", 20), false);
  assert.equal(limiter.allow("b", 20), true);
  assert.equal(limiter.allow("a", 1000), true);
});
test("missing or unsafe provider configuration disables delivery", async () => {
  assert.equal(deliveryReady({}), false);
  assert.equal(deliveryReady({ ...config, secret: "short" }), false);
  assert.equal(
    deliveryReady({
      ...config,
      provider: "webhook",
      webhookUrl: "http://example.com",
      webhookToken: "test",
    }),
    false,
  );
  await assert.rejects(deliverInquiry(inquiry, {}), /not configured/);
});
test("Resend receives plain text, fixed subject and reply-to, and must acknowledge delivery", async () => {
  let called = false;
  await deliverInquiry(inquiry, config, async (url, options) => {
    called = true;
    assert.equal(url, "https://api.resend.com/emails");
    const body = JSON.parse(options?.body as string);
    assert.equal(body.reply_to, inquiry.email);
    assert.deepEqual(body.to, [config.to]);
    assert.equal(body.subject, "New Blynite project inquiry");
    assert.ok(body.text.includes(inquiry.description));
    assert.equal(body.html, undefined);
    return Response.json({ id: "test-message-id" });
  });
  assert.equal(called, true);
  await assert.rejects(
    deliverInquiry(
      inquiry,
      config,
      async () => new Response("error", { status: 500 }),
    ),
    /rejected/,
  );
  await assert.rejects(
    deliverInquiry(inquiry, config, async () => Response.json({})),
    /acknowledge/,
  );
  await assert.rejects(
    deliverInquiry(inquiry, config, async () => {
      throw new Error("network failure");
    }),
    /network failure/,
  );
});
test("generic webhook receives authenticated inquiry and destination", async () => {
  await deliverInquiry(
    inquiry,
    {
      ...config,
      provider: "webhook",
      webhookUrl: "https://example.com/contact",
      webhookToken: "test-webhook",
    },
    async (url, options) => {
      assert.equal(url, "https://example.com/contact");
      assert.equal(
        (options?.headers as Record<string, string>).Authorization,
        "Bearer test-webhook",
      );
      const body = JSON.parse(options?.body as string);
      assert.deepEqual(body.inquiry, inquiry);
      assert.equal(body.to, config.to);
      return new Response(null, { status: 204 });
    },
  );
});
