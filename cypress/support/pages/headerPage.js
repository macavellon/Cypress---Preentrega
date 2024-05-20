export class HeaderPage {
    verificarUser (usuario) {

        cy.get(`[id^="user_${usuario}_"]`)
    }

}