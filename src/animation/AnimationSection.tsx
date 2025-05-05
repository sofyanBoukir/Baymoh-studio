import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  config?: {
    triggerOnce?: boolean;
    threshold?: number;
    initial?: Record<string, unknown>;
    animate?: Record<string, unknown>;
    transition?: Record<string, unknown>;
  };
};

export const AnimatedSection = ({ children, className, config }: AnimatedSectionProps) => {
  const { ref, motionProps } = useScrollAnimation(config);

  return (
    <motion.div ref={ref} className={className} {...motionProps}>
      {children}
    </motion.div>
  );
};