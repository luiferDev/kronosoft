# Delta for Components

## ADDED Requirements

### Requirement: Header Glassmorphism Effect

The Header component MUST have glassmorphism styling.

#### Scenario: Header with glass effect

- GIVEN the Header component renders
- WHEN the page loads in dark mode
- THEN the header MUST have:
  - Semi-transparent background with blur
  - Subtle neon border accent
  - Glow effect on active navigation items

#### Scenario: Mobile header behavior

- GIVEN mobile viewport (< 768px)
- WHEN the page loads
- THEN the Header component SHOULD be hidden (mobile uses BottomAppBar)

### Requirement: Neon Border on Cards

All card components (SkillCard, BlogPostCard, TipCard, FeaturedProjectPreview) MUST have neon border effects.

#### Scenario: Card with neon border in dark mode

- GIVEN any card component renders in dark mode
- WHEN the card displays
- THEN the card MUST have:
  - Subtle neon border color (cyan, magenta, or green)
  - Glow effect on hover

#### Scenario: Card hover state

- GIVEN the user hovers over a card
- WHEN mouse enters card area
- THEN the card MUST animate with:
  - Enhanced border glow
  - Slight scale transform (1.02)
  - Transition duration of 200-300ms

### Requirement: Button Glow Effects

The system MUST include glow effects on buttons.

#### Scenario: Primary button with glow

- GIVEN a primary button renders in dark mode
- WHEN the button displays
- THEN the button MUST have neon glow matching the primary color

#### Scenario: Button hover glow intensity

- GIVEN the user hovers over a glowing button
- WHEN hover is triggered
- THEN the glow intensity MUST increase (larger spread or brighter color)

### Requirement: ThemeToggle with GSAP Animation

The ThemeToggle component MUST have GSAP-powered animations.

#### Scenario: Theme toggle animation on click

- GIVEN the ThemeToggle button is clicked
- WHEN the theme changes
- THEN the toggle MUST animate smoothly using GSAP
- AND the animation duration MUST be 300-500ms

### Requirement: Footer Enhanced Design

The Footer component MUST be enhanced with additional content and visual effects.

#### Scenario: Footer with glow accent

- GIVEN the Footer component renders
- WHEN the page displays
- THEN the footer MUST have:
  - Consistent dark background
  - Neon accent line or border
  - Proper spacing and layout

## MODIFIED Requirements

### Requirement: shadcn/ui Component Theme Override

The shadcn/ui components MUST be updated to respect the cyberpunk theme.
(Previously: Generic purple/violet theme)

#### Scenario: Dark mode shadcn components

- GIVEN a shadcn component (Button, Card, Dialog) renders in dark mode
- WHEN the component displays
- THEN it MUST use the neon color palette instead of purple
- AND maintain full functionality

#### Scenario: Light mode shadcn components

- GIVEN a shadcn component renders in light mode
- WHEN the component displays
- THEN it MAY have reduced glow effects
- AND still use the Kronosoft brand blue (#0043ff)

## REMOVED Requirements

### Requirement: Generic Blue Theme

The generic blue primary color MUST be removed from dark mode.
(Reason: Replaced with neon cyan for cyberpunk aesthetic while maintaining brand in light mode)
