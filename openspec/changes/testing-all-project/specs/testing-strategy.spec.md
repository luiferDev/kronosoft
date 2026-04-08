# Testing Strategy Specification: testing-all-project

## 1. Overview

This specification defines the comprehensive testing strategy for the Kronosoft portfolio/blog application. It establishes requirements for unit testing with Vitest and end-to-end testing with Playwright, focusing on critical user flows and components.

## 2. Testing Goals

- Establish robust testing infrastructure to prevent regressions
- Validate critical user flows, especially contact form submission
- Ensure internationalization works correctly
- Test API endpoints for reliability
- Verify GSAP animation triggers
- Confirm MDX content processing works as expected
- Achieve >80% code coverage for critical paths

## 3. Test Types and Scope

### 3.1 Unit Testing

**Framework**: Vitest v3.x with React Testing Library
**Scope**:

- Individual React components in isolation
- Utility functions and helpers
- API endpoint logic (mocked)
- Form validation with Zod
- Internationalization utilities
- Shared libraries and hooks

### 3.2 Integration Testing

**Scope**:

- API endpoint testing (real HTTP requests against test server)
- Form submission flows with mocked backend
- Context provider interactions
- Custom hook behaviors

### 3.3 End-to-End Testing

**Framework**: Playwright v1.x
**Scope**:

- Complete user journeys from page load to form submission
- Navigation between all major sections
- Language switching persistence
- Mobile/responsive behavior verification
- Critical user flows with realistic data

## 4. Test Organization and Structure

### 4.1 Directory Structure

```
src/
  __tests__/              # Test files colocated with source
    features/
      contact/
        components/
          ContactForm.test.tsx
        hooks/
          useContactForm.test.ts
        utils/
          validation.test.ts
      blog/
        components/
          BlogPostCard.test.tsx
          RelatedPosts.test.tsx
        utils/
          mdx-processing.test.ts
      tips/
        components/
          TipCard.test.tsx
    lib/
      utils.test.ts
      i18n.test.ts
      hooks/
        useLanguage.test.ts
    pages/
      api/
        contact.test.ts     # API endpoint tests
        calendar.test.ts
    components/
      ui/
        button.test.tsx
        card.test.tsx
        theme-toggle.test.tsx
      layout/
        header.test.tsx
        footer.test.tsx
        navigation.test.tsx

e2e/                    # Dedicated E2E test directory
  tests/
    contact-form.spec.ts
    navigation.spec.ts
    blog-navigation.spec.ts
    i18n-switching.spec.ts
    tip-navigation.spec.ts
    gsap-animations.spec.ts
  fixtures/             # Test data fixtures
    contact-form-data.json
    blog-posts.json
    tips.json
    i18n-translations/
      en.json
      es.json
  pages/                # Page Object Models
    ContactFormPage.ts
    BlogPage.ts
    TipsPage.ts
    HomePage.ts
    NavigationPage.ts
  utils/                # E2E test helpers
    test-utils.ts
    auth-helpers.ts
    wait-for-animations.ts
    mock-service-worker.ts
```

## 5. Detailed Requirements by Component/System

### 5.1 Contact Form System (Highest Priority)

#### 5.1.1 Unit Test Requirements

- **ContactForm component**:

  - Renders correctly with all form fields
  - Displays proper labels and placeholders based on language
  - Handles user input correctly
  - Validates form using Zod schema:
    - Required fields validation
    - Email format validation
    - Min/max length validation
  - Shows appropriate error messages for invalid input
  - Handles submission states (idle, submitting, success, error)
  - Calls onSubmitSuccess callback on successful submission
  - Resets form after successful submission
  - Displays toast notifications for success/error states
  - Updates Zod error map based on language prop

- **contactFormSchema**:

  - Validates firstName (required, 2-50 chars)
  - Validates lastName (required, 2-50 chars)
  - Validates email (required, valid format)
  - Validates message (required, 10-500 chars)
  - Returns proper Zod error format

