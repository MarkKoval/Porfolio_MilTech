import { useEffect, useRef } from 'react';

export function useMouseRotation() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frameId = 0;
    let lastEvent = null;

    const update = () => {
      frameId = 0;
      if (!lastEvent) {
        return;
      }

      mouseRef.current = {
        x: (lastEvent.clientX / window.innerWidth) * 2 - 1,
        y: 1 - (lastEvent.clientY / window.innerHeight) * 2,
      };
    };

    const onMove = (event) => {
      lastEvent = event;
      if (!frameId) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    const onLeave = () => {
      mouseRef.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return mouseRef;
}
