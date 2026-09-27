const services = [
  {
    icon: "🎓",
    title: "TVET & Technical Training",
    description:
      "Practical training for learners preparing for roles in technology, engineering, and commerce through NBTE-structured NSQ programmes delivered at our Wannune centre.",
    websiteUrl: "https://guevte.com",
    websiteLabel: "Visit TVET centre website",
    highlight: true,
  },
  {
    icon: "🏫",
    title: "School Management",
    description:
      "We manage West Africa Redeemer High School and West Africa Nursery and Primary School in Wannune, supporting their day-to-day school operations.",
    websiteUrl: "https://westafrica.sch.ng",
    websiteLabel: "Visit West Africa school website",
  },
  {
    icon: "✈️",
    title: "Overseas Admissions & Scholarship Support",
    description:
      "Guidance with overseas study admissions and scholarship applications.",
  },
  {
    icon: "🗣️",
    title: "IELTS Preparation",
    description:
      "IELTS preparation services in Abuja at Sky Memorial Complex, Wuse Zone 5.",
  },
  {
    icon: "💻",
    title: "Digital Learning Platforms",
    description:
      "Design and deliver digital learning platforms for flexible professional development. Our LMS serves learners on mobile and desktop, anywhere in Nigeria.",
  },
  {
    icon: "📜",
    title: "Certification & Skills Assessment",
    description:
      "Certification, licensing support, and skills assessment for vocational learners, aligned with relevant industry standards.",
    highlight: true,
  },
  {
    icon: "👥",
    title: "Workforce Development",
    description:
      "Workforce development support for organisations seeking skilled technical personnel. We assess, train, and certify teams to fill ICT skills gaps.",
  },
  {
    icon: "📈",
    title: "Capacity Building",
    description:
      "Capacity development for individuals and teams across technical and business sectors — from school leavers to experienced professionals.",
  },
];

const whyUs = [
  {
    icon: "📋",
    title: "Standards-Based Training",
    description:
      "Our vocational training follows established occupational standards. Accreditation from the National Board for Technical Education (NBTE) is actively in progress.",
  },
  {
    icon: "📍",
    title: "Based in Wannune, Tarka",
    description:
      "We are based in your community — Wannune, Tarka Local Government Area, Benue State. No need to travel to Makurdi or Abuja to access quality vocational training.",
  },
  {
    icon: "📱",
    title: "Digital Learning Platform",
    description:
      "Learners access digital learning resources through our online platform, available on any smartphone or computer.",
  },
  {
    icon: "🕐",
    title: "Flexible Class Schedules",
    description:
      "Full-time, part-time, and weekend class schedules to accommodate secondary school leavers, working adults, and students currently in school.",
  },
  {
    icon: "💰",
    title: "Affordable Fees",
    description:
      "We aim to make vocational education accessible to learners and organisations in our community.",
  },
  {
    icon: "🤝",
    title: "Employer-Ready Skills",
    description:
      "We teach what employers in Benue State and beyond are actually hiring for — not just theory. Every module ends with a practical deliverable.",
  },
];

