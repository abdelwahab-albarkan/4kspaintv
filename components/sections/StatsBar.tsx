'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { motion, useReducedMotion, animate } from 'framer-motion';

/**
 * Reveal-on-scroll detection that is resilient: an immediate bounding-box check
 * (works even where IntersectionObserver is flaky), plus an IO observer and a
 * scroll fallback. Fires once, only when the element is actually in the viewport
 * — so below-the-fold stats wait for the user to scroll to them, and the content
 * is never left permanently hidden.
 */
function useReveal(ref: RefObject<HTMLElement | null>): boolean {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inViewport = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.85 && r.bottom > 0;
    };
    if (inViewport()) {
      setShown(true);
      return;
    }

    let io: IntersectionObserver | undefined;
    const onScroll = () => {
      if (inViewport()) {
        setShown(true);
        cleanup();
      }
    };
    const cleanup = () => {
      io?.disconnect();
      window.removeEventListener('scroll', onScroll);
    };

    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShown(true);
            cleanup();
          }
        },
        { threshold: 0.3 },
      );
      io.observe(el);
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // Safety net: never leave the stats permanently hidden if neither the
    // observer nor the scroll handler ever fire.
    const safety = window.setTimeout(() => setShown(true), 2500);

    return () => {
      cleanup();
      window.clearTimeout(safety);
    };
  }, [ref]);

  return shown;
}

interface StatConfig {
  /** Numeric target for count-up (omit for a static stat like "4K"). */
  target?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Static text shown as-is (no count-up). */
  staticValue?: string;
  label: string;
}

const STATS: StatConfig[] = [
  { target: 50000, decimals: 0, prefix: '+', label: 'Canales en directo' },
  { target: 180000, decimals: 0, prefix: '+', label: 'Películas y series' },
  { staticValue: '4K', label: 'Calidad Ultra HD' },
  { target: 99.9, decimals: 1, suffix: '%', label: 'Disponibilidad' },
];

// Cinematic ease-out (no bounce) shared by the reveal and the count-up.
const CINEMATIC = [0.16, 1, 0.3, 1] as const;
const COUNT_DURATION = 2; // seconds (within 1.8–2.2)

function formatEs(value: number, decimals: number): string {
  return new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function composed(stat: StatConfig, value: number): string {
  return `${stat.prefix ?? ''}${formatEs(value, stat.decimals ?? 0)}${stat.suffix ?? ''}`;
}

function StatValue({ stat, start, delay, reduced }: { stat: StatConfig; start: boolean; delay: number; reduced: boolean }) {
  // SSR / initial render shows the FINAL value → no hydration mismatch, and the
  // number is correct even without JS. The count-up resets to 0 on trigger.
  const final = stat.staticValue ?? composed(stat, stat.target ?? 0);
  const [text, setText] = useState(final);

  useEffect(() => {
    if (stat.staticValue || reduced || !start || stat.target == null) return;
    const controls = animate(0, stat.target, {
      duration: COUNT_DURATION,
      ease: CINEMATIC,
      delay: delay / 1000,
      onUpdate: (v) => setText(composed(stat, v)),
    });
    return () => controls.stop();
  }, [start, reduced, stat, delay]);

  return <>{text}</>;
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const start = useReveal(ref); // count-up begins when the section enters the viewport

  return (
    <section className="border-y border-border-subtle bg-surface">
      <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {STATS.map((stat, i) => {
          const delay = i * 120; // staggered start: 0 / 120 / 240 / 360 ms
          return (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 25, scale: 0.94 }}
              animate={start ? { opacity: 1, y: 0, scale: 1 } : undefined}
              transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : delay / 1000, ease: CINEMATIC }}
            >
              <motion.p
                className="font-display text-3xl font-extrabold tabular-nums text-primary-500 will-change-transform"
                initial={false}
                animate={
                  start && !reduced
                    ? {
                        // Glow swells during the count-up, then settles to a subtle rest state.
                        textShadow: [
                          '0 0 0px rgba(0,217,255,0)',
                          '0 0 22px rgba(124,44,255,0.55)',
                          '0 0 8px rgba(0,217,255,0.22)',
                        ],
                        scale: stat.staticValue ? [0.92, 1.02, 1] : 1,
                      }
                    : undefined
                }
                transition={{ duration: COUNT_DURATION + 0.1, delay: delay / 1000, times: [0, 0.6, 1], ease: 'easeOut' }}
              >
                <StatValue stat={stat} start={start} delay={delay} reduced={reduced} />
              </motion.p>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
