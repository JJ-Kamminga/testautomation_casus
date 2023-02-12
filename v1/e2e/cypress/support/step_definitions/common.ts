import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I visit the homepage', () => {
  cy.visit('/')
})

When('I am logged in', () => {
  /** Possible improvement: */
  // cy.session('user', () => {
  cy.login();
  // })
})

Then('I see the text {string}', (text: string) => {
  cy.get('#app')
    .contains(text)
    .should('be.visible')
})

Then('I do not see the text {string}', (text: string) => {
  cy.get('#app')
    .contains(text)
    .should('not.exist')
})

Then('I do not see a button with the text {string}', (text: string) => {
  cy.get('button')
    .contains(text)
    .should('not.exist')
})

Then('I click the button with the text {string}', (text: string) => {
  cy.get('button')
    .contains(text)
    .should('be.visible')
    .click()
})

Then('I see a link with the text {string}', (text: string) => {
  cy.get('a')
    .contains(text)
    .should('be.visible')
})

Then('I click the link with the text {string}', (text: string) => {
  cy.get('a')
    .contains(text)
    .should('be.visible')
    .click()
})

Then('I see {string} in the url', (text: string) => {
  cy.url()
    .should('contain', text)
})

Then('I see an input field with placeholder text {string}', (text: string) => {
  cy.get(`input`)
    .should('have.attr', 'placeholder', text)
})

When('I clear the input field', () => {
  cy.get('input')
    .clear()
})