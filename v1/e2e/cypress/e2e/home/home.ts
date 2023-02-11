import { Then } from '@badeball/cypress-cucumber-preprocessor'

Then('I see a YouTube video', () => {
  cy.get('iframe')
    .should('not.contain', 'placeholder for')

  cy.get('iframe').as('YouTubeIFrame')
    .should('have.attr', 'src')
    .and('match', /https:\/\/www.youtube.com\/*/)
})
