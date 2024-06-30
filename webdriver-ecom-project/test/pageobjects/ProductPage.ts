import BasePage from './BasePage';

class ProductPage extends BasePage {
    get addToCartButton() { return $('[data-test="add-to-cart"]'); }

    async addToCart(): Promise<void> {
       await this.addToCartButton.click();
    }
}

export default new ProductPage();
