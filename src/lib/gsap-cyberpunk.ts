/**
 * GSAP Cyberpunk Animations for Kronosoft
 * Advanced animations with neon effects, glitches, and ambient motion
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ==========================================
// CYBERPUNK HERO ANIMATIONS
// ==========================================

/**
 * Glitch text effect - Cyberpunk style
 */
export function glitchText(
  targets: string | Element | NodeListOf<Element>,
  options: {
    duration?: number;
    repeat?: number;
    yoyo?: boolean;
  } = {}
) {
  const { duration = 0.1, repeat = 3, yoyo = true } = options;

  const chars = '!<>-_\\/[]{}—=+*^?#________';

  return gsap.to(targets, {
    keyframes: [
      { opacity: 1 },
      ...Array.from({ length: repeat * 2 }, () => ({
        opacity: Math.random() > 0.5 ? 1 : 0,
        duration: duration * Math.random(),
      })),
      { opacity: 1 },
    ],
    ease: 'none',
  });
}

/**
 * Split text reveal with typing effect
 */
export function typingReveal(
  targets: string | Element | NodeListOf<Element>,
  options: {
    duration?: number;
    delay?: number;
    charDuration?: number;
  } = {}
) {
  const { duration = 1.5, delay = 0, charDuration = 0.05 } = options;

  const elements = gsap.utils.toArray(targets) as HTMLElement[];

  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      display: 'none',
    },
    {
      opacity: 1,
      display: 'inline',
      duration: charDuration,
      stagger: charDuration,
      delay,
      ease: 'none',
      onComplete: () => {
        // Add cursor blink
        gsap.to(targets, {
          borderRight: '2px solid var(--neon-cyan)',
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'step-end',
        });
      },
    }
  );
}

/**
 * Hero entrance with neon glow build-up
 */
export function heroEntrance(
  targets: string | Element | NodeListOf<Element>,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) {
  const { duration = 1.8, delay = 0 } = options;

  const tl = gsap.timeline({ delay });

  // Initial fade and slide up
  tl.fromTo(
    targets,
    {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      ease: 'power4.out',
    }
  );

  // Add glow pulse after entrance
  tl.to(
    targets,
    {
      textShadow:
        '0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.4)',
      duration: 0.8,
      ease: 'power2.out',
    },
    '-=0.5'
  );

  return tl;
}

// ==========================================
// NEON EFFECTS
// ==========================================

/**
 * Neon border pulse animation
 */
export function neonPulse(
  targets: string | Element | NodeListOf<Element>,
  options: {
    color?: string;
    duration?: number;
  } = {}
) {
  const { color = 'rgba(0, 240, 255,', duration = 2 } = options;

  return gsap.to(targets, {
    boxShadow: `${color} 0.5)`,
    duration: duration / 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}

/**
 * Scanner line effect - horizontal sweep
 */
export function scannerLine(
  container: string | Element,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) {
  const { duration = 3, delay = 0 } = options;

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, delay });

  tl.fromTo(
    '.scanner-line',
    { left: '-100%', opacity: 0 },
    { left: '100%', opacity: 1, duration: duration / 2, ease: 'power2.inOut' }
  ).to('.scanner-line', {
    opacity: 0,
    duration: duration / 4,
    ease: 'power2.inOut',
  });

  return tl;
}

/**
 * Matrix rain effect (subtle background)
 */
export function matrixRain(
  targets: string | Element | NodeListOf<Element>,
  options: {
    duration?: number;
    stagger?: number;
  } = {}
) {
  const { duration = 3, stagger = 0.1 } = options;

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: (i) => 0.1 + (i % 3) * 0.05, // Very subtle
      y: 50,
      duration,
      stagger: {
        each: stagger,
        from: 'random',
      },
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    }
  );
}

// ==========================================
// FLOATING & AMBIENT ANIMATIONS
// ==========================================

/**
 * Floating animation - up/down movement
 */
