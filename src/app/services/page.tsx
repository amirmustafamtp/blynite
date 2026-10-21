import { PageHero } from "@/components/ui";
import {
  FinalCTA,
  Process,
  ServicesGrid,
} from "@/components/marketing/sections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Services",
  "Custom software, AI automation, SaaS development, web and mobile applications, cloud integrations, and enterprise technology from Blynite.",
  "/services",
);
export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our capabilities"
        title="Considered solutions. Exceptional possibilities."
        description="From the first question to the next release, we bring the right mix of product thinking, design, and engineering to your challenge."
      />
      <section className="section" id="page-content">
        <div className="container">
          <div className="section-head-row">
            <h2>
              The expertise to bring
              <br />
              your ambition to life.
            </h2>
            <p>
              Focused capabilities.
              <br />
              One connected approach.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>
      <Process />
      <FinalCTA />
    </>
  );
}
