import { PageHero, Eyebrow, TextLink } from "@/components/ui";
import { FinalCTA, Process } from "@/components/marketing/sections";
import { SystemVisual } from "@/components/marketing/system-visual";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About",
  "Blynite combines engineering, design, and intelligent automation to simplify complexity and create meaningful progress.",
  "/about",
);
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Blynite perspective"
        title="Curiosity drives us. Engineering defines us."
        description="We believe technology should simplify complexity, open possibilities, and create meaningful progress. That belief shapes how we think, design, and build."
      />
      <section className="section" id="page-content">
        <div className="container editorial-grid">
          <Eyebrow>Why we build</Eyebrow>
          <div>
            <h2>
              There’s a better way
              <br />
              to make things work.
            </h2>
            <div className="intro-description">
              <p>That simple idea is at the heart of Blynite.</p>
              <div>
                <p>
                  We are a technology company focused on intelligent software,
                  AI-powered solutions, and digital products. We work with
                  ambitious ideas and the real-world challenges behind them.
                </p>
                <p>
                  As both a technology partner and a product builder, we care
                  about the whole picture: the experience, the engineering, and
                  what happens after launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark-section about-systems">
        <div className="container two-column">
          <div>
            <Eyebrow light>Our perspective</Eyebrow>
            <h2>
              See the whole.
              <br />
              Care about the details.
            </h2>
            <p>
              Great technology is a connected system of decisions. How people
              use it. How data moves. How it behaves when things change.
            </p>
            <TextLink href="/services" light>
              Explore our capabilities
            </TextLink>
          </div>
          <SystemVisual compact />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Eyebrow>What guides us</Eyebrow>
          <h2>Principles, put into practice.</h2>
          <div className="principles-grid">
            {[
              {
                title: "Clarity before complexity.",
                text: "Ask good questions. Understand what matters. Make the solution easier to use and easier to maintain.",
              },
              {
                title: "Craft with responsibility.",
                text: "Consider accessibility, reliability, and the people affected by the systems we build.",
              },
              {
                title: "Partnership beyond delivery.",
                text: "Make decisions openly, share knowledge, and build a foundation that can grow with the business.",
              },
            ].map((item, index) => (
              <div key={item.title}>
                <span className="mono">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Process />
      <FinalCTA />
    </>
  );
}
