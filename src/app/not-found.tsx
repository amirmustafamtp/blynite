import { ButtonLink, Eyebrow } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="not-found dark-section">
      <div className="container">
        <Eyebrow light>404 · A different direction</Eyebrow>
        <h1>That page isn’t here.</h1>
        <p>Let’s get you back to something worth exploring.</p>
        <div className="button-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
