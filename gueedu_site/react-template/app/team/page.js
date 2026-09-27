import Link from "next/link";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

export const metadata = {
  title: "Team",
  description:
    "Meet the GUE Engineering team and delivery capabilities across full-stack engineering, AI automation, cloud operations, and technical enablement.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Team | GUE Engineering Limited",
    description:
      "Team-led engineering delivery with practical capability across software, automation, and cloud.",
    url: "/team",
    images: ["/brand/og-cover.svg"],
  },
};

const capabilities = [
  "Full-stack application engineering",
  "Cloud infrastructure and deployment automation",
  "AI workflow automation and systems integration",
  "Technical training and engineering guidance",
];

const TeamPage = () => {
  return (
    <Layout>
      <PageBanner titleHtml={`Leade<span>rship</span>`} titleText="Team" />

      <section className="gue-page-section">
        <div className="gue-page-two-col">
          <article className="gue-page-card">
            <p className="gue-page-section__kicker">Team-Led Delivery</p>
            <h3>Gabriel Aloho</h3>
            <p>
              Technology lead at Code-Snippet Enterprise and GUE Engineering Limited,
              working with a broader team of software engineers and technical staff.
              Gabriel supports delivery across software engineering, architecture,
              automation, and cloud infrastructure.
            </p>
            <p>
              His background includes full-stack engineering across .NET, Blazor, React,
              and practical cloud delivery, with academic grounding in information
              security and digital forensics.
            </p>
            <div className="gue-page-actions">
              <a
                href="https://www.linkedin.com/in/gabriel-aloho/"
                className="gue-page-button"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.gabrielaloho.com"
                className="gue-page-button gue-page-button--ghost"
                target="_blank"
                rel="noreferrer"
              >
                Personal Site
              </a>
            </div>
          </article>

          <div className="gue-page-detail-list">
            {capabilities.map((capability, index) => (
              <article key={capability} className="gue-page-detail">
                <div className="gue-page-detail__icon">0{index + 1}</div>
                <div>
                  <p className="gue-page-detail__label">Capability</p>
                  <p className="gue-page-detail__value">{capability}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gue-page-section gue-page-section--alt">
        <div className="gue-page-cta">
          <p className="gue-page-section__kicker">Working Style</p>
          <h2>Smaller team, shorter communication path</h2>
          <p>
            The operating model is intentionally lean. That reduces handoff friction and
            keeps technical conversations closer to the people making implementation decisions.
          </p>
          <div className="gue-page-actions" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="gue-page-button">
              Discuss an Engagement
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
