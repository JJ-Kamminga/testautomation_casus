import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When('I enter invalid credentials', () => {
    cy.get('input[id="username"]')
        .type('inrn0f429f2n9f2n09')
    cy.get('input[type="password"]')
        .type('qliowdn3n-902nf29n-f3')
})

When('I enter valid credentials', () => {
    cy.get('input[id="username"]')
        .type(Cypress.env('username'))
    cy.get('input[type="password"]')
        .type(Cypress.env('password'))
})

Then('I see my username', () => {
    cy.get('#app')
        .contains(Cypress.env('username'))
        .should('be.visible')
})
