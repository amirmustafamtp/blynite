# Blynite

The Blynite corporate website, built with Next.js App Router, strict TypeScript, Tailwind CSS, Motion, and Lucide. It reuses the approved Blynite logo assets and self-hosts the Manrope variable font.

## Local setup

Use Node.js 22 or newer and npm. The lockfile is committed.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://127.0.0.1:3000. The website works without contact credentials; the contact page explicitly disables submissions until delivery is configured.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run start
```

## Structure

- `src/app`: home, services, product and case-study routes, about, contact, privacy policy, terms of service, SEO endpoints, and contact API.
- `src/components`: navigation, footer, shared UI, contact form, and marketing sections.
- `src/data/site.ts`: confirmed company information, navigation, process, and expertise.
- `src/data/services.ts`: six service definitions used by cards and detail pages.
- `src/data/catalog.ts`: typed product and case-study records with explicit publication gates.
- `src/lib`: metadata, validation, form protections, delivery adapters, and server-only configuration.
- `public/brand`: approved web assets, copied from the supplied brand pack without redrawing the logo.
- `tests`: unit tests and browser/accessibility checks.

Design tokens live in `src/app/globals.css`. Navy `#061B34`, logo navy `#0D2B49`, and accent blue `#007DB3` match the supplied branding. CSS diagrams communicate capabilities without invented business metrics. Decorative motion respects the visitor's reduced-motion preference.

## Contact delivery

The form stays visible while delivery is unconfigured, with editable fields for layout testing and a disabled submit button. `.env.example` includes the Blynite recipient and proposed sender; add a real Resend API key and generated form secret in your deployment settings when ready. The sender domain must be verified in Resend.

No lead database is used. Credentials must only be set in server environment variables. Never prefix secrets with `NEXT_PUBLIC_`.

### Resend

Configure a verified sending domain in your Resend account, then set:

```dotenv
CONTACT_PROVIDER=resend
CONTACT_TO_EMAIL=<approved destination address>
CONTACT_FROM_EMAIL=<verified sender address or Name <address>>
RESEND_API_KEY=<server API key>
CONTACT_FORM_SECRET=<random secret of at least 32 characters>
```

Generate a secret locally with `openssl rand -hex 32`. Store it in your deployment provider's secret settings. See the [Resend send-email API reference](https://resend.com/docs/api-reference/emails/send-email).

### Another delivery provider

The generic HTTPS webhook adapter supports another email service or an existing internal integration:

```dotenv
CONTACT_PROVIDER=webhook
CONTACT_TO_EMAIL=<approved destination address>
CONTACT_WEBHOOK_URL=https://your-approved-service.example/contact
CONTACT_WEBHOOK_TOKEN=<server bearer token>
CONTACT_FORM_SECRET=<random secret of at least 32 characters>
```

The adapter sends a POST with `Authorization: Bearer <token>` and this JSON shape:

```json
{
  "event": "contact.inquiry",
  "to": "destination@example.com",
  "inquiry": {
    "name": "Example Person",
    "email": "person@example.com",
    "company": "",
    "service": "custom-software",
    "description": "A description of the requested project.",
    "budget": "",
    "consent": true
  }
}
```

The webhook must acknowledge with HTTP 2xx only after accepting responsibility for delivery. Non-2xx responses, redirects, and timeouts fail visibly. Resend responses must also include a message ID. A successful form submission means provider acceptance, not a verified inbox receipt. The API does not expose provider errors or log inquiry bodies. A network timeout can leave delivery uncertain; retrying may create a duplicate.

Optionally set `NEXT_PUBLIC_CONTACT_EMAIL` to a confirmed public contact address. It is displayed as a mailto link. No address is invented by default.

### Form protection

- Shared client/server validation, field length limits, 16 KB request cap, and consent.
- Same-origin checks; production accepts `https://blynite.com` only. Redirect `www` to the canonical domain. Add an explicitly trusted preview origin in the route before testing delivery on a preview hostname.
- HMAC-signed tokens with a two-second minimum age and one-hour expiry.
- Hidden honeypot field, per-sender limits (5/15 minutes) and a process-wide limit (30/15 minutes).
- Hashed limiter keys are held in bounded, expiring process memory. Without a trusted proxy, the sender key is the email address.
- Set `RATE_LIMIT_TRUST_PROXY=true` only when your reverse proxy strips incoming `X-Forwarded-For` and supplies a trustworthy first client address. Otherwise keep it false.

The memory limiter resets with a process restart and is not shared across instances. Configure a distributed gateway/WAF rate limit for `/api/contact` before an internet-facing launch. If more protection is needed, add a server-verified challenge; no external tracking service is included by default. Tokens are not durable one-use receipts.

## Publishing products and work

The initial catalog is intentionally empty. Add approved records in `src/data/catalog.ts`; use assets under `public/` and meaningful image descriptions.

- A product appears only when `publication: "published"` **and** `approvedForPublic: true`.
- Case studies additionally require `confidential: false`.
- Outcomes are rendered only with a nonempty internal `evidenceReference`. Verify the actual supporting evidence before approval. Internal evidence references are not shown in the page.
- Detail routes return 404 for unknown or unpublished entries. Listings and sitemap use the same filtered collections.

Do not commit confidential client details or unapproved source material to this repository. Filtering controls website publication, not GitHub visibility. Product URLs must be approved HTTPS destinations. Rebuild and redeploy after changing catalog data.

## SEO and legal

Canonical URLs, Organization structured data, sitemap, robots, and sharing metadata target `https://blynite.com`. The Organization record contains only confirmed name, domain, logo, tagline, and description. Fonts and brand assets are served locally; no analytics or advertising scripts are installed.

