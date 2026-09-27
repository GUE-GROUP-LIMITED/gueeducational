import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

export const metadata = {
  title: "Projects",
  description:
    "Review selected GUE Engineering projects across web platforms, SaaS systems, cloud-backed applications, and product engineering delivery.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | GUE Engineering Limited",
    description:
      "Examples of engineering delivery across applications, platforms, and cloud systems.",
    url: "/projects",
    images: ["/brand/og-cover.svg"],
  },
};

const projects = [
  {
    title: "GueInsight",
    label: "Threat intelligence platform",
    description:
      "A subscription platform for threat intelligence, security awareness, scoring, and reporting workflows built for Gue Cyber.",
  },
  {
    title: "guecyber.ng",
    label: "Corporate website delivery",
    description:
      "A production React/Vite website supporting services, training information, and conversion-focused company presentation for the Nigerian business.",
  },
  {
    title: "ContosoPizza",
    label: "Full-stack .NET application",
    description:
      "A sample multi-surface application spanning ASP.NET Core API, Blazor UI, .NET MAUI flows, and MongoDB-backed storage.",
  },
];

const projectSignals = [
  { label: "Delivery style", value: "Product and platform" },
  { label: "Stack range", value: ".NET, React, Cloud" },
  { label: "Typical work", value: "Apps, automation, ops" },
  { label: "Focus", value: "Reliable execution" },
];

const ProjectsPage = () => {
  return (
    <Layout>
      <PageBanner titleHtml={`Pro<span>jects</span>`} titleText="Projects" />

      <section className="gue-page-section">
        <div className="gue-page-two-col">
          <div>
            <div className="gue-page-section__header">
              <p className="gue-page-section__kicker">Selected Work</p>
              <h2 className="gue-page-section__title">A sample of the systems and products we build</h2>
              <p className="gue-page-section__copy">
                Our work spans internal tools, corporate websites, SaaS-style platforms,
                and cloud-backed engineering systems across the group.
              </p>
            </div>

            <div className="gue-page-card-grid">
              {projects.map((project) => (
                <article key={project.title} className="gue-page-card">
                  <p className="gue-page-section__kicker">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="gue-page-stats">
            {projectSignals.map((signal) => (
              <article key={signal.label} className="gue-page-stat">
                <p className="gue-page-stat__label">{signal.label}</p>
                <p className="gue-page-stat__value" style={{ fontSize: "1.35rem" }}>
                  {signal.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
