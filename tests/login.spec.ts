//this is a  sample test for log in
//spec file  = test filenpsx

import { test, expect } from '@playwright/test';

// log in using invalid credentials
test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('a');

  await page.locator('[data-test="password"]').fill('a');

  await page.locator('[data-test="login-button"]').click();
  
  await page.locator('[data-test="error"]').click();
});