The Privacy Policy is public and included in the sitemap. It describes the website’s inquiry flow, Vercel hosting, planned Resend delivery when enabled, and the confirmed contact address `info@blynite.com`. Keep it aligned with actual processing and retention practices; publication is not a certification of legal compliance. Terms of Service are also public and included in the sitemap. They cover website use and inquiries; paid project commitments belong in separate written agreements. No unconfirmed registered entity, governing jurisdiction, or exclusive dispute forum is asserted. Staging should be access-controlled or configured `noindex` by the host.

## Mobile app privacy policies

- Directory: `/apps/privacy` (linked as **App Privacy** in the footer).
- Individual policy: `/apps/<app-slug>/privacy`.
- QR & Barcode Toolkit public draft: `https://blynite.com/apps/qr-barcode-toolkit/privacy`.
- Website privacy stays at `/privacy`; app policy content is maintained separately.

Add a typed content file in `src/data/app-policies/` and register it in `index.ts`.
Each entry defines its stable slug, app name, platform, covered version, contact,
effective date, and sections with unique anchor IDs. The shared route handles
layout, table of contents, metadata, and unknown-app 404 responses.

Policy statuses:

- `preview`: local development only; returns 404 in production.
- `public-preview`: explicitly authorized public draft; visible in the directory,
  marked **DRAFT — NOT FOR PUBLICATION**, with `noindex`, no canonical/share URL,
  no effective date, and excluded from the sitemap.
- `published`: final approved policy with an effective date; included in the
  directory and sitemap with canonical metadata.

On October 22, 2026 the owner authorized making the QR draft publicly accessible
for now. Its status is `public-preview`. This authorizes public access to the
existing draft, not claims that the unresolved details have been verified or that
it is a final effective policy. Internal reviewer notes and the original attachment
are not served or copied into public assets.

Confirmed identity: Blynite, support@blynite.com, blynite.com, intended audience 13+.
Do not promise zero collection/transmission, specific response times, or deletion
of Google-held data. The updated October 22 source includes the documented ML Kit
baseline for Diagnostics, Device or other IDs, and App interactions, while retaining
the lack of runtime transmission verification. It also includes approved children's
wording and support clauses: Namecheap-hosted email, correspondence retention within
90 days after closure, and a minimal case record for up to 12 months. The draft's
operational/provider verification qualifications remain visible; internal response
targets remain excluded. These periods do not apply to app history or Google SDK data.
Before final approval, verify support operations and provider retention/deletion,
review policy and app consistency, and approve the final URL and effective date.
Verify the covered release. Only after final
owner approval, replace pending text, set `status: "published"` and an approved
ISO effective date (`YYYY-MM-DD`), then build and deploy. Keep future policy edits
aligned with each app's actual behavior.

Run `npm run test:browser -- tests/browser/app-policies.spec.ts` to check the
directory, public draft availability without indexing, mobile/desktop
accessibility, and section links.

## Browser verification

The browser suite uses a production build and starts servers on ports 3000 and 3001. Run it with contact environment variables unset to verify the unavailable state on port 3000. Port 3001 uses explicit dummy credentials for form-state testing; every valid submission is intercepted by Playwright and receives a simulated response. The tests never send a real inquiry.

```sh
npm run build
npm run test:browser
```

Google Chrome is the default browser channel. For CI, install Chromium and select it:

```sh
npx playwright install --with-deps chromium
PLAYWRIGHT_CHANNEL=chromium npm run test:browser
```

The suite covers all public routes at 1440, 1024, 768, 390, and 360 pixels, horizontal overflow, headings and canonicals, desktop/mobile axe checks, keyboard navigation, reduced motion, 404 behavior, SEO endpoints, and honest unconfigured delivery. It saves homepage screenshots to `test-results/`. Unit tests cover validation, publication, signatures, rate limits, and delivery adapters with mocked responses. No real email is sent by the tests. Automated accessibility checks supplement manual keyboard and visual review; they are not a compliance certification.

## Deployment

Import this GitHub repository into a Next.js-compatible Node hosting service (for example, Vercel), use `npm ci` and `npm run build`, and configure the environment variables in that service. For a standalone Node host, run `npm run start -- --hostname 0.0.0.0` behind an HTTPS reverse proxy. The server-side form requires Node; a static export is not supported.

Connect `blynite.com`, redirect alternate hosts to it, and verify TLS. There are no required database migrations. The larger brand pack and working exports in `output/` are intentionally excluded from Git.

Before launch:

1. Configure an approved recipient and delivery provider, then send a real test and verify inbox receipt.
2. Apply a production gateway rate limit and confirm proxy/IP behavior.
3. Review the Privacy Policy and Terms of Service against actual business operations and applicable law.
4. Add only approved public products/case studies, if available.
5. Verify the production domain, metadata/share image, mobile menu, contact form, and accessibility after deployment.

GitHub upload does not deploy the site or change domain DNS. Real email delivery remains unverified until credentials are supplied and an end-to-end inbox check is completed.

### Dependency audit at implementation

The production dependency audit reported zero advisories. The full audit reports five related high-severity development-only findings from the `braces` dependency chain inside the current Next.js ESLint plugin (GHSA-vfj7-8cjw-p6xm). The latest `braces` release is still 3.0.3, with no patched release available at this check. The suggested automatic fix downgrades the Next.js ESLint configuration across major versions and was not applied. Lint only trusted repository patterns; update this development chain when a compatible patched release is available.
