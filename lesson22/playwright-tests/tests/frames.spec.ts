import { test, expect } from '@playwright/test';
import { DemoQAPage } from '../pages/DemoQAPage';

test.describe('DemoQA Frames Tests', () => {
  let demoQAPage: DemoQAPage;

  test.beforeEach(async ({ page }) => {
    demoQAPage = new DemoQAPage(page);
    await demoQAPage.navigateToFrames();
  });

  test('should read text from iframe', async () => {
    const frameText = await demoQAPage.getFrameContent();
    expect(frameText.length).toBeGreaterThan(0);
  });
});
