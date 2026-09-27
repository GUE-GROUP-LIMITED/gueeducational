import Link from "next/link";
const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="gue-shell-header">
      <div className="gue-shell-header__inner">
        <Link href="/" className="gue-shell-header__logo">
          <img src="/brand/logo.png" alt="GUE Engineering logo" />
          <span>
            GUE <em>Engineering</em>
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
          <a href="mailto:hello@gueengineering.com" className="gue-shell-header__meta">
            hello@gueengineering.com
          </a>
          <Link href="/contact" className="gue-shell-header__cta">
            Start a Project
          </Link>
        </div>

        <details className="gue-shell-header__mobile">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="gue-shell-header__mobile-panel">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href="https://www.guegroup.com" target="_blank" rel="noreferrer">
              Gue Group
            </a>
            <a href="mailto:hello@gueengineering.com">hello@gueengineering.com</a>
            <Link href="/contact" className="gue-shell-header__mobile-cta">
              Start a Project
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
};

export default Header;
