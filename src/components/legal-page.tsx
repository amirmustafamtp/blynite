import Link from "next/link";
import { PageHero } from "./ui";
export function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy";
  return (
    <>
      <PageHero
        eyebrow="Legal · Draft for review"
        title={privacy ? "Privacy Policy" : "Terms of Service"}
        description="This document is a working draft. It requires review and approval before the website launches publicly."
      />
      <article id="page-content" className="container narrow-content section">
        <div className="legal-draft">
          <strong>Draft — not an approved legal policy.</strong>
          <p>
            The operating entity, applicable jurisdiction, contact details,
            service providers, and final terms must be confirmed before this
            document takes effect.
          </p>
        </div>
        {privacy ? (
          <>
            <section className="legal-section">
              <h2>Information in project inquiries</h2>
              <p>
                The inquiry form asks for your name, email, service of interest,
                project description, and permission to respond. Company and
                budget are optional. Please avoid sending sensitive personal
                information, credentials, or confidential project material.
              </p>
            </section>
            <section className="legal-section">
              <h2>How the website handles inquiries</h2>
              <p>
                When delivery is enabled, the website sends your inquiry through
                the configured email or delivery service to Blynite so that it
                can be reviewed and answered. This version of the website does
                not maintain a lead database. Information may remain in the
                recipient’s inbox and in the delivery provider’s systems.
                Provider identities, retention periods, and any international
                transfers must be documented before launch.
              </p>
            </section>
            <section className="legal-section">
              <h2>Technical data and security</h2>
              <p>
                The website uses short-lived form tokens, a hidden spam field,
                and temporary server memory to limit repeated submissions.
                Hosting infrastructure may process request information such as
                IP addresses and technical logs. The hosting provider and its
                logging settings must be confirmed before this policy is
                finalized.
              </p>
            </section>
            <section className="legal-section">
              <h2>Cookies and measurement</h2>
              <p>
                This implementation does not add advertising trackers or
                analytics, and does not set application cookies. The deployed
                site and any future third-party services must be reviewed before
                making a final statement about cookies or tracking.
              </p>
            </section>
            <section className="legal-section">
              <h2>Your choices and requests</h2>
              <p>
                You can choose not to submit an inquiry. The final policy must
                explain applicable privacy rights, how to request access or
                deletion, and the verified contact channel for those requests.
                No privacy contact address has been approved for publication
                yet.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="legal-section">
              <h2>About this website</h2>
              <p>
                This website introduces Blynite’s software engineering, AI, and
                digital product capabilities. Descriptions are general
                information. Project scope, fees, timelines, deliverables, and
                service commitments must be agreed in a separate written
                agreement.
              </p>
            </section>
            <section className="legal-section">
              <h2>Project inquiries</h2>
              <p>
                Sending an inquiry does not create a service agreement or
                reserve delivery capacity. Do not submit material that you are
                not authorized to share. Confidential materials should be
                exchanged only after the appropriate arrangements have been
                agreed.
              </p>
            </section>
            <section className="legal-section">
              <h2>Brand and website materials</h2>
              <p>
                The Blynite identity and website materials are presented to
                explain the company’s services. The final terms must confirm
                ownership, permitted use, and any relevant third-party licenses.
                Requests to reuse brand assets should be agreed with Blynite.
              </p>
            </section>
            <section className="legal-section">
              <h2>Responsible use</h2>
              <p>
                Use the website and inquiry form for legitimate communication.
                Do not attempt to interfere with the website, bypass security
                controls, or submit unsolicited automated messages.
              </p>
            </section>
            <section className="legal-section">
              <h2>Items requiring legal review</h2>
              <p>
                The final terms must identify the contracting entity, governing
                law, dispute process, warranties, limitations of liability,
                external-link responsibilities, and how changes take effect.
                These provisions have not been approved and are intentionally
                left for legal review.
              </p>
            </section>
          </>
        )}
        <section className="legal-section">
          <h2>Before publication</h2>
          <p>
            Replace this draft with reviewed terms reflecting Blynite’s actual
            operations. For general project information, visit our{" "}
            <Link href="/contact">contact page</Link>.
          </p>
        </section>
      </article>
    </>
  );
}
