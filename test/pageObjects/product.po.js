class ProdutctPage{
    get textBtnAddCart() { return $('span.button__text'); };
    get btnAddCart() { return $('button.js-main-add-cart-button'); };
    get variationProduct() { return $('form.information-values__variation-form'); };
    get sltVariation() { return $$('option'); };

    validateProduct() {
        this.textBtnAddCart.waitForDisplayed({ timeout: 10000 });
        const addCart = this.textBtnAddCart.getText();
        expect(addCart.toLowerCase()).toContain('adicionar à sacola');
    };
    selectVariation(){
        this.variationProduct.isDisplayed();
        this.variationProduct.click();
        this.sltVariation[1].isDisplayed();
        this.sltVariation[1].click();
    };
    addCart(){
        this.btnAddCart.click();
    };
};

module.exports = new ProdutctPage();

