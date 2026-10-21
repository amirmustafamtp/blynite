import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CodeXml,
  Cloud,
  Layers3,
  MonitorSmartphone,
  Network,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Service } from "@/data/services";

export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Blynite home">
      <Image
        src={`/brand/logo-${dark ? "white" : "navy"}.svg`}
        alt="Blynite"
        width={1600}
        height={560}
        priority
      />
    </Link>
  );
}
export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={`button button-${variant}`}>
      {children}
      {arrow && <ArrowUpRight size={18} aria-hidden="true" />}
    </Link>
  );
}
export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link href={href} className={`text-link${light ? " text-link-light" : ""}`}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function ServiceIcon({
  icon,
  size = 25,
}: {
  icon: Service["icon"];
  size?: number;
}) {
  const Icon = {
    code: CodeXml,
    brain: BrainCircuit,
    layers: Layers3,
    devices: MonitorSmartphone,
    cloud: Cloud,
    network: Network,
  }[icon];
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />;
}
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero dark-section">
      <div className="container">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <div className="page-hero-bottom">
          <p>{description}</p>
          {children ?? (
            <a
              href="#page-content"
              className="scroll-cue"
              aria-label="Explore this page"
            >
              <ArrowDown size={22} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function NextArrow() {
  return <ArrowRight size={20} aria-hidden="true" />;
}
