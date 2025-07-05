// registration

//click on register button with empty fields
import { test, expect } from '@playwright/test';

test('Click Register  with empty  fields', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm;');

  await page.getByRole('link', { name: 'Register' }).click();
   await page.getByRole('button', { name: 'Register' }).click();

  //assert
   await expect(page.getByText('First name is required.')).toBeVisible();
  //await expect(page.locator('text=Last name is required.')).toBeVisible();
  //await expect(page.locator('text=Address is required.')).toBeVisible();
 // await expect(page.locator('text=City is required.')).toBeVisible();
 // await expect(page.locator('text=State is required.')).toBeVisible();
 // await expect(page.locator('text=Zip Code is required.')).toBeVisible();
 // await expect(page.locator('text=Social Security Number is required.')).toBeVisible();
  //await expect(page.locator('text=Username is required.')).toBeVisible();
 // await expect(page.locator('text=Password is required.')).toBeVisible();
 // await expect(page.locator('text=Password confirmation is required.')).toBeVisible();
});