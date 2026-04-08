# Design: testing-all-project - Comprehensive Testing Strategy

## Technical Approach

This design implements a comprehensive testing strategy for the Kronosoft portfolio/blog application using Vitest for unit testing and Playwright for end-to-end (E2E) testing. The implementation follows a layered approach:

1. **Infrastructure Layer**: Setup test configurations, dependencies, and utility files
2. **Unit Testing Layer**: Implement Vitest-based tests for components, utilities, and API logic
3. **Integration Testing Layer**: Test API endpoints and form submission flows
4. **E2E Testing Layer**: Implement Playwright tests for complete user journeys
5. **CI/CD Layer**: Integrate testing into the development workflow

The design maintains focus on critical paths while establishing patterns that can be extended as the codebase grows.

## Architecture Decisions

### Decision: Test File Organization

**Choice**: Colocate unit tests with source files using `__tests__` directories, while keeping E2E tests in a dedicated `e2e/` directory at the project root.

**Alternatives considered**:

- Colocating all tests (unit and E2E) with source files (rejected: mixes different test types)
- Centralizing all tests in a single `tests/` directory (rejected: breaks connection between implementation and tests)

**Rationale**: Colocating unit tests with source improves discoverability and maintenance, while separating E2E tests acknowledges their different nature (cross-cutting concerns) and execution requirements.

### Decision: Mocking Strategy

**Choice**: Use Vitest's built-in mocking for unit tests, with selective use of MSW (Mock Service Worker) for E2E tests where real API calls would be problematic.

**Alternatives considered**:

- Using MSW for both unit and E2E tests (rejected: adds unnecessary complexity for simple unit tests)
- Making real API calls in all tests (rejected: introduces flakiness and external dependencies)

**Rationale**: Vitest's mocking is sufficient for isolating units, while MSW provides network-level mocking that better simulates real browser behavior in E2E tests.

### Decision: GSAP Animation Testing Approach

**Choice**: Focus unit tests on animation logic and triggers rather than visual output; use Playwright to verify animation-triggering conditions and completion events.

**Alternatives considered**:

- Pixel-perfect visual regression testing for animations (rejected: overly brittle and maintenance-intensive)
- Completely skipping animation testing (rejected: leaves critical user experience untested)

**Rationale**: Testing animation logic provides confidence in implementation correctness, while verifying trigger conditions in E2E ensures animations behave as expected in real browser environments.

### Decision: Internationalization Testing Strategy

**Choice**: Test i18n utilities in isolation for translation loading and language switching; use E2E tests to verify language persistence and UI updates across page navigations.

**Alternatives considered**:

- Only unit testing i18n utilities (rejected: misses integration aspects)
- Only E2E testing i18n functionality (rejected: misses edge cases in utility functions)

**Rationale**: Combined approach ensures both utility correctness and proper integration with the UI framework.

## Data Flow

