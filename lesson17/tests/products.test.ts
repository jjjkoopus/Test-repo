import { Builder, Browser, By } from 'selenium-webdriver';
import { expect } from 'chai';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

describe('SauceDemo Products Tests', function() {
  this.timeout(30000);
  let driver: any;
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let cartPage: CartPage;

  before(async function() {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    loginPage = new LoginPage(driver);
    productsPage = new ProductsPage(driver);
    cartPage = new CartPage(driver);
    
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  after(async function() {
    await driver.quit();
  });

  it('should add product to cart', async function() {
    await productsPage.addToCart('Sauce Labs Backpack');
    const cartCount = await productsPage.getCartCount();
    expect(cartCount).to.equal('1');
  });

  it('should navigate to cart', async function() {
    await productsPage.goToCart();
    const items = await cartPage.getCartItems();
    expect(items.length).to.be.greaterThan(0);
  });
});