import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui";
import {
  appPrivacyPath,
  availableAppPrivacyPolicies,
  publicAppPrivacyPolicies,
} from "@/data/app-policies";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return publicAppPrivacyPolicies.map(({ slug }) => ({ slug }));
}

async function getPolicy(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const policy = availableAppPrivacyPolicies().find(
    (item) => item.slug === slug,
  );
  if (!policy) notFound();
  return policy;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const policy = await getPolicy(params);
  if (policy.status !== "published") {
    return {
      title: `${policy.name} Privacy Policy — Draft`,
      description:
        "DRAFT — NOT FOR PUBLICATION. Policy draft awaiting final owner approval.",
      robots: { index: false, follow: false },
    };
  }
  return pageMetadata(
    `${policy.name} Privacy Policy`,
    policy.summary,
    appPrivacyPath(policy.slug),
  );
}

export default async function AppPrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const policy = await getPolicy(params);
  return (
    <>
      <PageHero
        eyebrow="Mobile app · Privacy Policy"
        title={policy.name}
        description={policy.summary}
      />
      <article
        id="page-content"
        className="container narrow-content section app-policy"
      >
        <Link href="/apps/privacy" className="text-link">
          All app privacy policies
        </Link>
        {policy.status !== "published" && (
          <aside className="legal-draft" aria-label="Policy preview status">
            <strong>DRAFT — NOT FOR PUBLICATION</strong>
            <p>
              This policy is awaiting final owner approval and is not yet
              effective.
              {policy.status === "public-preview"
                ? " This draft is publicly accessible for review; it is not the final policy."
                : " The public privacy-policy URL is pending. This preview is available only in local development."}
            </p>
          </aside>
        )}
        <dl className="app-policy-details">
          <div>
            <dt>Publisher</dt>
            <dd>Blynite</dd>
          </div>
          <div>
            <dt>App version</dt>
            <dd>
              {policy.platform} · {policy.version}
            </dd>
          </div>
          <div>
            <dt>Privacy contact</dt>
            <dd>
              <a href={`mailto:${policy.contactEmail}`}>
                {policy.contactEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt>Effective date</dt>
            <dd>
              {policy.effectiveDate ? (
                <time dateTime={policy.effectiveDate}>
                  {new Date(
                    `${policy.effectiveDate}T00:00:00Z`,
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              ) : (
                "Pending final approval"
              )}
            </dd>
          </div>
        </dl>
        <nav className="app-policy-contents" aria-label="Policy sections">
          <h2>On this page</h2>
          <ol>
            {policy.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>
        {policy.sections.map((section, index) => (
          <section className="legal-section" id={section.id} key={section.id}>
            <h2>
              {index + 1}. {section.title}
            </h2>
            {section.content}
          </section>
        ))}
      </article>
    </>
  );
}
