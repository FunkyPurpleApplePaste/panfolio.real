// src/components/FloatingCubes.jsx
import React, { useEffect, useMemo, useRef } from "react";

export default function FloatingCubes() {
  // --- SETTINGS ---
  const NUM = window.innerWidth > 1000 ? 24 : 14; // fewer on mobile for performance
  const RANGE_X = 100; // vw range
  const RANGE_Y = 100; // vh range

  // --- GENERATE STATIC CUBE DATA ---
  const cubes = useMemo(() => {
    const list = [];
    for (let i = 0; i < NUM; i++) {
      list.push({
        size: Math.random() * 50 + 25,
        hollow: Math.random() > 0.5,
        opacity: Math.random() * 0.35 + 0.15,
        x: Math.random() * RANGE_X,
        y: Math.random() * RANGE_Y,
        speed: Math.random() * 0.3 + 0.2,
        phase: Math.random() * Math.PI * 2,
        rot: Math.random() * 60 - 30,
      });
    }
    return list;
  }, [NUM]);

  const refs = useRef([]);

  // --- ANIMATION ---
  useEffect(() => {
    const els = refs.current;
    if (!els.length) return;

    let running = true;
    let frameId;
    const start = performance.now();

    const animate = (time) => {
      if (!running) return;
      const t = (time - start) * 0.001;

      // minimal loop: update transform only
      for (let i = 0; i < cubes.length; i++) {
        const el = els[i];
        if (!el) continue;

        const c = cubes[i];
        const fy = Math.sin(t * c.speed + c.phase) * 10;
        const fx = Math.cos(t * (c.speed * 0.8) + c.phase) * 6;
        const rot = c.rot + fx * 0.4;

        // update transform — minimal string concat
        el.style.transform = `translate3d(${c.x}vw, calc(${c.y}vh + ${fy}px), 0) rotate(${rot}deg)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => {
      running = false;
      cancelAnimationFrame(frameId);
    };
  }, [cubes]);

  // --- RENDER ---
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        transform: "translateZ(0)", // ensures compositor layer
      }}
    >
      {cubes.map((c, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className={`cube ${c.hollow ? "hollow" : "filled"}`}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: `${c.size}px`,
            height: `${c.size}px`,
            opacity: c.opacity,
            transform: `translate3d(${c.x}vw, ${c.y}vh, 0) rotate(${c.rot}deg)`,
            willChange: "transform",
            transformOrigin: "center",
            filter: "blur(0.2px)", // softens edges a bit
          }}
        />
      ))}
    </div>
  );
}
