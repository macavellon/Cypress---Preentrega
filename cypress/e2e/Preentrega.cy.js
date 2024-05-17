describe('Preentrega' , ()=> {
    const numero = Math.floor(Math.random()*1000)
    it('Registro' , ()=> {
        cy.visit('');
        cy.get('#user').type('User' + numero)
        

    })
})