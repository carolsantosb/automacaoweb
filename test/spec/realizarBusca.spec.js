const Home = require ('../pageObjects/home.po.js');
const Search = require ('../pageObjects/search.po.js');
const Product = require ('../pageObjects/product.po.js');
const Cart = require ('../pageObjects/cart.po.js');

    describe ('Realizar busca de um produto e adiciona-lo ao carrinho no site Magazine Luiza', ()=>{
        it('Realizar a busca e adicionar item ao carrinho', () => {
            Home.openSite();
            Home.doSearch('pincel');
            Search.validateSearch('pincel');
            Search.selectProduct();
            Product.validateProduct();
            Product.addCart();
            Cart.validateCart();
        }); 
        it('Realizar a busca e adicionar item com variação ao carrinho', () => {
            Home.openSite();
            Home.doSearch('ferro');
            Search.validateSearch('ferro');
            Search.selectProduct();
            Product.validateProduct();
            Product.selectVariation();
            Product.addCart();
            Cart.validateCart();
        });  
        it('Realizar a busca e adicionar item que possui garantia ao carrinho', () => {
            Home.openSite();
            Home.doSearch('fone de ouvido');
            Search.validateSearch('fone de ouvido');
            Search.selectProduct();
            Product.validateProduct();
            Product.addCart();
            Cart.warrantyProduct();
            Cart.validateCart();
        });
    });

