# Delta for Animations

## ADDED Requirements

### Requirement: GSAP Integration for Page Animations

The system MUST use GSAP for entry animations on all pages.

#### Scenario: Page entry animation

- GIVEN a page loads
- WHEN the content becomes visible
- THEN GSAP animations MUST execute automatically
- AND elements SHOULD fade in or slide up into position

#### Scenario: Animation prefers-reduced-motion

- GIVEN the user has `prefers-reduced-motion` enabled in OS
- WHEN the page loads
- THEN GSAP animations MUST be disabled or replaced with simple fades
- AND the site MUST remain fully functional

### Requirement: Scroll-triggered Animations

The system MUST support ScrollTrigger for scroll-based animations.

#### Scenario: Scroll animation trigger

- GIVEN an element has scroll animation applied
- WHEN the element enters the viewport
- THEN the animation MUST trigger automatically
- AND the trigger point SHOULD be configurable (start, center, end)

#### Scenario: Animation scrub behavior

- GIVEN a scroll-linked animation is configured
- WHEN the user scrolls
- THEN the animation progress SHOULD be tied to scroll position (scrub)
- OR fire once when entering viewport

### Requirement: Card Hover Animations

The system MUST implement GSAP animations on card hover states.

#### Scenario: Card scale and glow on hover

- GIVEN the user hovers over a card (SkillCard, BlogPostCard, TipCard)
- WHEN mouse enters the card
- THEN GSAP MUST animate:
  - Scale to 1.02-1.05
  - Enhanced glow effect
  - Duration of 200-400ms
  - Easing: power2.out

#### Scenario: Card return animation on mouse leave

- GIVEN a card was hovered
- WHEN mouse leaves the card
- THEN GSAP MUST animate back to original state
- AND duration SHOULD be 150-300ms

### Requirement: Button Hover Animations

The system MUST implement GSAP animations on button interactions.

#### Scenario: Button glow pulse on hover

- GIVEN the user hovers over a button with glow effect
- WHEN hover is triggered
- THEN GSAP MUST animate:
  - Glow intensity increase
  - Optional scale (1.02)
  - Duration: 200ms

### Requirement: Header Animations

The system MUST implement animations on the Header component.

#### Scenario: Header glass effect animation

- GIVEN the page loads
- WHEN the header renders
- THEN GSAP MAY animate:
  - Fade in from top
  - Stagger animation for nav items
  - Duration: 500-800ms

### Requirement: Hero Section Animations

The Hero section MUST have cyberpunk-themed GSAP animations.

#### Scenario: Hero text animation

- GIVEN the index page loads (Hero section)
- WHEN the page renders
- THEN GSAP MUST animate:
  - Text reveal (fade + slide up)
  - Optional typing effect for headline
  - Duration: 800-1200ms total
  - Stagger: 100-200ms between elements

#### Scenario: Hero glow animation

- GIVEN the Hero section renders
- WHEN initial animation completes
- THEN ambient glow effects SHOULD animate continuously
- AND animation SHOULD be subtle (breathing/pulsing)

## MODIFIED Requirements

### Requirement: ThemeToggle Animation Migration

The ThemeToggle MUST use GSAP instead of CSS transitions.
(Previously: CSS transition for theme switch)

#### Scenario: GSAP theme transition

- GIVEN the ThemeToggle is clicked
- WHEN theme changes
- THEN GSAP MUST handle the transition
- AND duration MUST be 300-500ms
