import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I visit the homepage', () => {
  cy.visit('/')
})

Then('I see the text {string}', (text: string) => {
  cy.get('#app')
    .contains(text)
    .should('be.visible')
})

Then('I see a button with the text {string}', (text: string) => {
  cy.get('button')
    .contains(text)
    .should('be.visible')
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