import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

When('I click the logo in the header', () => {
  cy.get('header')
    .find('img[class=logo]')
    .click()
})

Then('I see a YouTube video', () => {
  cy.get('iframe')
    .should('not.contain', 'placeholder for')

  cy.get('iframe').as('YouTubeIFrame')
    .should('have.attr', 'src')
    .and('match', /https:\/\/www.youtube.com\/*/)
})
