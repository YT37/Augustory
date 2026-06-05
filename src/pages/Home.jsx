import { Link } from "react-router-dom";
import { Arrow, CtaBand } from "../components/Shared.jsx";
import {
  audiences,
  howItWorks,
  stats,
  testimonials,
} from "../data/content.js";
import useReveal from "../hooks/useReveal.js";

export default function Home() {
  useReveal("home");

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-glow one" />
        <div className="hero-glow two" />
        <div className="hero-glow three" />
        <div className="container hero-inner">
          <div className="hero-badge anim">
            <span className="dot" />
            Global venture building platform
          </div>
          <h1 className="anim">
            Build ventures <span className="gradient-text">faster.</span>
          </h1>
          <p className="lede anim">
            Augustory connects innovators with capital, expertise and networks to
            transform ideas into thriving companies, and to de-risk the capital
            behind them.
          </p>
          <div className="hero-actions anim">
            <Link to="/contact" className="btn btn-primary">
              Get Started <Arrow />
            </Link>
            <a href="#how" className="btn btn-ghost">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* ---------- AUDIENCES ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Built for five audiences</span>
            <h2>One platform, five ways in.</h2>
            <p>
              Whether you are a corporation, university, entrepreneur, investor or
              professional, Augustory has a path for you to participate in venture
              building.
            </p>
          </div>

          <div className="aud-grid">
            {audiences.map((a, i) => (
              <Link
                key={a.slug}
                to={`/${a.slug}`}
                className="card aud-card reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="num">0{i + 1}</span>
                <h3>{a.label}</h3>
                <p>{a.tagline}</p>
                <span className="go">
                  Explore <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="section" id="how">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How Augustory works</span>
            <h2>The right people, capital and resources.</h2>
            <p>
              Our platform streamlines venture building by connecting the right
              people with the right capital at the right time.
            </p>
          </div>

          <div className="how-grid">
            {howItWorks.map((h, i) => (
              <div
                key={h.title}
                className="card how-card reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="metric gradient-text">{h.metric}</div>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="section stats-band">
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Augustory by numbers</span>
          </div>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="stat reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="v gradient-text">{s.value}</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Trusted by industry leaders</span>
            <h2>Hear from our partners.</h2>
          </div>
          <div className="quote-grid">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="card quote reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="mark">&ldquo;</div>
                <p>{t.quote}</p>
                <div className="who">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
