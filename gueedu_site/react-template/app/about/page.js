import Link from "next/link";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

export const metadata = {
  title: "About Us",
  description:
    "Learn about GUE Engineering Limited, our team-led delivery model, and our engineering standards for software, automation, and cloud projects.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About GUE Engineering Limited",
    description:
      "Team-led engineering delivery for software, automation, and cloud modernization in Nigeria.",
    url: "/about",
    images: ["/brand/og-cover.svg"],
  },
};

const stats = [
  { label: "Started", value: "2020" },
  { label: "Group upgrade", value: "2025" },
  { label: "Primary base", value: "Abuja" },
  { label: "Core lanes", value: "5+" },
];

const principles = [
  {
    title: "Engineering over presentation",
    description:
      "We focus on systems that are maintainable, testable, and operational after launch, not just attractive demos.",
  },
  {
    title: "Direct accountability",
    description:
      "Team-led delivery means technical decisions, timelines, and tradeoffs are handled with less handoff noise.",
  },
  {
    title: "Practical modernization",
    description:
      "We help teams modernize delivery through better architecture, automation, and cloud operations without unnecessary complexity.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <PageBanner titleHtml={`Abo<span>ut Us</span>`} titleText="About" />

      <section className="gue-page-section">
        <div className="gue-page-section__header">
          <p className="gue-page-section__kicker">Who We Are</p>
          <h2 className="gue-page-section__title">Engineering-led technology work with clear ownership</h2>
          <p className="gue-page-section__copy">
            GUE Engineering Limited is a Nigerian engineering company focused on software,
            AI automation, SaaS and open-source delivery, DevOps and cloud engineering,
            and technical training.
          </p>
        </div>

        <div className="gue-page-two-col">
          <div className="gue-page-grid">
            <p>
              We began in August 2020 as Code-Snippet Enterprise, delivering software and
              training engagements from Abuja. In March 2025, after the creation of Gue
              Group Limited, the business was formally upgraded into GUE Engineering
              Limited with a stronger operating structure and group oversight.
            </p>
            <p>
              Today the company operates as a focused delivery practice for organizations
              that need dependable technology execution: product development, workflow
              automation, cloud delivery, and hands-on technical enablement.
            </p>
            <div className="gue-page-actions">
              <Link href="/services" className="gue-page-button">
                View Services
              </Link>
              <Link href="/contact" className="gue-page-button gue-page-button--ghost">
                Start a Project
              </Link>
            </div>
          </div>

          <div className="gue-page-stats">
            {stats.map((stat) => (
              <article key={stat.label} className="gue-page-stat">
                <p className="gue-page-stat__label">{stat.label}</p>
                <p className="gue-page-stat__value">{stat.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gue-page-section gue-page-section--alt">
        <div className="gue-page-section__header">
          <p className="gue-page-section__kicker">How We Operate</p>
          <h2 className="gue-page-section__title">The standards behind the work</h2>
        </div>

        <div className="gue-page-card-grid">
          {principles.map((item) => (
            <article key={item.title} className="gue-page-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gue-page-section">
        <div className="gue-page-cta">
          <p className="gue-page-section__kicker">Next Step</p>
          <h2>Need a team that can scope, build, and ship responsibly?</h2>
          <p>
            If you need software delivery, automation, or cloud engineering with less
            template noise and more technical ownership, we should talk.
          </p>
          <div className="gue-page-actions" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="gue-page-button">
              Contact GUE Engineering
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
