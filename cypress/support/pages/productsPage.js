export class ProductsPage {
    constructor () {
        this.CloseButton = '#closeModal'
    }

    agregarProducto(addproducto) {
        cy.get(`[name="${addproducto}"]`).click()
        cy.get(this.CloseButton).click()
    }
} 
