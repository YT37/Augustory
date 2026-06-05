import { useState } from "react";
import { audiences } from "../data/content.js";
import { Arrow } from "../components/Shared.jsx";
import useReveal from "../hooks/useReveal.js";

export default function Contact() {
  useReveal("contact");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    audience: "",
    message: "",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend / form service in Claude Code.
    setSent(true);
  };

  return (
    <section className="page-hero" style={{ paddingBottom: 120 }}>
      <div className="hero-glow one" />
      <div className="hero-glow two" />
      <div className="container">
        <div className="contact-grid reveal">
          <div className="contact-aside">
            <span className="eyebrow">Contact</span>
            <h2 style={{ marginTop: 16 }}>
              Let's build <span className="gradient-text">something.</span>
            </h2>
            <p>
              Tell us who you are and what you are working on. We read every
              message and reply to the ones that fit.
            </p>

            <div className="contact-info">
              <div>
                <div className="ci-label">Email</div>
                <a href="mailto:hello@augustory.com">hello@augustory.com</a>
              </div>
              <div>
                <div className="ci-label">Headquarters</div>
                <span>Luxembourg · Operating globally</span>
              </div>
              <div>
                <div className="ci-label">Follow</div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="form">
            {sent ? (
              <div className="form-success">
                <div className="check">✓</div>
                <h3 style={{ fontSize: "1.6rem", marginBottom: 8 }}>
                  Message sent
                </h3>
                <p style={{ color: "var(--muted)" }}>
                  Thanks {form.name || "there"} — we will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="audience">I am a…</label>
                  <select
                    id="audience"
                    value={form.audience}
                    onChange={update("audience")}
                    required
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {audiences.map((a) => (
                      <option key={a.slug} value={a.slug}>
                        {a.short}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us what you are building…"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send message <Arrow />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
