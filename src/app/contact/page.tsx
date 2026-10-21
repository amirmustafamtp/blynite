import { ContactForm } from "@/components/contact-form";
import { Eyebrow } from "@/components/ui";
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
      <section className="contact-hero dark-section">
        <div className="container">
          <Eyebrow light>Start a conversation</Eyebrow>
          <h1>Start a project.</h1>
          <p>
            A new idea, a complex challenge, or a product ready for its next
            chapter.
          </p>
        </div>
      </section>
      <section className="section contact-section" id="page-content">
        <div className="container contact-layout">
          <ContactForm
            available={deliveryReady(contactConfig())}
            initialService={
              services.some((item) => item.slug === service) ? service : ""
            }
            email={publicEmail}
          />
          <aside className="contact-aside">
            <Eyebrow>A good place to start</Eyebrow>
            <h2>No finished brief needed.</h2>
            <p>
              A few details help us understand your project and make the first
              conversation useful.
            </p>
            <ul>
              <li>Share your idea and the problem behind it.</li>
              <li>Tell us about your users, constraints, and timing.</li>
              <li>
                Choose “Not sure yet” if you need help finding the right
                service.
              </li>
            </ul>
            {publicEmail && (
              <a className="text-link" href={`mailto:${publicEmail}`}>
                {publicEmail}
              </a>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
