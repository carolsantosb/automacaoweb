class HomePage{
    get inptSearch() { return $('input[id$="inpHeaderSearch"]'); };
    get btnSearch() { return $$('span#btnHeaderSearch'); };
    

    openSite() {
        browser.url('https://www.magazineluiza.com.br/');
    };
    doSearch(name) {
        this.inptSearch.waitForDisplayed({ timeout: 3000 });
        this.inptSearch.clearValue();
        this.inptSearch.setValue(name);
        this.btnSearch[0].click();
    };
};

module.exports = new HomePage();
