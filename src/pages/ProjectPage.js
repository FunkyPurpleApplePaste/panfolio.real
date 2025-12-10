// src/pages/ProjectPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import ForegroundCube from "../components/ForegroundCubes";
import { projectsData } from "../data";
import { useTilt } from "../hooks/useTilt";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  // Hero image tilt
  const heroTiltHook = useTilt(10, 1.03);
  const { ref: heroRef, tilt: heroTilt, handleMouseMove: heroMove, handleMouseLeave: heroLeave } = heroTiltHook;
  const heroHovered = heroTilt.scale > 1;

  // Gallery images tilt will be handled in a small component below
  const GalleryImage = ({ src, alt }) => {
    const { ref, tilt, handleMouseMove, handleMouseLeave } = useTilt(10, 1.05);
    const hovered = tilt.scale > 1;
    const transform = `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`;

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transition: "transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94)",
          boxShadow: hovered
            ? "0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(232,102,255,0.3)"
            : "0 10px 20px rgba(0,0,0,0.3)",
          borderRadius: 8,
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <img src={src} alt={alt} style={{height: "100%" ,width: "100%", display: "block", objectFit: "cover" }} />
      </div>
    );
  };

  if (!project) {
    return (
      <section className="pf-section" style={{ padding: "4rem 1rem" }}>
        <div className="pf-container" style={{ textAlign: "center" }}>
          <h3 className="pf-about-title">Project not found</h3>
          <p style={{ color: "var(--muted)" }}>We couldn't find that project.</p>
          <button className="pf-btn pf-btn-ghost" onClick={() => navigate("/")}>
            Go home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="pf-section" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div className="pf-container">
        {/* --- Hero Card --- */}
        <Reveal className="pf-about-card">
          <div style={{ fontSize: "0.875rem", color: "var(--muted)", marginBottom: 8 }}>{project.role || "Project"}</div>
          <h3 className="pf-about-title">{project.title}</h3>
          {project.period && (
            <div style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: 12 }}>{project.period}</div>
          )}
          {project.subtitle && (
            <p style={{ lineHeight: 1.7, color: "var(--muted)", marginBottom: 12 }}>{project.subtitle}</p>
          )}
          {project.image && (
            <div
              ref={heroRef}
              onMouseMove={heroMove}
              onMouseLeave={heroLeave}
              style={{
                marginTop: 12,
                borderRadius: 12,
                overflow: "hidden",
                transform: `rotateX(${-heroTilt.x}deg) rotateY(${heroTilt.y}deg) scale(${heroTilt.scale})`,
                transition: "transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94)",
                boxShadow: heroHovered
                  ? "0 30px 70px rgba(0,0,0,0.55), 0 0 28px rgba(232,102,255,0.18)"
                  : "0 12px 34px rgba(0,0,0,0.28)",
                cursor: "pointer",
              }}
            >
              <img src={project.image} alt={project.title} style={{height: "100%", width: "100%", display: "block", objectFit: "cover" }} />
            </div>
          )}
          {project.highlight && <blockquote className="pf-quote" style={{ marginTop: 16 }}>{project.highlight}</blockquote>}
          <ForegroundCube parentSelector={"pf-about-card"} position="top-right" size={110} offset={{ x: -5, y: -10 }} />
        </Reveal>

        {/* --- Overview / Description --- */}
        <Reveal className="pf-about-card">
          <div style={{ fontSize: "0.875rem", color: "var(--muted)", marginBottom: 8 }}>Overview</div>
          <h3 className="pf-about-title" style={{ fontSize: "1.25rem" }}>
            {project.subtitleOverview || "Overview"}
          </h3>
          <p style={{ lineHeight: 1.7 }}>{project.desc || "Project description goes here."}</p>
          <ForegroundCube parentSelector={"pf-row"} position="bottom-right" size={110} offset={{ x: 10, y: -10 }} />
          <ForegroundCube parentSelector={"pf-row"} position="top-left" size={60} offset={{ x: -20, y: 10 }} />
        </Reveal>

        {/* --- Design Notes / Philosophy --- */}
        <Reveal className="pf-about-card">
          <div style={{ fontSize: "0.875rem", color: "var(--muted)", marginBottom: 8 }}>Design Notes</div>
          <h3 className="pf-about-title" style={{ fontSize: "1.25rem" }}>Philosophy & Challenges</h3>
          <p style={{ lineHeight: 1.7 }}>{project.notes || "Notes about design, trade-offs, and implementation."}</p>
          {project.quote && <blockquote className="pf-quote">{project.quote}</blockquote>}
          <ForegroundCube parentSelector={"pf-row"} position="bottom-right" size={60} offset={{ x: -20, y: 10 }} />
        </Reveal>


        {/* --- Extra Sections --- */}
        {project.extraSections?.map((sec, i) => (
          <Reveal className="pf-about-card" key={i}>
            <div style={{ fontSize: "0.875rem", color: "var(--muted)", marginBottom: 8 }}>{sec.subtitle || "Section"}</div>
            <h3 className="pf-about-title" style={{ fontSize: "1.1rem" }}>{sec.title}</h3>
            <p style={{ lineHeight: 1.7 }}>{sec.content}</p>
            <ForegroundCube parentSelector={"pf-row"} position="top-left" size={45} offset={{ x: -10, y: 10 }} />
          </Reveal>
        ))}

        {/* --- Image Gallery --- */}
        {project.gallery?.length > 0 && (
          <Reveal className="pf-about-card">
            <div style={{ fontSize: "0.875rem", color: "var(--muted)", marginBottom: 8 }}>Gallery</div>
            <h3 className="pf-about-title" style={{ fontSize: "1.25rem", marginBottom: 12 }}>Project Images</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
              {project.gallery.map((img, i) => (
                <GalleryImage key={i} src={img} alt={`Gallery ${i}`}/>
              ))}
            </div>
            <ForegroundCube parentSelector={"pf-row"} position="top-right" size={60} offset={{ x: 8, y: -8 }} />
          </Reveal>
        )}
        
      </div>
    </section>
  );
}
