import { CheckOutPage } from "./checkoutPage"
export class BillingSummaryPage {
    constructor () {
        this.checkOutPage = new CheckOutPage
        this.CheckOutButton = '#goCheckout'
    }


    goCheckOut () {
        cy.get(this.CheckOutButton).click()
        
    }
}