const history = [
  {
    year: "2024",
    company: "Gue Group Limited Established",
    role: "RC 7501599 · MAY 17, 2024",
    description:
      "Gue Group Limited incorporated as a holding company in Nigeria, creating the group structure for multi-sector subsidiaries across technology, engineering, financial services, education, agritech, industrial parks, and mobility.",
  },
  {
    year: "2026",
    company: "GUE Educational Limited Incorporated",
    role: "RC 9451933 · MARCH 30, 2026",
    description:
      "GUE Educational Limited formally incorporated as a private limited liability company under CAMA 2020, dedicated to technical and vocational education and training across Nigeria. Registered in Wannune, Tarka Local Government Area, Benue State.",
  },
  {
    year: "2026",
    company: "Wannune TVET Centre Opens",
    role: "NBTE ACCREDITATION IN PROGRESS · WANNUNE, BENUE STATE",
    description:
      "Our TVET training centre in Wannune opened to serve learners across Tarka LGA and surrounding communities. NBTE accreditation application submitted.",
  },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
  { href: "https://www.guegroup.com", label: "Gue Group", external: true },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const groupLinks = [
  { href: "https://www.guegroup.com", label: "Gue Group Limited" },
  { href: "https://www.gueengineering.com", label: "GUE Engineering" },
  { href: "https://www.guemoni.com", label: "Gue Moni — Financial Services" },
  { href: "https://www.guecyber.ng", label: "Gue Cyber Nigeria" },
];

const externalProps = { target: "_blank", rel: "noreferrer" };

const GueEducationalLanding = () => {
  return (
    <div className="gue-home gue-edu">

      {/* ── NAV ── */}
      <header className="gue-home__nav-shell">
        <nav className="gue-home__nav">
          <a href="#top" className="gue-home__logo">
            <img src="/brand/logo.jpeg" alt="GUE Educational Limited logo" />
            <span>GUE <em>Educational</em></span>
          </a>
          <ul className="gue-home__nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} {...(item.external ? externalProps : {})}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="gue-home__nav-cta">Contact Us</a>
          <details className="gue-home__mobile-nav">
            <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
            <div className="gue-home__mobile-panel">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} {...(item.external ? externalProps : {})}>{item.label}</a>
              ))}
              <a href="#contact" className="gue-home__mobile-cta">Contact Us</a>
            </div>
          </details>
        </nav>
      </header>

      <main id="top">

        {/* ── HERO ── */}
        <section className="gue-home__hero gue-edu__hero">
          <div className="gue-home__hero-glow" />
          <div className="gue-home__hero-grid" />
          <div className="gue-edu__hero-layout">
            <div className="gue-home__hero-inner gue-edu__hero-text">
              <div className="gue-home__eyebrow">
                Nigeria · GUE Educational Limited · RC 9451933 · NBTE-Structured TVET
              </div>
              <h1>
                Train Here.<br />
                Earn a <em>Recognised Certificate.</em>
              </h1>
              <p className="gue-home__hero-copy">
                GUE Educational Limited supports technical and vocational education from
                our centre in Wannune, Tarka Local Government Area, Benue State.
                Practical skills. Local access. Community-focused.
              </p>
              <div className="gue-home__hero-actions">
                <a href="#contact" className="gue-home__button gue-home__button--primary">
                  Contact Us
                </a>
              </div>
              <div className="gue-home__pills" aria-label="Key facts">
                <span>NBTE Accreditation In Progress</span>
                <span>Wannune, Tarka LGA</span>
                <span>Online LMS</span>
              </div>
            </div>
            <div className="gue-edu__hero-image">
              <img
                src="/brand/classroom.jpeg"
                alt="Learners at GUE Educational TVET centre in Wannune"
                loading="eager"
              />
              <div className="gue-edu__hero-image-badge">
                <span>🎓</span>
                <div>
                  <p>TVET Centre</p>
                  <p>Wannune, Benue State</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="gue-home__trust-bar" aria-label="Trust indicators">
          <p>CAC Registered · RC 9451933</p>
          <p>Technical & Vocational Education</p>
          <p>Wannune, Benue State</p>
          <p>Subsidiary of Gue Group Limited</p>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="gue-home__section">
          <p className="gue-home__kicker">Who We Are</p>
          <h2 className="gue-home__section-title">
            Vocational & Technical Education for Benue State and Beyond
          </h2>
          <div className="gue-home__about-grid">
            <div className="gue-home__body-copy">
              <p>
                <strong>GUE Educational Limited</strong> (RC 9451933) is a privately
                incorporated Nigerian company registered under the Companies and Allied
                Matters Act 2020 on 30 March 2026, and a subsidiary of{" "}
                <strong>Gue Group Limited</strong> (RC 7501599).
              </p>
              <p>
                We deliver technical and vocational education and training (TVET) in
                Information and Communication Technology from our centre in{" "}
                <strong>Wannune, Tarka Local Government Area, Benue State</strong>. Our
                training follows relevant occupational standards, and we are actively
                pursuing accreditation from the National Board for Technical Education (NBTE).
              </p>
              <p>
                We exist to close the skills gap in Tarka and surrounding communities by
                delivering practical, locally accessible vocational education.
              </p>
              <p>
                In addition to our TVET centre, we manage West Africa Redeemer High School
                and West Africa Nursery and Primary School in Wannune. We also support
                other institutions with education management and digital learning platforms.
              </p>
            </div>

            <div className="gue-home__facts-card">
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">🏢</span>
                <div>
                  <p className="gue-home__fact-label">Registration</p>
                  <p className="gue-home__fact-value">RC 9451933 · CAMA 2020</p>
                  <p className="gue-home__fact-sub">Tax ID: 2620760246226</p>
                </div>
              </div>
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">📅</span>
                <div>
                  <p className="gue-home__fact-label">Incorporated</p>
                  <p className="gue-home__fact-value">30 March 2026</p>
                  <p className="gue-home__fact-sub">Status: Active</p>
                </div>
              </div>
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">🔗</span>
                <div>
                  <p className="gue-home__fact-label">Group Structure</p>
                  <p className="gue-home__fact-value">Subsidiary of Gue Group Limited</p>
                  <p className="gue-home__fact-sub">RC 7501599</p>
                </div>
              </div>
              <div className="gue-home__fact-row">
                <span className="gue-home__fact-icon">📍</span>
                <div>
                  <p className="gue-home__fact-label">Location</p>
                  <p className="gue-home__fact-value">Wannune, Tarka LGA</p>
                  <p className="gue-home__fact-sub">Benue State, Nigeria</p>
                </div>
              </div>
              <div className="gue-home__fact-row gue-home__fact-row--last">
                <span className="gue-home__fact-icon">🎓</span>
                <div>
                  <p className="gue-home__fact-label">Accreditation</p>
                  <p className="gue-home__fact-value">NBTE In Progress</p>
                  <p className="gue-home__fact-sub">Vocational education</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="gue-home__section gue-home__section--alt">
          <p className="gue-home__kicker">Our Services</p>
          <h2 className="gue-home__section-title">
            Practical Services for Learners, Organisations & Communities
          </h2>
          <p className="gue-home__section-copy">
            Beyond our own TVET centre, we support other institutions and organisations
            across Nigeria with education management, platform development, and workforce
            training.
          </p>
          <div className="gue-home__services-grid">
            {services.map((service) => (
              <article
                key={service.title}
                className={`gue-home__service-card${service.highlight ? " gue-home__service-card--highlight" : ""}`}
              >
                <span className="gue-home__service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.websiteUrl && (
                  <a
                    href={service.websiteUrl}
                    className="gue-home__service-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {service.websiteLabel}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="gue-home__section">
          <p className="gue-home__kicker">Why Train With Us</p>
          <h2 className="gue-home__section-title">
            Practical. Local. Nationally Recognised.
          </h2>
          <div className="gue-home__process-grid" style={{gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))"}}>
            {whyUs.map((item, i) => (
              <article key={item.title} className="gue-home__process-step">
                <p className="gue-home__step-number">{String(i + 1).padStart(2, "0")}</p>
                <span className="gue-home__process-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── HISTORY ── */}
        <section id="history" className="gue-home__section gue-home__section--alt">
          <p className="gue-home__kicker">Our History</p>
          <h2 className="gue-home__section-title">
            Education as a Pillar of the Gue Group
          </h2>
          <p className="gue-home__section-copy">
            GUE Educational Limited is part of a deliberate group strategy to invest in
            human capital alongside technology and financial inclusion.
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

        {/* ── ENROL ── */}
        <section id="contact" className="gue-home__section gue-edu__enrol-section">
          <p className="gue-home__kicker gue-home__kicker--center">Contact</p>
          <h2 className="gue-home__section-title gue-home__section-title--center">
            Contact GUE Educational Limited
          </h2>
          <p className="gue-home__section-copy gue-home__section-copy--center">
            Contact us by phone, WhatsApp, or email to learn more about our organisation
            and education services.
          </p>
          <div className="gue-moni__contact-grid" style={{maxWidth: "860px", margin: "2.5rem auto 0"}}>
            <div className="gue-moni__contact-card">
              <span className="gue-home__service-icon">📞</span>
              <p className="gue-moni__contact-label">Call / WhatsApp</p>
              <a href="tel:+2349041157068" className="gue-moni__contact-value">0904 115 7068</a>
            </div>
            <div className="gue-moni__contact-card">
              <span className="gue-home__service-icon">📧</span>
              <p className="gue-moni__contact-label">Email</p>
              <a href="mailto:info@guevte.com" className="gue-moni__contact-value">info@guevte.com</a>
            </div>
            <div className="gue-moni__contact-card">
              <span className="gue-home__service-icon">📍</span>
              <p className="gue-moni__contact-label">Address</p>
              <p className="gue-moni__contact-value">Wannune, Tarka LGA, Benue State</p>
            </div>
            <div className="gue-moni__contact-card">
              <span className="gue-home__service-icon">🌐</span>
              <p className="gue-moni__contact-label">Website</p>
                <a href="https://gue.edu.ng" className="gue-moni__contact-value">gue.edu.ng</a>
            </div>
          </div>
        </section>

        {/* ── GROUP SECTION ── */}
        <section className="gue-home__group-section">
          <div className="gue-home__group-card">
            <div className="gue-home__group-icon">🏛️</div>
            <div className="gue-home__group-copy">
              <p className="gue-home__kicker gue-home__kicker--compact">Part of the Group</p>
              <h2 className="gue-home__group-title">A Subsidiary of Gue Group Limited</h2>
              <p>
                GUE Educational Limited operates under Gue Group Limited (RC 7501599),
                alongside GUE Engineering (software), Gue Moni (financial inclusion),
                Gue Cyber (cybersecurity), GUE Smart Farming (agritech), GUE Realty
                (real estate), GUE Industrial Parks, and GUE Mobility across Nigeria
                and Belgium.
              </p>
            </div>
            <div className="gue-home__group-links">
              {groupLinks.map((link) => (
                <a key={link.label} href={link.href} {...externalProps}>{link.label}</a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="gue-home__footer">
        <div className="gue-home__footer-top">
          <div>
            <p className="gue-home__footer-brand">
              <img src="/brand/logo.jpeg" alt="GUE Educational Limited logo" />
              <span>GUE <em>Educational</em></span>
            </p>
            <p className="gue-home__footer-copy">
              TVET · Technical Training · Digital Learning · Wannune, Benue State, Nigeria
            </p>
          </div>
          <div>
            <p className="gue-home__footer-heading">Company</p>
            <div className="gue-home__footer-links">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="gue-home__footer-heading">Gue Group</p>
            <div className="gue-home__footer-links">
              <a href="https://www.guegroup.com" {...externalProps}>Gue Group Limited</a>
              <a href="https://www.gueengineering.com" {...externalProps}>GUE Engineering</a>
              <a href="https://www.guemoni.com" {...externalProps}>Gue Moni</a>
              <a href="https://www.guecyber.ng" {...externalProps}>Gue Cyber Nigeria</a>
            </div>
          </div>
          <div>
            <p className="gue-home__footer-heading">Contact</p>
            <div className="gue-home__footer-links">
              <a href="tel:+2349041157068">0904 115 7068</a>
              <a href="mailto:info@guevte.com">info@guevte.com</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="gue-home__footer-bottom">
          <p>
            © 2026 GUE Educational Limited (RC 9451933) · Tax ID: 2620760246226 ·
            Subsidiary of Gue Group Limited (RC 7501599) · Wannune, Tarka LGA, Benue State, Nigeria
          </p>
        </div>
      </footer>

    </div>
  );
};

export default GueEducationalLanding;
