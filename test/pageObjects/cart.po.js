class CartPage{
    get textCart() { return $('span.button__text'); };
    get textWarranty() { return $('p.warranty__title'); };
    get btnContinue() { return $('a.btn-buy-warranty'); };
    get titleCart() { return $('div.BasketPage-title'); };
    
    warrantyProduct(){
        this.btnContinue.click();
    };
    validateCart() {
        this.titleCart.waitForDisplayed({ timeout: 10000 });
        const textCart = this.titleCart.getText();
        expect(textCart.toLowerCase()).toContain('sacola');
    };
};

module.exports = new CartPage();