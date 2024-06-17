export class CheckOutPage {
    constructor () {
        this.NameInput = '#FirstName';
        this.LastNameInput = '#lastName';
        this.CardNumber = '#cardNumber';
        this.PurchaseButton = '[data-cy= "purchase"]'
        this.NameCheck ='#name'
        this.creditCard ='#creditCard'
        this.total = '#totalPrice'
    }
   


    goPurchase (name, input, card) {
        cy.get(this.NameInput).type(name);
        cy.get(this.LastNameInput).type(input);
        cy.get(this.CardNumber).type(card);
        cy.get(this.PurchaseButton).click()

    }

    checkPurchase () {
    return cy.get(this.NameCheck)

    }

    checkProduct(producto) {
    return cy.get(`[id="${producto}"]`);
    }

    checkCard() {
    return cy.get(this.creditCard)
    }

    checkTotal () {
        return cy.get(this.total)
    }
}