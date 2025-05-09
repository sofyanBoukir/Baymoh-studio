import {
  motion,
  type TargetAndTransition,
  type Transition,
  type VariantLabels,
  type AnimationControls
} from 'framer-motion';
import { type ReactNode, forwardRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { ScrollAnimationConfig } from '../types/animation';


type AnimationConfig = {
  triggerOnce?: boolean;
  threshold?: number;
  initial?: boolean | TargetAndTransition | VariantLabels;
  animate?: boolean | TargetAndTransition | VariantLabels | AnimationControls;
  transition?: Transition;
};

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  config?: AnimationConfig;
};

const isValidMotionValue = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const convertConfig = (config?: AnimationConfig): ScrollAnimationConfig | undefined => {
  if (!config) return undefined;

  return {
    ...config,
    initial: isValidMotionValue(config.initial) ? config.initial : undefined,
    animate: isValidMotionValue(config.animate) ? config.animate : undefined,
    transition: config.transition
  };
};

export const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ children, className, config }, ref) => {
    const { ref: scrollRef, motionProps } = useScrollAnimation(convertConfig(config));

    return (
      <motion.div
        ref={(node) => {
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
          }
          (scrollRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={className}
        initial={config?.initial}
        animate={motionProps.animate}
        transition={motionProps.transition}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';
