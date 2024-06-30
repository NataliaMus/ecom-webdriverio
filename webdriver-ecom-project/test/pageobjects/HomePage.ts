import BasePage from './BasePage';

class HomePage extends BasePage {
    get sauceLabBackPackAddToCartButton() { return $('[data-test="add-to-cart-sauce-labs-backpack"]'); }
    get cartBadge() { return $('[data-test="shopping-cart-badge"]'); }
    get inventoryPage() { return $('[data-test="inventory-container"]'); }
    get shoppingCart() { return $('[data-test="shopping-cart-link"]'); }

    product(itemName: string) {
        return $(`//div[@data-test="inventory-item-name" and text()="${itemName}"]`);
    }

    async openProduct(itemName: string): Promise<void> {
        const productElement = await this.product(itemName);
        await productElement.click();
    }

    async openShoppingCart(): Promise<void> {
        await this.shoppingCart.click();
    }

    async addSauceLabBackPackToCard(): Promise<void> {
        await this.sauceLabBackPackAddToCartButton.click();
    }

    async getCartBadgeValue(): Promise<string> {
        return await this.cartBadge.getText();
    }

    async isInventoryPageVisible(): Promise<boolean> {
        return await this.inventoryPage.isDisplayed();
    }
}

export default new HomePage();
