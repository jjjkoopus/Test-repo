import { test, expect } from '@playwright/test';
import { DemoQAPage } from '../playwright-tests/pages/DemoQAPage';

test.describe('DemoQA Shadow DOM Tests', () => {
  let demoQAPage: DemoQAPage;

  test.beforeEach(async ({ page }) => {
    demoQAPage = new DemoQAPage(page);
    await demoQAPage.navigateToShadowDOM();
  });

  test('should access shadow DOM content', async () => {
    const shadowText = await demoQAPage.getShadowContent();
    expect(shadowText.length).toBeGreaterThan(0);
  });
});