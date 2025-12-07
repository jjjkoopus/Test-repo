import { By } from 'selenium-webdriver';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  async getCartItems(): Promise<string[]> {
    const elements = await this.driver.findElements(By.css('.cart_item'));
    const texts: string[] = [];
    for (const element of elements) {
      texts.push(await element.getText());
    }
    return texts;
  }

  async checkout(): Promise<void> {
    await this.click('#checkout');
  }

  async removeItem(itemName: string): Promise<void> {
    const selector = `//div[text()='${itemName}']/ancestor::div[@class='cart_item']//button`;
    const element = await this.findElementByXPath(selector);
    await element.click();
  }
}