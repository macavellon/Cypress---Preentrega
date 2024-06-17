import { ShoppingCartPage } from './shoppingCartPage.js'
import { ProductsPage } from './productsPage'




export class OnlineShopPage {

    constructor() {
        this.shoppingCartPage = new ShoppingCartPage
        this.productsPage = new ProductsPage
        this.onlineShopButton = '#onlineshoplink'


    }

    onlineShopIn () {
        cy.get(this.onlineShopButton).click()
    }





    
};