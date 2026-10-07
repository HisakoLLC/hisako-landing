"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export const DEFAULT_LINES = [
  "Custom software engineering built for operational scale and reliability.",
  "AI agents & process automation reducing manual business friction.",
  "Modernizing core enterprise systems and workflows without downtime.",
  "High-performance cloud architectures, database systems, and integrations.",
  "Hisako · Technology That Moves Organizations Forward.",
];

export type Ring = {
  d: string;
  cx: number;
  cy: number;
  strokeWidth: number;
  fontSize: number;
  /** Text repeated enough to blanket the full circumference. */
  text: string;
  /** Seconds for one full revolution. */
  duration: number;
  /** Fraction of a turn (0–1) to offset the starting rotation. */
  phase: number;
  reverse: boolean;
};

export type TangleFooterOptions = {
  /** Phrases sampled randomly onto rings. */
  lines?: string[];
  /**
   * Ribbon (stroke) color. Omit for theme-aware defaults
   * (deep navy in dark/footer, technical slate in light).
   */
  ribbon?: string;
  /**
   * Text fill on the ribbons. Omit for theme-aware defaults
   * (cool gray/white in dark/footer, deep navy in light).
   */
  textColor?: string;
  /**
   * Field behind the rings. Omit for theme-aware defaults.
   * Defaults to `"transparent"` so it nests cleanly inside the footer.
   */
  background?: string;
  /**
   * Band height in px. Omit to use half the measured width
   * (upper semicircle of a full-width nest). When set shorter
   * than that, the nest scales down to fit so rings stay intact.
   */
  height?: number;
  /** Seed for random line / marquee assignment across rings. */
  seed?: number;
  /** Accessible label. */
  label?: string;
};

export const RING_COUNT = 5;

export const K = 0.5522847498;
export const STROKE = 22;

/** Mulberry32 — deterministic PRNG so rings stay stable across re-renders. */
export function mulberry32(seed: number) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

/** Perfect circle as four cubics (container clips to the upper half). */
export function circlePath(cx: number, cy: number, r: number): string {
  const o = r * K;
  return [
    `M ${(cx + r).toFixed(1)} ${cy.toFixed(1)}`,
    `C ${(cx + r).toFixed(1)} ${(cy + o).toFixed(1)} ${(cx + o).toFixed(1)} ${(cy + r).toFixed(1)} ${cx.toFixed(1)} ${(cy + r).toFixed(1)}`,
    `C ${(cx - o).toFixed(1)} ${(cy + r).toFixed(1)} ${(cx - r).toFixed(1)} ${(cy + o).toFixed(1)} ${(cx - r).toFixed(1)} ${cy.toFixed(1)}`,
    `C ${(cx - r).toFixed(1)} ${(cy - o).toFixed(1)} ${(cx - o).toFixed(1)} ${(cy - r).toFixed(1)} ${cx.toFixed(1)} ${(cy - r).toFixed(1)}`,
    `C ${(cx + o).toFixed(1)} ${(cy - o).toFixed(1)} ${(cx + o).toFixed(1)} ${(cy + r).toFixed(1)} ${(cx + r).toFixed(1)} ${cy.toFixed(1)}`,
  ].join(" ");
}

/**
 * Tile copy so the ring is fully blanketed with no visible gap.
 * Rotation makes the loop seamless, so we only need to cover the
 * circumference — no exact tile-width matching required.
 */
export function buildRingCopy(
  line: string,
  other: string,
  mix: boolean,
  circumference: number,
  fontSize: number,
): string {
  const unit = mix
    ? `${line}   ·   ${other}   ·   `
    : `${line}   ·   ${line}   ·   ${other}   ·   `;
  // Bold + letter-spacing runs wider than 0.5em — over-estimate so we never underfill.
  const unitWidth = Math.max(unit.length * fontSize * 0.72, 1);
  const repeats = Math.max(3, Math.ceil(circumference / unitWidth) + 1);
  return unit.repeat(repeats);
}

/**
 * Five concentric circles nested as a wide sweeping upper arch.
 * Outer radius spans wide across container width so concentric rings have
 * wide radii (> 350px) where text never squishes or collides into a knot.
 */
