/**
 * Shared Framer Motion presets — calm, editorial motion (ease-out, no bounce).
 * Use with whileInView + viewport for scroll reveals; keep durations modest.
 */

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  xs: 0.28,
  sm: 0.36,
  md: 0.5,
  lg: 0.62,
} as const;

export const transition = {
  smooth: { duration: DURATION.md, ease: EASE_OUT },
  smoothSlow: { duration: DURATION.lg, ease: EASE_OUT },
  smoothFast: { duration: DURATION.sm, ease: EASE_OUT },
  smoothXs: { duration: DURATION.xs, ease: EASE_OUT },
} as const;

/** Default scroll reveal: once, slight early trigger */
export const viewport = {
  once: true as const,
  amount: 0.22 as const,
  margin: '0px 0px -12% 0px' as const,
};

export const viewportSoft = {
  once: true as const,
  amount: 0.18 as const,
  margin: '0px 0px -8% 0px' as const,
};

export function fadeUp(y = 16) {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: transition.smooth,
    },
  };
}

export function fadeUpFast(y = 10) {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: transition.smoothFast,
    },
  };
}

export function fadeIn() {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: transition.smooth,
    },
  };
}

export function staggerContainer(stagger = 0.065, delayChildren = 0.05) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };
}

export function slideFrom(axis: 'x' | 'y', from: number) {
  if (axis === 'x') {
    return {
      hidden: { opacity: 0, x: from },
      visible: { opacity: 1, x: 0, transition: transition.smooth },
    };
  }
  return {
    hidden: { opacity: 0, y: from },
    visible: { opacity: 1, y: 0, transition: transition.smooth },
  };
}
