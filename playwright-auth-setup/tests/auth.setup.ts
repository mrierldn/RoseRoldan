import { test, expect } from '@playwright/test';
import{ STORAGE_STATE } from '../playwright.config.ts';
import {LoginPage} from '../Pages/LoginPage.ts';

test('log in as Precondition', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill(process.env.SAUCE_USERNAME!);
  await page.locator('[data-test="password"]').fill(process.env.SAUCE_PASSWORD!);

  //assert
  //await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.context().storageState({path: process.env.STORAGE_STATE});
  });
