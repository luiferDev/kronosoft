# Design: update-style - Cyberpunk/Elegante Visual Redesign

## Technical Approach

This design implements a complete visual redesign of the Kronosoft portfolio from its current clean/minimal aesthetic to a cyberpunk/elegante futurista theme. The implementation follows a layered approach:

1. **Foundation Layer**: Extend CSS variables in `global.css` with neon color system and utility classes
2. **Animation Layer**: Create GSAP utilities module with React integration and Astro-compatible helpers
3. **Component Layer**: Update all major components (Header, Footer, Cards, Buttons) with new styling
4. **Page Layer**: Apply animations to page content with staggered entry effects

The design maintains backward compatibility for light mode while introducing dark mode as the primary aesthetic with neon accents.

## Architecture Decisions

### Decision: Color System Architecture

**Choice**: Extend existing CSS variables in `global.css` with new neon variables, keeping `:root` for light mode and `.dark` for cyberpunk dark mode.

**Alternatives considered**:

- Creating separate CSS file for cyberpunk theme (rejected: fragments styling)
- Using CSS custom properties with JS theme detection (rejected: adds complexity)

**Rationale**: Tailwind 4's `@theme inline` supports direct CSS variable mapping. Extending existing structure maintains consistency with shadcn/ui components while adding neon palette.

### Decision: GSAP Integration Pattern

**Choice**: Create `src/lib/gsap-utils.ts` with reusable animations + `@gsap/react` for React components + inline scripts for Astro components.

**Alternatives considered**:

- Loading GSAP globally on every page (rejected: unnecessary bundle size)
- Using View Transitions for all animations (rejected: GSAP provides finer control)

**Rationale**: `@gsap/react` provides proper cleanup in React components. Astro components use inline scripts to avoid hydration issues. Centralized utils ensure consistent animation patterns across pages.

### Decision: Glassmorphism Implementation

**Choice**: Add CSS utility classes in `global.css` rather than inline styles, applied via Tailwind classes.

**Alternatives considered**:

- Creating a Glassmorphism React component (rejected: overkill, simpler with utilities)
- Using backdrop-filter directly in component classes (rejected: leads to duplication)

**Rationale**: Utility classes (`glass`, `glass-card`) enable consistent reuse across Header, modals, and cards.

## Data Flow

```
┌─────────────────────────────────────────────────────────┐
│                    BaseLayout.astro                     │
│  ┌─────────────┐  ┌─────────────┐  ┌────────────────┐  │
│  │ global.css  │  │ gsap-utils  │  │ ThemeToggle   │  │
│  │ (variables) │  │ (animation) │  │ (GSAP + theme) │  │
│  └─────────────┘  └─────────────┘  └────────────────┘  │
└─────────────────────────────────────────────────────────┘
         │                │                 │
         ▼                ▼                 ▼
┌─────────────────────────────────────────────────────────┐
│                      Components                          │
│  ┌──────┐ ┌──────┐ ┌───────┐ ┌────────┐ ┌─────────┐    │
│  │Header│ │Footer│ │Cards  │ │Buttons │ │Dialogs │    │
│  │Glass │ │Neon  │ │Glow   │ │Glow    │ │Glass   │    │
│  └──────┘ └──────┘ └───────┘ └────────┘ └─────────┘    │
└─────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────┐
│                       Pages                             │
│  ┌────────┐ ┌───────┐ ┌────────┐ ┌───────┐ ┌────────┐ │
│  │ Hero   │ │ Skills │ │ Blog   │ │ Tips  │ │Contact│ │
│  │ Anim   │ │ Anim  │ │ Anim   │ │ Anim  │ │ Anim  │ │
│  └────────┘ └───────┘ └────────┘ └───────┘ └────────┘ │
└─────────────────────────────────────────────────────────┘
```

## File Changes

