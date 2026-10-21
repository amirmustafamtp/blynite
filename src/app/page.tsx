import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { ButtonLink, Eyebrow, TextLink } from "@/components/ui";
import {
  Expertise,
  FinalCTA,
  Process,
  ProductApproach,
  ServicesGrid,
  WorkShowcase,
} from "@/components/marketing/sections";
import { SystemVisual } from "@/components/marketing/system-visual";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = pageMetadata(site.tagline, site.description, "/");
export default function HomePage() {
  return (
    <>
      <section className="hero dark-section">
        <div className="container">
          <div className="hero-main">
            <div className="hero-copy">
              <Eyebrow light>
                Intelligent by design. Built with purpose.
              </Eyebrow>
              <h1>
                Intelligence
                <br />
                <span>
                  Beyond
                  <br />
                  Boundaries.
                </span>
              </h1>
              <p>{site.description}</p>
              <div className="button-row">
                <ButtonLink href="/contact">Start a Project</ButtonLink>
                <ButtonLink href="/work" variant="secondary">
                  Explore Our Work
                </ButtonLink>
              </div>
            </div>
            <SystemVisual />
          </div>
          <div className="hero-footer">
            <span className="mono">SOFTWARE. INTELLIGENCE. POSSIBILITY.</span>
            <a href="#who-we-are">
              A closer look <ArrowDownRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section id="who-we-are" className="section intro-section">
        <div className="container editorial-grid">
          <Eyebrow>Who we are</Eyebrow>
          <div>
            <h2>
              Technology built
              <br />
              with <span className="serif-word">purpose.</span>
            </h2>
            <div className="intro-description">
              <p>
                Ambitious ideas deserve more than just code. They deserve a
                partner who sees the bigger picture — and knows how to build it.
              </p>
              <div>
                <p>
                  We bring engineering, design, and intelligent automation
                  together to solve real-world challenges. From a focused
                  application to a connected platform, we turn complexity into
                  meaningful progress.
                </p>
                <TextLink href="/about">Get to know Blynite</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="container">
          <div className="section-head-row">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2>
                From complex ideas
                <br />
                to powerful digital experiences.
              </h2>
            </div>
            <TextLink href="/services">Explore all services</TextLink>
          </div>
          <ServicesGrid />
        </div>
      </section>
      <section className="section products-section">
        <div className="container">
          <Eyebrow>Our products</Eyebrow>
          <h2>
            Ideas we believe in.
            <br />
            Products we build.
          </h2>
          <ProductApproach />
        </div>
      </section>
      <Process />
      <section className="section work-section">
        <div className="container">
          <div className="section-head-row">
            <div>
              <Eyebrow>Our work</Eyebrow>
              <h2>
                Work that solves
                <br />
                real problems.
              </h2>
            </div>
            <TextLink href="/work">Our approach to impact</TextLink>
          </div>
          <WorkShowcase />
        </div>
      </section>
      <Expertise />
      <section className="belief-strip">
        <div className="container">
          <p>
            Thoughtful by design.
            <br />
            <span>Dependable by engineering.</span>
          </p>
          <ArrowUpRight size={62} strokeWidth={1} aria-hidden="true" />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
