// ─── Animation Timing ───
export const ANIMATION = {
  /** Standard section reveal */
  sectionReveal: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  /** Stagger delay between child elements */
  staggerChildren: 0.08,
  /** Morph avatar crossfade duration */
  morphDuration: 0.5,
  /** Typewriter speeds */
  typewriter: {
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseDuration: 2000,
  },
  /** Counter count-up duration in ms */
  counterDuration: 1500,
} as const;

// ─── Color Tokens ───
export const COLORS = {
  bg: {
    primary: "#0a0a1a",
    secondary: "#111827",
    card: "rgba(17, 24, 39, 0.6)",
    glass: "rgba(17, 24, 39, 0.4)",
  },
  accent: {
    blue: "#3b82f6",
    violet: "#8b5cf6",
    teal: "#14b8a6",
    gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
  },
  text: {
    primary: "#f9fafb",
    secondary: "rgba(249, 250, 251, 0.7)",
    muted: "rgba(249, 250, 251, 0.4)",
  },
  border: {
    subtle: "rgba(255, 255, 255, 0.08)",
    medium: "rgba(255, 255, 255, 0.15)",
    accent: "rgba(59, 130, 246, 0.3)",
  },
} as const;

// ─── Breakpoints ───
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;
