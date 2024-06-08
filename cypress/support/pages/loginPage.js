export class LoginPage {
    constructor () {
        this.UserInput = '#user'
        this.PassInput = '#pass'
        this.SubmitFormButton = '#submitForm'
        this.RegisterToggle = '#registertoggle'
    }
//loginpage
    login (usuario, contraseña) {
        cy.get(this.RegisterToggle).dblclick()
        cy.get(this.UserInput).type(usuario)
        cy.get(this.PassInput).type(contraseña)
        cy.get(this.SubmitFormButton).click()

    }

}