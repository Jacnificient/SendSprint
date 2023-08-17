const { Loginpage, Transferpage, Navigation } = require("../../fixtures/sendsprintElements");


describe("Send Sprint Remittance App",function(){
  beforeEach('', async function () {
});

it('User Logs in Successfully and navigates through app', () => {
    cy.clearCookies()
    cy.visit('/')
    cy.get(Loginpage.username).click().type('jacob.olajide@yahoo.com')
    cy.get(Loginpage.password).type('Jacnificient@123')
    cy.contains('Login').click()
    cy.intercept('POST', '/account/login').as('getLogin')
    cy.wait('@getLogin')
    cy.get(Loginpage.dashboardHeader).contains('Hey OLUGBENGA,').should('be.visible')
    cy.get(Navigation.menuBtn).click()
    cy.get(Navigation.transactionsMenu).click()
    cy.get(Navigation.menuBtn).click()
    cy.get(Navigation.recipientsMenu).click()
    cy.get(Navigation.menuBtn).click()
    cy.get(Navigation.sendmoneyMenu).click().wait(1500)
  });

it('User Sends money Successfully and logs out', () => {
    cy.get(Transferpage.sendmoneyBtn).click()
    cy.wait(2000)
    cy.get(Transferpage.sendamount).click().clear().type('50')
    cy.get(Transferpage.receiverCurrency).click()
    cy.get(Transferpage.naiaraCurrency).contains('NGN').click().wait(1500)
    cy.contains('Bank Account').click()
    cy.contains('Continue').click()
    cy.intercept('POST', '/account/loaduserrecipientsbytype').as('getRecipient')
    cy.wait('@getRecipient')
    cy.get(Transferpage.beneficiaryOption).click().wait(1500)
    cy.get(Transferpage.paymentOption).click().wait(1500)
    cy.get(Transferpage.payBtn).click()
    cy.get(Transferpage.transactionPin).type('1234')
    cy.get(Transferpage.confirmPay)
    cy.get(Transferpage.closeModal).click()
    cy.get(Navigation.accountBtn).click()
    cy.get(Navigation.logoutBtn).contains('Logout').click().wait(1500)
   
  });

  
})
