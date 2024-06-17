import { LoginPage} from "../support/pages/loginPage"
import { HeaderPage } from "../support/pages/headerPage";   
import { OnlineShopPage } from "../support/pages/onlineShopPage";  
const constants = require('../support/constantes');
describe('Preentrega' , ()=> {
    let data 
    let token
    const loginPage = new LoginPage ();
    const headerPage = new HeaderPage ();
    const onlineShopPage = new OnlineShopPage ()

    before('Before', ()=> {
        cy.fixture('data').then ( datos => {
            data = datos 
        }); 
    
    })
    beforeEach('BeforeEach' , ()=> {
    cy.login(data.login.user,data.login.password );    
    cy.visit('');
    })



    // Entrega final

    it('Final' , ()=> {
        let total
        total = Number((data.producto2.precio*data.producto2.cantidad + data.producto1.precio*data.producto1.cantidad).toFixed(2))
        let total2
        total2 = (data.producto2.precio*data.producto2.cantidad + data.producto1.precio*data.producto1.cantidad)
        headerPage.verificarUser(data.login.user);
        onlineShopPage.onlineShopIn()
        token = window.localStorage.getItem('token');
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
    onlineShopPage.shoppingCartPage.verificarTotalPriceAcumulado().invoke('text').should('be.equal' , `${total}` )
//Checkout
onlineShopPage.shoppingCartPage.goBillingSumary();
onlineShopPage.shoppingCartPage.billingSummaryPage.goCheckOut();
onlineShopPage.shoppingCartPage.billingSummaryPage.checkOutPage.goPurchase(data.purchase.name, data.purchase.lastName, data.purchase.cardNumber);
onlineShopPage.shoppingCartPage.billingSummaryPage.checkOutPage.checkPurchase().should('have.text',`${data.purchase.name} ` + `${data.purchase.lastName} ` + constants.PURCHASE.TITLE  );
onlineShopPage.shoppingCartPage.billingSummaryPage.checkOutPage.checkProduct(data.producto1.nombre).should('exist')
onlineShopPage.shoppingCartPage.billingSummaryPage.checkOutPage.checkProduct(data.producto2.nombre).should('exist')
onlineShopPage.shoppingCartPage.billingSummaryPage.checkOutPage.checkCard().should('have.text', `${data.purchase.cardNumber}`)
onlineShopPage.shoppingCartPage.billingSummaryPage.checkOutPage.checkTotal().should('have.text' , constants.PURCHASE.TITLE2 + `${total2}`)


//Delete user

    cy.deleteuser(token, data.login.user)
    
    
    
        
    
            
    
        })



})