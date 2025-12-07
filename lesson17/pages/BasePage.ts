import { By, WebDriver, WebElement } from 'selenium-webdriver';

export class BasePage {
  constructor(protected driver: WebDriver) {}

  protected async findElement(selector: string): Promise<WebElement> {
    return await this.driver.findElement(By.css(selector));
  }

  protected async findElementByXPath(selector: string): Promise<WebElement> {
    return await this.driver.findElement(By.xpath(selector));
  }

  protected async click(selector: string): Promise<void> {
    const element = await this.findElement(selector);
    await element.click();
  }

  protected async type(selector: string, text: string): Promise<void> {
    const element = await this.findElement(selector);
    await element.clear();
    await element.sendKeys(text);
  }

  protected async getText(selector: string): Promise<string> {
    const element = await this.findElement(selector);
    return await element.getText();
  }
}