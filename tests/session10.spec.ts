import { test, expect } from '@playwright/test';

const REGISTRATION_URL = 'https://parabank.parasoft.com/parabank/register.htm';

test.describe('ParaBank ▶ Registration page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(REGISTRATION_URL);
  });



  test('Successful registration with valid data', async ({ page }) => {
    // Fill in valid data
  
  await page.locator('[id="customer.firstName"]').click();
  let name = await page.locator('[id="customer.firstName"]').fill('a');
  await page.locator('[id="customer.lastName"]').click();
  await page.locator('[id="customer.lastName"]').fill('a');
  await page.locator('[id="customer.address.street"]').click();
  await page.locator('[id="customer.address.street"]').fill('a');
  await page.locator('[id="customer.address.city"]').click();
  await page.locator('[id="customer.address.city"]').fill('a');
  await page.locator('[id="customer.address.state"]').click();
  await page.locator('[id="customer.address.state"]').fill('a');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').fill('a');
  await page.locator('[id="customer.phoneNumber"]').click();
  await page.locator('[id="customer.phoneNumber"]').fill('a');
  await page.locator('[id="customer.ssn"]').click();
  await page.locator('[id="customer.ssn"]').fill('a');
  await page.locator('[id="customer.username"]').click();
  await page.locator('[id="customer.username"]').fill('a');
  await page.locator('[id="customer.password"]').click();
  await page.locator('[id="customer.password"]').fill('a');
  await page.locator('#repeatedPassword').click();
  await page.locator('#repeatedPassword').fill('a');
 
  

    // Submit form
    await page.getByRole('button', { name: 'Register' }).click();

    // Expect redirection and confirmation
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm');
    await expect(page.locator('.title')).toContainText(`Welcome ${name}`);
  });
});
