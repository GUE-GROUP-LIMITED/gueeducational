"use client";

import Link from "next/link";
import {
  FiLaptop,
  FiCpu,
  FiBox,
  FiCloud,
  FiTool,
  FiSearch,
  FiLayers,
  FiCompass,
  FiUser,
  FiLock,
  FiSettings,
  FiGlobe,
  FiMapPin,
  FiLink,
  FiAward,
} from "react-icons/fi";
import {
  LuGraduationCap,
  LuBuilding,
  LuBuilding2,
  LuHome,
  LuLock,
  LuSprout,
  LuCar,
  LuWallet,
  LuLandmark,
  LuRocket,
  LuFlaskConical,
} from "react-icons/lu";

const services = [
  {
    icon: <FiLaptop size={24} />,
    title: "Software Development",
    description:
      "Custom web applications, internal tools, and APIs built with modern frameworks and a focus on maintainability.",
  },
  {
    icon: <FiCpu size={24} />,
    title: "AI-Powered Automation",
    description:
      "Workflow automation, AI agent integrations, and process automation that reduce manual effort for growing teams.",
  },
  {
    icon: <FiBox size={24} />,
    title: "SaaS & Open-Source Solutions",
    description:
      "Design and build of SaaS products and contribution to open-source tooling from architecture through to launch.",
  },
  {
    icon: <FiCloud size={24} />,
    title: "DevOps & Cloud Engineering",
    description:
      "CI/CD pipelines, cloud infrastructure setup, and deployment automation for teams that need to ship reliably.",
  },
  {
    icon: <LuGraduationCap size={24} />,
    title: "IT Training",
    description:
      "Practical, hands-on technical training for developers and teams across software development, tooling, and best practices.",
  },
  {
    icon: <FiTool size={24} />,
    title: "Technical Consulting",
    description:
      "Architecture review, technology selection, and hands-on guidance for teams navigating technical decisions.",
  },
];

const processSteps = [
  {
    icon: <FiSearch size={24} />,
    title: "Scope the Problem",
    description:
      "We start by understanding what you actually need, not a generic template solution.",
  },
  {
    icon: <FiLayers size={24} />,
    title: "Design & Build",
    description:
      "Architecture decisions made for your scale, not someone else's. Code built to be maintained.",
  },
  {
    icon: <LuFlaskConical size={24} />,
    title: "Test & Refine",
    description:
      "Real testing and real feedback loops before anything reaches production.",
  },
  {
    icon: <LuRocket size={24} />,
    title: "Ship & Support",
    description:
      "Deployment, documentation, and ongoing support. Delivery does not stop at handover.",
  },
];

const history = [
  {
    year: "2020",
    company: "Code-Snippet Enterprise",
    role: "REGISTERED BUSINESS NAME · BN 3167539 · ABUJA, NIGERIA",
    description:
      "Founded in August 2020 after relocating from Makurdi to Abuja. Registered with the Corporate Affairs Commission for training in software, web development, mobile and web application development.",
  },
  {
    year: "2024",
    company: "Gue Group Limited Established",
    role: "HOLDING COMPANY CREATED · RC 7501599 · MAY 17, 2024",
    description:
      "Gue Group Limited incorporated as the group parent entity in Nigeria, establishing the legal structure for subsidiaries across technology, cybersecurity, financial services, and technical education.",
  },
  {
    year: "2025",
    company: "GUE Engineering Limited Upgraded",
    role: "FULL COMPANY INCORPORATION · RC 8342226 · MARCH 12, 2025",
    description:
      "Code-Snippet Enterprise formally upgraded and incorporated as GUE Engineering Limited under CAMA 2020 as a private limited liability company. Positioned as the software and engineering delivery company within Gue Group.",
  },
];

