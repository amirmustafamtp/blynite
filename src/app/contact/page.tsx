import { ContactForm } from "@/components/contact-form";
import { Eyebrow, PageHero } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { contactConfig } from "@/lib/contact-config";
import { deliveryReady } from "@/lib/contact-server";
import { services } from "@/data/services";

export const metadata = pageMetadata(
  "Start a project",
  "Tell Blynite about the software, AI solution, or digital product you want to build.",
  "/contact",
);
export const dynamic = "force-dynamic";
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const publicEmail =
    email && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ? email : undefined;
  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        title="Let's build something meaningful."
        description="A new idea. A complex challenge. A product ready for its next chapter. We'd like to hear about it."
      />
      <section className="section" id="page-content">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <Eyebrow>Your next chapter</Eyebrow>
            <h2>Great work starts with a good conversation.</h2>
            <p>
              Tell us what you have in mind. You don’t need a finished brief — a
              clear problem is a good place to start.
            </p>
            <ul>
              <li>Share your idea and the problem behind it.</li>
              <li>Tell us about your users, constraints, and timing.</li>
              <li>We’ll explore a practical way forward together.</li>
            </ul>
            {publicEmail && (
              <a className="text-link" href={`mailto:${publicEmail}`}>
                {publicEmail}
              </a>
            )}
          </aside>
          <ContactForm
            available={deliveryReady(contactConfig())}
            initialService={
              services.some((item) => item.slug === service) ? service : ""
            }
            email={publicEmail}
          />
        </div>
      </section>
    </>
  );
}
