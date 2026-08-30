import { test, expect } from '@playwright/test';

test('guided path can be completed with the keyboard-visible controls', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Moving countries/i })).toBeVisible();
  const tested = page.locator('[data-tool]');
  await tested.nth(0).click();
  await tested.nth(1).click();
  await expect(page.getByRole('status')).toContainText('Both paths tested');
  await expect(page.getByRole('link', { name: /Open live tool/ }).first()).toHaveAttribute('href', /calcular-crs/);
});
