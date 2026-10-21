import Image from "next/image";
import { notFound } from "next/navigation";
import { publicCaseStudies } from "@/data/catalog";
import { PageHero, Eyebrow } from "@/components/ui";
import { FinalCTA } from "@/components/marketing/sections";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = publicCaseStudies.find((item) => item.slug === slug);
  return study
    ? pageMetadata(study.title, study.challenge, `/work/${slug}`)
    : {};
}
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = publicCaseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  const outcomes = study.outcomes.filter((outcome) =>
    outcome.evidenceReference.trim(),
  );
  return (
    <>
      <PageHero
        eyebrow={study.industry}
        title={study.title}
        description={study.challenge}
      />
      <section className="section" id="page-content">
        <div className="container narrow-content">
          <Eyebrow>The challenge</Eyebrow>
          <p className="large-paragraph">{study.challenge}</p>
          <Eyebrow>The solution</Eyebrow>
          <h2>From understanding to execution.</h2>
          <p>{study.solution}</p>
          {study.screenshots.map((screenshot) => (
            <Image
              className="detail-image"
              key={screenshot.src}
              src={screenshot.src}
              alt={screenshot.alt}
              width={1200}
              height={800}
            />
          ))}
          <h2>Engineering foundation</h2>
          <div className="tag-list">
            {study.technology.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
          {outcomes.length > 0 && (
            <>
              <h2>Documented outcomes</h2>
              <ul className="content-list">
                {outcomes.map((outcome) => (
                  <li key={outcome.statement}>{outcome.statement}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
