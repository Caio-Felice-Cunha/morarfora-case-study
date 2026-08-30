import { test, expect } from '@playwright/test';

test('guided path can be completed with the keyboard-visible controls', async ({ page }) => {
  const external = [];
  const errors = [];
  page.on('request', (request) => { if (!request.url().startsWith('http://127.0.0.1:4175')) external.push(request.url()); });
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Moving countries/i })).toBeVisible();
  const tested = page.locator('[data-tool]');
  await tested.nth(0).click();
  await tested.nth(1).click();
  await expect(page.getByRole('status')).toContainText('Both paths tested');
  await expect(page.getByRole('link', { name: /Open live tool/ }).first()).toHaveAttribute('href', /calcular-crs/);
  await expect(page.getByRole('heading', { name: /Astro serves content first/i })).toBeVisible();
  await expect(page.getByText(/PRIVATE-PRODUCT PSEUDOCODE/).first()).toBeVisible();
  expect(external).toEqual([]);
  expect(errors).toEqual([]);
});

test.describe('mobile and reduced motion', () => {
  test.use({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
  test('keeps both workflows and the engineering case keyboard reachable', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.locator('.skip-link')).toBeFocused();
    await page.locator('#try').scrollIntoViewIfNeeded();
    await page.locator('[data-tool]').first().focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('status')).toContainText('1 of 2 paths tested');
    await expect(page.getByRole('heading', { name: /Astro serves content first/i })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  });
});