const projects = [
  {
    icon: <LuBuilding size={20} />,
    title: "eloheemsuites.com.ng",
    description: "Hospitality website delivery for Eloheem Suites (Nigeria domain).",
    href: "https://eloheemsuites.com.ng",
    label: "Live",
    tags: ["Client", "Website"],
  },
  {
    icon: <LuBuilding size={20} />,
    title: "eloheemsuites.com",
    description: "Hospitality website delivery for Eloheem Suites (global domain).",
    href: "https://eloheemsuites.com",
    label: "Live",
    tags: ["Client", "Website"],
  },
  {
    icon: <LuBuilding size={20} />,
    title: "eyahshotel.com",
    description: "Hospitality brand website and digital presence implementation.",
    href: "https://eyahshotel.com",
    label: "Live",
    tags: ["Client", "Website"],
  },
  {
    icon: <FiGlobe size={20} />,
    title: "thebig.com.ng",
    description: "Public-facing business website designed and delivered for growth.",
    href: "https://thebig.com.ng",
    label: "Live",
    tags: ["Client", "Website"],
  },
  {
    icon: <FiCompass size={20} />,
    title: "youthtransformation.org",
    description: "Organization website supporting outreach and programme visibility.",
    href: "https://youthtransformation.org",
    label: "Live",
    tags: ["Client", "Website"],
  },
  {
    icon: <LuHome size={20} />,
    title: "brainsestate.com",
    description: "Real estate platform website focused on listings and visibility.",
    href: "https://brainsestate.com",
    label: "Live",
    tags: ["Client", "Website"],
  },
  {
    icon: <FiUser size={20} />,
    title: "yengeraphael.com",
    description: "Personal/professional website build with a clean digital profile.",
    href: "https://yengeraphael.com",
    label: "Live",
    tags: ["Client", "Website"],
  },
  {
    icon: <FiLock size={20} />,
    title: "guecyber.com",
    description: "Internal Gue Group website for cybersecurity operations and brand.",
    href: "https://guecyber.com",
    label: "Live",
    tags: ["Internal", "Gue Group"],
  },
  {
    icon: <LuBuilding2 size={20} />,
    title: "gueindustries.com",
    description: "Internal Gue Group website for industrial and operations identity.",
    href: "https://gueindustries.com",
    label: "Live",
    tags: ["Internal", "Gue Group"],
  },
  {
    icon: <FiSettings size={20} />,
    title: "gueengineering.com",
    description: "Internal Gue Group website for GUE Engineering brand presence.",
    href: "https://gueengineering.com",
    label: "Live",
    tags: ["Internal", "Gue Group"],
  },
  {
    icon: <LuBuilding size={20} />,
    title: "guerealty.com",
    description: "Internal Gue Group realty website for property-focused initiatives.",
    href: "https://guerealty.com",
    label: "Live",
    tags: ["Internal", "Gue Group"],
  },
  {
    icon: <LuLock size={20} />,
    title: "guecyber.ng",
    description:
      "Internal Gue Group website for Gue Cyber Nigeria service and training presence.",
    href: "https://guecyber.ng",
    label: "Live",
    tags: ["Internal", "Gue Group"],
  },
  {
    icon: <LuGraduationCap size={20} />,
    title: "guevte.com",
    description: "Internal Gue Group website for vocational and technical education.",
    href: "https://guevte.com",
    label: "Live",
    tags: ["Internal", "Gue Group"],
  },
  {
    icon: <LuSprout size={20} />,
    title: "guesmartfarming.com",
    description: "Internal Gue Group website for smart farming initiatives.",
    href: "https://guesmartfarming.com",
    label: "Live",
    tags: ["Internal", "Gue Group"],
  },
  {
    icon: <LuCar size={20} />,
    title: "guemobility.com",
    description: "Internal Gue Group website for mobility-focused solutions.",
    href: "https://guemobility.com",
    label: "Live",
    tags: ["Internal", "Gue Group"],
  },
  {
    icon: <LuWallet size={20} />,
    title: "guemoni.com",
    description: "Internal Gue Group website for financial inclusion and banking services.",
    href: "https://guemoni.com",
    label: "Live",
    tags: ["Internal", "Gue Group"],
  },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#history", label: "History" },
  { href: "https://www.guegroup.com", label: "Gue Group", external: true },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  { href: "/faqs", label: "FAQs" },
];

const groupLinks = [
  { href: "https://www.guegroup.com", label: "Gue Group Limited" },
  { href: "https://www.guecyber.ng", label: "Gue Cyber Nigeria" },
  { href: "https://www.guecyber.com", label: "Gue Cyber Belgium" },
  { href: "https://www.guemoni.com", label: "Gue Moni" },
  { href: "https://www.gabrielaloho.com", label: "gabrielaloho.com" },
];

