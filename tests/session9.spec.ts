import { test, expect } from '@playwright/test';

test('log in to sauce demo with correct creds', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  
  await page.locator('[data-test="username"]').fill('standard_user');
  await expect(page.locator('[data-test="username"]')).toHaveValue('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');
await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  //verify landing page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
//save screenshot
  await page.screenshot({ path: 'test-screenshots/successful-login.png', fullPage: true })
  await page.screenshot();
});

test('invalid log in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  
  await page.locator('[data-test="username"]').fill('invalid_user');
  await expect(page.locator('[data-test="username"]')).toHaveValue('invalid_user');

  await page.locator('[data-test="password"]').fill('invalid_user');
 await expect(page.locator('[data-test="password"]')).toHaveValue('invalid _user');

  await page.locator('[data-test="login-button"]').click();

  //verify landing page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
//save screenshot
  await page.screenshot({ path: 'test-screenshots/successful-login.png', fullPage: true })
  await page.screenshot();
});