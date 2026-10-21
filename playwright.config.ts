import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/browser",
  timeout: 60000,
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:3000",
    browserName: "chromium",
    channel: process.env.PLAYWRIGHT_CHANNEL || "chrome",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: [
    {
      command: "npm run start -- --port 3000",
      url: "http://127.0.0.1:3000",
      reuseExistingServer: !process.env.CI,
      timeout: 60000,
    },
    {
      command: "npm run start -- --port 3001",
      url: "http://127.0.0.1:3001",
      reuseExistingServer: false,
      timeout: 60000,
      // Test-only configuration. Browser tests intercept every submission;
      // these values cannot authenticate with a real delivery provider.
      env: {
        CONTACT_PROVIDER: "resend",
        CONTACT_TO_EMAIL: "test@example.com",
        CONTACT_FROM_EMAIL: "test@example.com",
        RESEND_API_KEY: "test-only-not-a-real-api-key",
        CONTACT_FORM_SECRET: "test-only-form-secret-not-for-production-12345",
      },
    },
  ],
});
