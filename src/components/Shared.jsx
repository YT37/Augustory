import { Link } from "react-router-dom";

export function Arrow() {
  return (
    <svg
      className="arrow"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComingSoon() {
  return (
    <section className="coming-soon">
      <h1 className="gradient-text">Coming Soon</h1>
    </section>
  );
}

export function CtaBand({
  title = "Ready to build your venture?",
  text = "Choose your path and join a community of innovators, builders and investors.",
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta reveal">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              Get Started <Arrow />
            </Link>
            <Link to="/ventures" className="btn btn-ghost">
              See our ventures
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
