import { useInView } from 'framer-motion';
import { useRef } from 'react';

type ScrollAnimationConfig = {
  triggerOnce?: boolean;
  threshold?: number;
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  transition?: Record<string, unknown>;
};

export const useScrollAnimation = (config?: ScrollAnimationConfig) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: config?.triggerOnce ?? true,
    amount: config?.threshold ?? 0.2,
  });

  return {
    ref,
    motionProps: {
      initial: config?.initial || { opacity: 0 },
      animate: isInView ? (config?.animate || { opacity: 1 }) : config?.initial,
      transition: config?.transition || { duration: 0.6 },
    },
    isInView,
  };
};