- **Form submission logic**:
  - Sends POST request to /api/contact with correct payload
  - Includes language code in request body
  - Handles success response from API
  - Handles validation errors from API
  - Handles unexpected errors from API
  - Prevents duplicate submissions

#### 5.1.2 E2E Test Requirements

- Navigate to contact page
- Fill form with valid data in both languages
- Submit form and verify success message appears
- Verify form resets after successful submission
- Test validation errors:
  - Empty required fields
  - Invalid email format
  - Too short/long fields
  - Verify error messages are displayed correctly
  - Verify error messages respect current language
- Test that submitting with invalid data does not trigger API call
- Test mobile responsive behavior of form
- Test that success/error toasts disappear after timeout

### 5.2 API Endpoints Testing

#### 5.2.1 Unit Test Requirements

- **/api/contact endpoint**:
  - Returns 405 for non-POST requests
  - Returns 400 for invalid JSON payload
  - Returns 422 for validation errors (missing/invalid fields)
  - Returns 200 for valid submission
  - Returns proper JSON response format for success/error
  - Calls Resend service with correct parameters
  - Handles Resend service errors gracefully
  - Returns appropriate error messages in both languages
  - Logs errors appropriately for debugging

#### 5.2.2 Integration Test Requirements

- Test endpoint with real HTTP requests (using test server)
- Validate request/response formats
- Test with various valid/invalid payloads
- Verify CORS headers if applicable
- Test rate limiting behavior (if implemented)

### 5.3 Internationalization (i18n) Testing

#### 5.3.1 Unit Test Requirements

- **i18n utilities**:

  - Loads translation files correctly for both languages
  - Returns correct translations for given keys
  - Handles missing translations gracefully (fallback to default language)
  - Supports pluralization if applicable
  - Handles nested translation objects
  - Provides TypeScript safety for translation keys

- **Language switching**:
  - useLanguage hook returns current language
  - useLanguage hook allows setting language
  - Language preference persists in localStorage
  - Language change triggers re-render of dependent components
  - Default language is Spanish as configured

#### 5.3.2 E2E Test Requirements

- Test language switcher in header/footer
- Verify all visible text changes when language is switched
- Verify language persists across page navigations
- Verify language persists after page refresh
- Test that date/number formatting respects locale (if implemented)
- Test RTL considerations (though not currently needed for Spanish/English)

### 5.4 GSAP Animation Testing

#### 5.4.1 Unit Test Requirements

- **Animation logic**:

  - Test that animation triggers are correctly set up
  - Test that animation configurations match specifications
  - Test that reduced motion preferences are respected
  - Test that animation timelines are properly created
  - Test that ScrollTrigger configurations are correct

- **GSAP utility functions**:
  - Test custom GSAP utility functions if any exist
  - Test animation cleanup to prevent memory leaks

#### 5.4.2 E2E Test Requirements

- Verify animations trigger when elements enter viewport
- Test that animations don't trigger for elements outside viewport
- Test that animations respect reduced motion preference
- Test that animations complete successfully without interruption
- Test mobile vs desktop animation differences
- Test that animations don't cause layout thrashing
- Verify animation timing matches specifications (300-500ms for theme toggle)

### 5.5 MDX Content Processing Testing

#### 5.5.1 Unit Test Requirements

- **MDX rendering**:

  - Renders basic markdown elements correctly (headers, paragraphs, lists)
  - Renders custom MDX components if any exist
  - Handles frontmatter correctly
  - Processes links and images properly
  - Handles code syntax highlighting if implemented

- **Content utilities**:
  - Test blog post fetching and parsing
  - Test related posts algorithm
  - Test tag filtering functionality
  - Test featured content detection
  - Test pagination logic

#### 5.5.2 E2E Test Requirements

- Verify blog posts render correctly with all content
- Verify tip posts render correctly
- Verify related posts section shows relevant content
- Verify tag filtering works correctly
- Verify pagination works correctly
- Verify mobile rendering of long content
- Verify code blocks display properly if syntax highlighting used

