const baseUrl = 'https://pushing-it.onrender.com';
Cypress.Commands.add('login', ( usuario, contraseña)=> {
    cy.request({
        method: 'POST',
        url: `${baseUrl}/api/register`,
        body: {
            "username": usuario,
            "password": contraseña,
            "gender": "female",
            "day": "13",
            "month": "May",
            "year": "1994",
        },
    }).then(response => {
        cy.log(response)
        expect(response.status).to.be.equal(201);

        cy.request({
            method: 'POST',
            url: `${baseUrl}/api/login`,
            body: {
                "username": usuario,
                "password": contraseña,
            },

        }).then(response2 => {
            cy.log(response2),
            window.localStorage.setItem('token' , response2.body.token),
            window.localStorage.setItem('user', response2.body.user.username),
            window.localStorage.setItem('userId', response2.body.user.userId)

        })
    })


        

})   


Cypress.Commands.add('deleteuser', (token, usuario) => {
    cy.request({
        method: 'DELETE',
        url: `${baseUrl}/api/deleteuser/${usuario}`,
                headers: {
                    "authorization": `Bearer ${token}`
                },



    }).then(respuesta => {
        cy.log(respuesta)
        
    
    })
})
