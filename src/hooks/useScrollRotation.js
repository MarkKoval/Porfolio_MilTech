import { useEffect, useRef } from 'react';

export function useScrollRotation() {
  const scrollRef = useRef(0);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = scrollRange > 0 ? Math.min(window.scrollY / scrollRange, 1) : 0;
    };

    const onScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return scrollRef;
}
