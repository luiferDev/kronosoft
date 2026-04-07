# Kronosoft - Astro Portfolio/Blog

## Key Commands

- `bun dev` - Start dev server at http://localhost:4321
- `bun build` - Production build to `./dist/`
- `bun preview` - Preview production build locally
- `bun astro ...` - Run Astro CLI (e.g., `astro add`, `astro check`)
- `bun run format` - Run Prettier on entire project

## Tech Stack

- **Framework**: Astro 5.8.1 + React 19
- **Styling**: Tailwind CSS 4 + shadcn/ui (Radix primitives)
- **i18n**: Spanish (default) + English; configured in `astro.config.mjs`
- **Package Manager**: Bun (npm/yarn/pnpm also work)

## Skills to Load (Auto-detected)

Load these skills when working on specific tasks:

- **typescript** - TypeScript strict patterns, types, interfaces, generics
- **tailwind-4** - Tailwind CSS 4 patterns, cn() utility, theme variables
- **gsap-core** - GSAP core API: gsap.to(), from(), easing, duration, stagger
- **gsap-react** - GSAP in React: useGSAP hook, refs, gsap.context(), cleanup
- **gsap-timeline** - GSAP timelines for sequencing animations
- **gsap-plugins** - GSAP plugins: ScrollToPlugin, ScrollTrigger, Flip, etc.
- **gsap-scrolltrigger** - Scroll-triggered animations, pinning, scrub
- **screaming-architecture** - Feature-based folder organization
- **react-19** - React 19 patterns with React Compiler
- **form-security** - Secure form handling (contact form exists)

## Typography (DO NOT CHANGE)

- **Headings**: Luxomona (custom font in `/fonts/luxomona.otf`)
- **Body**: Roboto
- **Code**: Monospace (system default)

## Styling Rules

**ALWAYS use Tailwind CSS 4** for all styles. DO NOT use inline styles or CSS modules unless absolutely necessary.

**ALWAYS use GSAP** for animations. DO NOT use CSS animations or Framer Motion.

### Design Style

- **Theme**: Futurista, elegante, cyberpunk
- **Brand Colors**: Mantener colores de la marca Kronosoft
- **Vibe**: Tech company moderna, innovadora, profesional
- **Use**: Neon accents, dark mode por defecto, efectos de glow, tipografía limpia

## Project Structure

- `src/features/` - Feature modules (blog, projects, contact)
- `src/features/blog/content/` - Blog posts (MDX, organized by lang: en/, es/)
- `src/features/tips/content/` - Tips posts
- `src/pages/api/` - API endpoints (contact, calendar)
- `src/i18n/ui.ts` - UI translations

## TypeScript

- Path aliases: `@/*` → `./src/*`
- Extends `astro/tsconfigs/strict`

## Content Collections

- `blog` - Blog posts with heroImage, tags, relatedPosts
- `tips` - Tips posts with difficulty, featured flag

## Environment

- Copy `.env.example` to `.env` for local development
- API endpoints require environment variables (resend, googleapis, nodemailer)

## Formatting

- Prettier with `prettier-plugin-astro`
- Config: single quotes, trailing commas, 80 print width

## Deployment

- Vercel adapter configured
- Mermaid diagrams: `inline-svg` locally, `pre-built` in production
