import { Arrow, CtaBand } from "../components/Shared.jsx";
import { posts } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";

export default function Blog() {
  useReveal("blog");

  return (
    <>
      <section className="page-hero">
        <div className="hero-glow one" />
        <div className="container">
          <span className="eyebrow">Insights</span>
          <h1>
            Notes on <span className="gradient-text">building ventures.</span>
          </h1>
          <p className="lede">
            Perspectives on the studio model, early-stage capital and turning
            ideas into companies.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="posts">
            {posts.map((p, i) => (
              <a
                key={p.title}
                href="#"
                className="card post reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
                onClick={(e) => e.preventDefault()}
              >
                <div className="meta">
                  <div className="cat">{p.category}</div>
                  <div style={{ marginTop: 6 }}>{p.date}</div>
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                </div>
                <div className="read">
                  {p.read} <Arrow />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Build with us."
        text="Ready to turn an idea into a venture? Start the conversation."
      />
    </>
  );
}