export function floating(
  targets: string | Element | NodeListOf<Element>,
  options: {
    y?: number;
    duration?: number;
    delay?: number;
  } = {}
) {
  const { y = 20, duration = 3, delay = 0 } = options;

  return gsap.to(targets, {
    y: -y,
    duration,
    delay,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}

/**
 * Floating rotation
 */
export function floatingRotate(
  targets: string | Element | NodeListOf<Element>,
  options: {
    rotation?: number;
    duration?: number;
  } = {}
) {
  const { rotation = 5, duration = 4 } = options;

  return gsap.to(targets, {
    rotation: rotation,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    transformOrigin: 'center center',
  });
}

/**
 * Ambient glow orb animation
 */
export function ambientOrb(
  targets: string | Element | NodeListOf<Element>,
  options: {
    scale?: number;
    duration?: number;
  } = {}
) {
  const { scale = 1.5, duration = 4 } = options;

  return gsap.to(targets, {
    scale,
    opacity: 0.6,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}

// ==========================================
// CARD & LIST ANIMATIONS
// ==========================================

/**
 * Staggered entrance with slide and fade
 */
export function cardStaggerEntrance(
  targets: string | Element | NodeListOf<Element>,
  options: {
    duration?: number;
    stagger?: number;
    delay?: number;
    fromY?: number;
  } = {}
) {
  const { duration = 0.8, stagger = 0.1, delay = 0, fromY = 40 } = options;

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: fromY,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      stagger,
      delay,
      ease: 'power3.out',
    }
  );
}

/**
 * Card hover with glow intensification
 */
export function cardGlowHover(
  targets: string | Element | NodeListOf<Element>,
  options: {
    glowColor?: string;
    scale?: number;
  } = {}
) {
  const { glowColor = 'rgba(0, 240, 255, 0.4)', scale = 1.02 } = options;

  const tl = gsap.timeline({ paused: true });

  tl.to(targets, {
    scale,
    duration: 0.3,
    ease: 'power2.out',
  }).to(
    targets,
    {
      boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
      duration: 0.3,
      ease: 'power2.out',
    },
    '-=0.15'
  );

  return tl;
}

/**
 * Interactive mouse glow trail
 */
export function mouseGlow() {
  if (typeof document === 'undefined') return;

  const glow = document.createElement('div');
  glow.className = 'mouse-glow';
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  `;
  document.body.appendChild(glow);

  document.addEventListener('mousemove', (e) => {
    gsap.to(glow, {
      left: e.clientX,
      top: e.clientY,
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  document.addEventListener('mouseleave', () => {
    gsap.to(glow, {
      opacity: 0,
      duration: 0.3,
    });
  });
}

// ==========================================
// SHAPE & LINE ANIMATIONS
// ==========================================

/**
 * Draw SVG lines (path drawing effect)
 */
export function drawLines(
  targets: string | Element | NodeListOf<Element>,
  options: {
    duration?: number;
    delay?: number;
    stagger?: number;
  } = {}
) {
  const { duration = 1.5, delay = 0, stagger = 0.2 } = options;

  return gsap.fromTo(
    targets,
    { strokeDasharray: 1000, strokeDashoffset: 1000 },
    {
      strokeDashoffset: 0,
      duration,
      delay,
      stagger,
      ease: 'power2.inOut',
    }
  );
}

/**
 * Hexagon rotation animation
 */
export function hexagonSpin(
  targets: string | Element | NodeListOf<Element>,
  options: {
    duration?: number;
  } = {}
) {
  const { duration = 8 } = options;

  return gsap.to(targets, {
    rotation: 360,
    duration,
    repeat: -1,
    ease: 'none',
    transformOrigin: 'center center',
  });
}

/**
 * Pulse ring expansion
 */
export function pulseRings(
  targets: string | Element | NodeListOf<Element>,
  options: {
    scale?: number;
    duration?: number;
  } = {}
) {
  const { scale = 2, duration = 2 } = options;

  return gsap.fromTo(
    targets,
    {
      opacity: 0.8,
      scale: 0.5,
    },
    {
      opacity: 0,
      scale,
      duration,
      repeat: -1,
      ease: 'power2.out',
    }
  );
}

// ==========================================
// PAGE TRANSITIONS
// ==========================================

/**
 * Cyberpunk page transition
 */
export function pageTransitionIn(
  options: {
    duration?: number;
  } = {}
) {
  const { duration = 0.5 } = options;

  const tl = gsap.timeline();

  // Scan line effect
  tl.to('.page-transition-overlay', {
    height: '100%',
    duration: duration,
    ease: 'power4.inOut',
  }).to(
    '.page-transition-overlay',
    {
      height: 0,
      top: '100%',
      duration: duration,
      ease: 'power4.inOut',
    },
    `+=${duration * 0.5}`
  );

  return tl;
}

/**
 * Exit animation
 */
export function pageTransitionOut(
  targets: string | Element = 'main',
  options: {
    duration?: number;
  } = {}
) {
  const { duration = 0.3 } = options;

  return gsap.to(targets, {
    opacity: 0,
    y: -20,
    duration,
    ease: 'power2.in',
  });
}

// ==========================================
// SCROLL LINKED ANIMATIONS
// ==========================================

/**
 * Parallax background effect
 */
export function parallaxScroll(
  targets: string | Element,
  options: {
    speed?: number;
    direction?: 'x' | 'y';
  } = {}
) {
  const { speed = 0.5, direction = 'y' } = options;

  return gsap.to(targets, {
    [direction]: () => `+=${window.innerHeight * speed}`,
    ease: 'none',
    scrollTrigger: {
      trigger: targets,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

/**
 * Rotate on scroll
 */
export function rotateOnScroll(
  targets: string | Element,
  options: {
    rotation?: number;
    start?: string;
    end?: string;
  } = {}
) {
  const { rotation = 360, start = 'top bottom', end = 'bottom top' } = options;

  return gsap.fromTo(
    targets,
    { rotation: 0 },
    {
      rotation,
      ease: 'none',
      scrollTrigger: {
        trigger: targets,
        start,
        end,
        scrub: true,
      },
    }
  );
}

/**
 * Scale reveal on scroll
 */
export function scaleRevealOnScroll(
  targets: string | Element | NodeListOf<Element>,
  options: {
    from?: number;
    to?: number;
    start?: string;
    end?: string;
  } = {}
) {
  const { from = 0.5, to = 1, start = 'top 80%', end = 'top 30%' } = options;

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      scale: from,
    },
    {
      opacity: 1,
      scale: to,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: targets,
        start,
        end,
        toggleActions: 'play none none reverse',
      },
    }
  );
}

// ==========================================
// UTILITIES
// ==========================================

/**
 * Initialize all page animations
 */
export function initPageAnimations() {
  if (typeof window === 'undefined') return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    // Just fade in without dramatic animations
    gsap.to('.animate-on-load', { opacity: 1, duration: 0.5 });
    return;
  }

  // Hero entrance
  gsap.fromTo(
    '.hero-title',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out', delay: 0.2 }
  );

  gsap.fromTo(
    '.hero-subtitle',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
  );

  // Stagger cards
  gsap.fromTo(
    '.stagger-card',
    { opacity: 0, y: 40, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.3,
    }
  );

  // Floating elements
  gsap.to('.float-element', {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    stagger: 0.5,
  });

  // Parallax sections
  gsap.utils.toArray('.parallax-section').forEach((section) => {
    gsap.to(section, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

/**
 * Cleanup animations on page exit
 */
export function cleanupAnimations() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.globalTimeline.clear();
}

export default {
  glitchText,
  typingReveal,
  heroEntrance,
  neonPulse,
  scannerLine,
  matrixRain,
  floating,
  floatingRotate,
  ambientOrb,
  cardStaggerEntrance,
  cardGlowHover,
  mouseGlow,
  drawLines,
  hexagonSpin,
  pulseRings,
  pageTransitionIn,
  pageTransitionOut,
  parallaxScroll,
  rotateOnScroll,
  scaleRevealOnScroll,
  initPageAnimations,
  cleanupAnimations,
};
