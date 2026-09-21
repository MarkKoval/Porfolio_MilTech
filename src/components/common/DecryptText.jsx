import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useDecryptText } from '../../hooks/useDecryptText';

export function DecryptText({ text, duration, delay, sx, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const display = useDecryptText(text, { active: isInView, duration, delay });

  return (
    <span ref={ref} data-text={text} style={sx} {...props}>
      {display}
    </span>
  );
}
