import { useParams, Link } from "react-router-dom";
import { ventures } from "../data/content.js";
import { Arrow, CtaBand } from "../components/Shared.jsx";
import useReveal from "../hooks/useReveal.js";

export default function VentureDetail() {
  const { slug } = useParams();
  const v = ventures.find((x) => x.slug === slug);
  useReveal(slug);

  if (!v) {
    return (
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Not found</span>
          <h1>That venture doesn't exist.</h1>
          <p className="lede">
            It may have moved or been spun out of the portfolio.
          </p>
          <Link to="/ventures" className="btn btn-ghost" style={{ marginTop: 28 }}>
            Back to ventures
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="hero-glow one" />
        <div className="hero-glow two" />
        <div className="container">
          <Link to="/ventures" className="back-link">
            <span className="back-arrow">
              <Arrow />
            </span>
            All ventures
          </Link>
          <div className="vd-head">
            <span className="stage">{v.stage}</span>
            <span className="eyebrow">{v.sector}</span>
          </div>
          <h1>
            <span className="gradient-text">{v.name}</span>
          </h1>
          <p className="lede">{v.desc}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="vd-grid">
            <div className="vd-about reveal">
              <span className="eyebrow">About</span>
              <p>{v.about}</p>

              <span className="eyebrow" style={{ marginTop: 36, display: "block" }}>
                Highlights
              </span>
              <ul className="vd-highlights">
                {v.highlights.map((h) => (
                  <li key={h}>
                    <span className="vd-tick">
                      <Arrow />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="card vd-facts reveal">
              <div className="vd-fact">
                <span className="l">Stage</span>
                <span className="v">{v.stage}</span>
              </div>
              <div className="vd-fact">
                <span className="l">Sector</span>
                <span className="v">{v.sector}</span>
              </div>
              <div className="vd-fact">
                <span className="l">Founded</span>
                <span className="v">{v.founded}</span>
              </div>
              <div className="vd-fact">
                <span className="l">Headquarters</span>
                <span className="v">{v.hq}</span>
              </div>
              <div className="vd-fact">
                <span className="l">Team</span>
                <span className="v">{v.team} people</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title="Building something like this?"
        text="We partner with founders and teams to turn ambitious ideas into companies."
      />
    </>
  );
}
