# Kronosoft Codebase Exploration - update-style

## Overview

Comprehensive exploration of the Kronosoft Astro portfolio/blog codebase for the "update-style" redesign.

---

## 1. Page Structure (src/pages/)

### Spanish (default locale) - 9 pages

| Page           | Path               | Purpose               |
| -------------- | ------------------ | --------------------- |
| Home           | `/`                | Main portfolio screen |
| Blog           | `/blog`            | Blog listing          |
| Blog Post      | `/blog/[...slug]`  | Individual blog post  |
| Projects       | `/projects`        | Projects listing      |
| Project Detail | `/projects/[slug]` | Individual project    |
| Tips           | `/tips`            | Tips listing          |
| Tip Detail     | `/tips/[...slug]`  | Individual tip        |
| Contact        | `/contact`         | Contact form          |
| 404            | `/404`             | Not found page        |

### English locale - 9 pages

Same structure under `/en/` prefix.

**Total: 18 pages**

---

## 2. Components

### Main Components (src/components/)

- `Header.astro` - Sticky header with nav, logo, language selector, theme toggle
- `Footer.astro` - Simple copyright footer
- `BottomAppBar.astro` - Mobile navigation bar
- `Logo.astro` - Logo component
- `ThemeToggle.astro` - Dark/light mode toggle
- `LanguageSelector.tsx` - Language switcher dropdown
- `Heading.astro` - Reusable heading
- `Prose.astro` - Typography prose wrapper
- `SectionCard.astro` - Section card container
- `SkillCard.astro` - Skill display card
- `CalendarBooking.tsx` - Google Calendar integration
- `EmptyState.tsx` - Empty state placeholder

### shadcn/ui Components (src/components/ui/) - 27 components

- button.tsx
- input.tsx
- textarea.tsx
- form.tsx
- label.tsx
- checkbox.tsx
- radio-group.tsx
- switch.tsx
- select.tsx
- dialog.tsx
- sheet.tsx
- drawer.tsx
- popover.tsx
- tooltip.tsx
- accordion.tsx
- tabs.tsx
- card.tsx
- badge.tsx
- avatar.tsx
- skeleton.tsx
- separator.tsx
- carousel.tsx
- table.tsx
- breadcrumb.tsx
- alert.tsx
- command.tsx
- context-menu.tsx
- dropdown-menu.tsx
- sonner.tsx (toast notifications)
- calendar.tsx

### Feature Components (src/features/\*/components/)

**Blog:**

- `BlogPostCard.astro`
- `BlogFilters.tsx`
- `FilteredPostsList.tsx`
- `InfoAlert.tsx`
- `TableOfContents.astro`
- `StackBlitzEmbed.astro`

**Projects:**

- `FeaturedProjectPreview.astro`
- `ProjectGallery.tsx`

**Tips:**

- `TipCard.astro`

**Contact:**

- `ContactForm.tsx`

### Screen Components (src/features/\*/screens/)

- `HomeScreen.astro`
- `AllBlogPostsScreen.astro`
- `BlogPostDetailScreen.astro`
- `ProjectsScreen.astro`
- `ProjectScreen.astro`
- `AllTipsScreen.astro`
- `ContactPageScreen.astro`

---

## 3. Current Styling Approach

### Design System: Tailwind CSS 4 with CSS Variables

**File:** `src/styles/global.css`

#### Color Tokens (Light Mode)

```
--background: #cccccc
--foreground: #000000
--card: #fcfcfc
--card-foreground: #202020
--primary: #0043ffff
--primary-foreground: #ffffff
--secondary: #0043ff64
--secondary-foreground: #ffffff
--muted: #efefef
--muted-foreground: #646464
--accent: #e8e8e8
--accent-foreground: #202020
--destructive: #e54d2e
--destructive-foreground: #ffffff
--border: #d8d8d8
--input: #d8d8d8
--ring: #644a40
```

#### Color Tokens (Dark Mode)

```
--background: #000000
--foreground: #ffffff
--card: oklch(0.2134 0 0)
--card-foreground: oklch(0.9491 0 0)
--primary: #0043ffff
--primary-foreground: #ffffff
--secondary: #0044ff64
--secondary-foreground: #cccccc
--muted: oklch(0.252 0 0)
--muted-foreground: oklch(0.7699 0 0)
--accent: #0043ff
--accent-foreground: oklch(0.9491 0 0)
--destructive: oklch(0.6271 0.1936 33.339)
--destructive-foreground: oklch(1 0 0)
--border: oklch(0.2351 0.0115 91.7467)
--input: oklch(0.4017 0 0)
--ring: #ffe0c2
```

#### Typography

- **Headings:** Luxomona (custom font from `/fonts/luxomona.otf`)
- **Body:** Roboto
- **Code:** System monospace
- **Base font:** `--font-sans`

#### Spacing

- Uses Tailwind CSS 4 standard spacing
- Radius: `--radius: 0.5rem`
- Shadows: multiple levels (2xs, xs, sm, md, lg, xl, 2xl)

