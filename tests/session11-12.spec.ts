import { test, expect } from '@playwright/test';

const REGISTRATION_URL = 'https://parabank.parasoft.com/parabank/register.htm';

test.describe('ParaBank ▶ Registration page', () => {
  test.beforeEach(async ({ page, context }) => {
    // Start tracing before the test
    await context.tracing.start({ screenshots: true, snapshots: true, sources: true });
    await page.goto(REGISTRATION_URL);
  });

  test.afterEach(async ({ context }, testInfo) => {
    // Stop tracing and save the trace to a file
    await context.tracing.stop({
      path: `trace-${testInfo.title.replace(/\s+/g, '_')}.zip`
    });
  });

  test('Successful registration with valid data', async ({ page }) => {
    const name = 'Rose';
    await page.locator('[id="customer.firstName"]').fill('a');
    await page.locator('[id="customer.lastName"]').fill('a');
    await page.locator('[id="customer.address.street"]').fill('a');
    await page.locator('[id="customer.address.city"]').fill('a');
    await page.locator('[id="customer.address.state"]').fill('a');
    await page.locator('[id="customer.address.zipCode"]').fill('a');
    await page.locator('[id="customer.phoneNumber"]').fill('a');
    await page.locator('[id="customer.ssn"]').fill('a');
    await page.locator('[id="customer.username"]').fill(name);
    await page.locator('[id="customer.password"]').fill('a');
    await page.locator('#repeatedPassword').fill('a');

    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm');
    await expect(page.locator('.title')).toContainText(`Welcome ${name}`);
  });
});