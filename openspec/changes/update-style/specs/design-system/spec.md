# Delta for Design System

## ADDED Requirements

### Requirement: Cyberpunk Dark Theme Colors

The system MUST define a new CSS color palette optimized for cyberpunk/elegante dark mode aesthetic.

#### Scenario: Light mode colors applied

- GIVEN the user visits the site in light mode
- WHEN the page loads
- THEN the light mode colors from `:root` MUST be applied
- AND `--background` MUST be `#f0f0f0` (light gray)
- AND `--foreground` MUST be `#0a0a0f` (near black)
- AND `--primary` MUST be `#0043ff` (Kronosoft brand blue)

#### Scenario: Dark mode default colors applied

- GIVEN the user visits the site in dark mode
- WHEN the page loads
- THEN the dark mode colors from `.dark` class MUST be applied
- AND `--background` MUST be `#0a0a0f` (deep dark)
- AND `--foreground` MUST be `#e0e0e0` (soft white)
- AND `--primary` MUST be `#00f0ff` (neon cyan)
- AND `--secondary` MUST be `#ff00aa` (neon magenta)

### Requirement: Neon Accent Colors

The system MUST define neon accent colors for cyberpunk visual effects.

#### Scenario: Accent colors available as CSS variables

- GIVEN CSS is loaded
- WHEN the page renders
- THEN the following neon colors MUST be available as CSS variables:
  - `--neon-cyan`: `#00f0ff`
  - `--neon-magenta`: `#ff00aa`
  - `--neon-green`: `#00ff88`
  - `--neon-purple`: `#b04aff`
  - `--neon-orange`: `#ff6b35`

#### Scenario: Neon accent used for interactive elements

- GIVEN the user hovers over a button or link
- WHEN the hover state is triggered
- THEN the neon accent color MUST be visible as glow or highlight effect

### Requirement: Glassmorphism Backgrounds

The system MUST support glassmorphism effect for header and overlay components.

#### Scenario: Glassmorphism applied to header

- GIVEN the user visits any page
- WHEN the header renders
- THEN the header background MUST have:
  - `backdrop-filter: blur(12px)` or equivalent
  - Semi-transparent background (alpha < 1)
  - Subtle border with low opacity

#### Scenario: Glassmorphism on modals/dialogs

- GIVEN a modal or dialog opens
- WHEN it renders
- THEN the background MUST have glassmorphism effect with blur

### Requirement: Glow Effects

The system MUST support glow effects using box-shadow with neon colors.

#### Scenario: Glow effect CSS class available

- GIVEN CSS is loaded
- WHEN the developer applies `.glow-cyan` class to an element
- THEN the element MUST display cyan glow: `box-shadow: 0 0 20px rgba(0, 240, 255, 0.5)`

#### Scenario: Multiple glow color variants

- GIVEN the system has glow classes
- WHEN the developer applies `.glow-magenta`, `.glow-green`, or `.glow-purple`
- THEN each MUST display the respective color glow effect

### Requirement: Typography Scale

The system MUST maintain current typography while adding cyberpunk styling.

#### Scenario: Heading font (Luxomona) applied

- GIVEN the site loads
- WHEN h1-h6 elements are rendered
- THEN Luxomona font MUST be applied via `font-family: 'Luxomona'`

#### Scenario: Body font (Roboto) applied

- GIVEN the site loads
- WHEN p, span, a, li elements render
- THEN Roboto font MUST be applied via `font-family: 'Roboto', sans-serif`

## MODIFIED Requirements

### Requirement: CSS Variables Structure

The system MUST extend existing CSS variables to include neon colors and glow definitions.
(Previously: Basic light/dark mode colors only)

#### Scenario: Extended CSS variables in global.css

- GIVEN global.css is loaded
- WHEN CSS variables are defined in `:root` and `.dark`
- THEN the file MUST include:
  - Neon color definitions (`--neon-cyan`, etc.)
  - Glow utility classes
  - Glassmorphism utility classes
