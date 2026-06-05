import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { audiences, resourceLinks } from "../data/content.js";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

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
