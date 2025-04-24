import { test, expect } from '@playwright/test';

test('has a title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Heroes of Black Reach Player Aid/);
});
