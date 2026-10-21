import Link from "next/link";
import { navigation, site } from "@/data/site";
import { services } from "@/data/services";
import { Logo } from "@/components/ui";

export function Footer() {
  return (
    <footer className="site-footer dark-section">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo />
            <p>
              Intelligent software. Thoughtful engineering.
              <br />
              Ideas built to move things forward.
            </p>
            <span className="footer-tagline">{site.tagline}</span>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              {navigation
                .filter((item) => item.href !== "/")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h2>Expertise</h2>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-conversation">
            <h2>Build something meaningful.</h2>
            <Link href="/contact">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
            <p>
              Every next chapter starts
              <br />
              with a good question.
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Blynite. All rights reserved.</p>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <span className="mono">BUILT WITH PURPOSE.</span>
        </div>
      </div>
    </footer>
  );
}
