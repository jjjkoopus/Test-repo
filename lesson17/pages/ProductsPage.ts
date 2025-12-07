import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  async getTitle(): Promise<string> {
    return await this.getText('.title');
  }

  async addToCart(productName: string): Promise<void> {
    const selector = `//div[text()='${productName}']/ancestor::div[@class='inventory_item']//button`;
    const element = await this.findElementByXPath(selector);
    await element.click();
  }

  async getCartCount(): Promise<string> {
    return await this.getText('.shopping_cart_badge');
  }

  async goToCart(): Promise<void> {
    await this.click('.shopping_cart_link');
  }
}