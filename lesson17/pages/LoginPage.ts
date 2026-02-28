import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  async open(): Promise<void> {
    await this.driver.get('https://www.saucedemo.com/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.type('#user-name', username);
    await this.type('#password', password);
    await this.click('#login-button');
  }

  async getErrorMessage(): Promise<string> {
    return await this.getText('.error-message-container');
  }
}