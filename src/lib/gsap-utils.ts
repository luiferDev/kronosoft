/**
 * GSAP Utilities for Kronosoft
 * Animation utilities following gsap-core and gsap-react skills
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Type for animation targets
type AnimationTarget = string | Element | NodeListOf<Element> | Element[];

// ==========================================
// ANIMATION DEFAULTS
// ==========================================

export const animationDefaults = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    elegant: 1.2, // For elegant/hero animations
  },
  ease: {
    smooth: 'power2.out',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
    elegant: 'power3.inOut',
  },
  stagger: {
    small: 0.05,
    medium: 0.1,
    large: 0.2,
  },
};

// ==========================================
// ENTRY ANIMATIONS
// ==========================================

/**
 * Fade in animation for elements
 */
export function fadeIn(
  targets: AnimationTarget,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
  } = {}
) {
  const { duration = 0.6, delay = 0, ease = 'power2.out' } = options;
  return gsap.fromTo(
    targets as gsap.TweenTarget,
    { opacity: 0 },
    { opacity: 1, duration, delay, ease, clearProps: 'opacity' }
  );
}

/**
 * Slide up fade in animation
 */
export function slideUpFadeIn(
  targets: AnimationTarget,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
    y?: number;
  } = {}
) {
  const { duration = 0.6, delay = 0, ease = 'power3.out', y = 30 } = options;
  return gsap.fromTo(
    targets as gsap.TweenTarget,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, delay, ease, clearProps: 'opacity,y' }
  );
}

/**
 * Scale fade in animation
 */
export function scaleFadeIn(
  targets: AnimationTarget,
  options: {
    duration?: number;
    delay?: number;
    ease?: string;
    from?: number;
  } = {}
) {
  const {
    duration = 0.6,
    delay = 0,
    ease = 'back.out(1.7)',
    from = 0.8,
  } = options;
  return gsap.fromTo(
    targets as gsap.TweenTarget,
    { opacity: 0, scale: from },
    { opacity: 1, scale: 1, duration, delay, ease, clearProps: 'opacity,scale' }
  );
}

// ==========================================
// HOVER ANIMATIONS
// ==========================================

/**
 * Card hover animation - scale and subtle glow
 */
export function cardHover(targets: AnimationTarget) {
  return gsap.to(targets as gsap.TweenTarget, {
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out',
    paused: true,
  });
}

/**
 * Card hover out animation
 */
export function cardHoverOut(targets: AnimationTarget) {
  return gsap.to(targets as gsap.TweenTarget, {
    scale: 1,
    duration: 0.3,
    ease: 'power2.out',
    paused: true,
  });
}

/**
 * Button glow hover effect
 */
export function buttonGlowHover(targets: AnimationTarget) {
  return gsap.to(targets as gsap.TweenTarget, {
    boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
    duration: 0.3,
    ease: 'power2.out',
    paused: true,
  });
}

/**
 * Button glow hover out
 */
export function buttonGlowHoverOut(targets: AnimationTarget) {
  return gsap.to(targets as gsap.TweenTarget, {
    boxShadow: 'none',
    duration: 0.3,
    ease: 'power2.out',
    paused: true,
  });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

/**
 * Create scroll-triggered animation
 */
export function scrollFadeIn(
  targets: AnimationTarget,
  options: {
    trigger?: string;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    duration?: number;
    y?: number;
  } = {}
) {
  const {
    trigger = targets as string,
    start = 'top 85%',
    end = 'bottom 20%',
    scrub = false,
    duration = 0.8,
    y = 30,
  } = options;

  return gsap.fromTo(
    targets as gsap.TweenTarget,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Staggered scroll animation for lists
 */
export function scrollStagger(
  targets: AnimationTarget,
  options: {
    trigger?: string;
    start?: string;
    stagger?: number;
    duration?: number;
    y?: number;
  } = {}
) {
  const {
    trigger = targets as string,
    start = 'top 85%',
    stagger = 0.1,
    duration = 0.6,
    y = 30,
  } = options;

  return gsap.fromTo(
    targets as gsap.TweenTarget,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none reverse',
      },
    }
  );
}

// ==========================================
// HERO ANIMATIONS
// ==========================================

/**
 * Hero text reveal animation - elegant timing
 */
export function heroTextReveal(
  targets: AnimationTarget,
  options: {
    duration?: number;
    delay?: number;
    stagger?: number;
  } = {}
) {
  const { duration = 1.2, delay = 0, stagger = 0.15 } = options;

  return gsap.fromTo(
    targets as gsap.TweenTarget,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
    }
  );
}

/**
 * Hero split text animation for typing effect feel
 */
export function heroSplitText(
  targets: AnimationTarget,
  options: {
    duration?: number;
    delay?: number;
    stagger?: number;
  } = {}
) {
  const { duration = 0.8, delay = 0, stagger = 0.03 } = options;

  return gsap.fromTo(
    targets as gsap.TweenTarget,
    { opacity: 0, y: 20, rotateX: -90 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
    }
  );
}

/**
 * Hero ambient glow animation
 */
export function heroGlow(targets: AnimationTarget) {
  return gsap.to(targets as gsap.TweenTarget, {
    opacity: 0.5,
    scale: 1.1,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}

// ==========================================
// PAGE TRANSITIONS
// ==========================================

/**
 * Page enter animation
 */
export function pageEnter(targets: AnimationTarget = 'body') {
  return gsap.fromTo(
    targets as gsap.TweenTarget,
    { opacity: 0 },
    { opacity: 1, duration: 0.4, ease: 'power2.out' }
  );
}

/**
 * Page exit animation
 */
export function pageExit(targets: AnimationTarget = 'body') {
  return gsap.to(targets as gsap.TweenTarget, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
  });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Safe animation that respects reduced motion
 */
export function safeAnimate(
  animation: () => gsap.core.Tween,
  reducedMotionAnimation?: () => gsap.core.Tween
) {
  if (prefersReducedMotion()) {
    if (reducedMotionAnimation) {
      return reducedMotionAnimation();
    }
    // Just fade in without motion
    return gsap.to('.gsap-animate', { opacity: 1, duration: 0 });
  }
  return animation();
}

/**
 * Create GSAP context for cleanup in React
 */
export function createGSAPContext(
  scope: React.RefObject<HTMLElement> | HTMLElement,
  callback: (context: gsap.Context) => void
) {
  return gsap.context(callback, scope);
}

/**
 * Scroll to element smoothly
 */
export function scrollToElement(
  element: string | HTMLElement,
  options: {
    offset?: number;
    duration?: number;
  } = {}
) {
  const { offset = 0, duration = 0.8 } = options;
  gsap.to(window, {
    scrollTo: { y: element, offsetY: offset },
    duration,
    ease: 'power3.out',
  });
}

// ==========================================
// EXPORTS
// ==========================================

export default {
  fadeIn,
  slideUpFadeIn,
  scaleFadeIn,
  cardHover,
  cardHoverOut,
  buttonGlowHover,
  buttonGlowHoverOut,
  scrollFadeIn,
  scrollStagger,
  heroTextReveal,
  heroSplitText,
  heroGlow,
  pageEnter,
  pageExit,
  prefersReducedMotion,
  safeAnimate,
  createGSAPContext,
  scrollToElement,
  defaults: animationDefaults,
};
