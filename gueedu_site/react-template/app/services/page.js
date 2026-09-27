import Link from "next/link";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

export const metadata = {
  title: "Services",
  description:
    "Explore GUE Engineering services: software development, AI-powered automation, SaaS and open-source delivery, DevOps and cloud engineering, IT training, and technical consulting.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Engineering Services | GUE Engineering Limited",
    description:
      "Delivery-focused software, AI automation, cloud, and consulting services for modern teams.",
    url: "/services",
    images: ["/brand/og-cover.svg"],
  },
};

const services = [
  {
    title: "Software Development",
    description:
      "Custom web platforms, internal tools, APIs, and business systems designed for maintainability and steady iteration.",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Automation flows, AI assistants, and operational tooling that reduce repetitive manual work and improve consistency.",
  },
  {
    title: "SaaS & Open-Source Solutions",
    description:
      "Product design and implementation support for SaaS platforms and engineering tools, from architecture to release.",
  },
  {
    title: "DevOps & Cloud Engineering",
    description:
      "Infrastructure setup, CI/CD pipelines, deployment automation, and environment design for reliable delivery.",
  },
  {
    title: "IT Training",
    description:
      "Practical technical training for individuals and teams across software development, tooling, and delivery practices.",
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture reviews, delivery planning, and direct engineering input for teams making important technical decisions.",
  },
];

const process = [
  "Discovery and requirements clarification",
  "Architecture and solution design",
  "Implementation and iterative review",
  "Release, documentation, and support",
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "Service",
    position: index + 1,
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "GUE Engineering Limited",
      url: "https://www.gueengineering.com",
    },
    areaServed: "Nigeria",
  })),
};

const ServicesPage = () => {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <PageBanner titleHtml={`Se<span>rvices</span>`} titleText="Services" />

      <section className="gue-page-section">
        <div className="gue-page-section__header">
          <p className="gue-page-section__kicker">What We Do</p>
          <h2 className="gue-page-section__title">Delivery-focused engineering services</h2>
          <p className="gue-page-section__copy">
            We work across product development, automation, cloud delivery, and team
            capability building, with a bias toward practical outcomes and manageable systems.
          </p>
        </div>

        <div className="gue-page-card-grid">
          {services.map((service) => (
            <article key={service.title} className="gue-page-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gue-page-section gue-page-section--alt">
        <div className="gue-page-two-col">
          <div>
            <div className="gue-page-section__header">
              <p className="gue-page-section__kicker">Engagement Model</p>
              <h2 className="gue-page-section__title">Clear process, controlled delivery</h2>
              <p className="gue-page-section__copy">
                We do not overcomplicate delivery. The goal is to reduce ambiguity, ship
                responsibly, and keep the technical path understandable for your team.
              </p>
            </div>
          </div>
          <div className="gue-page-detail-list">
            {process.map((step, index) => (
              <article key={step} className="gue-page-detail">
                <div className="gue-page-detail__icon">0{index + 1}</div>
                <div>
                  <p className="gue-page-detail__label">Step {index + 1}</p>
                  <p className="gue-page-detail__value">{step}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gue-page-section">
        <div className="gue-page-cta">
          <p className="gue-page-section__kicker">Start Here</p>
          <h2>Have a service need that needs scoping first?</h2>
          <p>
            Send the problem, constraints, and expected outcome. We can advise on the
            right engagement before work starts.
          </p>
          <div className="gue-page-actions" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="gue-page-button">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
