import HomePage from '../../pageobjects/HomePage';
import LoginPage from '../../pageobjects/LoginPage';
import CheckoutPage from '../../pageobjects/CheckoutPage';
import { expect } from 'chai';
import {
  correctCustomerData,
  firstNameValidation,
  lastNameValidation,
  postalCodeValidation,
} from '../../data/userData';

describe('E-commerce purchase negative tests', () => {
  const username: string = process.env.USERNAME!;
  const password: string = process.env.PASSWORD!;

  beforeEach(async () => {
    await HomePage.open('/');
    await LoginPage.login(username, password);
  });

  it('should not be able to proceed to checkout with empty first name in customer information', async () => {
    await HomePage.openShoppingCart();
    await CheckoutPage.clickCheckoutButton();
    await CheckoutPage.clickContinueButton();

    const validationErrorText = await CheckoutPage.getValidationError();
    expect(validationErrorText).to.contain(firstNameValidation);
  });

  it('should not be able to proceed to checkout with empty last name in customer information', async () => {
    await HomePage.openShoppingCart();
    await CheckoutPage.clickCheckoutButton();
    await CheckoutPage.fillFirstName(correctCustomerData.firstName);
    await CheckoutPage.clickContinueButton();

    const validationErrorText = await CheckoutPage.getValidationError();
    expect(validationErrorText).to.contain(lastNameValidation);
  });

  it('should not be able to proceed to checkout with empty postal code in customer information', async () => {
    await HomePage.openShoppingCart();
    await CheckoutPage.clickCheckoutButton();
    await CheckoutPage.fillFirstName(correctCustomerData.firstName);
    await CheckoutPage.fillLastName(correctCustomerData.lastName);
    await CheckoutPage.clickContinueButton();

    const validationErrorText = await CheckoutPage.getValidationError();
    expect(validationErrorText).to.contain(postalCodeValidation);
  });
});
