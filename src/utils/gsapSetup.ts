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
 * Unified animation constants for a consistent, professional design system:
 * - Section enters: fade + slight upward movement (y: 20 -> 0)
 * - Standardized duration and power2.out easing
 * - Uniform subtle stagger for collections
 */
export const ANIM = {
  ease: 'power2.out',
  duration: 0.5,
  yOffset: 20,
  stagger: 0.06,
};
