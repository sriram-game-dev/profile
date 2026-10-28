import { useEffect } from 'react';

/**
 * Lightweight hook that attaches an IntersectionObserver to observe elements
 * with the `.reveal-on-scroll` class and triggers staggered reveal animations.
 */
export function useScrollReveal(dependency) {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
    if (elements.length === 0) return;

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [dependency]);
}
