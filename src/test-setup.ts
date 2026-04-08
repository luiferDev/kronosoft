// Test setup file for Vitest
import '@testing-library/jest-dom';
import { expect, vi } from 'vitest';

// Global fetch mock for API tests
const mockFetch = vi
  .fn()
  .mockImplementation(() =>
    Promise.resolve({ ok: true, json: async () => ({}) })
  );
Object.defineProperty(globalThis, 'fetch', {
  writable: true,
  value: mockFetch,
});

// Mock Resend
vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi
        .fn()
        .mockResolvedValue({ data: { id: 'test-email-id' }, error: null }),
    },
  })),
}));

// Mock Google APIs
vi.mock('googleapis', () => ({
  google: {
    calendar: vi.fn().mockReturnValue({
      events: {
        list: vi.fn().mockResolvedValue({ data: { items: [] } }),
        insert: vi.fn().mockResolvedValue({ data: {} }),
      },
    }),
  },
}));

// Mock Nodemailer
vi.mock('nodemailer', () => ({
  createTransport: vi.fn().mockReturnValue({
    sendMail: vi.fn().mockResolvedValue({ messageId: 'test-message-id' }),
  }),
}));

// Extend Vitest's expect with custom matchers if needed
declare module 'vitest' {
  interface Assertion<T> extends jest.Matchers<T, void> {}
  interface AsymmetricMatchersContaining extends jest.Matchers<void, void> {}
}
