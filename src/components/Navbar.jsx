import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { audiences, resourceLinks } from "../data/content.js";
import useTheme from "../hooks/useTheme.js";

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThemeIcon({ theme }) {
  // Show the icon for the theme you'll switch TO.
  if (theme === "dark") {
    // sun
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  // moon
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" aria-label="Augustory home">
          {/* <img
            className="mark"
            src="/logo-mark.svg"
            alt=""
            width="40"
            height="40"
          /> */}
          <img className="wordmark" src="/logo-wordmark.svg" alt="Augustory" />
        </Link>

        <nav className="nav-links">
          <div className="nav-dd">
            <button className="nav-dd-trigger">
              Solutions <Chevron />
            </button>
            <div className="nav-dd-menu" role="menu">
              {audiences.map((a) => (
                <Link key={a.slug} to={`/${a.slug}`} className="nav-dd-item">
                  <strong>{a.label}</strong>
                  <span>{a.tagline}</span>
                </Link>
              ))}
            </div>
          </div>
          {resourceLinks.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {r.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <ThemeIcon theme={theme} />
          </button>
          <Link to="/contact" className="btn btn-primary">
            Get Started
          </Link>
          <button
            className={`nav-burger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <span className="m-label">Solutions</span>
        {audiences.map((a) => (
          <Link key={a.slug} to={`/${a.slug}`}>
            {a.label}
          </Link>
        ))}
        <span className="m-label">Company</span>
        {resourceLinks.map((r) => (
          <Link key={r.to} to={r.to}>
            {r.label}
          </Link>
        ))}
        <Link to="/contact" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </header>
  );
}
