"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiMenu,
  FiX,
  FiCheck,
  FiMapPin,
  FiPhone,
  FiMail,
  FiGlobe,
} from "react-icons/fi";
import {
  LuGraduationCap,
  LuSchool,
  LuSend,
  LuMic,
  LuLaptop,
  LuAward,
  LuUsers,
  LuTrendingUp,
  LuClipboardCheck,
  LuSmartphone,
  LuClock,
  LuWallet,
  LuTarget,
  LuShieldCheck,
} from "react-icons/lu";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

/* ── Hand-Drawn Doodle SVG Components ────────────────────────── */
const DoubleUnderline = ({ className = "" }) => (
  <svg
    className={`edu-doodle-underline ${className}`}
    viewBox="0 0 160 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3 4.5C35 1.5 110 1 157 5"
      stroke="#FE9900"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    <path
      d="M12 10.5C45 8 115 7.5 148 11"
      stroke="#FE9900"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

const LoopArrow = ({ className = "" }) => (
  <svg
    className={`edu-doodle-arrow ${className}`}
    viewBox="0 0 64 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M58 8C52 2 38 4 35 15C32 26 48 30 45 40C43 45 32 44 24 40C16 36 10 32 6 32"
      stroke="#2B7A71"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 26L5 32L10 38"
      stroke="#2B7A71"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SunburstRays = ({ className = "" }) => (
  <svg
    className={`edu-doodle-sunburst ${className}`}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="8" y1="36" x2="22" y2="28" stroke="#FE9900" strokeWidth="4" strokeLinecap="round" />
    <line x1="16" y1="18" x2="28" y2="10" stroke="#FE9900" strokeWidth="4" strokeLinecap="round" />
    <line x1="34" y1="32" x2="44" y2="42" stroke="#FE9900" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const DoodleAsterisk = ({ color = "#FE9900", size = 48, className = "" }) => (
  <svg
    className={`edu-doodle-asterisk ${className}`}
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="24" y1="6" x2="24" y2="42" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="6" y1="24" x2="42" y2="24" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="11" y1="11" x2="37" y2="37" stroke={color} strokeWidth="4" strokeLinecap="round" />
    <line x1="37" y1="11" x2="11" y2="37" stroke={color} strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const SparkleStar = ({ color = "#FE9900", size = 26, className = "" }) => (
  <svg
    className={`edu-doodle-sparkle ${className}`}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

const SpiralDoodle = ({ size = 44, color = "#2B7A71" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M22 6C13.16 6 6 13.16 6 22C6 30.84 13.16 38 22 38C30.84 38 38 30.84 38 22C38 15.37 32.63 10 26 10C19.37 10 14 15.37 14 22C14 26.42 17.58 30 22 30C26.42 30 30 26.42 30 22C30 18.69 27.31 16 24 16C20.69 16 18 18.69 18 22"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
    />
  </svg>
);

const GlobeDoodle = ({ size = 44, color = "#2B7A71" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="22" cy="22" r="16" stroke={color} strokeWidth="3" />
    <ellipse cx="22" cy="22" rx="8" ry="16" stroke={color} strokeWidth="2.5" />
    <line x1="6" y1="22" x2="38" y2="22" stroke={color} strokeWidth="2.5" />
    <line x1="9" y1="14" x2="35" y2="14" stroke={color} strokeWidth="2" />
    <line x1="9" y1="30" x2="35" y2="30" stroke={color} strokeWidth="2" />
  </svg>
);

const TargetDoodle = ({ size = 44, color = "#2B7A71" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="20" cy="24" r="14" stroke={color} strokeWidth="3" />
    <circle cx="20" cy="24" r="8" stroke={color} strokeWidth="2.5" />
    <circle cx="20" cy="24" r="3" fill={color} />
    <path
      d="M26 18L36 8M36 8H29M36 8V15"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowBadge = ({ className = "" }) => (
  <div className={`edu-arrow-badge ${className}`}>
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FE9900"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </div>
);

/* ── Content Data ────────────────────────────────────────────── */
const services = [
  {
    icon: <LuGraduationCap size={26} />,
    title: "TVET & Technical Training",
    description:
      "Practical training for learners preparing for roles in technology, engineering, and commerce through NBTE-structured NSQ programmes delivered at our Wannune centre.",
    websiteUrl: "https://guevte.com",
    websiteLabel: "Visit TVET centre website",
    highlight: true,
  },
  {
    icon: <LuSchool size={26} />,
    title: "School Management",
    description:
      "We manage West Africa Redeemer High School and West Africa Nursery and Primary School in Wannune, supporting their day-to-day school operations.",
    websiteUrl: "https://westafrica.sch.ng",
    websiteLabel: "Visit West Africa school website",
  },
  {
    icon: <LuSend size={26} />,
    title: "Overseas Admissions & Scholarship Support",
    description:
      "Guidance with overseas study admissions and scholarship applications for prospective international students.",
  },
  {
    icon: <LuMic size={26} />,
    title: "IELTS Preparation",
    description:
      "IELTS preparation services in Abuja at Sky Memorial Complex, Wuse Zone 5, with certified trainers.",
  },
  {
    icon: <LuLaptop size={26} />,
    title: "Digital Learning Platforms",
    description:
      "Design and deliver digital learning platforms for flexible professional development. Our LMS serves learners on mobile and desktop, anywhere in Nigeria.",
  },
  {
    icon: <LuAward size={26} />,
    title: "Certification & Skills Assessment",
    description:
      "Certification, licensing support, and skills assessment for vocational learners, aligned with relevant industry standards.",
    highlight: true,
  },
  {
    icon: <LuUsers size={26} />,
    title: "Workforce Development",
    description:
      "Workforce development support for organisations seeking skilled technical personnel. We assess, train, and certify teams to fill ICT skills gaps.",
  },
  {
    icon: <LuTrendingUp size={26} />,
    title: "Capacity Building",
    description:
      "Capacity development for individuals and teams across technical and business sectors — from school leavers to experienced professionals.",
  },
];

const whyUs = [
  {
    icon: <LuClipboardCheck size={24} />,
    title: "Standards-Based Training",
    description:
      "Our vocational training follows established occupational standards. Accreditation from the National Board for Technical Education (NBTE) is actively in progress.",
  },
  {
    icon: <FiMapPin size={24} />,
    title: "Based in Wannune, Tarka",
    description:
      "We are based in your community — Wannune, Tarka Local Government Area, Benue State. No need to travel to Makurdi or Abuja to access quality vocational training.",
  },
  {
    icon: <LuSmartphone size={24} />,
    title: "Digital Learning Platform",
    description:
      "Learners access digital learning resources through our online platform, available on any smartphone or computer.",
  },
  {
    icon: <LuClock size={24} />,
    title: "Flexible Class Schedules",
    description:
      "Full-time, part-time, and weekend class schedules to accommodate secondary school leavers, working adults, and students currently in school.",
  },
  {
    icon: <LuWallet size={24} />,
    title: "Affordable Fees",
    description:
      "We aim to make vocational education accessible to learners and organisations in our community.",
  },
  {
    icon: <LuTarget size={24} />,
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

const aboutPoints = [
  "NBTE-structured vocational programmes",
  "Practical, hands-on training at our Wannune centre",
  "Digital learning platform for flexible study",
  "School management across our partner schools",
];

const navItems = [
  { href: "#services", label: "Find Sub" },
  { href: "#about", label: "For School" },
  { href: "#cbt-center", label: "CBT Center" },
  { href: "#why", label: "Resource" },
  { href: "#contact", label: "About Us" },
];

const footerLinks = [
  { href: "#services", label: "Find Sub" },
  { href: "#about", label: "For School" },
  { href: "#cbt-center", label: "CBT Center" },
  { href: "#why", label: "Resource" },
  { href: "#contact", label: "About Us" },
];

const groupLinks = [
  { href: "https://www.guegroup.com", label: "Gue Group Limited" },
  { href: "https://www.gueengineering.com", label: "GUE Engineering" },
  { href: "https://www.guemoni.com", label: "Gue Moni — Financial Services" },
  { href: "https://www.guecyber.ng", label: "Gue Cyber Nigeria" },
];

const externalProps = { target: "_blank", rel: "noreferrer" };
const delay = (i, step = 80) => ({ "--d": `${i * step}ms` });

/* ── Main Landing Component ───────────────────────────────────── */
const GueEducationalLanding = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".edu-nav");
    const onScroll = () => {
      nav?.classList.toggle("edu-nav--scrolled", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".edu-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("edu-inview");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll("[data-parallax]");
    let raf = null;
    const update = () => {
      raf = null;
      const vh = window.innerHeight;
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        const rect = el.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.setProperty("--py", `${(-progress * speed * 140).toFixed(1)}px`);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="edu">
      {/* ── HEADER / NAVBAR ── */}
      <header className="edu-nav">
        <div className="edu-nav__inner">
          <Link href="/" className="edu-nav__brand">
            <span className="edu-nav__logo-arc" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 14C4 8.47715 8.47715 4 14 4"
                  stroke="#2B7A71"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <img
              src="/brand/logo.jpeg"
              alt="GUE Educational Limited logo"
              className="edu-nav__logo-img"
            />
            <span className="edu-nav__logo-title">
              <span className="edu-nav__logo-edulearn">EduLearn</span>
              <span className="edu-nav__logo-sub">GUE Educational</span>
            </span>
          </Link>

          <nav className="edu-nav__links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="edu-nav__actions">
            <a href="#contact" className="edu-btn-appointment">
              Make Appointment
            </a>
            <button
              type="button"
              className="edu-nav__burger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`edu-nav__mobile-panel${
            menuOpen ? " edu-nav__mobile-panel--open" : ""
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="edu-btn-appointment edu-btn-appointment--mobile"
            onClick={() => setMenuOpen(false)}
          >
            Make Appointment
          </a>
        </div>
      </header>

      <main id="top">
        {/* ── HERO SECTION (Screenshot 4) ── */}
        <section className="edu-hero">
          <div className="edu-hero__inner">
            {/* Hero Left Content */}
            <div className="edu-hero__left">
              <h1 className="edu-hero__heading edu-reveal edu-text-reveal" style={delay(1)}>
                Keep Learning
                <br />
                <span className="edu-hero__heading-highlight">
                  on Track
                  <DoubleUnderline className="edu-hero__underline" />
                </span>
                <LoopArrow className="edu-hero__loop-arrow" />
              </h1>

              <p className="edu-hero__subtitle edu-reveal edu-text-reveal" style={delay(2)}>
                When schools and districts have reliable access to substitute
                teachers and subs have the freedom to choose what and when they
                teach.
              </p>

              <div className="edu-hero__cta-row edu-reveal" style={delay(3)}>
                <a href="#contact" className="edu-hero__btn-get-started">
                  Get Started
                </a>
              </div>

              {/* Connected Feature Cards */}
              <div className="edu-hero__cards-row edu-reveal" style={delay(5)}>
                {/* Teacher Card with img (2) */}
                <div className="edu-hero__teacher-card">
                  <div className="edu-hero__teacher-avatar">
                    <img
                      src="/img/img(2).jpg"
                      alt="Instructor with laptop at GUE Educational"
                    />
                  </div>
                  <div className="edu-hero__teacher-info">
                    <p className="edu-hero__teacher-badge">
                      Best Certified Teacher Worldwide
                    </p>
                    <div className="edu-hero__teacher-count">
                      <span className="edu-hero__teacher-num">210+</span>
                      <span className="edu-hero__teacher-num-label">
                        Expert already join us
                      </span>
                    </div>
                  </div>
                </div>

                {/* Transforming Schools Card with img (3) */}
                <div className="edu-hero__transform-card">
                  <div className="edu-hero__transform-top">
                    <div className="edu-hero__classroom-thumb">
                      <img
                        src="/img/img(3).jpg"
                        alt="Hands typing code on laptop keyboard"
                      />
                    </div>
                    <ArrowBadge className="edu-hero__transform-arrow" />
                  </div>
                  <p className="edu-hero__transform-text">
                    Transforming schools and substitute teachers
                  </p>
                  <DoodleAsterisk
                    color="#2B7A71"
                    size={28}
                    className="edu-hero__transform-star"
                  />
                </div>
              </div>
            </div>

            {/* Hero Right Visual with img (1): Student coding at Apple workstation with teal backdrop */}
            <div className="edu-hero__right edu-reveal" style={delay(4)}>
              <div className="edu-hero__visual-wrap" data-parallax="0.1">
                <div className="edu-hero__visual-backdrop" data-parallax="0.22" />
                <SunburstRays className="edu-hero__sunburst" />
                <img
                  src="/img/img(1).jpg"
                  alt="Student coding at desktop workstation"
                  className="edu-hero__main-photo edu-img-kenburns"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 1: "An Easier Way to be Sub and Find Sub" (Screenshot 1) ── */}
        <section className="edu-section1" id="services">
          <div className="edu-section1__inner">
            {/* Header: Left title with underline and arrow, right description */}
            <div className="edu-section1__header edu-reveal">
              <div className="edu-section1__title-col">
                <h2 className="edu-section1__title edu-text-reveal">
                  An Easier Way to be
                  <br />
                  <span className="edu-section1__title-highlight">
                    Sub and Find Sub
                    <DoubleUnderline className="edu-section1__underline" />
                  </span>
                </h2>
                <LoopArrow className="edu-section1__loop-arrow" />
              </div>

              <div className="edu-section1__desc-col">
                <p className="edu-section1__desc edu-text-reveal">
                  When schools and districts have reliable access to substitute
                  teachers and subs have the freedom to choose what and when they
                  teach, more classes are covered and student learning stays on
                  track.
                </p>
              </div>
            </div>

            {/* 3 Large White/Pale-Grey Feature Cards */}
            <div className="edu-section1__cards">
              {/* Card 1 */}
              <article className="edu-feature-card edu-reveal" style={delay(0)}>
                <div className="edu-feature-card__content">
                  <h3 className="edu-feature-card__title edu-text-reveal">
                    Teacher absences <span className="highlight-amber">disrupt</span> student
                    learning
                  </h3>
                  <p className="edu-feature-card__sub">
                    When schools and districts have reliable access to teacher
                  </p>
                </div>
                <div className="edu-feature-card__bottom">
                  <div className="edu-feature-card__icon-left">
                    <SpiralDoodle size={48} />
                  </div>
                  <ArrowBadge />
                </div>
              </article>

              {/* Card 2 - With Stepped Notch Cutout */}
              <article
                className="edu-feature-card edu-feature-card--notched edu-reveal"
                style={delay(1)}
              >
                <div className="edu-feature-card__top">
                  <div className="edu-feature-card__icon-globe">
                    <GlobeDoodle size={48} />
                  </div>
                  <ArrowBadge className="edu-feature-card__notch-arrow" />
                </div>
                <div className="edu-feature-card__content">
                  <h3 className="edu-feature-card__title edu-text-reveal">
                    A better way to <span className="highlight-amber">connect</span> subs and
                    schools
                  </h3>
                  <p className="edu-feature-card__sub">
                    When schools and districts have reliable access to teacher
                  </p>
                </div>
              </article>

              {/* Card 3 */}
              <article className="edu-feature-card edu-reveal" style={delay(2)}>
                <div className="edu-feature-card__content">
                  <h3 className="edu-feature-card__title edu-text-reveal">
                    Student learning <span className="highlight-amber">stays on track</span> to
                    meet target
                  </h3>
                  <p className="edu-feature-card__sub">
                    When schools and districts have reliable access to teacher
                  </p>
                </div>
                <div className="edu-feature-card__bottom">
                  <div className="edu-feature-card__icon-left">
                    <TargetDoodle size={48} />
                  </div>
                  <ArrowBadge />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: "Why Choose Our Services?" with img (4) (Screenshot 3) ── */}
        <section className="edu-section2" id="why">
          <div className="edu-section2__inner">
            {/* Header: Title with sparkle and underline, right description */}
            <div className="edu-section2__header edu-reveal">
              <div className="edu-section2__title-col">
                <h2 className="edu-section2__title edu-text-reveal">
                  Why Choose Our
                  <br />
                  <span className="edu-section2__title-highlight">
                    Services?
                    <SparkleStar className="edu-section2__sparkle" size={28} />
                    <DoubleUnderline className="edu-section2__underline" />
                  </span>
                </h2>
              </div>

              <div className="edu-section2__desc-col">
                <p className="edu-section2__desc edu-text-reveal">
                  Schools and districts save time and money, so they can focus
                  on full-time staff and student outcomes. Subs work on their
                  own terms while making a difference in students' lives. The
                  GUE Educational platform makes it easy for administrators.
                </p>
                <LoopArrow className="edu-section2__loop-arrow" />
              </div>
            </div>

            {/* Graphic Layout: Photo of students in IT Lab (img 4) + Staggered Stepped Stat Cards */}
            <div className="edu-section2__layout edu-reveal">
              {/* Left Student Image with Teal Backdrop */}
              <div className="edu-section2__student-col">
                <div className="edu-section2__student-frame" data-parallax="0.08">
                  <div className="edu-section2__student-backdrop" data-parallax="0.2" />
                  <img
                    src="/img/img(4).jpg"
                    alt="Students engaged at desktop computer lab"
                    className="edu-section2__main-photo edu-img-zoom"
                  />
                </div>
              </div>

              {/* Right Stepped Stat Cards Row/Staircase */}
              <div className="edu-section2__stats-col">
                <SunburstRays className="edu-section2__sunburst" />

                <div className="edu-section2__stats-grid">
                  {/* Step 1: 3k */}
                  <div className="edu-stat-box edu-stat-box--1 edu-reveal" style={delay(0)}>
                    <span className="edu-stat-box__num">3k</span>
                    <span className="edu-stat-box__lbl">Highly Trained Teacher</span>
                  </div>

                  {/* Step 2: 300+ */}
                  <div className="edu-stat-box edu-stat-box--2 edu-reveal" style={delay(1)}>
                    <span className="edu-stat-box__num">300+</span>
                    <span className="edu-stat-box__lbl">Study Center Worldwide</span>
                  </div>

                  {/* Step 3: 48+ */}
                  <div className="edu-stat-box edu-stat-box--3 edu-reveal" style={delay(2)}>
                    <span className="edu-stat-box__num">48+</span>
                    <span className="edu-stat-box__lbl">Country we Served</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CBT CENTER: Bringing Opportunity to the Community ── */}
        <section className="edu-cbt-section" id="cbt-center">
          <div className="edu-cbt-section__inner">
            <div className="edu-cbt-section__layout">
              {/* Left Column: CBT Infrastructure Visual Media */}
              <div className="edu-cbt-section__media edu-reveal">
                <div className="edu-cbt-section__media-wrap" data-parallax="0.1">
                  <div className="edu-cbt-section__backdrop" data-parallax="0.2" />
                  <SunburstRays className="edu-cbt-section__sunburst" />
                  <img
                    src="/img/img(4).jpg"
                    alt="Students in GUE Educational Accredited CBT Center"
                    className="edu-cbt-section__photo edu-img-zoom"
                    loading="lazy"
                  />
                  {/* Floating Accreditation Badge */}
                  <div className="edu-cbt-section__floating-badge edu-float-badge">
                    <div className="edu-cbt-section__badge-icon">
                      <LuShieldCheck size={28} />
                    </div>
                    <div>
                      <p className="edu-cbt-section__badge-title">JAMB · WAEC · NECO</p>
                      <p className="edu-cbt-section__badge-sub">Accredited CBT Infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Copy & Partnership Callout */}
              <div className="edu-cbt-section__content edu-reveal" style={delay(1)}>
                <span className="edu-badge-pill">CBT Center</span>
                <h2 className="edu-cbt-section__title edu-text-reveal">
                  Bringing Opportunity to the{" "}
                  <span className="edu-cbt-section__title-highlight">
                    Community
                    <SparkleStar className="edu-cbt-section__sparkle" size={26} />
                    <DoubleUnderline className="edu-cbt-section__underline" />
                  </span>
                </h2>

                <p className="edu-cbt-section__body-lead edu-text-reveal">
                  Many students in Wannune and surrounding communities in Benue State
                  currently face long journeys to reach accredited CBT centers for
                  JAMB, WAEC, and NECO examinations. This creates stress, expense,
                  and risk on exam day.
                </p>

                <p className="edu-cbt-section__body-desc edu-text-reveal">
                  Our center will bring accredited CBT infrastructure directly to the
                  community — reducing travel time, lowering costs for families,
                  and giving local students the same reliable access to
                  examinations as students in larger cities.
                </p>

                {/* Key Benefits 3-pill grid */}
                <div className="edu-cbt-section__perks">
                  <div className="edu-cbt-perk">
                    <span className="edu-cbt-perk__icon">
                      <LuClock size={18} />
                    </span>
                    <span>Zero Exam Travel Stress</span>
                  </div>
                  <div className="edu-cbt-perk">
                    <span className="edu-cbt-perk__icon">
                      <LuShieldCheck size={18} />
                    </span>
                    <span>Standardized High-Speed Systems</span>
                  </div>
                  <div className="edu-cbt-perk">
                    <span className="edu-cbt-perk__icon">
                      <LuTarget size={18} />
                    </span>
                    <span>Equal Opportunity for Local Students</span>
                  </div>
                </div>

                {/* Partnership Card */}
                <div className="edu-cbt-partner-card">
                  <div className="edu-cbt-partner-card__header">
                    <h3 className="edu-cbt-partner-card__title">
                      Interested in partnering with us?
                    </h3>
                    <LoopArrow className="edu-cbt-partner-card__arrow" />
                  </div>
                  <p className="edu-cbt-partner-card__desc">
                    We welcome conversations with community organisations, government
                    bodies, schools, and private investors who share our commitment
                    to educational infrastructure in Benue State.
                  </p>
                  <div className="edu-cbt-partner-card__action">
                    <a href="#contact" className="edu-cbt-btn">
                      <span>Contact Us</span>
                      <ArrowBadge className="edu-cbt-btn__badge" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GUE EDUCATIONAL CORE SERVICES ── */}
        <section className="edu-core-services" id="tvet-services">
          <div className="edu-core-services__inner">
            <div className="edu-section-head-center edu-reveal">
              <span className="edu-badge-pill">Accredited Programmes</span>
              <h2 className="edu-section-head-title edu-text-reveal">
                Vocational &amp; Technical Services
              </h2>
              <p className="edu-section-head-copy edu-text-reveal">
                Practical, employer-ready training delivered from our centre in
                Wannune, Tarka LGA, Benue State, plus digital learning platforms
                serving learners across Nigeria.
              </p>
            </div>

            <div className="edu-core-services__grid">
              {services.map((service, i) => (
                <article
                  key={service.title}
                  className={`edu-service-card edu-reveal${
                    service.highlight ? " edu-service-card--highlight" : ""
                  }`}
                  style={delay(i % 4, 80)}
                >
                  <div className="edu-service-card__icon">{service.icon}</div>
                  <h3 className="edu-service-card__title edu-text-reveal">{service.title}</h3>
                  <p className="edu-service-card__desc">{service.description}</p>
                  {service.websiteUrl && (
                    <a
                      href={service.websiteUrl}
                      className="edu-service-card__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {service.websiteLabel}
                      <FiArrowRight size={15} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT GUE EDUCATIONAL (Wannune, Benue State) with img (1) ── */}
        <section className="edu-about-section" id="about">
          <div className="edu-about-section__inner">
            <div className="edu-about-section__media edu-reveal">
              <div className="edu-about-section__frame" data-parallax="0.08">
                <img
                  src="/img/img(1).jpg"
                  alt="Student at computer in GUE Educational TVET centre in Wannune"
                  className="edu-img-zoom"
                  loading="lazy"
                />
              </div>
              <div className="edu-about-section__floating-badge edu-float-badge">
                <LuShieldCheck size={26} color="#2B7A71" />
                <div>
                  <p className="edu-about-badge-num">RC 9451933</p>
                  <p className="edu-about-badge-lbl">CAC Registered TVET Provider</p>
                </div>
              </div>
            </div>

            <div className="edu-about-section__content edu-reveal" style={delay(1)}>
              <span className="edu-badge-pill">Who We Are</span>
              <h2 className="edu-about-section__title edu-text-reveal">
                Technical and Vocational Excellence in Benue State
              </h2>
              <div className="edu-about-section__body">
                <p>
                  <strong>GUE Educational Limited</strong> (RC 9451933) is a
                  privately incorporated Nigerian company under CAMA 2020, and an
                  educational subsidiary of <strong>Gue Group Limited</strong> (RC
                  7501599).
                </p>
                <p>
                  We deliver technical and vocational education and training
                  (TVET) in Information and Communication Technology from our
                  centre in{" "}
                  <strong>
                    Wannune, Tarka Local Government Area, Benue State
                  </strong>
                  . Accreditation with the National Board for Technical
                  Education (NBTE) is actively in progress.
                </p>
              </div>

              <ul className="edu-about-section__checks">
                {aboutPoints.map((point) => (
                  <li key={point}>
                    <span className="edu-check-circle">
                      <FiCheck size={14} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── WHY TRAIN WITH US (6 Pillars) ── */}
        <section className="edu-why-section">
          <div className="edu-why-section__inner">
            <div className="edu-section-head-center edu-reveal">
              <span className="edu-badge-pill">Practical &amp; Local</span>
              <h2 className="edu-section-head-title edu-text-reveal">Why Train With Us</h2>
              <p className="edu-section-head-copy edu-text-reveal">
                We make high quality vocational and digital education directly
                accessible to our local community.
              </p>
            </div>

            <div className="edu-why-section__grid">
              {whyUs.map((item, i) => (
                <div
                  key={item.title}
                  className="edu-why-card edu-reveal"
                  style={delay(i % 3, 90)}
                >
                  <div className="edu-why-card__top">
                    <span className="edu-why-card__number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="edu-why-card__icon">{item.icon}</span>
                  </div>
                  <h3 className="edu-why-card__title">{item.title}</h3>
                  <p className="edu-why-card__desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HISTORY / TIMELINE ── */}
        <section className="edu-history-section" id="history">
          <div className="edu-history-section__inner">
            <div className="edu-section-head-center edu-reveal">
              <span className="edu-badge-pill">Milestones</span>
              <h2 className="edu-section-head-title edu-text-reveal">
                Education as a Pillar of the Gue Group
              </h2>
            </div>

            <div className="edu-history-timeline">
              {history.map((item, i) => (
                <div
                  key={`${item.year}-${item.company}`}
                  className="edu-history-node edu-reveal"
                  style={delay(i, 100)}
                >
                  <div className="edu-history-node__year">{item.year}</div>
                  <div className="edu-history-node__card">
                    <span className="edu-history-node__dot" />
                    <h3 className="edu-history-node__title">{item.company}</h3>
                    <p className="edu-history-node__role">{item.role}</p>
                    <p className="edu-history-node__text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CARDS ── */}
        <section className="edu-contact-section" id="contact">
          <div className="edu-contact-section__inner">
            <div className="edu-section-head-center edu-reveal">
              <span className="edu-badge-pill">Reach Us</span>
              <h2 className="edu-section-head-title edu-text-reveal">Contact GUE Educational Limited</h2>
              <p className="edu-section-head-copy edu-text-reveal">
                Speak directly with our centre coordinators, admissions counsellors,
                or administration team.
              </p>
            </div>

            <div className="edu-contact-section__grid">
              <div className="edu-contact-card edu-reveal" style={delay(0)}>
                <div className="edu-contact-card__icon">
                  <FiPhone size={24} />
                </div>
                <p className="edu-contact-card__label">Call / WhatsApp</p>
                <a href="tel:+2349041157068" className="edu-contact-card__value">
                  0904 115 7068
                </a>
              </div>

              <div className="edu-contact-card edu-reveal" style={delay(1)}>
                <div className="edu-contact-card__icon">
                  <FiMail size={24} />
                </div>
                <p className="edu-contact-card__label">Email</p>
                <a href="mailto:edu@guegroup.com" className="edu-contact-card__value">
                  edu@guegroup.com
                </a>
              </div>

              <div className="edu-contact-card edu-reveal" style={delay(2)}>
                <div className="edu-contact-card__icon">
                  <FiMapPin size={24} />
                </div>
                <p className="edu-contact-card__label">TVET Centre Address</p>
                <p className="edu-contact-card__value">
                  Wannune, Tarka LGA, Benue State
                </p>
              </div>

              <div className="edu-contact-card edu-reveal" style={delay(3)}>
                <div className="edu-contact-card__icon">
                  <FiGlobe size={24} />
                </div>
                <p className="edu-contact-card__label">Portal</p>
                <a href="https://gue.edu.ng" className="edu-contact-card__value">
                  gue.edu.ng
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: "Get in Touch" / CTA BANNER with img (2) (Screenshot 2) ── */}
        <section className="edu-cta-banner-section">
          <div className="edu-cta-banner-section__inner">
            <div className="edu-cta-card edu-reveal">
              {/* Focused tech learner with laptop: img (2) */}
              <div className="edu-cta-card__student-col" data-parallax="0.12">
                <img
                  src="/img/img(2).jpg"
                  alt="Student focused on laptop at GUE Educational"
                  className="edu-cta-card__girl-img edu-img-zoom"
                />
              </div>

              {/* Teal angled block with content */}
              <div className="edu-cta-card__content-col">
                <span className="edu-cta-card__arrow-btn" aria-hidden="true">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FE9900"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>

                <p className="edu-cta-card__kicker edu-text-reveal">Get in Touch</p>
                <h2 className="edu-cta-card__title edu-text-reveal">
                  Join our community of school partners
                </h2>
                <p className="edu-cta-card__desc edu-text-reveal">
                  Looking to become a substitute teacher? Our Education is now
                  servicing the greater Chicago area! GUE Educational provides
                  trusted TVET and school management partnerships nationwide.
                </p>

                <DoodleAsterisk
                  color="#FE9900"
                  size={54}
                  className="edu-cta-card__star-doodle"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER (Screenshot 2) ── */}
      <footer className="edu-footer-redesign">
        <div className="edu-footer-redesign__inner">
          <div className="edu-footer-redesign__divider" />

          {/* Row 1: Logo, Horizontal Links, Subscribe Button */}
          <div className="edu-footer-redesign__row1 edu-reveal">
            <Link href="/" className="edu-footer-redesign__brand">
              <span className="edu-nav__logo-arc" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 14C4 8.47715 8.47715 4 14 4"
                    stroke="#2B7A71"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <img
                src="/brand/logo.jpeg"
                alt="GUE Educational logo"
                className="edu-footer-redesign__logo-img"
              />
              <span className="edu-footer-redesign__brand-name">
                <span className="edu-logo-teal">Edu</span>Learn
              </span>
            </Link>

            <nav className="edu-footer-redesign__nav">
              {footerLinks.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a href="#contact" className="edu-footer-redesign__subscribe-btn">
              Subscribe Now
            </a>
          </div>

          {/* Row 2: Copyright & Social Media Icons */}
          <div className="edu-footer-redesign__row2 edu-reveal" style={delay(1)}>
            <p className="edu-footer-redesign__copyright">
              @ copyright 2026. All Rights Reserved · GUE Educational Limited (RC
              9451933) · Wannune, Benue State
            </p>

            <div className="edu-footer-redesign__social">
              <a
                href="https://www.guegroup.com"
                {...externalProps}
                aria-label="Instagram"
                className="edu-footer-social-btn"
              >
                <FaInstagram size={15} />
              </a>
              <a
                href="mailto:edu@guegroup.com"
                aria-label="Facebook"
                className="edu-footer-social-btn"
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href="tel:+2349041157068"
                aria-label="Twitter"
                className="edu-footer-social-btn"
              >
                <FaTwitter size={15} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GueEducationalLanding;