| File                                        | Action | Description                                                   |
| ------------------------------------------- | ------ | ------------------------------------------------------------- |
| `src/styles/global.css`                     | Modify | Add neon CSS variables, glow utilities, glassmorphism classes |
| `src/lib/gsap-utils.ts`                     | Create | Reusable GSAP animation utilities with React/Astro support    |
| `src/components/ThemeToggle.astro`          | Modify | Add GSAP-powered theme switch animation                       |
| `src/components/Header.astro`               | Modify | Add glassmorphism, neon border, nav item glow effects         |
| `src/components/Footer.astro`               | Modify | Add neon accent line, enhanced styling                        |
| `src/components/ui/card.tsx`                | Modify | Add neon border variants, glow on hover                       |
| `src/components/ui/button.tsx`              | Modify | Add glow variants (glow-cyan, glow-magenta)                   |
| `src/components/ui/dialog.tsx`              | Modify | Add glassmorphism backdrop effect                             |
| `src/components/SkillCard.tsx`              | Modify | Add neon border, GSAP hover animation                         |
| `src/components/BlogPostCard.tsx`           | Modify | Add neon border, GSAP hover animation                         |
| `src/components/TipCard.tsx`                | Modify | Add neon border, GSAP hover animation                         |
| `src/components/FeaturedProjectPreview.tsx` | Modify | Add neon border, GSAP hover animation                         |
| `src/layouts/BaseLayout.astro`              | Modify | Import GSAP, add page entry animation hook                    |
| `src/pages/index.astro`                     | Modify | Add Hero section GSAP animations                              |
| `src/pages/projects.astro`                  | Modify | Add page entry animations                                     |
| `src/pages/blog/index.astro`                | Modify | Add page entry animations                                     |
| `src/pages/tips/index.astro`                | Modify | Add page entry animations                                     |
| `src/pages/contact.astro`                   | Modify | Add form animations                                           |

## Interface Contracts

### CSS Variables (global.css extension)

```css
/* Neon accent colors */
:root {
  /* Existing light mode colors remain unchanged */
  --neon-cyan: #00f0ff;
  --neon-magenta: #ff00aa;
  --neon-green: #00ff88;
  --neon-purple: #b04aff;
  --neon-orange: #ff6b35;
}

.dark {
  /* Enhanced dark mode with neon accents */
  --background: #0a0a0f;
  --foreground: #e0e0e0;
  --primary: #00f0ff;
  --secondary: #ff00aa;
  --neon-cyan: #00f0ff;
  --neon-magenta: #ff00aa;
  --neon-green: #00ff88;
  --neon-purple: #b04aff;
  --neon-orange: #ff6b35;
}
```

### Glow Utility Classes

```css
.glow-cyan {
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
}
.glow-magenta {
  box-shadow: 0 0 20px rgba(255, 0, 170, 0.5);
}
.glow-green {
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
}
.glow-purple {
  box-shadow: 0 0 20px rgba(176, 74, 255, 0.5);
}
```

### Glassmorphism Classes

```css
.glass {
  background: rgba(10, 10, 15, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 240, 255, 0.1);
}

.glass-card {
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 240, 255, 0.15);
}
```

### GSAP Utils Module (src/lib/gsap-utils.ts)

```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initGSAP() {
  if (typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = (element: Element, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out' }
  );
};

export const staggerFadeIn = (elements: Element[], stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, stagger, ease: 'power2.out' }
  );
};

export const cardHoverAnim = (element: Element) => {
  return gsap.to(element, {
    scale: 1.02,
    boxShadow: '0 0 25px rgba(0, 240, 255, 0.4)',
    duration: 0.3,
    ease: 'power2.out',
  });
};

export const cardLeaveAnim = (element: Element) => {
  return gsap.to(element, {
    scale: 1,
    boxShadow: 'none',
    duration: 0.2,
    ease: 'power2.in',
  });
};
```

## Testing Strategy

| Layer      | What to Test                      | Approach                                                         |
| ---------- | --------------------------------- | ---------------------------------------------------------------- |
| Visual     | Color variables applied correctly | Manual: Inspect CSS in DevTools, verify neon colors in dark mode |
| Visual     | Glassmorphism visible on Header   | Manual: Verify backdrop-filter, transparency                     |
| Functional | ThemeToggle switches correctly    | Manual: Click toggle, verify localStorage and class              |
| Functional | GSAP animations execute           | Manual: Page load, scroll, hover interactions                    |
| Functional | prefers-reduced-motion respected  | Manual: Enable setting in OS, verify no animations               |

## Migration / Rollout

No migration required. This is a visual-only change that:

- Maintains existing content and structure
- Adds new CSS classes without removing existing ones
- Uses feature detection for animations (prefers-reduced-motion)

Rollout can be immediate to all pages. No feature flags needed.

## Open Questions

- [ ] Should light mode also have neon accents (subtle) or stay clean?
- [ ] Specific hero animation timing preferences for "elegante" feel?
- [ ] Which specific pages need priority animation work?

---

## Design Created

**Change**: update-style
**Location**: openspec/changes/update-style/design.md

### Summary

- **Approach**: Layered implementation (CSS variables → GSAP utilities → Components → Pages)
- **Key Decisions**: 3 major decisions (color system, GSAP integration, glassmorphism)
- **Files Affected**: 4 new (gsap-utils.ts), 15 modified, 0 deleted
- **Testing Strategy**: Manual visual + functional testing

### Open Questions

- Light mode styling approach (subtle vs clean)
- Hero animation timing preference
- Page animation priority

### Next Step

Ready for sdd-tasks to break down implementation into actionable items.
