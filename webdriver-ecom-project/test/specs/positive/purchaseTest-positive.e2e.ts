import { expect } from 'chai';
import HomePage from '../../pageobjects/HomePage';
import ProductPage from '../../pageobjects/ProductPage';
import LoginPage from '../../pageobjects/LoginPage';
import CheckoutPage from '../../pageobjects/CheckoutPage';
import {
  correctCustomerData,
  paymentOption,
  successfulOrderInformation,
} from '../../data/userData';
const productName = 'Sauce Labs Backpack';

describe('E-commerce purchase positive tests', () => {
  beforeEach(async () => {
    await HomePage.open('/');
    await LoginPage.login('standard_user', 'secret_sauce');
  });

  it('should add product to cart from product page, and complete purchase', async () => {
    await HomePage.openProduct(productName);
    await ProductPage.addToCart();

    const cartBadgeValue = await HomePage.getCartBadgeValue();
    expect(cartBadgeValue).to.equal('1');

    await HomePage.openShoppingCart();
    await CheckoutPage.clickCheckoutButton();
    await CheckoutPage.fillUserInformation(correctCustomerData);
    await CheckoutPage.clickContinueButton();

    const checkoutItems = await CheckoutPage.getCheckoutItems();
    expect(checkoutItems).to.contain(productName);

    await CheckoutPage.clickFinishCheckoutButton();

    const completeOrderHeader = await CheckoutPage.getCompleteOrderHeader();
    expect(completeOrderHeader).to.contain(successfulOrderInformation);
  });

  it('should add product to cart from inventory page, and complete purchase', async () => {
    await HomePage.addSauceLabBackPackToCard();
    const cartBadgeValue = await HomePage.getCartBadgeValue();
    expect(cartBadgeValue).to.equal('1');

    await HomePage.openShoppingCart();
    await CheckoutPage.clickCheckoutButton();
    await CheckoutPage.fillUserInformation(correctCustomerData);
    await CheckoutPage.clickContinueButton();

    const checkoutItems = await CheckoutPage.getCheckoutItems();
    expect(checkoutItems).to.contain(productName);

    await CheckoutPage.clickFinishCheckoutButton();

    const completeOrderHeader = await CheckoutPage.getCompleteOrderHeader();
    expect(completeOrderHeader).to.contain(successfulOrderInformation);
  });

  it('should add open checkout and check continue shopping button redirects to inventory page', async () => {
    await HomePage.openShoppingCart();
    await CheckoutPage.clickContinueShoppingButton();

    const isInventoryPageVisible = await HomePage.isInventoryPageVisible();
    expect(isInventoryPageVisible).to.be.true;
  });

  it('should check available payment options', async () => {
    await HomePage.openProduct(productName);
    await ProductPage.addToCart();
    await HomePage.openShoppingCart();
    await CheckoutPage.clickCheckoutButton();
    await CheckoutPage.fillUserInformation(correctCustomerData);
    await CheckoutPage.clickContinueButton();

    const paymentInformation = await CheckoutPage.getPaymentInformation();
    expect(paymentInformation).to.contain(paymentOption);
  });
});
