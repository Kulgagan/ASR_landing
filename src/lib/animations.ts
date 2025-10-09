import type { Variants } from "framer-motion";

// Common animation variants
export const fadeInUp: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: "blur(5px)"
  },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export const staggerContainer: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const staggerContainerSlow: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4
    }
  }
};

export const fadeIn: Variants = {
  start: {
    opacity: 0,
    scale: 1.02
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};
