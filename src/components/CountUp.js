'use client';

import { useState, useEffect, useRef } from 'react';

// Animates a number from 0 up to its target when it first scrolls into view.
// `value` may be a number or a formatted string like "1,160" or "15,885".
// Formatting (comma grouping) and an optional `suffix` (e.g. "+") are preserved.
export default function CountUp({ value, suffix = '', duration = 1600, className }) {
  const target =
    typeof value === 'number'
      ? value
      : parseInt(String(value).replace(/[^\d]/g, ''), 10) || 0;

  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users who prefer no motion — show the final number immediately.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const inViewport = () => {
      const r = el.getBoundingClientRect();
      return r.top < (window.innerHeight || 0) * 0.85 && r.bottom > 0;
    };

    // Start now if it's already on screen (e.g. above the fold).
    if (inViewport()) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
          window.removeEventListener('scroll', onScroll);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);

    // Backup for environments where IntersectionObserver is flaky.
    const onScroll = () => {
      if (inViewport()) {
        run();
        observer.disconnect();
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
