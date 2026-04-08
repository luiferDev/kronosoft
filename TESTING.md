# Testing Infrastructure

This document describes the testing setup for the Kronosoft portfolio project.

## Overview

The project uses:

- **Vitest** for unit and integration testing
- **Playwright** for end-to-end (E2E) testing
- **Testing Library** for React component testing
- **jsdom** for browser-like DOM environment in tests

## Commands

Run the following commands to execute tests:

```bash
# Run all unit and integration tests (uses npx vitest for proper jsdom support)
bun test

# Run tests in watch mode (for development)
bun run test:watch

# Run tests with coverage report
bun run test:coverage

# Run E2E tests
bun run test:e2e

# Alternative: run directly with npx vitest (same as bun test)
npx vitest run
```

> **Note**: Use `bun test` or `npx vitest run` - avoid `bunx vitest run` which has jsdom compatibility issues.

## Configuration

### Vitest

See `vitest.config.ts` for configuration details:

- Uses jsdom environment for browser-like DOM
- Includes test setup file (`src/test-setup.ts`)
- Configured coverage reporting with V8
- Uses path aliases (`@/` -> `/src`)

### Playwright

See `playwright.config.ts` for configuration details:

- Tests Chromium, Firefox, and WebKit
- Configured to run against the dev server
- Includes video, trace, and screenshot reporting on failure

### Test Setup

See `src/test-setup.ts` for global test setup:

- Mocks external services (Resend, Google APIs, Nodemailer)
- Extends Vitest's expect with Jest-like matchers
- Sets up jsdom environment

## File Organization

Tests are organized by type:

- `src/tests/unit/` - Unit tests for individual functions/utilities
- `src/tests/integration/` - Integration tests for component interactions
- `src/tests/e2e/` - End-to-end tests using Playwright

Content-specific tests can be placed alongside the content:

- `src/features/blog/content/**/*.test.{ts,tsx}`
- `src/features/tips/content/**/*.test.{ts,tsx}`

## Test Files

Current test coverage:

| File                                                             | Tests | Type                  |
| ---------------------------------------------------------------- | ----- | --------------------- |
| `src/i18n/__tests__/ui.test.ts`                                  | 19    | i18n utilities        |
| `src/features/contact/__tests__/components/ContactForm.test.tsx` | 18    | React component       |
| `src/lib/__tests__/utils.test.ts`                                | 11    | Utility functions     |
| `src/features/contact/tests/unit/contactFormSchema.test.ts`      | 16    | Zod schema validation |
| `src/features/blog/__tests__/components/BlogFilters.test.tsx`    | 10    | React component       |

**Total: 80 tests passing**

## Writing Tests

### Unit Tests

```typescript
import { describe, it, expect } from 'vitest';
import { someFunction } from '@/lib/some-utils';

describe('someFunction', () => {
  it('should return expected value', () => {
    expect(someFunction()).toBe('expected');
  });
});
```

### Component Tests

```typescript
import { render, screen } from '@testing-library/react';
import { MyComponent } from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
```

### E2E Tests

```typescript
import { test, expect } from '@playwright/test';

test('home page loads correctly', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Welcome');
});
```

## Mocking External Services

External services are automatically mocked in `src/test-setup.ts`:

- **Resend**: Mocked to return a successful email send
- **Google APIs**: Mocked to return empty calendar events
- **Nodemailer**: Mocked to return a successful message send

To override mocks in specific tests:

```typescript
import { vi } from 'vitest';

test('handles email sending error', async () => {
  const mockResend = vi.mocked(require('resend'));
  mockResend.mockImplementation(() => ({
    emails: {
      send: vi
        .fn()
        .mockResolvedValue({ data: null, error: new Error('Failed') }),
    },
  }));

  // Test code here
});
```

## Continuous Integration

In CI environments:

- Tests run in headless mode
- Only one worker is used for E2E tests
- Retries are enabled for flaky tests
- Artifacts (videos, traces, screenshots) are retained on failure

## Coverage

Coverage reports are generated with:

- Text summary in terminal
- HTML report in `coverage/` directory
- JSON report for tooling integration

Thresholds are not currently enforced but can be added to vitest.config.ts.
