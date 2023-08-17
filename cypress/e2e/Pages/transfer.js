import { Transferpage } from "../../fixtures/sendsprintElements"

export class transfer {
    static completeTransfer() {
    cy.get(Transferpage.sendmoneyBtn).click();
    cy.wait(2000);
    cy.get(Transferpage.sendamount).click().clear().type('50');
    cy.get(Transferpage.receiverCurrency).click();
    cy.get(Transferpage.naiaraCurrency).contains('NGN').click().wait(1500);
    cy.contains('Bank Account').click();
    cy.contains('Continue').click();
    cy.intercept('POST', '/account/loaduserrecipientsbytype').as('getRecipient');
    cy.wait('@getRecipient');
    cy.get(Transferpage.beneficiaryOption).click().wait(1500);
    cy.get(Transferpage.paymentOption).click().wait(1500);
    cy.get(Transferpage.payBtn).click();
    cy.get(Transferpage.transactionPin).type('1234');
    cy.get(Transferpage.confirmPay).click();
    cy.get(Transferpage.closeModal).click();
    }
}