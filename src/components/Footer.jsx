import { Link } from "react-router-dom";
import { audiences, resourceLinks } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo-wordmark.svg" alt="Augustory" height="26" />
            <p>
              Building ventures faster, together. The global platform connecting
              innovators with capital, expertise and networks.
            </p>
          </div>

          <div className="footer-col">
            <h4>For Audiences</h4>
            {audiences.map((a) => (
              <Link key={a.slug} to={`/${a.slug}`}>
                {a.short}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            {resourceLinks.map((r) => (
              <Link key={r.to} to={r.to}>
                {r.label}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="mailto:hello@augustory.com">Email</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Augustory Venture Studio. All rights reserved.</span>
          <span>Luxembourg · Global</span>
        </div>
      </div>
    </footer>
  );
}
