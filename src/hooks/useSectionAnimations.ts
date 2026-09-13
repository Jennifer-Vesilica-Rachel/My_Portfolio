import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../utils/gsapSetup';

interface ViewAnimationOptions {
  isHero?: boolean;
}

/**
 * Unified hook for developer portfolio animations with GSAP and ScrollTrigger.
 * Implements fail-safe reveals and clearProps so content is never stuck in an invisible state.
 */
export function useViewAnimations(options: ViewAnimationOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // 1. HERO ANIMATIONS (if hero is present)
      if (options.isHero) {
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        heroTl
          .fromTo('.hero-stamp', { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.5, clearProps: 'all' })
          .fromTo('.hero-heading', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7, clearProps: 'all' }, '-=0.3')
          .fromTo('.hero-subtitle', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, clearProps: 'all' }, '-=0.4')
          .fromTo('.hero-cta-btn', { opacity: 0, y: 12, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.45, clearProps: 'all' }, '-=0.35')
          .fromTo('.hero-metric-card', { opacity: 0, y: 20, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.5, clearProps: 'all' }, '-=0.3')
          .fromTo('.hero-portrait-card', { opacity: 0, y: 24, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, clearProps: 'all' }, '-=0.5')
          .fromTo('.hero-credentials-box', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, clearProps: 'all' }, '-=0.35')
          .fromTo('.hero-curator-box', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, clearProps: 'all' }, '-=0.3');

        // Subtle floating / parallax movement on ambient background shapes
        gsap.to('.hero-ambient-glow-1', {
          y: 22,
          x: -14,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
        gsap.to('.hero-ambient-glow-2', {
          y: -22,
          x: 16,
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // 2. HEADINGS REVEAL
      const headings = containerRef.current?.querySelectorAll('.gsap-reveal-heading');
      headings?.forEach((heading) => {
        gsap.fromTo(heading, 
          { opacity: 0, y: 24 },
          {
            scrollTrigger: {
              trigger: heading,
              start: 'top 95%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            clearProps: 'all',
          }
        );
      });

      // 3. TEXT / DESCRIPTION FADE UP
      const texts = containerRef.current?.querySelectorAll('.gsap-reveal-text, .gsap-reveal-paragraph');
      texts?.forEach((text) => {
        gsap.fromTo(text,
          { opacity: 0, y: 18 },
          {
            scrollTrigger: {
              trigger: text,
              start: 'top 95%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
            clearProps: 'all',
          }
        );
      });

      // 4. STAGGERED CARDS GROUPS
      const cardGroups = containerRef.current?.querySelectorAll('.gsap-card-group');
      const processedCards = new Set<Element>();
      cardGroups?.forEach((group) => {
        const cards = group.querySelectorAll('.gsap-card');
        if (cards.length > 0) {
          cards.forEach((c) => processedCards.add(c));
          gsap.fromTo(cards,
            { opacity: 0, y: 24, scale: 0.98 },
            {
              scrollTrigger: {
                trigger: group,
                start: 'top 95%',
                once: true,
              },
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.08,
              duration: 0.55,
              ease: 'power3.out',
              clearProps: 'all',
            }
          );
        }
      });

      // 5. INDIVIDUAL CARDS (Bento / Highlights / Standalone cards)
      const individualCards = containerRef.current?.querySelectorAll('.gsap-card, .gsap-card-single');
      individualCards?.forEach((card) => {
        if (processedCards.has(card)) return;
        gsap.fromTo(card,
          { opacity: 0, y: 22, scale: 0.98 },
          {
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: 'power3.out',
            clearProps: 'all',
          }
        );
      });

      // 6. STAGGERED PILLS / TAGS
      const pillContainers = containerRef.current?.querySelectorAll('.gsap-pill-group');
      pillContainers?.forEach((container) => {
        const pills = container.querySelectorAll('.gsap-pill');
        if (pills.length > 0) {
          gsap.fromTo(pills,
            { opacity: 0, scale: 0.9, y: 8 },
            {
              scrollTrigger: {
                trigger: container,
                start: 'top 95%',
                once: true,
              },
              opacity: 1,
              scale: 1,
              y: 0,
              stagger: 0.03,
              duration: 0.4,
              ease: 'power2.out',
              clearProps: 'all',
            }
          );
        }
      });

      // 7. TIMELINE PROGRESS & DOTS (Experience section)
      const timelineLine = containerRef.current?.querySelector('.gsap-timeline-line');
      if (timelineLine) {
        gsap.fromTo(timelineLine,
          { scaleY: 0 },
          {
            scrollTrigger: {
              trigger: timelineLine,
              start: 'top 80%',
              end: 'bottom 80%',
              scrub: 0.4,
            },
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
          }
        );
      }

      const timelineDots = containerRef.current?.querySelectorAll('.gsap-timeline-dot');
      timelineDots?.forEach((dot) => {
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          {
            scrollTrigger: {
              trigger: dot,
              start: 'top 95%',
              once: true,
            },
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: 'back.out(1.7)',
            clearProps: 'all',
          }
        );
      });

      // 8. FORM INPUTS SEQUENTIAL REVEAL (Contact section)
      const formContainers = containerRef.current?.querySelectorAll('.gsap-form-group');
      formContainers?.forEach((form) => {
        const inputs = form.querySelectorAll('.gsap-form-field');
        if (inputs.length > 0) {
          gsap.fromTo(inputs,
            { opacity: 0, y: 14 },
            {
              scrollTrigger: {
                trigger: form,
                start: 'top 95%',
                once: true,
              },
              opacity: 1,
              y: 0,
              stagger: 0.06,
              duration: 0.45,
              ease: 'power3.out',
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
      }, 700);

      return () => {
        clearTimeout(timer);
        clearTimeout(safetyTimer);
      };
    }, containerRef);

    return () => ctx.revert();
  }, [options.isHero]);

  return containerRef;
}