```
┌─────────────────────────────────────────────────────────┐
│                    Test Infrastructure                  │
│  ┌─────────────┐  ┌─────────────┐  ┌────────────────┐  │
│  │ vitest.config.ts │ │ playwright.config.ts │ │ test-setup.ts │ │
│  │ (unit test)  │  │ (E2E test)  │  │ (global setup) │  │
│  └─────────────┘  └─────────────┘  └────────────────┘  │
└─────────────────────────────────────────────────────────┘
          │                   │                   │
          ▼                   ▼                   ▼
┌─────────────────────────────────────────────────────────┐
│                    Test Execution Layers                │
│  ┌─────────────┐  ┌─────────────┐  ┌────────────────┐  │
│  │   Unit      │  │ Integration │  │     E2E        │  │
│  │   Tests     │  │   Tests     │  │    Tests       │  │
│  │ (Vitest)    │  │ (Vitest)    │  │ (Playwright)   │  │
│  └─────────────┘  └─────────────┘  └────────────────┘  │
└─────────────────────────────────────────────────────────┘
          │                   │                   │
          ▼                   ▼                   ▼
┌─────────────────────────────────────────────────────────┐
│                  Source Code Under Test                 │
│  ┌─────────────┐  ┌─────────────┐  ┌────────────────┐  │
│  │   Components│  │   Utilities │  │   API Routes   │  │
│  │ (React)     │  │ (TS/JS)     │  │ (Astro endpoints)│  │
│  └─────────────┘  └─────────────┘  └────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## File Changes

| File                                                             | Action | Description                                                                        |
| ---------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| `package.json`                                                   | Modify | Add testing dependencies and test scripts                                          |
| `vitest.config.ts`                                               | Create | Vitest configuration with jsdom environment, coverage settings, and module mocking |
| `playwright.config.ts`                                           | Create | Playwright configuration with test directories, retries, and browser settings      |
| `.vitest.env`                                                    | Create | Environment variables for testing (NODE_ENV=test, test API endpoints)              |
| `src/test-setup.ts`                                              | Create | Global test setup (jest-dom, resize observer mock, etc.)                           |
| `src/features/contact/__tests__/components/ContactForm.test.tsx` | Create | Unit tests for ContactForm component                                               |
| `src/features/contact/__tests__/screens/ContactScreen.test.tsx`  | Create | Unit tests for ContactScreen component                                             |
| `src/features/contact/__tests__/hooks/useContactForm.test.ts`    | Create | Unit tests for contact form hook                                                   |
| `src/features/contact/__tests__/utils/validation.test.ts`        | Create | Unit tests for form validation utilities                                           |
| `src/features/blog/__tests__/components/BlogPostCard.test.tsx`   | Create | Unit tests for BlogPostCard component                                              |
| `src/features/blog/__tests__/components/RelatedPosts.test.tsx`   | Create | Unit tests for RelatedPosts component                                              |
| `src/features/blog/__tests__/utils/mdx-processing.test.ts`       | Create | Unit tests for MDX processing utilities                                            |
| `src/features/tips/__tests__/components/TipCard.test.tsx`        | Create | Unit tests for TipCard component                                                   |
| `src/lib/__tests__/utils.test.ts`                                | Create | Unit tests for shared utilities                                                    |
| `src/lib/__tests__/i18n.test.ts`                                 | Create | Unit tests for i18n utilities                                                      |
| `src/lib/__tests__/hooks/useLanguage.test.ts`                    | Create | Unit tests for language hook                                                       |
| `src/pages/api/__tests__/contact.test.ts`                        | Create | Unit tests for contact API endpoint                                                |
| `src/pages/api/__tests__/calendar.test.ts`                       | Create | Unit tests for calendar API endpoint                                               |
| `e2e/tests/contact-form.spec.ts`                                 | Create | E2E tests for contact form submission flow                                         |
| `e2e/tests/navigation.spec.ts`                                   | Create | E2E tests for site navigation                                                      |
| `e2e/tests/blog-navigation.spec.ts`                              | Create | E2E tests for blog navigation and content viewing                                  |
| `e2e/tests/i18n-switching.spec.ts`                               | Create | E2E tests for language switching persistence                                       |
| `e2e/tests/tip-navigation.spec.ts`                               | Create | E2E tests for tips navigation and filtering                                        |
| `e2e/tests/gsap-animations.spec.ts`                              | Create | E2E tests for GSAP animation triggering                                            |
| `e2e/fixtures/contact-form-data.json`                            | Create | Test data fixtures for contact form scenarios                                      |
| `e2e/fixtures/blog-posts.json`                                   | Create | Test data fixtures for blog posts                                                  |
| `e2e/fixtures/tips.json`                                         | Create | Test data fixtures for tips                                                        |
| `e2e/fixtures/i18n-translations/en.json`                         | Create | English translation fixtures for E2E tests                                         |
| `e2e/fixtures/i18n-translations/es.json`                         | Create | Spanish translation fixtures for E2E tests                                         |
| `e2e/pages/ContactFormPage.ts`                                   | Create | Page Object Model for contact form                                                 |
| `e2e/pages/BlogPage.ts`                                          | Create | Page Object Model for blog pages                                                   |
| `e2e/pages/TipsPage.ts`                                          | Create | Page Object Model for tips pages                                                   |
| `e2e/pages/HomePage.ts`                                          | Create | Page Object Model for home page                                                    |
| `e2e/pages/NavigationPage.ts`                                    | Create | Page Object Model for navigation components                                        |
| `e2e/utils/test-utils.ts`                                        | Create | E2E test helper functions                                                          |
| `e2e/utils/auth-helpers.ts`                                      | Create | Authentication helpers for E2E tests (if needed)                                   |
| `e2e/utils/wait-for-animations.ts`                               | Create | Custom waiters for GSAP animation completion                                       |
| `e2e/utils/mock-service-worker.ts`                               | Create | MSW setup for API mocking in E2E tests                                             |

## Interfaces / Contracts

### Vitest Configuration Interface (vitest.config.ts)

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
    alias: {
      '@/': '/src/',
    },
    globals: true,
    mockReset: true,
    restoreMocks: true,
  },
});
```

