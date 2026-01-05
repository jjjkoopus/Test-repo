import { test, expect } from '@playwright/test';

test('opens app and shows main header', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Expense Tracker App' })).toBeVisible();
});

test('default balance is visible and formatted', async ({ page }) => {
  await page.goto('/');
  // Баланс по умолчанию обычно $0.00 — если у тебя иначе, скажешь, скорректируем
  await expect(page.getByText('$0.00')).toBeVisible();
});

test('can add an income transaction and it appears in history', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Detail of Transaction').fill('Salary');
  await page.getByPlaceholder('Dollar Value of Transaction').fill('100');
  await page.getByRole('button', { name: 'Add Transaction' }).click();

  await expect(page.getByText('Salary')).toBeVisible();
});
