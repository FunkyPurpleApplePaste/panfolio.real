import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar({ sticky = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 880 && open) setOpen(false); };
    const onDocClick = (e) => { if (!open) return; if (!navRef.current) return; if (!navRef.current.contains(e.target)) setOpen(false); };
    window.addEventListener('resize', onResize);
    document.addEventListener('click', onDocClick);
    return () => { window.removeEventListener('resize', onResize); document.removeEventListener('click', onDocClick); };
  }, [open]);

  function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setOpen(false);
    } else {
      // if element doesn't exist (not on homepage), navigate there first
      navigate('/');
      // wait a tick for page to render
      setTimeout(() => {
        const el2 = document.getElementById(id);
        if (!el2) return;
        const y = el2.getBoundingClientRect().top + window.scrollY - 78;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 50);
    }
  }

  return (
    <header ref={navRef} className={`pf-nav ${scrolled ? 'pf-nav--scrolled' : ''} ${sticky ? 'pf-nav--sticky' : ''}`} role="navigation" aria-label="Primary">
      <div className="pf-nav-inner">
        <div className="pf-nav-left">
          <button className="pf-brand" onClick={() => scrollTo('home')} aria-label="Go to top" title="Go to top"><strong>PAN</strong>FOLIO</button>
        </div>
        <div className="pf-nav-right">
          <nav className={`pf-nav-links ${open ? 'is-open' : ''}`} aria-hidden={!open && window.innerWidth <= 880}>
            <button className="pf-link" onClick={() => scrollTo('about')}>ABOUT</button>
            <button className="pf-link" onClick={() => scrollTo('projects')}>PROJECTS</button>
            <button className="pf-link" onClick={() => scrollTo('contact')}>CONTACT</button>
            <a className="pf-link" href="/resume.pdf" target="_blank" rel="noreferrer">RESUME</a>
          </nav>
          <button className={`pf-nav-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden focusable="false">
              <path className="line top" d="M3 6h18" strokeWidth="2.2" strokeLinecap="round" />
              <path className="line mid" d="M3 12h18" strokeWidth="2.2" strokeLinecap="round" />
              <path className="line bot" d="M3 18h18" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`pf-mobile-menu ${open ? 'is-open' : ''}`} role="menu" aria-hidden={!open}>
        <button className="pf-mobile-link" onClick={() => scrollTo('about')}>About</button>
        <button className="pf-mobile-link" onClick={() => scrollTo('projects')}>Projects</button>
        <button className="pf-mobile-link" onClick={() => scrollTo('contact')}>Contact</button>
        <a className="pf-mobile-link pf-mobile-resume" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </div>
    </header>
  );
}
