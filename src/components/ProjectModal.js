import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ForegroundCube from "./ForegroundCubes"; // import the new component
import { useTilt } from "../hooks/useTilt";
import { useNavigate } from "react-router-dom";

export default function ProjectModal({ project, onClose }) {
  const { ref: tiltRef, tilt, handleMouseMove, handleMouseLeave } = useTilt(10, 1.03);
  const isHovered = tilt.scale > 1;
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [modalRect, setModalRect] = useState(null);

  // prevent background scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev || ""; };
  }, []);

  // continuously update modal rect if you still need it elsewhere
 // in ProjectModal.jsx — replace your useLayoutEffect with this:

useLayoutEffect(() => {
  if (!modalRef.current) return;

  const updateRect = () => {
    if (!modalRef.current) return;
    // only call set only if changed to avoid unnecessary renders
    const r = modalRef.current.getBoundingClientRect();
    setModalRect(prev => {
      if (!prev) return r;
      // coarse compare to avoid tiny changes causing re-renders
      if (
        Math.abs(prev.left - r.left) < 0.5 &&
        Math.abs(prev.top - r.top) < 0.5 &&
        Math.abs(prev.width - r.width) < 0.5 &&
        Math.abs(prev.height - r.height) < 0.5
      ) return prev;
      return r;
    });
  };

  // initial
  updateRect();

  // observe element size changes (fast, native)
  const ro = new ResizeObserver(updateRect);
  ro.observe(modalRef.current);

  // also update on scroll/resize/orientationchange (throttled-friendly)
  window.addEventListener("resize", updateRect, { passive: true });
  window.addEventListener("orientationchange", updateRect, { passive: true });
  window.addEventListener("scroll", updateRect, { passive: true });

  // cleanup
  return () => {
    ro.disconnect();
    window.removeEventListener("resize", updateRect);
    window.removeEventListener("orientationchange", updateRect);
    window.removeEventListener("scroll", updateRect);
  };
}, []);


  // small rescan when image changes to catch layout shifts
  useEffect(() => {
    const t = setTimeout(() => {
      if (modalRef.current) setModalRect(modalRef.current.getBoundingClientRect());
    }, 80);
    return () => clearTimeout(t);
  }, [project?.image]);

  return (
    <>
      <div className="pf-modal-backdrop" onClick={onClose}>
        <div className="pf-modal-container" onClick={(e)=>e.stopPropagation()} ref={modalRef}>
          {/* cube layer inside modal container so cubes are anchored to the modal */}
          <div className="pf-modal-cube-layer" aria-hidden>
            <ForegroundCube position="top-right" size={120} offset={{ x: 30, y: 35 }} />
            <ForegroundCube position="bottom-left" size={80} offset={{ x: 30, y: 35 }} />
            {/* add more cubes as desired */}
          </div>

          <div className="pf-about-card" style={{ position: "relative", zIndex: 10 }}>
            <div className="pf-modal-layout" style={{ alignItems: "center" }}>
              <div className="pf-modal-media" style={{ flex: 1.3, perspective: 1000 }}>
                <div
                  ref={tiltRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="pf-modal-img-wrapper"
                  style={{
                    transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
                    transition: "transform 0.25s cubic-bezier(0.25,0.46,0.45,0.94)",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.5), 0 0 28px rgba(232,102,255,0.28)" : "0 10px 20px rgba(0,0,0,0.28)",
                    cursor: "pointer",
                    height: "min(60vh, 520px)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="pf-modal-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "filter 280ms ease, transform 400ms ease",
                      transform: `translate(${-tilt.y * 0.45}px, ${-tilt.x * 0.45}px)`,
                      filter: isHovered ? "brightness(1.08)" : "brightness(0.92)",
                    }}
                  />
                </div>
              </div>

              <div className="pf-modal-content" style={{ flex: 1 }}>
                <div className="pf-modal-header">
                  <span className="pf-modal-period">{project.period}</span>
                  <h2 className="pf-modal-title">{project.title}</h2>
                  <div className="tag" style={{ fontSize: "0.85rem" }}>{project.tag}</div>
                </div>

                <div className="pf-modal-body">
                  <p>{project.shortDesc}</p>
                </div>

                <div className="pf-modal-actions-wrapper">
                  <div className="pf-modal-actions">
                    <button className="pf-btn pf-btn-primary" onClick={() => navigate(`/project/${project.id}`)}>VIEW</button>
                    <button className="pf-btn pf-btn-ghost" onClick={onClose}>CLOSE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
