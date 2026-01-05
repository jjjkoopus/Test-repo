import { test, expect } from '../fixtures';

test('Successful login', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(loginPage.page).toHaveURL(/.*inventory.html/);
    await expect(inventoryPage.page.locator('.inventory_list')).toBeVisible();
});

test('Failed login shows error', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.page.locator('[data-test="error"]')).toBeVisible();
});