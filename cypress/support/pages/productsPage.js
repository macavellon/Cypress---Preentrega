export class ProductsPage {
    constructor () {
        this.CloseButton = '#closeModal'
    }

    agregarProducto(addproducto) {
        cy.get(addproducto).click()
        cy.get(this.CloseButton).click()

    }

}