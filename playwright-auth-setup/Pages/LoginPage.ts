import { expect, Locator, Page } from '@playwright/test';

export class LoginPage{

    public readonly usernameInput: Locator;
    public readonly passwordInput: Locator;
    public readonly loginButton: Locator;
    public readonly swagLabsHeader: Locator;    
    public readonly errorMessage: Locator;


    constructor(public page: Page) {
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.swagLabsHeader = page.locator('.login_logo');
        this.errorMessage = page.locator('[data-test="error"]');


}
   /**
     * Logs in to the application with the provided username and password.
     * @param username - The username to log in with.
     * @param password - The password to log in with.
     */
async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    
    }

    
