import Link from "next/link";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const primaryLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

const groupLinks = [
  { href: "https://www.guegroup.com", label: "Gue Group Limited" },
  { href: "https://www.guecyber.ng", label: "Gue Cyber Nigeria" },
  { href: "https://www.guecyber.com", label: "Gue Cyber Belgium" },
  { href: "https://www.gabrielaloho.com", label: "gabrielaloho.com" },
];

const Footer = () => {
  return (
    <footer className="gue-shell-footer">
      <div className="gue-shell-footer__inner">
        <div>
          <Link href="/" className="gue-shell-footer__brand">
            <img src="/brand/logo.jpeg" alt="GUE Educational logo" />
            <span>
              <em>Edu</em>Learn
            </span>
          </Link>
          <p className="gue-shell-footer__copy">
            Technical and vocational education, school management, and digital
            learning platforms across Nigeria.
          </p>
          <div className="gue-shell-footer__social">
            <a href="#" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="gue-shell-footer__heading">Company</p>
          <div className="gue-shell-footer__links">
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="gue-shell-footer__heading">Group</p>
          <div className="gue-shell-footer__links">
            {groupLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="gue-shell-footer__heading">Contact</p>
          <div className="gue-shell-footer__links">
            <a href="mailto:info@guevte.com">info@guevte.com</a>
            <a href="tel:+2349041157068">+234 904 115 7068</a>
            <Link href="/contact">Start a Project</Link>
          </div>
        </div>
      </div>

      <div className="gue-shell-footer__bottom">
        <p>
          © {new Date().getFullYear()} GUE Educational Limited (RC 9451933) ·
          Subsidiary of Gue Group Limited (RC 7501599) · Wannune, Benue State, Nigeria
        </p>
      </div>
    </footer>
  );
};

export default Footer;
