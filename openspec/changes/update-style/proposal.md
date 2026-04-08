# Proposal: update-style - Visual Redesign

## Intent

Rediseñar completamente la apariencia visual del portfolio Kronosoft hacia una estética cyberpunk/elegante/futurista para empresa de tecnología, manteniendo TODO el contenido actual intacto. El sitio actual usa un azul genérico (#0043ff) y no utiliza las animaciones GSAP ya instaladas.

## Scope

### In Scope

- Nuevo sistema de colores con acentos neón optimizados para dark mode
- Activación y uso de GSAP para animaciones en toda la_site
- Rediseño de todos los componentes principales (Header, Footer, Hero, Cards)
- Actualización de la paleta para mantener identidad Kronosoft
- Efectos de glow y elementos visuales futuristas
- Mantenimiento de las 18 páginas actuales (9 ES + 9 EN) con su contenido

### Out of Scope

- Cambios en la estructura de URLs o rutas
- Nuevas funcionalidades o features
- Contenido nuevo (blog, proyectos, tips)
- Cambios en la lógica de negocio o APIs

## Approach

1. **Colors**: Definir nueva paleta con:

   - Background oscuro principal (#0a0a0f)
   - Background secundario (#12121a)
   - Acentos neón: cyan (#00f0ff), magenta (#ff00aa), verde (#00ff88)
   - Mantener negro como base pero con profundidad

2. **GSAP Integration**:

   - Animaciones de entrada (fade-in, slide-up)
   - Efectos hover en cards y botones
   - Scroll animations con ScrollTrigger
   - Transiciones suaves entre secciones

3. **Components Update**:

   - Header con efecto glassmorphism
   - Footer enriquecido con más contenido
   - Cards con border neón sutil
   - Buttons con glow effect
   - Hero section con animaciones de typing/glow

4. **Typography**: Mantener Luxomona + Roboto, ajustar sizes y weights

## Affected Areas

| Area                                                            | Impact   | Description                                  |
| --------------------------------------------------------------- | -------- | -------------------------------------------- |
| `src/components/Header.astro`                                   | Modified | Nuevo estilo con glassmorphism, neón accents |
| `src/components/Footer.astro`                                   | Modified | Diseño enriquecido, más links, glow effects  |
| `src/components/ThemeToggle.astro`                              | Modified | Animaciones GSAP, nuevo estilo               |
| `src/components/SkillCard.astro`                                | Modified | Border neón, hover effects                   |
| `src/components/section-card.astro`                             | Modified | Nuevo diseño con glow                        |
| `src/layouts/BaseLayout.astro`                                  | Modified | CSS global, variables de color               |
| `src/pages/index.astro`                                         | Modified | Hero con GSAP, nuevo estilo                  |
| `src/features/blog/components/BlogPostCard.astro`               | Modified | Cards con neón                               |
| `src/features/tips/components/TipCard.astro`                    | Modified | Cards con neón                               |
| `src/features/projects/components/FeaturedProjectPreview.astro` | Modified | Preview con glow                             |
| `src/components/ui/*.tsx`                                       | Modified | shadcn/ui con Theme-aware colors             |
| `tailwind.config.mjs`                                           | Modified | Nuevas variables de color, theme             |

## Risks

| Risk                                | Likelihood | Mitigation                                           |
| ----------------------------------- | ---------- | ---------------------------------------------------- |
| Romper compatibilidad con shadcn/ui | Medium     | Mantener backward compatibility, testear componentes |
| Animaciones degrad performance      | Low        | Usar transforms only, will-change estratégico        |
| Colors no funcionan con dark mode   | Medium     | Testing exhaustivo en ambos modes                    |
| Tiempo de implementación largo      | High       | Dividir en tareas pequeñas, iterative delivery       |

## Rollback Plan

1. Mantener backup de tailwind.config.mjs y CSS actual
2. Usar git para versionar cambios incrementalmente
3. Si algo falla, revert usando `git checkout -- <file>`
4. Los cambios son puramente visuales - no afecta contenido

## Dependencies

- GSAP ya instalado (solo needs activation)
- shadcn/ui ya configurado (solo theme updates)
- Tailwind CSS 4 (actual config compatible)

## Success Criteria

- [ ] Todas las 18 páginas renderizan correctamente
- [ ] Dark mode por defecto con acentos neón visibles
- [ ] Animaciones GSAP funcionan sin errores de consola
- [ ] Todos los componentes shadcn/ui mantienen funcionalidad
- [ ] Lighthouse performance > 90
- [ ] Responsive en mobile (320px+)
- [ ] Contenido 100% preservado (blogs, projects, tips)