const clientOrder = [
  "eloheemsuites.com.ng",
  "eloheemsuites.com",
  "eyahshotel.com",
  "thebig.com.ng",
  "youthtransformation.org",
  "brainsestate.com",
  "yengeraphael.com",
];

const internalOrder = [
  "guecyber.com",
  "guecyber.ng",
  "gueindustries.com",
  "gueengineering.com",
  "guerealty.com",
  "guevte.com",
  "guesmartfarming.com",
  "guemobility.com",
  "guemoni.com",
];

const GueEngineeringLanding = () => {
  const getDomainFromUrl = (url) => {
    try {
      return new URL(url).hostname;
    } catch {
      return url.replace(/^https?:\/\//, "");
    }
  };

  const getFaviconUrl = (url) => {
    const domain = getDomainFromUrl(url);
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  };

  const renderProjectCard = (project) => {
    const isInternal = project.tags.includes("Internal");
    const domain = getDomainFromUrl(project.href);
    const faviconUrl = getFaviconUrl(project.href);

    return (
      <article
        key={project.title}
        className={`gue-home__project-card ${isInternal ? "gue-home__project-card--internal" : ""}`}
      >
        <div className="gue-home__project-head">
          <div className="gue-home__project-brand">
            <img
              src={faviconUrl}
              alt={`${domain} site icon`}
              className="gue-home__project-favicon"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="gue-home__project-icon">{project.icon}</span>
          </div>
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.label}
          </a>
        </div>

        <div className="gue-home__project-preview" aria-hidden="true">
          <div className="gue-home__project-preview-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="gue-home__project-preview-body">
            <p>{domain}</p>
          </div>
        </div>

        <a
          href={project.href}
          className="gue-home__project-domain"
          target="_blank"
          rel="noreferrer"
        >
          {domain}
        </a>

        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="gue-home__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>
    );
  };

  const clientProjects = projects.filter((p) => p.tags.includes("Client"));
  const internalProjects = projects.filter((p) => p.tags.includes("Internal"));

  const sortedClientProjects = [...clientProjects].sort((a, b) => {
    const ia = clientOrder.indexOf(a.title);
    const ib = clientOrder.indexOf(b.title);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  const sortedInternalProjects = [...internalProjects].sort((a, b) => {
    const ia = internalOrder.indexOf(a.title);
    const ib = internalOrder.indexOf(b.title);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });

  return (
    <div className="gue-home">
      <header className="gue-home__nav-shell">
        <div className="gue-home__nav">
          <Link href="/" className="gue-home__logo">
            <img src="/brand/logo.jpeg" alt="GUE Engineering logo" />
            <span>
              GUE <em>Engineering</em>
            </span>
          </Link>

          <nav className="gue-home__nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Link href="/contact" className="gue-home__nav-cta">
            Start a Project
          </Link>

          <details className="gue-home__mobile-nav">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
              <span />
            </summary>
            <div className="gue-home__mobile-panel">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {item.label}
                </a>
              ))}
              <Link href="/contact" className="gue-home__mobile-cta">
                Start a Project
              </Link>
            </div>
          </details>
        </div>
      </header>

      <main id="top">
        <section className="gue-home__hero">
          <div className="gue-home__hero-glow" aria-hidden="true" />
          <div className="gue-home__hero-grid" aria-hidden="true" />
          <div className="gue-home__hero-inner">
            <p className="gue-home__eyebrow">Abuja · GUE Engineering Limited · RC 8342226</p>
            <h1>
              We Build Software, Automate Workflows, and <em>Ship Systems.</em>
            </h1>
            <p className="gue-home__hero-copy">
              A Nigerian engineering company delivering custom web platforms, AI workflow
              automation, DevOps, cloud engineering, and hands-on IT training for growing teams.
            </p>
            <div className="gue-home__hero-actions">
              <Link href="/contact" className="gue-home__button gue-home__button--primary">
                Start a Project
              </Link>
              <a href="#services" className="gue-home__button gue-home__button--ghost">
                Explore Services
              </a>
            </div>
            <div className="gue-home__pills" aria-label="Key highlights">
              <span>RC 8342226</span>
              <span>Software Engineering</span>
              <span>AI Automation</span>
              <span>DevOps &amp; Cloud</span>
              <span>Technical Training</span>
            </div>
          </div>
        </section>

        <section className="gue-home__trust-bar" aria-label="Trust indicators">
          <p>CAC Registered · RC 8342226</p>
          <p>Subsidiary of Gue Group Limited</p>
          <p>Software · AI Automation · DevOps · Cloud</p>
          <p>Abuja, Nigeria</p>
        </section>

        <section id="about" className="gue-home__section">
          <div className="gue-home__about-grid">
            <div className="gue-home__body-copy">
              <p className="gue-home__kicker">Who We Are</p>
              <h2 className="gue-home__section-title">
                Engineering-Led Delivery for Modern Teams
              </h2>
              <p>
                <strong>GUE Engineering Limited</strong> (RC 8342226) is a private limited
                liability company registered under the Companies and Allied Matters Act 2020 on
                March 12, 2025, operating as a subsidiary of <strong>Gue Group Limited</strong> (RC
                7501599).
              </p>
              <p>
                Our roots go back to August 2020, when we began as{" "}
                <strong>Code-Snippet Enterprise</strong> (BN 3167539) in Abuja, training developers
                and delivering custom software projects. In March 2025, following the creation of Gue
                Group Limited as the parent company, we formally upgraded to a private limited
                liability company.
              </p>
              <p>
                Today we operate as a focused engineering team, building software, automating
                workflows with AI, and helping teams ship reliably on modern cloud infrastructure.
              </p>
            </div>

            <div className="gue-home__facts-card">
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">
                  <LuBuilding size={20} />
                </span>
                <div>
                  <p className="gue-home__fact-label">Registration</p>
                  <p className="gue-home__fact-value">RC 8342226 · CAMA 2020</p>
                  <p className="gue-home__fact-sub">Tax ID: 2520784002292</p>
                </div>
              </div>
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">
                  <FiLink size={20} />
                </span>
                <div>
                  <p className="gue-home__fact-label">Group Structure</p>
                  <p className="gue-home__fact-value">Subsidiary of Gue Group Limited</p>
                  <p className="gue-home__fact-sub">RC 7501599</p>
                </div>
              </div>
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">
                  <FiMapPin size={20} />
                </span>
                <div>
                  <p className="gue-home__fact-label">Location</p>
                  <p className="gue-home__fact-value">Abuja, Federal Capital Territory</p>
                  <p className="gue-home__fact-sub">Nigeria</p>
                </div>
              </div>
              <div className="gue-home__fact-row gue-home__fact-row--last">
                <span className="gue-home__fact-icon">
                  <FiSettings size={20} />
                </span>
                <div>
                  <p className="gue-home__fact-label">Focus</p>
                  <p className="gue-home__fact-value">Software · AI Automation · DevOps</p>
                  <p className="gue-home__fact-sub">SaaS, Open-Source, Cloud, Training</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="gue-home__section gue-home__section--alt">
          <p className="gue-home__kicker">What We Do</p>
          <h2 className="gue-home__section-title">Engineering Services</h2>
          <p className="gue-home__section-copy">
            Practical, delivery-focused technology services from a single automation script to a
            full production platform.
          </p>
          <div className="gue-home__services-grid">
            {services.map((service) => (
              <article key={service.title} className="gue-home__service-card">
                <span className="gue-home__service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gue-home__section">
          <p className="gue-home__kicker">How We Work</p>
          <h2 className="gue-home__section-title">A Straightforward Delivery Process</h2>
          <p className="gue-home__section-copy">
            No bloated process. Just clear scoping, focused delivery, and honest communication
            throughout.
          </p>
          <div className="gue-home__process-grid">
            {processSteps.map((step, index) => (
              <article key={step.title} className="gue-home__process-step">
                <p className="gue-home__step-number">{String(index + 1).padStart(2, "0")}</p>
                <span className="gue-home__process-icon">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="history" className="gue-home__section gue-home__section--alt">
          <p className="gue-home__kicker">Our History</p>
          <h2 className="gue-home__section-title">
            From Code-Snippet Enterprise to GUE Engineering Limited
          </h2>
          <p className="gue-home__section-copy">
            Five years of building, from a registered business name in Abuja to a fully
            incorporated engineering company.
          </p>
          <div className="gue-home__timeline">
            {history.map((item) => (
              <article key={`${item.year}-${item.company}`} className="gue-home__timeline-item">
                <div className="gue-home__timeline-year">{item.year}</div>
                <div className="gue-home__timeline-body">
                  <span className="gue-home__timeline-dot" />
                  <h3>{item.company}</h3>
                  <p className="gue-home__timeline-role">{item.role}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gue-home__section">
          <p className="gue-home__kicker">What We Build</p>
          <h2 className="gue-home__section-title">Selected Work</h2>
          <p className="gue-home__section-copy">
            A sample of client deliveries and internal Gue Group websites.
          </p>
          <p className="gue-home__kicker gue-home__kicker--compact">
            Client Websites ({sortedClientProjects.length})
          </p>
          <div className="gue-home__projects-grid">
            {sortedClientProjects.map((project) => renderProjectCard(project))}
          </div>
          <p className="gue-home__kicker gue-home__kicker--compact">
            Internal Gue Group Websites ({sortedInternalProjects.length})
          </p>
          <div className="gue-home__projects-grid">
            {sortedInternalProjects.map((project) => renderProjectCard(project))}
          </div>
        </section>

        <section className="gue-home__group-section">
          <div className="gue-home__group-card">
            <div className="gue-home__group-icon">
              <LuLandmark size={32} />
            </div>
            <div className="gue-home__group-copy">
              <p className="gue-home__kicker gue-home__kicker--compact">Part of the Group</p>
              <h2 className="gue-home__group-title">A Subsidiary of Gue Group Limited</h2>
              <p>
                GUE Engineering Limited operates under Gue Group Limited (RC 7501599), alongside
                Gue Cyber Limited (RC 8341363) in Nigeria, Gue Cyber (KBO 1037.163.392) in Belgium,
                and Gue Moni Limited (RC 9853276) for financial inclusion services.
              </p>
            </div>
            <div className="gue-home__group-links">
              {groupLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="gue-home__cta">
          <div className="gue-home__hero-inner" style={{ textAlign: "center" }}>
            <p className="gue-home__kicker gue-home__kicker--center">Ready to Build?</p>
            <h2 className="gue-home__section-title gue-home__section-title--center">
              Let&apos;s Build Something Dependable Together.
            </h2>
            <p className="gue-home__section-copy gue-home__section-copy--center">
              Software delivery, AI automation, or cloud engineering with direct ownership and
              realistic technical tradeoffs.
            </p>
            <div className="gue-home__hero-actions gue-home__hero-actions--center">
              <Link href="/contact" className="gue-home__button gue-home__button--primary">
                Start a Conversation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="gue-home__footer">
        <div className="gue-home__footer-top">
          <div>
            <Link href="/" className="gue-home__footer-brand">
              <img src="/brand/logo.jpeg" alt="GUE Engineering logo" />
              <span>
                GUE <em>Engineering</em>
              </span>
            </Link>
            <p className="gue-home__footer-copy">
              Software, AI automation, SaaS and open-source delivery, DevOps and cloud engineering,
              and practical IT training.
            </p>
          </div>

          <div>
            <p className="gue-home__footer-heading">Company</p>
            <div className="gue-home__footer-links">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="gue-home__footer-heading">Gue Group</p>
            <div className="gue-home__footer-links">
              {groupLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="gue-home__footer-heading">Contact</p>
            <div className="gue-home__footer-links">
              <a href="mailto:hello@gueengineering.com">hello@gueengineering.com</a>
              <a href="tel:+2349041157068">+234 904 115 7068</a>
              <Link href="/contact">Start a Project</Link>
            </div>
          </div>
        </div>

        <div className="gue-home__footer-bottom">
          <p>
            © {new Date().getFullYear()} GUE Engineering Limited (RC 8342226) · Subsidiary of Gue
            Group Limited (RC 7501599) · Abuja, Nigeria
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GueEngineeringLanding;
