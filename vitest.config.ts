import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test-setup.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules/', 'dist/'],
    coverage: {
      reporter: ['text', 'html', 'json'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.d.ts',
        'src/test-setup.ts',
        'vitest.config.ts',
        'src/**/*.stories.{ts,tsx}',
        'src/**/*.config.{ts,tsx,js}',
      ],
    },
    alias: {
      '@': resolve('./src'),
    },
  },
});
