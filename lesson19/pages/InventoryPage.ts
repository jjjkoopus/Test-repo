import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly cartIcon: Locator;
    readonly productItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartIcon = page.locator('.shopping_cart_link');
        this.productItems = page.locator('.inventory_item');
    }

    async addFirstProductToCart() {
        await this.productItems.first().locator('button').click();
    }

    async getCartCount(): Promise<number> {
        const countText = await this.cartIcon.textContent();
        return countText ? parseInt(countText) : 0;
    }
}