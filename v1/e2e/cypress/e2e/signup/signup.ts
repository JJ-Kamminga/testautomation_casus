import { Then, When, defineParameterType } from "@badeball/cypress-cucumber-preprocessor";

defineParameterType({
    name: 'isDisabled',
    regexp: /disabled|not disabled/,
    transformer: (value: string) => {
        if (value === 'disabled') return 'be.disabled';
        if (value === 'not disabled') return 'not.be.disabled';
    },
});

Then('the {string} button is {isDisabled}', (text: string, disabledStatus: string) => {
    cy.get('button')
        .contains(text)
        .should('be.visible')
        .should(disabledStatus)
})

When('I clear the username field', () => {
    cy.get('input[id="username"]')
        .clear()
})

When('I clear the password field', () => {
    cy.get('input[id="password"]')
        .clear()
})

When('I clear the repeat password field', () => {
    cy.get('input[id="repeat-password"]')
        .clear()
})

When('I type {string} into the username field', (text: string) => {
    cy.get('input[id="username"]')
        .type(text)
})

When('I type {string} into the password field', (text: string) => {
    cy.get('input[id="password"]')
        .type(text)
})

When('I type {string} into the repeat password field', (text: string) => {
    cy.get('input[id="repeat-password"]')
        .type(text)
})

When('I submit a mock of the signup request', () => {
    cy.intercept({
        method: 'POST',
        url: '*/proxy/users/',
    }, (req) => {
        req.reply({
            "active": true,
            "id": 5,
            "role": "user",
            "username": "cypress mock"
        })
    }).as('Signup')

    cy.get('button')
        .contains('Sign Up')
        .click()
    cy.wait('@Signup')
})