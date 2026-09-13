import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../utils/gsapSetup';

interface ViewAnimationOptions {
  isHero?: boolean;
}

/**
 * Unified hook for developer portfolio animations with GSAP and ScrollTrigger
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
          .from('.hero-stamp', { opacity: 0, y: -14, duration: 0.5 })
          .from('.hero-heading', { opacity: 0, y: 32, duration: 0.75 }, '-=0.25')
          .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.65 }, '-=0.4')
          .from('.hero-cta-btn', { opacity: 0, y: 15, scale: 0.95, stagger: 0.08, duration: 0.5 }, '-=0.35')
          .from('.hero-metric-card', { opacity: 0, y: 25, scale: 0.96, stagger: 0.1, duration: 0.55 }, '-=0.3')
          .from('.hero-portrait-card', { opacity: 0, y: 30, scale: 0.95, duration: 0.8 }, '-=0.6')
          .from('.hero-credentials-box', { opacity: 0, y: 20, duration: 0.5 }, '-=0.4')
          .from('.hero-curator-box', { opacity: 0, y: 20, duration: 0.5 }, '-=0.35');

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
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            once: true,
          },
          opacity: 0,
          y: 35,
          duration: 0.75,
          ease: 'power3.out',
        });
      });

      // 3. TEXT / DESCRIPTION FADE UP
      const texts = containerRef.current?.querySelectorAll('.gsap-reveal-text, .gsap-reveal-paragraph');
      texts?.forEach((text) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: 'top 90%',
            once: true,
          },
          opacity: 0,
          y: 22,
          duration: 0.65,
          ease: 'power3.out',
        });
      });

      // 4. STAGGERED CARDS GROUPS
      const cardGroups = containerRef.current?.querySelectorAll('.gsap-card-group');
      const processedCards = new Set<Element>();
      cardGroups?.forEach((group) => {
        const cards = group.querySelectorAll('.gsap-card');
        if (cards.length > 0) {
          cards.forEach((c) => processedCards.add(c));
          gsap.from(cards, {
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              once: true,
            },
            opacity: 0,
            y: 35,
            scale: 0.96,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
          });
        }
      });

      // 5. INDIVIDUAL CARDS (Bento / Highlights / Standalone cards)
      const individualCards = containerRef.current?.querySelectorAll('.gsap-card, .gsap-card-single');
      individualCards?.forEach((card) => {
        if (processedCards.has(card)) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          y: 30,
          scale: 0.97,
          duration: 0.65,
          ease: 'power3.out',
        });
      });

      // 6. STAGGERED PILLS / TAGS
      const pillContainers = containerRef.current?.querySelectorAll('.gsap-pill-group');
      pillContainers?.forEach((container) => {
        const pills = container.querySelectorAll('.gsap-pill');
        if (pills.length > 0) {
          gsap.from(pills, {
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              once: true,
            },
            opacity: 0,
            scale: 0.86,
            y: 12,
            stagger: 0.03,
            duration: 0.45,
            ease: 'power2.out',
          });
        }
      });

      // 7. TIMELINE PROGRESS & DOTS (Experience section)
      const timelineLine = containerRef.current?.querySelector('.gsap-timeline-line');
      if (timelineLine) {
        gsap.from(timelineLine, {
          scrollTrigger: {
            trigger: timelineLine,
            start: 'top 75%',
            end: 'bottom 80%',
            scrub: 0.5,
          },
          scaleY: 0,
          transformOrigin: 'top center',
          ease: 'none',
        });
      }

      const timelineDots = containerRef.current?.querySelectorAll('.gsap-timeline-dot');
      timelineDots?.forEach((dot) => {
        gsap.from(dot, {
          scrollTrigger: {
            trigger: dot,
            start: 'top 85%',
            once: true,
          },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(1.7)',
        });
      });

      // 8. FORM INPUTS SEQUENTIAL REVEAL (Contact section)
      const formContainers = containerRef.current?.querySelectorAll('.gsap-form-group');
      formContainers?.forEach((form) => {
        const inputs = form.querySelectorAll('.gsap-form-field');
        if (inputs.length > 0) {
          gsap.from(inputs, {
            scrollTrigger: {
              trigger: form,
              start: 'top 85%',
              once: true,
            },
            opacity: 0,
            y: 18,
            stagger: 0.08,
            duration: 0.5,
            ease: 'power3.out',
          });
        }
      });

      // Refresh ScrollTrigger positions after initial layout render
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);

      return () => clearTimeout(timer);
    }, containerRef);

    return () => ctx.revert();
  }, [options.isHero]);

  return containerRef;
}

