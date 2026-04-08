import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page correctly', async ({ page }) => {
    await page.goto('/');

    // Check that page loads without crash
    await expect(page).toHaveTitle(/Kronosoft/i);

    // Check hero section is visible
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should navigate to projects page', async ({ page }) => {
    await page.goto('/');

    // Click on projects link/nav
    await page.click('a[href*="/projects"]');

    // Should navigate to projects page
    await expect(page).toHaveURL(/.*projects/);
  });

  test('should navigate to blog page', async ({ page }) => {
    await page.goto('/');

    // Click on blog link/nav
    await page.click('a[href*="/blog"]');

    // Should navigate to blog page
    await expect(page).toHaveURL(/.*blog/);
  });
});

test.describe('Navigation', () => {
  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    // Check nav links exist
    await expect(page.locator('nav a, header a').first()).toBeVisible();
  });

  test('should return to home when clicking logo', async ({ page }) => {
    await page.goto('/projects');

    // Click on logo
    await page.click('a[href="/"]');

    // Should return to home
    await expect(page).toHaveURL(/.*\/$/);
  });
});

test.describe('Contact Page', () => {
  test('should load contact page', async ({ page }) => {
    await page.goto('/contact');

    // Should have contact form or contact info
    await expect(page.locator('form, h1')).toBeVisible();
  });
});
