import { Loginpage } from "../../fixtures/sendsprintElements"

// export class logoutPage {
//     static completeLoginLogout() {
//         cy.visit('/')
//         cy.get(Loginpage.username).click().type('jacob.olajide@yahoo.com')
//         cy.get(Loginpage.password).type('Jacnificient@123')
//         cy.contains('Login').click()
//         cy.intercept('POST', '/account/login').as('getLogin')
//         cy.wait('@getLogin')
//         cy.get(Loginpage.dashboardHeader).contains('Hey OLUGBENGA,').should('be.visible')

   // }

//}
export class login {
    static completeLogin() {
        cy.visit('https://frontendstaging.sendsprint.com/login/');
        cy.contains('Welcome back!').should('be.visible');
        cy.get(':nth-child(1) >  .ss-relative > .ss-duration-150').click().type('jacob.olajide@yahoo.com');
        cy.get(Loginpage.password).type('Jacnificient@123');
        cy.contains('Login').click();
        cy.intercept('POST', '/account/login').as('getLogin');
        cy.wait('@getLogin');
        cy.get(Loginpage.dashboardHeader).contains('Hey OLUGBENGA,').should('be.visible');
    }
}

