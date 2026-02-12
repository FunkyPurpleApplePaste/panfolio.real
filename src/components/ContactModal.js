import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import ForegroundCube from "./ForegroundCubes";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactModal({ onClose }) {
  const modalRef = useRef(null);
  const [modalRect, setModalRect] = useState(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev || ""; };
  }, []);

  useLayoutEffect(() => {
    if (!modalRef.current) return;

    const updateRect = () => {
      if (!modalRef.current) return;
      const r = modalRef.current.getBoundingClientRect();
      setModalRect(prev => {
        if (!prev) return r;
        if (
          Math.abs(prev.left - r.left) < 0.5 &&
          Math.abs(prev.top - r.top) < 0.5 &&
          Math.abs(prev.width - r.width) < 0.5 &&
          Math.abs(prev.height - r.height) < 0.5
        ) return prev;
        return r;
      });
    };

    updateRect();
    const ro = new ResizeObserver(updateRect);
    ro.observe(modalRef.current);

    window.addEventListener("resize", updateRect, { passive: true });
    window.addEventListener("orientationchange", updateRect, { passive: true });
    window.addEventListener("scroll", updateRect, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("orientationchange", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      if (modalRef.current) setModalRect(modalRef.current.getBoundingClientRect());
    }, 80);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = (fd.get('name') || '').trim();
    const email = (fd.get('email') || '').trim();
    const message = (fd.get('message') || '').trim();
    const subject = encodeURIComponent(`Message from ${name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:cosapatarapimpannawit@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="pf-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Contact form">
      <div className="pf-modal-container" onClick={(e) => e.stopPropagation()} ref={modalRef}>
        <div className="pf-modal-cube-layer" aria-hidden>
          <ForegroundCube position="top-right" size={100} offset={{ x: 20, y: 24 }} />
          <ForegroundCube position="bottom-left" size={70} offset={{ x: 20, y: 24 }} />
        </div>

        <div className="pf-about-card" style={{ position: "relative", zIndex: 10 }}>
          <div className="pf-modal-layout" style={{ gap: 24, alignItems: "stretch" }}>
            <div
              className="pf-modal-content"
              style={{
                flex: "2 1 0%",
                display: "flex",
                flexDirection: "column",
                minWidth: 0
              }}
            >
              <div className="pf-modal-header">
                <span className="pf-modal-period">CONTACT</span>
                <h2 className="pf-modal-title">GET IN TOUCH</h2>
                <div className="tag" style={{ fontSize: "0.85rem" }}>Quick message • Collabs • Resume</div>
              </div>

              <div className="pf-modal-body" style={{ marginTop: 8, flex: "1 1 auto" }}>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <label style={{ display: "block", marginBottom: 6, color: "var(--muted)", fontSize: 13 }}>Name</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                        style={{
                          width: "100%",
                          padding: "10px 12px",
                          borderRadius: 10,
                          border: "none",
                          background: "#0f0f11",
                          color: "#fff"
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", marginBottom: 6, color: "var(--muted)", fontSize: 13 }}>Email</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        style={{
                          width: "100%",
                          padding: "10px 12px",
                          borderRadius: 10,
                          border: "none",
                          background: "#0f0f11",
                          color: "#fff"
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: 12 }}>
                    <label style={{ display: "block", marginBottom: 6, color: "var(--muted)", fontSize: 13 }}>Message</label>
                    <textarea
                      name="message"
                      rows="7"
                      placeholder="Say hi — tell me what you’re working on."
                      required
                      style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: 10,
                        border: "none",
                        background: "#0f0f11",
                        color: "#fff",
                        resize: "vertical"
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", gap: 12, marginTop: 14, alignItems: "center", flexWrap: "wrap" }}>
                    <button type="submit" className="pf-btn pf-btn-primary">Send</button>
                    <button
                      type="button"
                      className="pf-btn pf-btn-ghost"
                      onClick={() => window.open('/resume.pdf', '_blank', 'noreferrer')}
                    >
                      Resume
                    </button>
                    <button type="button" className="pf-btn pf-btn-ghost" onClick={onClose}>Close</button>
                  </div>
                </form>
              </div>

              <div style={{ marginTop: 18, color: "var(--muted)", fontSize: 13 }}>
                <div style={{ marginBottom: 8 }}>Prefer direct links?</div>
                <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                  <a style={{
                    color: "var(--pf-purple)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6
                  }}
                  href="mailto:cosapatarapimpannawit@gmail.com"
                  aria-label="Email">
                <FaEnvelope size={18} />
                cosapatarapimpannawit@gmail.com
              </a>
              <span style={{ opacity: 0.5 }}>·</span>
                  <a style={{ color: "var(--pf-purple)", display: "inline-flex", alignItems: "center", gap: 6 }}
                    href="https://github.com/FunkyPurpleApplePaste"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub">
                    <FaGithub size={18} />
                  </a>
                  <span style={{ opacity: 0.5 }}>·</span>
                  <a style={{ color: "var(--pf-purple)", display: "inline-flex", alignItems: "center", gap: 6 }}
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn">
                    <FaLinkedin size={18} />
                  </a>
                  </div>
              </div>
            </div>

            <aside
              className="pf-modal-aside"
              style={{
                flex: "1 1 0%",
                minWidth: 240,
                display: "flex",
                flexDirection: "column",
                gap: 12
              }}
            >
              <div style={{ padding: 16, borderRadius: 12, background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))" }}>
                <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 8 }}>Quick facts</div>
                <div style={{ fontWeight: 700, color: "#fff", marginBottom: 6 }}>Pan C — Game Designer</div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>Available for freelance, collabs, and systems design.</div>
              </div>

              <div style={{ padding: 16, borderRadius: 12, background: "transparent", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 8 }}>What I usually work on</div>
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", fontSize: 13 }}>
                  <li>Gameplay & combat systems</li>
                  <li>Tools & editor UX</li>
                  <li>Interactive prototypes (React / Luau)</li>
                </ul>
              </div>

              <div style={{ marginTop: "auto", padding: 12, textAlign: "center", fontSize: 12, color: "var(--muted)" }}>
                © {new Date().getFullYear()} Pan C
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
