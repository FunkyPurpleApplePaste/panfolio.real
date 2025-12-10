import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';
import ForegroundCube from './ForegroundCubes';
import { projectsData } from '../data';
import ProjectModal from './ProjectModal';
import Masonry from 'react-masonry-css';

function ProjectCard({ p, i, setModal }) {
  const { ref: tiltRef, tilt, handleMouseMove, handleMouseLeave } = require('../hooks/useTilt').useTilt(17, 1.05);
  const isHovered = tilt.scale > 1;

  return (
    <Reveal key={p.id} className="pf-project" style={{ transitionDelay: `${i * 0.1}s` }}>
      <div
        ref={tiltRef}
        className="pf-project-card"
        onClick={() => setModal(p)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
          transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: isHovered
            ? '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(232,102,255,0.3)'
            : '0 10px 20px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          background: 'rgba(20,20,25,0.5)',
          perspective: '1000px',
        }}
      >
        <div
          className="pf-project-image"
          style={{
            backgroundImage: `url(${p.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 220,
            width: '100%',
            transition: 'transform 0.4s ease, filter 0.4s ease',
            filter: isHovered ? 'brightness(1.1)' : 'brightness(0.9)',
          }}
        />
        <div className="pf-project-content" style={{ padding: '1.2rem' }}>
          <h3 style={{ marginBottom: 2 }}>{p.title}</h3>
          <span style={{ color: 'var(--muted)', fontSize: 13 }}>{p.period}</span>
          <div className="tag" style={{ marginTop: 6 }}>{p.tag}</div>
          <p style={{ marginTop: 10, color: 'var(--muted)', fontSize: 14 }}>{p.shortDesc}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setModal(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Masonry breakpoint columns
  const breakpointColumnsObj = {
    default: 2, // 2 columns on desktop
    768: 1,     // 1 column on mobile
  };

  return (
    <section id="projects" className="pf-section">
      <div className="pf-container">
        <Reveal className="pf-about-card">
          <div style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: 8 }}>
            Glimpse Into My World
          </div>
          <h3 className="pf-about-title">Project Showcases</h3>
          <p style={{ lineHeight: 1.7 }}>
            Explore a selection of my <strong>creations</strong> — gameplay systems, tools, and interactive experiences I’ve designed and built.
          </p>
          <p style={{ lineHeight: 1.7, marginTop: 12 }}>
            Each project reflects my approach: <strong>fast iteration, playful experimentation, and thoughtful design</strong>.
          </p>
          <blockquote className="pf-quote">“This is barely 1% of my power.”</blockquote>
          <ForegroundCube parentSelector={"pf-about-card"} position="top-right" size={60} offset={{ x: -5, y: -10 }} />
          <ForegroundCube parentSelector={"pf-about-card"} position="bottom-right" size={90} offset={{ x: -5, y: -10 }} />
        </Reveal>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="pf-projects-grid"
          columnClassName="pf-projects-column"  
        >
          {projectsData.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} setModal={setModal} />
          ))}
        </Masonry>
      </div>
      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
