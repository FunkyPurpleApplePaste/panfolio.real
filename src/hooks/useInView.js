import { useEffect, useRef, useState } from 'react';

/**
 * useInView - returns [ref, inView]
 * options: same as IntersectionObserver options. set { once: true } to disconnect after first intersect.
 */
export default function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      // fallback: mark as visible
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (options.once) obs.disconnect();
          } else {
            if (!options.once) setInView(false);
          }
        });
      },
      { threshold: options.threshold ?? 0.15 }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, [ref.current, options.threshold, options.once]);

  return [ref, inView];
}
