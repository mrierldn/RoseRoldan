//this is a  sample test for log in
//spec file  = test filenpsx

import { test, expect } from '@playwright/test';
import { assert } from 'console';

// log in using invalid credentials
test('log in using invalid  data', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('a');

  await page.locator('[data-test="password"]').fill('a');

  await page.locator('[data-test="login-button"]').click();
  assert
  await expect (page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service')
  
});

// log in using valid credentials 
test('log in using valid  LOG IN', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standad_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();
  //asert
  await expect(page.getByText('Swag Labs')).toBeVisible();

  });