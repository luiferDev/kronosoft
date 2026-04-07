# Tasks: update-style - Cyberpunk/Elegante Visual Redesign

## Phase 1: Foundation (CSS Variables & Utilities)

- [ ] 1.1 Add neon CSS variables to `src/styles/global.css` (--neon-cyan, --neon-magenta, --neon-green, --neon-purple, --neon-orange) in :root
- [ ] 1.2 Enhance `.dark` class in `src/styles/global.css` with neon accent overrides and background #0a0a0f
- [ ] 1.3 Add glow utility classes to `src/styles/global.css` (.glow-cyan, .glow-magenta, .glow-green, .glow-purple, .glow-orange)
- [ ] 1.4 Add glassmorphism utility classes to `src/styles/global.css` (.glass, .glass-card) with backdrop-filter and neon borders

## Phase 2: GSAP Setup

- [ ] 2.1 Create `src/lib/gsap-utils.ts` with initGSAP() function that registers ScrollTrigger (SSR-safe)
- [ ] 2.2 Add fadeInUp() utility to `src/lib/gsap-utils.ts` (duration: 0.8, ease: power3.out)
- [ ] 2.3 Add staggerFadeIn() utility to `src/lib/gsap-utils.ts` (duration: 0.6, stagger: 0.1, ease: power2.out)
- [ ] 2.4 Add cardHoverAnim() and cardLeaveAnim() utilities to `src/lib/gsap-utils.ts`
- [ ] 2.5 Add prefers-reduced-motion check in gsap-utils.ts to disable animations when needed

## Phase 3: Components - Core

- [ ] 3.1 Update `src/components/ThemeToggle.astro` - add GSAP-powered switch animation with neon glow
- [ ] 3.2 Update `src/components/Header.astro` - add glassmorphism class, neon bottom border, nav item hover glow effects
- [ ] 3.3 Update `src/components/Footer.astro` - add neon accent line, enhanced glow styling

## Phase 4: Components - UI

- [ ] 4.1 Update `src/components/ui/card.tsx` - add neon border variants and glow-on-hover class
- [ ] 4.2 Update `src/components/ui/button.tsx` - add glow-cyan and glow-magenta variant classes
- [ ] 4.3 Update `src/components/ui/dialog.tsx` - add glassmorphism backdrop effect

## Phase 5: Components - Cards

- [ ] 5.1 Update `src/components/SkillCard.tsx` - add neon border, implement GSAP cardHoverAnim/cardLeaveAnim via useGSAP
- [ ] 5.2 Update `src/components/BlogPostCard.tsx` - add neon border, implement GSAP hover animations
- [ ] 5.3 Update `src/components/TipCard.tsx` - add neon border, implement GSAP hover animations
- [ ] 5.4 Update `src/components/FeaturedProjectPreview.tsx` - add neon border, implement GSAP hover animations

## Phase 6: Layout & Pages

- [ ] 6.1 Update `src/layouts/BaseLayout.astro` - import gsap-utils, add page entry fade-in animation
- [ ] 6.2 Update `src/pages/index.astro` - add Hero section GSAP animations (elegante: slower 1.2s duration, smooth easing)
- [ ] 6.3 Update `src/pages/projects.astro` - add page entry animations with stagger effect
- [ ] 6.4 Update `src/pages/blog/index.astro` - add page entry animations with stagger effect
- [ ] 6.5 Update `src/pages/tips/index.astro` - add page entry animations with stagger effect
- [ ] 6.6 Update `src/pages/contact.astro` - add form field animations (staggered fade-in)

## Phase 7: Verification

- [ ] 7.1 Verify dark mode displays neon colors correctly (CSS inspection in DevTools)
- [ ] 7.2 Verify glassmorphism visible on Header (backdrop-filter, transparency)
- [ ] 7.3 Verify ThemeToggle switches theme and persists to localStorage
- [ ] 7.4 Verify GSAP animations execute on page load (all pages)
- [ ] 7.5 Verify card hover animations trigger correctly (Skills, Blog, Tips, Projects)
- [ ] 7.6 Verify prefers-reduced-motion disables all animations (OS setting enabled)
- [ ] 7.7 Verify light mode remains clean/neutral (no neon overload)

---

## Implementation Order

1. **Phase 1 first**: CSS variables are foundation - all other phases depend on these
2. **Phase 2 second**: GSAP utilities needed by components and pages
3. **Phase 3-5**: Components in dependency order (core → UI → cards)
4. **Phase 6**: Pages depend on components being ready
5. **Phase 7 last**: Verification after all implementation complete

## Notes

- Light mode: subtle neon (user confirmed "Neón sutil")
- Hero animation: elegante (slower/smoother, ~1.2s, not fast)
- All page animations: high priority per user
- Test each phase before moving to next to catch issues early