---

## 4. Layout Structure

### BaseLayout (src/layouts/BaseLayout.astro)

- HTML shell with SEO meta tags
- Favicons (light/dark mode)
- Theme initialization script
- Google Fonts preconnect
- Mermaid.js integration
- Astro ClientRouter for SPA navigation
- Header (desktop), Footer, BottomAppBar (mobile)
- Toaster for notifications

---

## 5. Animation Approach

### CURRENT STATE: **NO GSAP USAGE**

- GSAP is installed in dependencies but NOT used anywhere
- Only CSS transitions are present

### Existing Transitions

- **hover:shadow-lg** - Card hover effects
- **transition-colors**, **transition-all**, **transition-transform** - Various CSS transitions
- **duration-200/300/500** - Transition timing
- Astro **ClientRouter** - Built-in page transitions

### Examples in Code

```astro
class="hover:shadow-xl transition-shadow duration-300"
class="group-hover:scale-105 transition-transform duration-300"
class="transition-colors duration-200"
```

---

## 6. i18n Configuration

### Supported Languages

- Spanish (es) - default
- English (en)

### Routing

- `prefixDefaultLocale: false` - No prefix for Spanish
- English uses `/en/` prefix

### Translation Files

- `src/i18n/ui.ts` - Complete UI translations (1350+ lines)
- `src/i18n/zodErrorMap.ts` - Form validation errors

### Structure

- Site metadata
- Navigation labels
- Page-specific content (homePage, blogPage, contactPage, etc.)
- Projects content (hardcoded in ui.ts)
- Skills content (hardcoded)
- Footer content

---

## 7. Content Structure

### Blog Posts (MDX)

Location: `src/features/blog/content/`

- `es/software-a-medida-empresas.mdx`
- `es/ejemplo-articulo.mdx`
- `es/vibe-coding-sin-fundamentos.mdx`
- `en/custom-software-business-success.mdx`
- `en/vibe-coding-without-fundamentals.mdx`
- `en/example-post.mdx`

### Tips (MDX)

Location: `src/features/tips/content/`

- `es/ejemplo-consejo.mdx`
- `en/example-tip.mdx`

### Projects

- **NOT in content collections** - hardcoded in `src/i18n/ui.ts`
- 15 projects defined with full details
- Includes: title, description, images, features, gallery

### Skills

- **Hardcoded in ui.ts** - 6 skills
- Frontend, Backend, UI/UX, DevOps, IA, Mobile

---

## 8. Tech Stack Summary

| Category   | Technology                   |
| ---------- | ---------------------------- |
| Framework  | Astro 5.8.1                  |
| UI         | React 19                     |
| Styling    | Tailwind CSS 4               |
| Components | shadcn/ui (Radix primitives) |
| Animation  | GSAP installed but unused    |
| i18n       | Spanish + English            |
| Content    | MDX files                    |
| Deployment | Vercel adapter               |
| Fonts      | Luxomona (custom), Roboto    |

---

## 9. Design Observations for Redesign

### Strengths

- Clean page structure
- Good component organization
- i18n already configured
- Basic dark/light theme
- Responsive design (mobile + desktop nav)

### Weaknesses (Redesign Opportunities)

1. **No GSAP animations** - despite library installed
2. **Basic blue primary color** - no real brand identity
3. **Hardcoded projects** - should be content collections
4. **Minimal footer** - just copyright
5. **No sophisticated animations** - only hover effects
6. **Generic design** - needs cyberpunk/futuristic vibe

### Recommended Improvements

- Add GSAP animations throughout
- Define real brand colors (neon accents, cyberpunk palette)
- Move projects to content collections
- Animate header/footer interactions
- Add hero section animations
- Implement scroll-triggered animations
- Upgrade to modern visual identity

---

## 10. File Structure Overview

```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── BottomAppBar.astro
│   ├── Logo.astro
│   ├── ThemeToggle.astro
│   ├── LanguageSelector.tsx
│   ├── SkillCard.astro
│   ├── ui/ (27 shadcn components)
│   └── [others]
├── features/
│   ├── blog/
│   │   ├── components/
│   │   ├── screens/
│   │   └── content/
│   ├── projects/
│   │   ├── components/
│   │   └── screens/
│   ├── tips/
│   │   ├── components/
│   │   └── screens/
│   └── contact/
│       └── components/
├── i18n/
│   ├── ui.ts (translations)
│   └── zodErrorMap.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── [en/es]/*.astro
│   └── api/
├── styles/
│   └── global.css
└── [other files]
```

---

## Next Steps (for orchestrator)

This exploration reveals:

1. **Green light for GSAP** - library is installed but completely unused
2. **Major redesign opportunity** - from generic to cyberpunk aesthetic
3. **Content migration needed** - projects should be content collections
4. **Brand identity needed** - replace basic blue with neon palette

Ready for proposal phase (`sdd-propose`).
