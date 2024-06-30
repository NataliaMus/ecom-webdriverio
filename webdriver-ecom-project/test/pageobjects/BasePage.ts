export default class BasePage {
    open(path: string): void {
        browser.url(path);
    }
}
