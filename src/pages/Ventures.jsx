import { Link } from "react-router-dom";
import { ventures } from "../data/content.js";
import { Arrow, CtaBand } from "../components/Shared.jsx";
import useReveal from "../hooks/useReveal.js";

export default function Ventures() {
  useReveal("ventures");
  return (
    <>
      <section className="page-hero">
        <div className="hero-glow one" />
        <div className="hero-glow two" />
        <div className="container">
          <span className="eyebrow">Our portfolio</span>
          <h1>
            Ventures we have <span className="gradient-text">built.</span>
          </h1>
          <p className="lede">
            A growing portfolio of companies spanning climate, health, fintech and
            beyond, each built with dedicated teams and structured capital.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="ventures-grid">
            {ventures.map((v, i) => (
              <Link
                key={v.name}
                to={`/ventures/${v.slug}`}
                className="card venture-card reveal"
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <div className="vtop">
                  <div className="vdot" />
                  <span className="stage">{v.stage}</span>
                </div>
                <h3>{v.name}</h3>
                <div className="sector">{v.sector}</div>
                <p>{v.desc}</p>
                <span className="go">
                  View venture <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have the next one?"
        text="If you are building something ambitious, we would love to hear about it."
      />
    </>
  );
}
