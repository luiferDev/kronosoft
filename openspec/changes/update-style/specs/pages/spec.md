# Delta for Pages

## ADDED Requirements

### Requirement: All Pages Must Render with New Theme

All 18 existing pages (9 ES + 9 EN) MUST render correctly with the new visual design.

#### Scenario: Home page (index.astro) renders

- GIVEN user visits `/` or `/en`
- WHEN page loads
- THEN Hero section MUST display with GSAP animations
- AND colors MUST match cyberpunk theme
- AND all content remains intact

#### Scenario: Projects page renders

- GIVEN user visits `/projects` or `/en/projects`
- WHEN page loads
- THEN FeaturedProjectPreview cards MUST have neon borders
- AND project gallery MUST display properly

#### Scenario: Blog page renders

- GIVEN user visits `/blog` or `/en/blog`
- WHEN page loads
- THEN BlogPostCard components MUST have neon styling
- AND filters and sorting MUST function correctly

#### Scenario: Tips page renders

- GIVEN user visits `/tips` or `/en/tips`
- WHEN page loads
- THEN TipCard components MUST have neon styling
- AND all tips MUST display properly

#### Scenario: Contact page renders

- GIVEN user visits `/contact` or `/en/contact`
- WHEN page loads
- THEN ContactForm MUST render with styled elements
- AND calendar booking component MUST function

#### Scenario: Blog post detail renders

- GIVEN user visits `/blog/[slug]` or `/en/blog/[slug]`
- WHEN page loads
- THEN blog post content MUST render with proper typography
- AND table of contents MUST be styled appropriately

#### Scenario: Tips detail renders

- GIVEN user visits `/tips/[slug]` or `/en/tips/[slug]`
- WHEN page loads
- THEN tip content MUST render properly

#### Scenario: Project detail renders

- GIVEN user visits `/projects/[slug]` or `/en/projects/[slug]`
- WHEN page loads
- THEN project detail MUST display with gallery and content

#### Scenario: 404 page renders

- GIVEN user visits non-existent page
- WHEN 404 page displays
- THEN it MUST have cyberpunk styling consistent with theme

### Requirement: Responsive Design Across All Pages

The system MUST maintain responsive design with the new theme.

#### Scenario: Mobile viewport (320px-767px)

- GIVEN user visits any page on mobile
- WHEN page loads
- THEN layout MUST adjust properly
- AND BottomAppBar MUST be visible
- AND Header MUST be hidden

#### Scenario: Tablet viewport (768px-1023px)

- GIVEN user visits any page on tablet
- WHEN page loads
- THEN layout SHOULD show Header
- AND components SHOULD scale appropriately

#### Scenario: Desktop viewport (1024px+)

- GIVEN user visits any page on desktop
- WHEN page loads
- THEN full layout with Header and Footer MUST display
- AND animations SHOULD be more elaborate

## MODIFIED Requirements

### Requirement: Page Layout Updates

All pages SHOULD receive enhanced visual styling.
(Previously: Basic styling with generic blue theme)

#### Scenario: BaseLayout styling update

- GIVEN any page using BaseLayout renders
- WHEN page loads
- THEN global CSS with cyberpunk colors MUST be applied
- AND theme toggle MUST work with GSAP animation

#### Scenario: Content preservation

- GIVEN pages are updated with new visual design
- WHEN the change is complete
- THEN ALL existing content MUST remain unchanged
- AND no content should be lost or modified
