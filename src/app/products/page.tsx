import { PageHero, Eyebrow } from "@/components/ui";
import { FinalCTA, ProductApproach } from "@/components/marketing/sections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Products",
  "Our product-building philosophy: meaningful problems, thoughtful experiences, and software designed to evolve.",
  "/products",
);
export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our products"
        title="Ideas we believe in. Products we build."
        description="We build for our partners, and we build for ourselves. Our own product work is an expression of what we believe technology can do."
      />
      <section className="section" id="page-content">
        <div className="container">
          <ProductApproach full />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <Eyebrow>Our product principles</Eyebrow>
          <h2>
            Useful first.
            <br />
            Thoughtful throughout.
          </h2>
          <div className="principles-grid">
            {[
              {
                title: "Start with a real need.",
                text: "Understand the problem before imagining the product. Focus on the change that would make a difference.",
              },
              {
                title: "Make complexity feel simple.",
                text: "Invest in the interactions, the language, and the small details that help people get things done.",
              },
              {
                title: "Build for the next chapter.",
                text: "Create a sound foundation, listen to how it is used, and leave room to evolve.",
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
      <FinalCTA />
    </>
  );
}