export function buildRings(
  width: number,
  bandHeight: number,
  lines: string[],
  seed: number,
): Ring[] {
  const rand = mulberry32(seed);
  const cx = width / 2;
  const strokeWidth = STROKE;
  const ringGap = 8;

  // Wide, sweeping arc across the container width:
  // Maintain a wide outer radius (minimum 520px) so text never curls into a tight circle
  const outer = Math.max(width * 0.58, 520);

  // Apex of the outermost ring peaks gracefully near the top edge of the banner
  const topPadding = 16;
  const cy = bandHeight > 0 ? topPadding + outer : bandHeight;

  // Concentric rings distributed consecutively inwards from outer:
  // Even the innermost ring maintains a large radius (> 380px) ensuring crystal-clear text flow!
  const radii = Array.from({ length: RING_COUNT }, (_, i) => {
    return outer - (RING_COUNT - 1 - i) * (strokeWidth + ringGap);
  });

  // Balanced technical typography (proportional, clear letterforms):
  const fontSize = Math.min(12, Math.max(10, width * 0.009));
  const pool = lines.length > 0 ? lines : DEFAULT_LINES;

  return radii.map((r, i) => {
    const line = pool[Math.floor(rand() * pool.length)]!;
    const other = pool[Math.floor(rand() * pool.length)]!;
    const circumference = 2 * Math.PI * r;
    const text = buildRingCopy(
      line,
      other,
      rand() > 0.45,
      circumference,
      fontSize,
    );

    return {
      d: circlePath(cx, cy, r),
      cx,
      cy,
      strokeWidth,
      fontSize,
      text,
      // Calm, engineered rotational pacing:
      duration: 52 + i * 12 + rand() * 10,
      phase: rand(),
      reverse: i % 2 === 1,
    };
  });
}

export type TangleFooterProps = TangleFooterOptions & {
  className?: string;
  as?: "footer" | "div" | "section";
};

/**
 * Footer of five nested text rings — full-width upper semicircle.
 * Continuous seamless rotation around its center with GPU-friendly CSS transforms.
 * Customized for Hisako's deep navy & technical corporate aesthetic.
 */
export function TangleFooter({
  className,
  as = "div",
  lines = DEFAULT_LINES,
  ribbon,
  textColor,
  background,
  height,
  seed = 23,
  label = "Hisako technical principles footer",
}: TangleFooterProps) {
  const Component = as;
  const reduce = useReducedMotion() ?? false;
  const uid = useId().replace(/:/g, "");
  const rootRef = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      setWidth(el.clientWidth);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Pause the animation while off-screen so it never wastes frames.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setPaused(!(entry?.isIntersecting ?? true)),
      { rootMargin: "64px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const bandHeight = height ?? (width > 0 ? width / 2 : 0);
  const rings = useMemo(
    () =>
      width > 0 && bandHeight > 0
        ? buildRings(width, bandHeight, lines, seed)
        : [],
    [width, bandHeight, lines, seed],
  );

  const spinName = `tangle-spin-${uid}`;

  return (
    <Component
      ref={rootRef as any}
      data-slot="tangle-footer"
      aria-label={label}
      className={cn(
        "relative w-full overflow-hidden",
        // Hisako Technical Palette defaults
        background === undefined && "bg-transparent",
        ribbon == null &&
          "[--tangle-ribbon:#121D33] dark:[--tangle-ribbon:#121D33]",
        textColor == null &&
          "[--tangle-text:#CBD5E1] dark:[--tangle-text:#CBD5E1]",
        className,
      )}
      style={{
        background,
        height: bandHeight > 0 ? bandHeight : undefined,
        aspectRatio: height == null ? "2 / 1" : undefined,
      }}
    >
      <style>{`@keyframes ${spinName}{to{transform:rotate(360deg)}}`}</style>

      {width > 0 && bandHeight > 0 ? (
        <motion.svg
          className="absolute inset-0 size-full"
          viewBox={`0 0 ${width} ${bandHeight}`}
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <defs>
            {rings.map((ring, i) => (
              <path
                key={`def-${i}`}
                id={`${uid}-path-${i}`}
                d={ring.d}
                fill="none"
              />
            ))}
          </defs>

          {rings.map((ring, i) => {
            const pathId = `${uid}-path-${i}`;
            return (
              <g
                key={`ring-${i}`}
                style={
                  reduce
                    ? undefined
                    : {
                        transformBox: "view-box",
                        transformOrigin: `${ring.cx}px ${ring.cy}px`,
                        animation: `${spinName} ${ring.duration}s linear infinite`,
                        animationDirection: ring.reverse ? "reverse" : "normal",
                        animationDelay: `${-ring.phase * ring.duration}s`,
                        animationPlayState: paused ? "paused" : "running",
                        willChange: "transform",
                      }
                }
              >
                <use
                  href={`#${pathId}`}
                  strokeWidth={ring.strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  style={{
                    stroke: ribbon ?? "var(--tangle-ribbon)",
                  }}
                />
                <text
                  fontSize={ring.fontSize}
                  fontFamily="var(--font-heading), var(--font-sans), system-ui, sans-serif"
                  fontWeight={600}
                  letterSpacing="0.06em"
                  dominantBaseline="central"
                  style={{
                    fill: textColor ?? "var(--tangle-text)",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  <textPath href={`#${pathId}`} startOffset="0" method="align">
                    {ring.text}
                  </textPath>
                </text>
              </g>
            );
          })}
        </motion.svg>
      ) : null}

      <p className="sr-only">{lines.join(" ")}</p>
    </Component>
  );
}

export default TangleFooter;
