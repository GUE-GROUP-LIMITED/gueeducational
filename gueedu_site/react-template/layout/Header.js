"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="gue-shell-header">
      <div className="gue-shell-header__inner">
        <Link href="/" className="gue-shell-header__logo">
          <img src="/brand/logo.jpeg" alt="GUE Educational logo" />
          <span>
            <em>Edu</em>Learn
          </span>
        </Link>

        <nav className="gue-shell-header__nav" aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href="https://www.guegroup.com" target="_blank" rel="noreferrer">
            Gue Group
          </a>
        </nav>

        <div className="gue-shell-header__actions">
          <Link href="/contact" className="gue-shell-header__cta">
            Make Appointment
          </Link>
          <button
            type="button"
            className="gue-shell-header__burger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`gue-shell-header__mobile-panel${
          menuOpen ? " gue-shell-header__mobile-panel--open" : ""
        }`}
      >
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a
          href="https://www.guegroup.com"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Gue Group
        </a>
        <Link
          href="/contact"
          className="gue-shell-header__mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Make Appointment
        </Link>
      </div>
    </header>
  );
};

export default Header;
