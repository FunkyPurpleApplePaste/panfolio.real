import React, { useEffect, useRef, useState } from 'react';
import { useTilt } from '../hooks/useTilt';
import { heroSlides } from '../data';
import { useNavigate } from "react-router-dom";

export default function HeroCarousel({ featuredIds = [] }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('in');
  const timer = useRef(null);
  const { ref: tiltRef, tilt, handleMouseMove, handleMouseLeave, isHovered } = useTilt(10, 1.0);
  const navigate = useNavigate();

  // Filter slides by featuredIds
  const slides = featuredIds.length
    ? heroSlides.filter(slide => featuredIds.includes(slide.id))
    : heroSlides; // fallback to all slides if no IDs provided

  useEffect(() => { start(); return () => stop(); }, [index, slides]);

  function start() {
    stop();
    if (!isHovered.current && slides.length > 1) {
      timer.current = setTimeout(() => triggerNext(), 5200);
    }
  }

  function stop() { 
    if (timer.current) clearTimeout(timer.current); 
  }

  function triggerNext() {
    setPhase('out');
    setTimeout(() => { 
      setIndex(i => (i + 1) % slides.length); 
      setPhase('in'); 
    }, 420);
  }

  if (!slides.length) return null; // nothing to show

  return (
    <section
      id="home"
      className="pf-hero"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { isHovered.current = true; stop(); }}
      onMouseLeave={() => { handleMouseLeave(); start(); }}
    >
      <div className="pf-hero-inner">
        <div className="pf-hero-left">
          <div className={`pf-hero-kicker reveal ${phase === 'in' ? 'in' : ''}`}>FEATURED PROJECT</div>
          <h1 className={`pf-hero-title reveal ${phase === 'in' ? 'in' : ''}`}>{slides[index].title}</h1>
          <p className={`pf-hero-sub reveal ${phase === 'in' ? 'in' : ''}`} style={{ transitionDelay: '.06s' }}>
            {slides[index].subtitle} — I create interactive systems, tools, and experiences that feel alive.
          </p>
          <div className={`pf-hero-ctas reveal ${phase === 'in' ? 'in' : ''}`}>
            <a
              className="pf-btn pf-btn-primary"
              onClick={() => navigate(`/project/${slides[index].id}`)}
            >
              VIEW
            </a>
            <button
              className="pf-btn pf-btn-ghost"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ABOUT
            </button>
          </div>
        </div>
        <div className="hero-media-wrap">
          <div
            ref={tiltRef}
            className="hero-card"
            style={{
              transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg) scale(${phase === 'in' ? 1 : 0.985})`,
              transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <img
              src={slides[index].image}
              alt={slides[index].title}
              style={{ opacity: phase === 'in' ? 1 : 0.6, transition: 'opacity 0.4s ease, transform 20s linear' }}
            />
          </div>
        </div>
      </div>
      <div className="hero-dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => {
              stop();
              setPhase('out');
              setTimeout(() => { setIndex(i); setPhase('in'); start(); }, 420);
            }}
            className={`hero-dot ${i === index ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
