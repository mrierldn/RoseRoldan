import { test, expect } from '@playwright/test';

const REGISTRATION_URL = 'https://parabank.parasoft.com/parabank/register.htm';

test.describe('ParaBank ▶ Registration page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(REGISTRATION_URL);
  });



  test('Successful registration with valid data', async ({ page }) => {
    // Fill in valid data
  
  await page.locator('[id="customer.firstName"]').fill('a');
  await page.locator('[id="customer.lastName"]').fill('a');
  await page.locator('[id="customer.address.street"]').fill('a');
  await page.locator('[id="customer.address.city"]').fill('a');
  await page.locator('[id="customer.address.state"]').fill('a');
  await page.locator('[id="customer.address.zipCode"]').fill('a');
  await page.locator('[id="customer.phoneNumber"]').fill('a');
  await page.locator('[id="customer.ssn"]').fill('a');
  await page.locator('[id="customer.username"]').fill('a');
  await page.locator('[id="customer.password"]').fill('a');
  await page.locator('#repeatedPassword').fill('a');
 
  

    // Submit form
    await page.getByRole('button', { name: 'Register' }).click();

    // Expect redirection and confirmation
    let name = await page.getByLabel('First Name').fill('a');
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm');
    await expect(page.locator('.title')).toContainText(`Welcome ${name}`);
  });
});
