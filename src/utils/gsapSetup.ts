import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Check if the user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Common easing and timing constants for a high-end, modern developer portfolio
 */
export const ANIM = {
  ease: 'power3.out',
  easeSmooth: 'power2.out',
  easeBounce: 'back.out(1.4)',
  durationFast: 0.35,
  durationNormal: 0.65,
  durationHeading: 0.75,
  durationCard: 0.6,
  staggerCards: 0.12,
  staggerFast: 0.08,
};
