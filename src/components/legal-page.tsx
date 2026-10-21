import Link from "next/link";
import { PageHero } from "./ui";
export function LegalPage({ type }: { type: "privacy" | "terms" }) {
  const privacy = type === "privacy";
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={privacy ? "Privacy Policy" : "Terms of Service"}
        description={
          privacy
            ? "How we handle personal information when you visit our website or contact Blynite."
            : "The terms for using Blynite’s website, exploring our services, and sending project inquiries."
        }
      />
      <article id="page-content" className="container narrow-content section">
        <p>
          Last updated: <time dateTime="2026-10-21">October 21, 2026</time>
        </p>
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
              <h2>About these terms</h2>
              <p>
                These terms describe the conditions for using blynite.com,
                operated by Blynite. The website introduces our software
                engineering, AI, and digital product services. You may contact
                us about these terms at{" "}
                <a href="mailto:info@blynite.com">info@blynite.com</a>.
              </p>
              <p>
                These website terms do not replace a signed proposal, service
                agreement, or product-specific terms. Separate written
                agreements govern paid work and take precedence for that work.
              </p>
            </section>
            <section className="legal-section">
              <h2>Project inquiries and service agreements</h2>
              <p>
                Sending an inquiry starts a conversation. It does not create a
                service agreement, confirm a price, or reserve delivery
                capacity. Project scope, fees, payment arrangements, timelines,
                deliverables, ownership, support, and cancellation terms are
                agreed separately before work begins.
              </p>
              <p>
                Please provide accurate contact details and only share
                information you are authorized to provide. Do not include
                passwords or sensitive personal information in an initial
                inquiry. Arrange any necessary confidentiality protections with
                us before sharing confidential project materials.
              </p>
            </section>
            <section className="legal-section">
              <h2>Responsible use</h2>
              <p>
                Use the website for lawful research and genuine business
                communication. Do not impersonate another person, submit spam,
                distribute malicious code, access systems without permission,
                bypass security controls, or disrupt the website or its users.
                We may limit access where reasonably necessary to address
                misuse, security threats, or legal requirements.
              </p>
            </section>
            <section className="legal-section">
              <h2>Website content and brand materials</h2>
              <p>
                Website content, designs, and brand assets belong to Blynite or
                their respective owners and are protected by applicable
                intellectual property laws. Third-party names and marks remain
                the property of their owners.
              </p>
              <p>
                You may view the website, share links, and keep reasonable
                copies for your own evaluation of our services, preserving
                relevant ownership notices. Contact us for permission before
                republishing our materials for commercial use or using our
                branding in a way that suggests endorsement. These terms do not
                grant ownership of our software or other intellectual property.
              </p>
            </section>
            <section className="legal-section">
              <h2>Information you submit</h2>
              <p>
                You retain ownership of the materials you share with us. Sending
                an inquiry allows us to use its contents to evaluate your
                request, communicate with you, and discuss potential work. It
                does not transfer ownership of your ideas or project materials
                to Blynite. Our <Link href="/privacy">Privacy Policy</Link>{" "}
                explains how we handle personal information.
              </p>
            </section>
            <section className="legal-section">
              <h2>Website information and availability</h2>
              <p>
                We aim to keep website information accurate and useful, but
                descriptions may change and may not address your particular
                requirements. Confirm project-specific capabilities and
                commitments with us before making a business decision.
              </p>
              <p>
                The website may be interrupted for maintenance, technical
                issues, or circumstances outside our control. We may update
                website features and content. Any service levels or performance
                commitments for a client project are set out in its separate
                agreement.
              </p>
            </section>
            <section className="legal-section">
              <h2>External links</h2>
              <p>
                Links to third-party websites are provided for reference. Their
                operators control their content, availability, privacy
                practices, and terms. A link does not by itself mean that
                Blynite endorses that website or its services.
              </p>
            </section>
            <section className="legal-section">
              <h2>Your legal rights</h2>
              <p>
                Nothing in these terms excludes or limits any rights, remedies,
                or liability that cannot lawfully be excluded or limited.
                Mandatory protections under applicable law continue to apply.
                These terms do not impose a particular court, jurisdiction, or
                arbitration process on website visitors.
              </p>
            </section>
            <section className="legal-section">
              <h2>Changes to these terms</h2>
              <p>
                We may update these terms to reflect changes to the website or
                applicable requirements. The date above identifies the latest
                version. Updates apply to future use of the website and do not
                change an existing project agreement. We will provide additional
                notice where required by applicable law.
              </p>
            </section>
            <section className="legal-section">
              <h2>Questions or concerns</h2>
              <p>
                Email <a href="mailto:info@blynite.com">info@blynite.com</a>{" "}
                with questions about these terms or concerns about the website
                so we can work toward a resolution. For a new project, visit our
                <Link href="/contact"> contact page</Link>.
              </p>
            </section>
          </>
        )}
      </article>
    </>
  );
}
