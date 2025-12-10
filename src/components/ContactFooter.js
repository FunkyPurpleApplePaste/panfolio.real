import React from 'react';
export default function ContactFooter({ sticky = false }) {
  return (
    <footer id="contact"  className={`pf-footer ${sticky ? 'pf-footer--sticky' : ''}`} role="contentinfo">
      <div className="pf-footer-inner">
        <div className="pf-footer-left" aria-label="brand and contact">
          <div className="pf-footer-brand"><strong>PAN</strong>FOLIO</div>
          <p className="pf-footer-tag">Designing systems players <strong>feel</strong> — not just see.</p>
          <div className="pf-contact">
            <div className="pf-contact-name">Pan C • Game Designer</div>
            <a className="pf-contact-mail" href="mailto:cosapatarapimpannawit@gmail.com">cosapatarapimpannawit@gmail.com</a>
          </div>
        </div>
        <div className="pf-footer-center" aria-hidden><div className="pf-divider" aria-hidden /></div>
        <div className="pf-footer-right" aria-label="links">
          <nav className="pf-footer-links" aria-label="social links">
            <a href="https://github.com/FunkyPurpleApplePaste" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </nav>
          <div className="pf-footer-copy">© {new Date().getFullYear()} Pan C</div>
        </div>
      </div>
    </footer>
  );
}
