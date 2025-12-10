// ForegroundCubes.jsx
import React, { useRef, useEffect, useMemo } from "react";

export default function ForegroundCube({
  size = 100,
  variant = "filled",
  floatDuration = null, // optional override
  position = "top-right",
  offset = { x: 0, y: 0 },
  className = "",
}) {
  const ref = useRef(null);
  const duration = useMemo(() => {
    if (floatDuration != null) return floatDuration;
    return Math.random() * 6 + 8; // randomized but stable per mount
  }, [floatDuration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // ensure parent is positioned so absolute coords work
    const parent = el.parentElement;
    if (parent && getComputedStyle(parent).position === "static") {
      parent.style.position = "relative";
    }
    // no appendChild / no reparenting — keep it simple
    return () => {
      // don't revert parent's position (could break layout elsewhere)
    };
  }, []);

  // compute simple absolute offset relative to modal container
  const style = {
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    pointerEvents: "none",
    zIndex: 45,
    transformOrigin: "center",
    animation: `floatCube ${duration}s ease-in-out infinite`,
    // small alpha so cubes aren't overpowering
    opacity: 0.9,
  };

  const p = (position || "").toLowerCase();
  const pad = 12; // base offset so cube sits just outside edge
  if (p.includes("top")) style.top = `${-pad + (offset.y || 0)}px`;
  if (p.includes("bottom")) style.bottom = `${-pad + (offset.y || 0)}px`;
  if (p.includes("left")) style.left = `${-pad + (offset.x || 0)}px`;
  if (p.includes("right")) style.right = `${-pad + (offset.x || 0)}px`;
  if (p.includes("center") || p.includes("middle")) {
    style.left = `50%`;
    style.top = `50%`;
    style.transform = `translate(calc(-50% + ${offset.x || 0}px), calc(-50% + ${offset.y || 0}px))`;
  } else {
    // if we didn't set a transform already, ensure translate(0) so keyframe works correctly
    if (!style.transform) style.transform = `translate(0px, 0px)`;
  }

  return <div ref={ref} className={`pf-modal-cube ${className}`} style={style} aria-hidden>
    <div className={`cube ${variant}`} style={{ width: "100%", height: "100%" }} />
  </div>;
}
