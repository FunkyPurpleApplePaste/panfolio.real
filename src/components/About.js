import React from 'react';
import Reveal from './Reveal';
import ForegroundCube from './ForegroundCubes';
import { skills } from '../data';

export default function About() {
  return (
    <section id="about" className="pf-section">
      <div className="pf-container">
        <Reveal className="pf-about-card">
          <div style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: 8 }}>Game Designer & Systems Programmer</div>
          <h3 className="pf-about-title">About Me</h3>
          <p style={{ lineHeight: 1.7 }}>Hi — I’m <strong>Pan</strong>, a <strong>game designer</strong> and <strong>programmer</strong> crafting playful systems, fast iteration loops, and immersive player experiences.</p>
          <p style={{ marginTop: 12, lineHeight: 1.7 }}>I work across <strong>Roblox (Luau)</strong>, <strong>JavaScript</strong>, <strong>Python</strong>, and <strong>C#</strong>. I specialize in <strong>dynamic gameplay</strong>, <strong>interactive tools</strong>, and <strong>combat systems</strong> designed for replayability.</p>
          <blockquote className="pf-quote">“I design systems players feel, not just see.”</blockquote>
          <ForegroundCube parentSelector={"pf-about-card"} position='top-right' size={110} offset={{x : -5, y : -10}}/>
        </Reveal>

        <div className="pf-row">
          <Reveal className="pf-about-card">
            <h4 style={{ margin: '0 0 12px', fontWeight: 700 }}>Skills & Tools</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>{skills.map((s) => (<span key={s} className="skill-pill">{s}</span>))}</div>
            <ForegroundCube parentSelector={"pf-row"} position='top-right' size={80} offset={{x : 0, y : 10 }}/>
            <ForegroundCube parentSelector={"pf-row"} position='bottom-left' size={80} offset={{x : -50, y : 20 }}/>
          </Reveal>
        </div>

        <Reveal className="pf-about-card">
          <div style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: 8 }}>Personal Philosophy</div>
          <h3 className="pf-about-title">My Design Ethos</h3>
          <p style={{ lineHeight: 1.7 }}>I like designing games that feel <strong>alive</strong> — where systems react to the player like a conversation, not a lecture. When someone tries something unexpected, I want the game to notice, to push back a little, or reward them for being curious.</p>
          <p style={{ lineHeight: 1.7, marginTop: 12 }}>My process is simple: <strong>build fast, test honestly, keep what feels good</strong>. I’m not precious about first versions — I enjoy breaking and rebuilding things until they flow naturally.</p>
          <blockquote className="pf-quote">“Every spark of curiosity deserves a world that answers it.”</blockquote>
          <ForegroundCube parentSelector={"pf-row"} position='bottom-right' size={110} offset={{x : 10, y : -10 }}/>
          <ForegroundCube parentSelector={"pf-row"} position='top-left' size={60} offset={{x : -20, y : 10 }}/>
        </Reveal>

      </div>
    </section>
  );
}
