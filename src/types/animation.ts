import { type TargetAndTransition, type VariantLabels, type AnimationControls, type Transition } from 'framer-motion';

export type ScrollAnimationConfig = {
  triggerOnce?: boolean;
  threshold?: number;
  initial?: TargetAndTransition | VariantLabels | AnimationControls;
  animate?: TargetAndTransition | VariantLabels | AnimationControls;
  transition?: Transition;
};