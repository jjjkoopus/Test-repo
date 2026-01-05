import { test, expect } from '@playwright/test';
import { DemoQAPage } from '../pages/DemoQAPage';

test.describe('DemoQA Text Box Tests', () => {
  let demoQAPage: DemoQAPage;

  test.beforeEach(async ({ page }) => {
    demoQAPage = new DemoQAPage(page);
    await demoQAPage.navigateToTextBox();
  });

  test('should fill and submit text box form', async ({ page }) => {
    await demoQAPage.fillTextBox(
      'John Doe',
      'john@example.com',
      'Current Address 123',
      'Permanent Address 456'
    );

    await demoQAPage.submitForm();

    await expect(page.locator('#output')).toBeVisible();
    await expect(page.locator('#name')).toContainText('John Doe');
  });
});
