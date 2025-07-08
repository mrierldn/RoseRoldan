import { test, expect } from '@playwright/test';

const REGISTRATION_URL = 'https://parabank.parasoft.com/parabank/register.htm';

test.describe('ParaBank ▶ Registration page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(REGISTRATION_URL);
  });



  test('Successful registration with valid data', async ({ page }) => {
    // Fill in valid data
    await page.getByLabel('First Name').fill('Rose');
    await page.getByLabel('Last Name').fill('Roldan');
    await page.getByLabel('Address').fill('123 Main St');
    await page.getByLabel('City').fill('Makati');
    await page.getByLabel('State').fill('Metro Manila');
    await page.getByLabel('Zip Code').fill('1200');
    await page.getByLabel('Phone').fill('09171234567');
    await page.getByLabel('SSN').fill('123-45-6789');
    const username = `user${Date.now()}`;
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').fill('Test@1234');
    await page.getByLabel('Confirm').fill('Test@1234');

    // Submit form
    await page.getByRole('button', { name: 'Register' }).click();

    // Expect redirection and confirmation
    let name = await page.getByLabel('First Name').fill('Rose');
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm');
    await expect(page.locator('.title')).toContainText(`Welcome ${name}`);
  });
});
