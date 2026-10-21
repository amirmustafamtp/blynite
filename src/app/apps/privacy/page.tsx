import Link from "next/link";
import { PageHero } from "@/components/ui";
import {
  appPrivacyPath,
  availableAppPrivacyPolicies,
} from "@/data/app-policies";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "App Privacy Policies",
  "Privacy information and data controls for individual Blynite mobile apps.",
  "/apps/privacy",
);

export default function AppPrivacyDirectory() {
  const policies = availableAppPrivacyPolicies();
  return (
    <>
      <PageHero
        eyebrow="Mobile apps · Privacy"
        title="App privacy policies."
        description="Find privacy information, data controls, and contact details for each Blynite app."
      />
      <section
        id="page-content"
        className="container narrow-content section app-policy"
      >
        <p>
          Each policy covers the app named on its page. For information about
          visiting blynite.com or sending a project inquiry, read our{" "}
          <Link href="/privacy">website Privacy Policy</Link>.
        </p>
        {policies.length ? (
          <ul className="app-policy-list">
            {policies.map((policy) => (
              <li key={policy.slug}>
                <p className="app-policy-platform">
                  {policy.platform}
                  {policy.status === "preview" ? " · Local preview" : ""}
                </p>
                <h2>
                  <Link href={appPrivacyPath(policy.slug)}>{policy.name}</Link>
                </h2>
                <p>{policy.summary}</p>
                <Link href={appPrivacyPath(policy.slug)} className="text-link">
                  Read privacy policy <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="app-policy-empty">
            App privacy policies will be listed here as they become available.
          </p>
        )}
      </section>
    </>
  );
}
