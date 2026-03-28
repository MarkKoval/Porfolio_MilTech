import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const pressedRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');

    if (!mediaQuery.matches) {
      return undefined;
    }

    let frameId = 0;
    let latestX = window.innerWidth / 2;
    let latestY = window.innerHeight / 2;
    let ringX = latestX;
    let ringY = latestY;

    const render = () => {
      frameId = 0;
      ringX += (latestX - ringX) * 0.62;
      ringY += (latestY - ringY) * 0.62;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${latestX}px, ${latestY}px, 0) translate(-50%, -50%) scale(${pressedRef.current ? 0.82 : 1})`;
        dotRef.current.style.opacity = '1';
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${pressedRef.current ? 0.88 : 1})`;
        ringRef.current.style.opacity = '1';
      }

      if (Math.abs(latestX - ringX) > 0.01 || Math.abs(latestY - ringY) > 0.01) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const schedule = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const handleMove = (event) => {
      latestX = event.clientX;
      latestY = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${latestX}px, ${latestY}px, 0) translate(-50%, -50%) scale(${pressedRef.current ? 0.82 : 1})`;
        dotRef.current.style.opacity = '1';
      }

      schedule();
    };

    const handleDown = () => {
      pressedRef.current = true;
      schedule();
    };

    const handleUp = () => {
      pressedRef.current = false;
      schedule();
    };

    const handleLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.opacity = '0';
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = '0';
      }
      schedule();
    };

    const handleEnter = () => {
      schedule();
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mouseout', handleLeave);
    window.addEventListener('mouseover', handleEnter);

    schedule();

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mouseout', handleLeave);
      window.removeEventListener('mouseover', handleEnter);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <span ref={ringRef} className="custom-cursor__ring" />
      <span ref={dotRef} className="custom-cursor__dot" />
    </div>
  );
}
