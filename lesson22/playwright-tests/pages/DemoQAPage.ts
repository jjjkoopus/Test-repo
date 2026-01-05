import { Page } from '@playwright/test';

export class DemoQAPage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async navigateToTextBox(): Promise<void> {
    await this.page.goto('https://demoqa.com/text-box');
  }

  async navigateToFrames(): Promise<void> {
    await this.page.goto('https://demoqa.com/frames');
    await this.page.waitForTimeout(1000);
  }

  async navigateToShadowDOM(): Promise<void> {
    await this.page.goto('https://demoqa.com/shadowdom');
    await this.page.waitForTimeout(1000);
  }

  get fullNameInput(): string { return '#userName'; }
  get emailInput(): string { return '#userEmail'; }
  get currentAddressInput(): string { return '#currentAddress'; }
  get permanentAddressInput(): string { return '#permanentAddress'; }
  get submitButton(): string { return '#submit'; }

  async fillTextBox(
    fullName: string, 
    email: string, 
    currentAddress: string, 
    permanentAddress: string
  ): Promise<void> {
    await this.page.fill(this.fullNameInput, fullName);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.currentAddressInput, currentAddress);
    await this.page.fill(this.permanentAddressInput, permanentAddress);
  }

  async submitForm(): Promise<void> {
    await this.page.click(this.submitButton);
  }

  async getFrameContent(): Promise<string> {
    const frame = this.page.frameLocator('#frame1');
    const element = frame.locator('body');
    return await element.textContent() ?? '';
  }

  async getShadowContent(): Promise<string> {
    return await this.page.title();
  }
}