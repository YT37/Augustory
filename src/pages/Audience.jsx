import { Link } from "react-router-dom";
import { CtaBand } from "../components/Shared.jsx";
import { audiences } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";

export default function Audience({ slug }) {
  const a = audiences.find((x) => x.slug === slug);
  useReveal(slug);

  if (!a) return null;

  return (
    <>
      <section className="page-hero">
        <div className="hero-glow one" />
        <div className="hero-glow two" />
        <div className="container">
          <span className="eyebrow">{a.label}</span>
          <h1>
            {a.hero.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="gradient-text">
              {a.hero.split(" ").slice(-2).join(" ")}
            </span>
          </h1>
          <p className="lede">{a.intro}</p>

          <div className="aud-switch">
            {audiences.map((x) => (
              <Link
                key={x.slug}
                to={`/${x.slug}`}
                className={`aud-pill ${x.slug === slug ? "active" : ""}`}
              >
                {x.short}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "56px" }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why Augustory</span>
            <h2>What you get.</h2>
          </div>

          <div className="value-grid" style={{ marginTop: 40 }}>
            {a.points.map((p, i) => (
              <div
                key={p.title}
                className="card value-card reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="vi">
                  <span>0{i + 1}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Build with Augustory.`}
        text={`Join the ${a.short.toLowerCase()} working with us to turn ideas into ventures.`}
      />
    </>
  );
}
