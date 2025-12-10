import { useRef, useState, useEffect } from 'react';

export function useTilt(maxTilt = 8, scale = 1.03) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
  const isHovered = useRef(false);
  const frame = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    cancelAnimationFrame(frame.current);
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    const tiltX = y * maxTilt;
    const tiltY = x * maxTilt;
    isHovered.current = true;

    // only update via rAF (prevents render flood)
    frame.current = requestAnimationFrame(() => {
      setTilt({ x: tiltX, y: tiltY, scale });
    });
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(frame.current);
    isHovered.current = false;
    frame.current = requestAnimationFrame(() => {
      setTilt({ x: 0, y: 0, scale: 1 });
    });
  };

  // Cleanup on unmount
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  return { ref, tilt, handleMouseMove, handleMouseLeave, isHovered };
}
