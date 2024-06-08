import { LoginPage} from "../support/pages/loginPage"
import { HeaderPage } from "../support/pages/headerPage";   
import { OnlineShopPage } from "../support/pages/onlineShopPage";  

describe('Preentrega' , ()=> {
    let data 
    const loginPage = new LoginPage ();
    const headerPage = new HeaderPage ();
    const onlineShopPage = new OnlineShopPage ()

    before('Before', ()=> {
        cy.fixture('data').then ( datos => {
            data = datos 
        });

    
    })
    beforeEach('BeforeEach' , ()=> {
        cy.visit('');
    })

    it('Preentrega' , ()=> {
    loginPage.login(Cypress.env().usuario, Cypress.env().contraseña);
    headerPage.verificarUser(Cypress.env().usuario);
    onlineShopPage.onlineShopIn()
    onlineShopPage.productsPage.agregarProducto(data.producto1.nombre)
    onlineShopPage.productsPage.agregarProducto(data.producto1.nombre)
    onlineShopPage.productsPage.agregarProducto(data.producto2.nombre)
    cy.get('#goShoppingCart').click()
    // Producto 1
    onlineShopPage.shoppingCartPage.verificarProducto(data.producto1.nombre).should('exist')
    onlineShopPage.shoppingCartPage.verificarCantidad(data.producto1.nombre).invoke('text').should('be.equal', `${data.producto1.cantidad}`) ;
    onlineShopPage.shoppingCartPage.verificarPrecio(data.producto1.nombre).invoke('text').should('be.equal', `$${data.producto1.precio}`) ;
    onlineShopPage.shoppingCartPage.verificarTotalPrice(data.producto1.nombre).invoke('text').then(texto=> {
        expect(texto).to.be.equal(`$${data.producto1.precio*data.producto1.cantidad}`)
        
    })
    // Producto 2

    onlineShopPage.shoppingCartPage.verificarProducto(data.producto2.nombre).should('exist')
    onlineShopPage.shoppingCartPage.verificarCantidad(data.producto2.nombre).invoke('text').should('be.equal', `${data.producto2.cantidad}`) ;
    onlineShopPage.shoppingCartPage.verificarPrecio(data.producto2.nombre).invoke('text').should('be.equal', `$${data.producto2.precio}`) ;
    onlineShopPage.shoppingCartPage.verificarTotalPrice(data.producto2.nombre).invoke('text').then(texto=> {
        expect(texto).to.be.equal(`$${data.producto2.precio*data.producto2.cantidad}`)
        
    })
//Total
onlineShopPage.shoppingCartPage.verificarTotalPriceAcumulado().invoke('text').should('be.equal' ,`${data.producto2.precio*data.producto2.cantidad + data.producto1.precio*data.producto1.cantidad}` )

    




    

        

    })
})