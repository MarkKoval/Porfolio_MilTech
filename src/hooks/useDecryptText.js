import { useEffect, useRef, useState } from 'react';

const SCRAMBLE_CHARS = '01#$%&*+=-_/\\<>[]{}';

export function useDecryptText(text, { active = true, duration = 700, delay = 0 } = {}) {
  const [display, setDisplay] = useState(text);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!active || hasRunRef.current || !text) {
      return undefined;
    }
    hasRunRef.current = true;

    const frameLength = 30;
    const totalFrames = Math.max(Math.round(duration / frameLength), 6);
    let frame = 0;
    let intervalId;

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        frame += 1;
        const revealCount = Math.floor((frame / totalFrames) * text.length);
        setDisplay(
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return char;
              if (index < revealCount) return char;
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join(''),
        );
        if (frame >= totalFrames) {
          setDisplay(text);
          window.clearInterval(intervalId);
        }
      }, frameLength);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [active, text, duration, delay]);

  return display;
}