### Playwright Configuration Interface (playwright.config.ts)

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'bun dev',
    url: 'http://localhost:4321',
    timeout: 120000,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
```

### Contact Form Component Contract

```typescript
// Component props interface
interface ContactFormProps {
  lang: 'en' | 'es';
  onSubmitSuccess?: () => void;
  onSubmitError?: (error: string) => void;
}

// Emitted events
// - submit:success - When form submits successfully
// - submit:error - When form submission fails
// - validation:error - When form validation fails

// Public methods
// reset() - Resets form to initial state
// validate() - Triggers validation and returns boolean
```

### I18n Utilities Contract

```typescript
// Translation function signature
type TranslateFunction = (key: string, options?: Record<string, any>) => string;

// useLanguage hook return value
interface LanguageContext {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: TranslateFunction;
}

// Translation file structure
interface TranslationFile {
  [key: string]:
    | string
    | TranslationFile
    | {
        [key: string]: string; // For pluralization
      };
}
```

## Testing Strategy

| Layer       | What to Test                                             | Approach                                                    |
| ----------- | -------------------------------------------------------- | ----------------------------------------------------------- |
| Unit        | ContactForm validation, submission, states               | Vitest + React Testing Library with mocked API calls        |
| Unit        | API endpoint request/response handling                   | Vitest with mocked RequestHandler                           |
| Unit        | I18n translation loading and language switching          | Vitest with actual translation files                        |
| Unit        | Utility functions (date formatting, string manipulation) | Vitest with pure function testing                           |
| Integration | API endpoint with real HTTP requests                     | Vitest dev server against test configuration                |
| Integration | Form submission flow with mocked backend                 | Vitest with MSW or manual mocking                           |
| E2E         | Complete contact form submission flow                    | Playwright against dev server                               |
| E2E         | Navigation between all major sections                    | Playwright verifying routing and UI updates                 |
| E2E         | Language switching persistence                           | Playwright verifying localStorage and UI updates            |
| E2E         | GSAP animation triggering conditions                     | Playwright verifying element visibility and scroll position |
| E2E         | Blog/tips content rendering and filtering                | Playwright verifying MDX rendering and UI updates           |

## Migration / Rollout

No migration required. This is an additive change that:

1. Adds testing infrastructure without modifying existing source code
2. Introduces new test files that don't affect production builds
3. Adds dependencies that are only installed in development environments
4. Modifies package.json to add test scripts (non-breaking)

Rollout can be immediate. Developers can opt-in to running tests by executing the new npm scripts.

## Open Questions

- [ ] Should we use MSW for API mocking in both unit and E2E tests, or just E2E?
- [ ] What specific coverage thresholds should we enforce for different layers (unit vs integration vs E2E)?
- [ ] Should we implement visual regression testing for critical UI components in the future?
- [ ] How should we handle testing of environment-specific code (e.g., Resend API keys)?
- [ ] Should we create separate test configurations for unit vs integration testing within Vitest?

## Next Step

Ready for sdd-tasks to break down implementation into actionable items.
