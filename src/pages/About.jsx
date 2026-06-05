import { stats } from "../data/content.js";
import { CtaBand } from "../components/Shared.jsx";
import useReveal from "../hooks/useReveal.js";

const principles = [
  {
    title: "Build, don't bet",
    body: "We don't spray and pray. We build ventures with dedicated teams, real validation and structured capital from day one.",
  },
  {
    title: "Validate before scale",
    body: "Every venture earns its next round of investment through evidence, not enthusiasm. Stage gates keep risk in check.",
  },
  {
    title: "Networks compound",
    body: "Corporates, universities, founders and investors create more value together than any one of them could alone.",
  },
];

export default function About() {
  useReveal("about");
  return (
    <>
      <section className="page-hero">
        <div className="hero-glow one" />
        <div className="container">
          <span className="eyebrow">About Augustory</span>
          <h1>
            A studio for the next <span className="gradient-text">generation</span>{" "}
            of ventures.
          </h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <p className="about-lead reveal">
            Augustory is a global venture studio. We partner with corporates,
            universities, entrepreneurs, investors and professionals to{" "}
            <span className="gradient-text">build companies faster</span> and
            de-risk the capital behind them, combining a proven studio model with
            a worldwide network of builders.
          </p>

          <div className="principles">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="card principle reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="pn">0{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-band">
        <div className="container">
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

      <CtaBand
        title="Want to build with us?"
        text="We are always looking for ambitious partners and founders. Let's talk."
      />
    </>
  );
}
