import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function AnimatedSection({
  children,
  variants = fadeUpVariants,
  initial = 'hidden',
  whileInView = 'visible',
  viewport = { once: true, margin: '-100px' },
  transition,
  sx,
  ...props
}) {
  return (
    <Box
      component={motion.div}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      transition={transition}
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  );
}
