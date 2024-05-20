export class ShoppingCartPage {
constructor (){
    this.UnitPrice ='#unitPrice'
    this.ProductAmount='#productAmount'
    this.TotalPrice='#totalPrice'
    this.Showtotalprice = 'Show total price'
    this.Total = '#price'

}


verificarProducto (producto) {
return cy.contains('p', producto)
}

verificarPrecio (producto) {
return cy.contains('p', producto).siblings(this.UnitPrice)
}

verificarCantidad(producto) {
    return cy.contains('p', producto).siblings(this.ProductAmount)

}

verificarTotalPrice(producto) {
    return cy.contains('p', producto).siblings(this.TotalPrice)

}

verificarTotalPriceAcumulado() {
cy.contains('button', this.Showtotalprice).click()
return cy.get(this.Total , {timeout: 4000})


}
}