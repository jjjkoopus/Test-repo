import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PlaywrightWorld } from '../support/world';

Given('I am on the login page', async function(this: PlaywrightWorld) {
    await this.page.goto('https://www.saucedemo.com/');
});

When('I enter username {string} and password {string}', async function(this: PlaywrightWorld, username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
});

When('I click the login button', async function(this: PlaywrightWorld) {
    await this.page.click('#login-button');
});

Then('I should be redirected to the inventory page', async function(this: PlaywrightWorld) {
    await expect(this.page).toHaveURL(/.*inventory.html/);
});

Then('I should see an error message', async function(this: PlaywrightWorld) {
    const error = this.page.locator('[data-test="error"]');
    await expect(error).toBeVisible();
});