import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion, ANIM } from '../utils/gsapSetup';

interface ViewAnimationOptions {
  isHero?: boolean;
}

/**
 * Unified animation system enforcing the design principle:
 * "Section enters → fade + slight upward movement"
 *
 * Avoids disparate animations, competing scales, bouncy springs,
 * or erratic movement across different elements.
 */
export function useViewAnimations(options: ViewAnimationOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // 1. HERO ENTRANCE (Fade + Slight Upward Movement)
      if (options.isHero) {
        const heroTl = gsap.timeline({ defaults: { ease: ANIM.ease, duration: ANIM.duration } });

        heroTl
          .fromTo('.hero-stamp', { opacity: 0, y: ANIM.yOffset }, { opacity: 1, y: 0, clearProps: 'all' })
          .fromTo('.hero-heading', { opacity: 0, y: ANIM.yOffset }, { opacity: 1, y: 0, clearProps: 'all' }, '-=0.35')
          .fromTo('.hero-subtitle', { opacity: 0, y: ANIM.yOffset }, { opacity: 1, y: 0, clearProps: 'all' }, '-=0.35')
          .fromTo('.hero-cta-btn', { opacity: 0, y: ANIM.yOffset }, { opacity: 1, y: 0, stagger: ANIM.stagger, clearProps: 'all' }, '-=0.35')
          .fromTo('.hero-metric-card', { opacity: 0, y: ANIM.yOffset }, { opacity: 1, y: 0, stagger: ANIM.stagger, clearProps: 'all' }, '-=0.3')
          .fromTo('.hero-portrait-card', { opacity: 0, y: ANIM.yOffset }, { opacity: 1, y: 0, clearProps: 'all' }, '-=0.35')
          .fromTo('.hero-credentials-box', { opacity: 0, y: ANIM.yOffset }, { opacity: 1, y: 0, clearProps: 'all' }, '-=0.35')
          .fromTo('.hero-curator-box', { opacity: 0, y: ANIM.yOffset }, { opacity: 1, y: 0, clearProps: 'all' }, '-=0.35');
      }

      // 2. SECTION HEADINGS (Fade + Slight Upward Movement)
      const headings = containerRef.current?.querySelectorAll('.gsap-reveal-heading');
      headings?.forEach((heading) => {
        gsap.fromTo(
          heading,
          { opacity: 0, y: ANIM.yOffset },
          {
            scrollTrigger: {
              trigger: heading,
              start: 'top 95%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: ANIM.duration,
            ease: ANIM.ease,
            clearProps: 'all',
          }
        );
      });

      // 3. SECTION PARAGRAPHS & LABELS (Fade + Slight Upward Movement)
      const texts = containerRef.current?.querySelectorAll('.gsap-reveal-text, .gsap-reveal-paragraph');
      texts?.forEach((text) => {
        gsap.fromTo(
          text,
          { opacity: 0, y: ANIM.yOffset },
          {
            scrollTrigger: {
              trigger: text,
              start: 'top 95%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: ANIM.duration,
            ease: ANIM.ease,
            clearProps: 'all',
          }
        );
      });

      // 4. CARD GROUPS (Consistent Staggered Fade + Upward Movement)
      const cardGroups = containerRef.current?.querySelectorAll('.gsap-card-group');
      const processedCards = new Set<Element>();
      cardGroups?.forEach((group) => {
        const cards = group.querySelectorAll('.gsap-card');
        if (cards.length > 0) {
          cards.forEach((c) => processedCards.add(c));
          gsap.fromTo(
            cards,
            { opacity: 0, y: ANIM.yOffset },
            {
              scrollTrigger: {
                trigger: group,
                start: 'top 95%',
                once: true,
              },
              opacity: 1,
              y: 0,
              stagger: ANIM.stagger,
              duration: ANIM.duration,
              ease: ANIM.ease,
              clearProps: 'all',
            }
          );
        }
      });

      // 5. INDIVIDUAL CARDS & BENTO BLOCKS (Fade + Slight Upward Movement)
      const individualCards = containerRef.current?.querySelectorAll('.gsap-card, .gsap-card-single');
      individualCards?.forEach((card) => {
        if (processedCards.has(card)) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: ANIM.yOffset },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: ANIM.duration,
            ease: ANIM.ease,
            clearProps: 'all',
          }
        );
      });

      // 6. PILL / TAG GROUPS (Fade + Slight Upward Movement with Subtle Stagger)
      const pillContainers = containerRef.current?.querySelectorAll('.gsap-pill-group');
      pillContainers?.forEach((container) => {
        const pills = container.querySelectorAll('.gsap-pill');
        if (pills.length > 0) {
          gsap.fromTo(
            pills,
            { opacity: 0, y: 12 },
            {
              scrollTrigger: {
                trigger: container,
                start: 'top 95%',
                once: true,
              },
              opacity: 1,
              y: 0,
              stagger: 0.03,
              duration: ANIM.duration * 0.8,
              ease: ANIM.ease,
              clearProps: 'all',
            }
          );
        }
      });

      // 7. TIMELINE PROGRESS & DOTS (Experience Section - Clean Fade + Upward Movement)
      const timelineLine = containerRef.current?.querySelector('.gsap-timeline-line');
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0 },
          {
            scrollTrigger: {
              trigger: timelineLine,
              start: 'top 85%',
              end: 'bottom 85%',
              scrub: 0.3,
            },
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
          }
        );
      }

      const timelineDots = containerRef.current?.querySelectorAll('.gsap-timeline-dot');
      timelineDots?.forEach((dot) => {
        gsap.fromTo(
          dot,
          { opacity: 0, y: 10 },
          {
            scrollTrigger: {
              trigger: dot,
              start: 'top 95%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: ANIM.duration * 0.7,
            ease: ANIM.ease,
            clearProps: 'all',
          }
        );
      });

      // 8. FORM INPUTS (Contact Section - Consistent Fade + Slight Upward Movement)
      const formContainers = containerRef.current?.querySelectorAll('.gsap-form-group');
      formContainers?.forEach((form) => {
        const inputs = form.querySelectorAll('.gsap-form-field');
        if (inputs.length > 0) {
          gsap.fromTo(
            inputs,
            { opacity: 0, y: ANIM.yOffset },
            {
              scrollTrigger: {
                trigger: form,
                start: 'top 95%',
                once: true,
              },
              opacity: 1,
              y: 0,
              stagger: ANIM.stagger,
              duration: ANIM.duration,
              ease: ANIM.ease,
              clearProps: 'all',
            }
          );
        }
      });

      // Refresh ScrollTrigger positions after initial layout render
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      // Safety fallback: ensure no element remains hidden if animation was interrupted
      const safetyTimer = setTimeout(() => {
        if (!containerRef.current) return;
        const hiddenElements = containerRef.current.querySelectorAll(
          '.gsap-card, .gsap-reveal-heading, .gsap-reveal-text, .hero-credentials-box, .hero-curator-box, .hero-portrait-card'
        );
        hiddenElements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          if (window.getComputedStyle(htmlEl).opacity === '0' || htmlEl.style.opacity === '0') {
            htmlEl.style.opacity = '1';
            htmlEl.style.transform = 'none';
          }
        });
      }, 600);

      return () => {
        clearTimeout(timer);
        clearTimeout(safetyTimer);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [options.isHero]);

  return containerRef;
}
