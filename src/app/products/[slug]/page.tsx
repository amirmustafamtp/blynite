import Image from "next/image";
import { notFound } from "next/navigation";
import { publicProducts } from "@/data/catalog";
import { PageHero, TextLink } from "@/components/ui";
import { FinalCTA } from "@/components/marketing/sections";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = publicProducts.find((item) => item.slug === slug);
  return product
    ? pageMetadata(product.name, product.description, `/products/${slug}`)
    : {};
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = publicProducts.find((item) => item.slug === slug);
  if (!product) notFound();
  return (
    <>
      <PageHero
        eyebrow={`${product.category} · ${product.status}`}
        title={product.name}
        description={product.description}
      />
      <section className="section" id="page-content">
        <div className="container narrow-content">
          {product.screenshot && (
            <Image
              className="detail-image"
              src={product.screenshot.src}
              alt={product.screenshot.alt}
              width={1200}
              height={800}
            />
          )}
          <h2>Designed to make a difference.</h2>
          <ul className="content-list">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          {product.url && /^https:\/\//.test(product.url) && (
            <TextLink href={product.url}>Visit {product.name}</TextLink>
          )}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
