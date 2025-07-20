import { test, expect } from '@playwright/test';


test('view product', async ({ page }) => {

      await page.locator('[data-test="inventory-item-name"]').click();
  await page.locator('[data-test="back-to-products"]').click();

  //assert
  await expect(page.locator('data-test="inventory-item-name')).toBeVisible();
  await expect(page.locator('data-test="inventory-item-name')).toContainText('Sauce Labs Backpack');

});
//Sauce Labs Backpack


// import { test, expect } from '@playwright/test';

//   await page.locator('[data-test="item-4-img-link"]').click();
//   await page.locator('[data-test="inventory-item-name"]').click();
//   await page.locator('[data-test="inventory-item-name"]').click();
//   await page.locator('[data-test="inventory-item-name"]').click();
//   await page.locator('[data-test="back-to-products"]').click();
//   await page.locator('[data-test="secondary-header"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
// });