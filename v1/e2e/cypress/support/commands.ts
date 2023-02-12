// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (
    username = Cypress.env('username'),
    password = Cypress.env('password')
) => {
    cy.intercept({
        method: 'POST',
        url: '*/proxy/tokens'
    }).as('Token')

    cy.visit('/')

    cy.get('a')
        .contains('Login')
        .click()
    cy.get('input[id="username"]')
        .type(username)
    cy.get('input[type="password"]')
        .type(password)
    cy.get('button')
        .contains('Submit')
        .click()

    cy.wait('@Token')
        .its('response.statusCode')
        .should('eq', 200)
})
