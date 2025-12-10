import { useRef, useState, useEffect } from "react";

const observed = new Set();
let rafRunning = false;

function startRAF() {
  if (rafRunning) return;
  rafRunning = true;

  const step = () => {
    observed.forEach(({ el, threshold, setVisible, prev }) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const visible = rect.top < vh * (1 - threshold) && rect.bottom > 0;

      // only update if state changes (avoid React re-render spam)
      if (visible !== prev.current) {
        prev.current = visible;
        setVisible(visible);
      }
    });
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export function useScrollReveal(threshold = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const prev = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // attach element to global set
    observed.add({ el, threshold, setVisible: setIsVisible, prev });
    startRAF();

    // IntersectionObserver used only for early prefetch / warm entry
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !prev.current) {
          prev.current = true;
          setIsVisible(true);
        }
      },
      { threshold }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      for (const item of observed) {
        if (item.el === el) observed.delete(item);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
}

export default function Reveal({
  children,
  className = "",
  style = {},
  delay = 0,
}) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${className} fade-up ${isVisible ? "in" : "out"}`}
      style={{ "--fade-delay": `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}
