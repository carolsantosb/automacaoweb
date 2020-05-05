class SearchPage{
    get nameProduct() { return $('h2.nm-product-name'); };

    validateSearch(name) {
        this.nameProduct.waitForDisplayed({ timeout: 10000 });
        const titleProduct = this.nameProduct.getText();
        expect(titleProduct.toLowerCase()).toContain(name);
    };

    selectProduct() {
        this.nameProduct.click();
    }
};

module.exports = new SearchPage();
