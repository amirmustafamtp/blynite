import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Braces,
  CircleDot,
  GitBranch,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink, Eyebrow, ServiceIcon, TextLink } from "@/components/ui";
import { services } from "@/data/services";
import { expertise, processSteps } from "@/data/site";
import {
  publicProducts,
  publicCaseStudies,
  type Product,
  type CaseStudy,
} from "@/data/catalog";

export function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <Link
          className="service-card"
          href={`/services/${service.slug}`}
          key={service.slug}
        >
          <div className="service-top">
            <ServiceIcon icon={service.icon} />
            <span className="mono">0{index + 1}</span>
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <span className="service-link">
            Explore capability
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  );
}
export function Process({ heading = true }: { heading?: boolean }) {
  return (
    <section className="section process-section">
      <div className="container">
        {heading && (
          <div className="section-head-row">
            <div>
              <Eyebrow>How we work</Eyebrow>
              <h2>
                Built thoughtfully.
                <br />
                Delivered confidently.
              </h2>
            </div>
            <p>
              A clear process. Shared decisions.
              <br />
              Progress you can see at every step.
            </p>
          </div>
        )}
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div className="process-step" key={step.name}>
              <div className="process-line">
                <span className="mono">0{index + 1}</span>
                <span className="process-dot" />
              </div>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
              <small>{step.detail}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="catalog-card">
      {product.screenshot && (
        <div className="catalog-image">
          <Image
            src={product.screenshot.src}
            alt={product.screenshot.alt}
            width={1200}
            height={800}
          />
        </div>
      )}
      <div className="catalog-card-content">
        <span className="tag">
          {product.category} · {product.status}
        </span>
        {product.logo && (
          <Image src={product.logo} width={120} height={60} alt="" />
        )}
        <h3>
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p>{product.description}</p>
        <TextLink href={`/products/${product.slug}`}>Explore product</TextLink>
      </div>
    </article>
  );
}
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="catalog-card">
      {study.screenshots[0] && (
        <div className="catalog-image">
          <Image
            src={study.screenshots[0].src}
            alt={study.screenshots[0].alt}
            width={1200}
            height={800}
          />
        </div>
      )}
      <div className="catalog-card-content">
        <span className="tag">{study.industry}</span>
        <h3>
          <Link href={`/work/${study.slug}`}>{study.title}</Link>
        </h3>
        <p>{study.challenge}</p>
        <TextLink href={`/work/${study.slug}`}>Read case study</TextLink>
      </div>
    </article>
  );
}
export function ProductApproach({ full = false }: { full?: boolean }) {
  if (publicProducts.length)
    return (
      <div className="catalog-grid">
        {publicProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    );
  return (
    <div className="product-editorial">
      <div className="product-visual" aria-hidden="true">
        <div className="product-window">
          <div className="window-bar">
            <div>
              <i />
              <i />
              <i />
            </div>
            <span className="mono">FROM AN IDEA, FORWARD.</span>
          </div>
          <div className="product-building-block block-one">
            <CircleDot size={23} />
            <div>
              <strong>A meaningful problem</strong>
              <span>The starting point</span>
            </div>
          </div>
          <div className="building-connector" />
          <div className="product-building-block block-two">
            <Layers3 size={23} />
            <div>
              <strong>A thoughtful product</strong>
              <span>Designed around people</span>
            </div>
          </div>
          <div className="building-connector" />
          <div className="product-building-block block-three">
            <GitBranch size={23} />
            <div>
              <strong>Room to evolve</strong>
              <span>Built for the long term</span>
            </div>
            <ArrowUpRight size={20} />
          </div>
        </div>
        <span className="visual-caption mono">
          OUR PRODUCT-BUILDING PHILOSOPHY
        </span>
      </div>
      <div className="product-story">
        <span className="tag">Engineering with an owner’s mindset</span>
        <h3>
          We don’t just build
          <br />
          for others.
          <br />
          <span>We build what’s next.</span>
        </h3>
        <p>
          Creating our own products keeps us close to the decisions that matter:
          what to build, who it helps, and how to make it better.
        </p>
        <p>
          We approach product development with the same care we bring to every
          partnership — from the first question to the next release.
        </p>
        <TextLink href={full ? "/contact" : "/products"}>
          {full ? "Talk product with us" : "Inside our product thinking"}
        </TextLink>
      </div>
    </div>
  );
}
export function WorkShowcase() {
  if (publicCaseStudies.length)
    return (
      <div className="catalog-grid">
        {publicCaseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    );
  return (
    <div className="work-editorial">
      <div className="work-label">
        <Braces size={36} strokeWidth={1.2} aria-hidden="true" />
        <span className="mono">THE THINKING BEHIND THE BUILD.</span>
      </div>
      <div>
        <h3>
          Good work starts
          <br />
          with the right problem.
        </h3>
        <p>
          Our case studies will explore the challenge, the decisions, and the
          engineering behind each solution. We share work when it’s ready for a
          public conversation.
        </p>
        <TextLink href="/contact">Tell us about your challenge</TextLink>
      </div>
      <div className="work-principles">
        <span>
          <CircleDot size={17} />
          Clear problem framing
        </span>
        <span>
          <GitBranch size={17} />
          Considered technical decisions
        </span>
        <span>
          <ShieldCheck size={17} />
          Outcomes backed by evidence
        </span>
      </div>
    </div>
  );
}
export function Expertise() {
  return (
    <section className="section expertise-section">
      <div className="container expertise-layout">
        <div>
          <Eyebrow>Under the hood</Eyebrow>
          <h2>
            Built on a strong
            <br />
            engineering foundation.
          </h2>
          <p>
            We choose the right tools for the problem and connect them with
            care.
          </p>
        </div>
        <div className="expertise-list">
          {expertise.map((item, index) => (
            <div key={item}>
              <span className="mono">0{index + 1}</span>
              <h3>{item}</h3>
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="cta-section dark-section">
      <div className="container cta-inner">
        <div>
          <Eyebrow light>Your next chapter</Eyebrow>
          <h2>
            Have something
            <br />
            <span>ambitious in mind?</span>
          </h2>
          <p>Let’s turn your idea into something exceptional.</p>
          <div className="button-row">
            <ButtonLink href="/contact">Let’s Talk</ButtonLink>
            <TextLink href="/services" light>
              Explore Services
            </TextLink>
          </div>
        </div>
        <div className="cta-signal" aria-hidden="true">
          <span />
          <span />
          <span />
          <ArrowRight size={76} strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}
