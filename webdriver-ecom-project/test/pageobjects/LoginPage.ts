import BasePage from './BasePage';

class LoginPage extends BasePage {
    get usernameInput() { return $('[name="user-name"]'); }
    get passwordInput() { return $('[name="password"]'); }
    get loginButton() { return $('[data-test="login-button"]'); }

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();