### 5.6 Shared Components and Utilities

#### 5.6.1 Unit Test Requirements

- **UI components** (Button, Card, Input, etc.):

  - Render correctly with various props
  - Handle disabled states properly
  - Apply correct CSS classes based on variant/size
  - Forward refs correctly
  - Handle click events properly

- **Layout components**:

  - Header renders navigation links correctly
  - Header handles mobile menu toggle
  - Footer renders all required links and information
  - Layout components handle children correctly

- **Utility functions**:
  - Date formatting utilities
  - String manipulation utilities
  - Object/array utilities
  - Type guards and validation functions

## 6. Test Infrastructure Requirements

### 6.1 Configuration Files

#### 6.1.1 vitest.config.ts

- Configure test environment to use jsdom
- Set up test file matching patterns
- Configure coverage reporting
- Set up module mocking for assets (images, styles)
- Configure test timeout values
- Set up alias mapping for @/\* paths
- Configure test environment variables

#### 6.1.2 playwright.config.ts

- Configure test directory and output directories
- Set up test retries for flaky tests
- Configure video/screenshots on failure
- Set up web server for testing
- Configure browser types to test (Chromium, Firefox, WebKit)
- Set up test timeout values
- Configure use base URL for testing
- Set up test artifacts storage

#### 6.1.3 test-setup.ts

- Import @testing-library/jest-dom for custom matchers
- Set up global mocks for browser APIs
- Configure jest-dom extensions
- Set up resize observer mock if needed
- Configure mock service worker if used for API mocking

#### 6.1.4 .vitest.env

- Define environment variables for testing
- Set NODE_ENV=test
- Configure any API mock endpoints
- Set test-specific flags
- Configure database connection strings if applicable

### 6.2 Package.json Scripts

- "test": "vitest run" - Run unit tests once
- "test:watch": "vitest" - Run unit tests in watch mode
- "test:e2e": "playwright test" - Run E2E tests
- "test:e2e:headed": "playwright test --headed" - Run E2E tests with visible browser
- "test:e2e:ui": "playwright test --ui" - Run E2E tests with UI mode
- "test:coverage": "vitest run --coverage" - Run tests with coverage report
- "test:all": "npm run test && npm run test:e2e" - Run full test suite

### 6.3 Mocking Strategy

- Use Vitest's built-in mocking for API calls
- Mock Resend service for contact form tests
- Mock date-fns if used for date formatting
- Mock localStorage for persistence tests
- Consider using MSW for more sophisticated API mocking in E2E tests
- Mock GSAP for unit tests where visual verification isn't needed
- Mock IntersectionObserver for viewport-based animations

## 7. Success Criteria and Acceptance Conditions

### 7.1 Quantitative Metrics

- Achieve >80% code coverage for src/features/ and src/lib/ directories
- All critical user flows have corresponding E2E tests (≥90% coverage of user journeys)
- All form validation scenarios tested (unit and E2E)
- All API endpoints have unit tests covering success/error cases (≥95% coverage)
- Zero critical test failures in CI pipeline
- Test suite executes locally in <2 minutes for unit tests, <5 minutes for full suite

### 7.2 Qualitative Metrics

- Developers can run full test suite locally with single command
- Test suite provides confidence for refactoring and feature changes
- New contributors understand testing patterns and can add tests easily
- Bug reports include steps to reproduce that can be converted to tests
- Testing documentation is clear and followed consistently
- Test names are descriptive and follow established conventions
- Test files are organized logically and easy to locate

### 7.3 Specific Validation Points

- Contact form submits successfully with valid data in both languages
- Contact form shows appropriate errors for invalid data in both languages
- Language switching persists across page navigations and refreshes
- Blog posts render correctly with all MDX features (headings, lists, links, etc.)
- API endpoints return correct status codes and response formats
- GSAP animations trigger when elements enter viewport (verified via Playwright)
- 404 pages handled gracefully with appropriate messaging
- Site navigation works correctly in mobile and desktop views
- Mobile menu opens/closes correctly
- Theme toggle animates smoothly with GSAP (300-500ms duration)
- Form prevents duplicate submissions
- Success/error toasts display for appropriate duration
- Loading states are shown during form submission

