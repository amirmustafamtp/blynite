import { notFound } from "next/navigation";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { ButtonLink, Eyebrow, PageHero, ServiceIcon } from "@/components/ui";
import { FinalCTA } from "@/components/marketing/sections";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata(service.title, service.description, `/services/${slug}`);
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return (
    <>
      <PageHero
        eyebrow="Our capabilities"
        title={service.title}
        description={service.introduction}
      >
        <ButtonLink href={`/contact?service=${service.slug}`}>
          Discuss your project
        </ButtonLink>
      </PageHero>
      <section id="page-content" className="section">
        <div className="container service-detail-grid">
          <div>
            <Eyebrow>Where it makes a difference</Eyebrow>
            <h2>
              Practical applications.
              <br />
              Purposeful outcomes.
            </h2>
            <p>{service.description}</p>
          </div>
          <div className="detail-list">
            {service.useCases.map((useCase, index) => (
              <div key={useCase}>
                <span className="mono">0{index + 1}</span>
                <h3>{useCase}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container two-column">
          <div>
            <Eyebrow>What we deliver</Eyebrow>
            <h2>
              A clear path.
              <br />A tangible result.
            </h2>
          </div>
          <ul className="deliverables">
            {service.deliverables.map((item) => (
              <li key={item}>
                <Check size={20} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container editorial-grid">
          <Eyebrow>Our approach</Eyebrow>
          <div>
            <h2>
              Good decisions.
              <br />
              At every stage.
            </h2>
            <p className="large-paragraph">{service.approach}</p>
          </div>
        </div>
      </section>
      <section className="section related-section">
        <div className="container">
          <Eyebrow>Connected capabilities</Eyebrow>
          <h2>Better, together.</h2>
          <div className="related-grid">
            {service.related.map((relatedSlug) => {
              const related = services.find(
                (item) => item.slug === relatedSlug,
              )!;
              return (
                <Link
                  className="related-card"
                  key={related.slug}
                  href={`/services/${related.slug}`}
                >
                  <ServiceIcon icon={related.icon} />
                  <h3>{related.title}</h3>
                  <ArrowUpRight size={22} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
