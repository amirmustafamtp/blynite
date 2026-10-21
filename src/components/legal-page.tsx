import Link from "next/link";
import { PageHero } from "./ui";
export function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy";
  return (
    <>
      <PageHero
        eyebrow={privacy ? "Legal" : "Legal · Draft for review"}
        title={privacy ? "Privacy Policy" : "Terms of Service"}
        description={
          privacy
            ? "How we handle personal information when you visit our website or contact Blynite."
            : "This document is a working draft. It requires review and approval before the website launches publicly."
        }
      />
      <article id="page-content" className="container narrow-content section">
        {privacy ? (
          <p>
            Last updated: <time dateTime="2026-10-21">October 21, 2026</time>
          </p>
        ) : (
          <div className="legal-draft">
            <strong>Draft — not an approved legal policy.</strong>
            <p>
              The operating entity, applicable jurisdiction, contact details,
              service providers, and final terms must be confirmed before this
              document takes effect.
            </p>
          </div>
        )}
        {privacy ? (
          <>
            <section className="legal-section">
              <h2>About this policy</h2>
              <p>
                Blynite operates blynite.com. This policy explains how we handle
                information from website visitors and people who contact us
                about our software, AI, and digital product services. For
                privacy questions or requests, email{" "}
                <a href="mailto:info@blynite.com">info@blynite.com</a>. Separate
                agreements may apply to information processed as part of a
                client project or product.
              </p>
            </section>
            <section className="legal-section">
              <h2>Information you share with us</h2>
              <p>
                Our project inquiry form asks for your name, business email,
                service of interest, project description, and permission to
                respond. Company name and budget are optional. If you contact us
                by email, we receive your email address, message, and any
                information you include. Please avoid sending passwords,
                sensitive personal information, or confidential project material
                through the initial inquiry form.
              </p>
              <p>
                Entering text in the form does not send an inquiry. Form details
                are transmitted when you submit them with sending enabled.
              </p>
            </section>
            <section className="legal-section">
              <h2>How we use information</h2>
              <p>
                We use inquiry details to understand your needs, respond to
                questions, discuss potential projects, and manage related
                correspondence. We also process technical information to operate
                the website, investigate errors, and protect it from spam and
                abuse. Submitting an inquiry does not subscribe you to a
                marketing mailing list.
              </p>
              <p>
                Where a legal basis is required, we rely on steps you request
                before entering a contract, our legitimate interests in
                answering business inquiries and securing our website, and
                consent where required. We may also process information to meet
                legal obligations.
              </p>
            </section>
            <section className="legal-section">
              <h2>Hosting and email delivery</h2>
              <p>
                Vercel hosts our website and may process technical request data,
                including IP addresses, browser information, requested URLs, and
                diagnostic logs. When contact-form delivery is enabled, Resend
                processes your inquiry to deliver it to Blynite’s email inbox.
                Our email service also processes messages we receive and send.
                The website does not maintain a separate lead database.
              </p>
              <p>
                These services process information needed to provide hosting,
                security, and communications. Read the{" "}
                <a href="https://vercel.com/legal/privacy-notice">
                  Vercel Privacy Notice
                </a>{" "}
                and{" "}
                <a href="https://resend.com/legal/privacy-policy">
                  Resend Privacy Policy
                </a>{" "}
                for their privacy information. We may also disclose information
                when legally required or necessary to protect our legal rights.
              </p>
            </section>
            <section className="legal-section">
              <h2>Cookies and technical information</h2>
              <p>
                We do not add advertising trackers or analytics tools to this
                website, and the website application does not set cookies.
                Hosting and security services may process technical information
                needed to serve and protect the site. The contact form uses
                temporary security tokens and spam-prevention checks to limit
                automated submissions.
              </p>
            </section>
            <section className="legal-section">
              <h2>Retention and security</h2>
              <p>
                We retain correspondence for as long as needed to respond,
                manage the business relationship, resolve disputes, and meet
                legal obligations. Retention depends on the purpose of the
                correspondence and applicable requirements. Copies may also
                remain in email and service-provider systems under their
                retention settings.
              </p>
              <p>
                We use HTTPS, server-side validation, and access controls for
                delivery credentials to protect inquiries. No online service can
                guarantee absolute security. Contact us if you believe
                information sent to Blynite has been exposed or misused.
              </p>
            </section>
            <section className="legal-section">
              <h2>International processing</h2>
              <p>
                Our service providers may process information outside your
                country, where data protection laws may differ. Contact us for
                information about processing locations and any safeguards
                applicable to your information.
              </p>
            </section>
            <section className="legal-section">
              <h2>Your choices and privacy rights</h2>
              <p>
                You can choose not to submit an inquiry. Depending on applicable
                law, you may request access, correction, deletion, restriction,
                or portability of your information, or object to processing.
                Where processing relies on consent, you may withdraw it without
                affecting earlier lawful processing. You may also complain to
                your local data protection authority.
              </p>
              <p>
                Send requests to{" "}
                <a href="mailto:info@blynite.com">info@blynite.com</a>. We may
                need to verify your identity and understand your request before
                responding. Some information may need to be retained where
                required by law.
              </p>
            </section>
            <section className="legal-section">
              <h2>Changes to this policy</h2>
              <p>
                We may update this policy as our website, services, or legal
                obligations change. The date above identifies the latest update.
                We will provide additional notice where required by applicable
                law.
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
        {!privacy && (
          <section className="legal-section">
            <h2>Before publication</h2>
            <p>
              Replace this draft with reviewed terms reflecting Blynite’s actual
              operations. For general project information, visit our{" "}
              <Link href="/contact">contact page</Link>.
            </p>
          </section>
        )}
      </article>
    </>
  );
}
