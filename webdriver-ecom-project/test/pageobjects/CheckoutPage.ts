import BasePage from './BasePage';
import { CustomerData } from '../data/userData';

class CheckoutPage extends BasePage {
  get checkoutButton() {
    return $('[data-test="checkout"]');
  }
  get firstNameInput() {
    return $('[name="firstName"]');
  }
  get lastNameInput() {
    return $('[name="lastName"]');
  }
  get postalCodeInput() {
    return $('[name="postalCode"]');
  }
  get continueButton() {
    return $('[data-test="continue"]');
  }
  get finishButton() {
    return $('[data-test="finish"]');
  }
  get validationError() {
    return $('[data-test="error"]');
  }
  get paymentInformation() {
    return $('[data-test="payment-info-value"]');
  }
  get checkoutItems() {
    return $('[data-test="inventory-item"]');
  }
  get completeOrderHeader() {
    return $('[data-test="complete-header"]');
  }
  get continueShoppingButton() {
    return $('[data-test="continue-shopping"]');
  }

  async clickCheckoutButton(): Promise<void> {
    await this.checkoutButton.click();
  }

  async fillFirstName(firstName: string) {
    await this.firstNameInput.setValue(firstName);
  }

  async fillLastName(lastName: string) {
    await this.lastNameInput.setValue(lastName);
  }

  async fillPostalCode(postalCode: string) {
    await this.postalCodeInput.setValue(postalCode);
  }

  async fillUserInformation(data: CustomerData): Promise<void> {
    await this.fillFirstName(data.firstName);
    await this.fillLastName(data.lastName);
    await this.fillPostalCode(String(data.postalCode));
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async getCheckoutItems(): Promise<string> {
    return await this.checkoutItems.getText();
  }

  async getValidationError(): Promise<string> {
    return await this.validationError.getText();
  }

  async clickFinishCheckoutButton(): Promise<void> {
    await this.finishButton.click();
  }

  async getCompleteOrderHeader(): Promise<string> {
    return await this.completeOrderHeader.getText();
  }

  async getPaymentInformation(): Promise<string> {
    return await this.paymentInformation.getText();
  }

  async clickContinueShoppingButton(): Promise<void> {
    await this.continueShoppingButton.click();
  }
}

export default new CheckoutPage();