## 8. Risks and Mitigations

### 8.1 Risk: Test Flakiness Due to Timing/Animations

**Mitigation**:

- Use Playwright's auto-waiting mechanisms, avoid hard waits
- Use test IDs for stable selectors rather than CSS/XPath
- Mock GSAP animations where appropriate for unit tests
- Use Playwright's waitForFunction for animation completion checks
- Implement retry logic for inherently flaky assertions

### 8.2 Risk: Over-Mocking Leading to False Confidence

**Mitigation**:

- Balance mocking with real integrations where feasible
- Use MSW (Mock Service Worker) for API mocking in E2E tests when needed
- Test critical paths with real services in staging environment
- Clearly document what is mocked vs what is real in each test

### 8.3 Risk: Test Maintenance Overhead

**Mitigation**:

- Follow DRY principles in test code
- Create reusable test utilities and helpers
- Use Page Object Model for E2E tests
- Establish clear testing conventions and linting rules
- Regular test suite reviews and cleanup
- Use data factories/fixtures for consistent test data

### 8.4 Risk: Environment Differences Between Test and Production

**Mitigation**:

- Use realistic test data that mirrors production data structures
- Mirror production environment variables in test setup
- Test against actual APIs in E2E where safe (use test credentials/sandbox)
- Use Docker containers to mirror production environment when needed
- Implement contract testing for API boundaries

### 8.5 Risk: GSAP Animation Testing Complexity

**Mitigation**:

- Focus unit tests on animation logic/triggers rather than visual output
- Use Playwright to verify animation-triggering conditions (element visibility, scroll position)
- Test animation completion events rather than pixel-perfect visual verification
- Use reduced motion media queries in tests
- Create custom matchers for animation state verification

## 9. Implementation Approach

### 9.1 Phase 1: Setup Testing Infrastructure (Days 1-2)

- Install Vitest and required dependencies
- Create Vitest configuration (vitest.config.ts)
- Configure jsdom environment for browser-like testing
- Set up global test setup file
- Configure Playwright (already installed, just needs config)
- Create basic test directory structure
- Add test scripts to package.json
- Create .vitest.env for test environment variables

### 9.2 Phase 2: Implement Unit Tests for Critical Paths (Days 3-5)

- Test ContactForm component (validation, submission, states)
- Test API endpoints (request handling, validation, responses)
- Test i18n utilities (translation loading, language switching)
- Test shared utilities and helpers
- Test blog/tips content components (MDX rendering, related posts)

### 9.3 Phase 3: Implement E2E Tests for User Flows (Days 6-8)

- Contact form submission flow (fill, submit, verify success)
- Navigation testing (all main links, routing, mobile menu)
- Blog/tips navigation (listing, viewing, filtering, related posts)
- Internationalization testing (language switcher, persistence)
- GSAP animation testing (trigger verification, reduced motion)

### 9.4 Phase 4: Achieve Comprehensive Coverage (Days 9-10)

- Achieve >80% code coverage for critical paths
- Add tests for edge cases and error conditions
- Implement test data factories/fixtures
- Set up CI/CD integration (GitHub Actions)
- Document testing conventions and guidelines
- Review and refine test suite based on coverage reports

## 10. Dependencies

### 10.1 New Packages Required

- `vitest` - Testing framework
- `@vitest/coverage-v8` - Coverage reporting
- `@testing-library/react` - React testing utilities
- `@testing-library/jest-dom` - DOM matcher extensions
- `@testing-library/user-event` - User interaction simulation
- `jsdom` - Browser environment simulation

### 10.2 Already Available

- `playwright` - E2E testing (in devDependencies)
- `@types/react` - TypeScript types
- `@types/react-dom` - TypeScript types
- `zod` - Form validation (already used)
- `@hookform/resolvers` - Form validation integration
