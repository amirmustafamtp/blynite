import { PageHero, Eyebrow } from "@/components/ui";
import { FinalCTA, WorkShowcase } from "@/components/marketing/sections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Our Work",
  "Explore Blynite's approach to solving meaningful problems through considered design and dependable engineering.",
  "/work",
);
export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Work that solves real problems."
        description="Behind every meaningful product is a clear problem, a set of thoughtful decisions, and engineering that brings it all together."
      />
      <section id="page-content" className="section">
        <div className="container">
          <WorkShowcase />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container editorial-grid">
          <Eyebrow>What matters to us</Eyebrow>
          <div>
            <h2>
              The decisions
              <br />
              behind the outcome.
            </h2>
            <div className="intro-description">
              <p>Good case studies explain the why, not just the what.</p>
              <p>
                When we share our work, we show the context, the constraints,
                and the choices that shaped it. We respect confidentiality and
                only publish outcomes that can be supported.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
