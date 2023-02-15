import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

When('I visit the movies page', () => {
  cy.visit('/movies')
})

Then('the list of movies contains at least {int} movies', (numberOfMovies: number) => {
  cy.get('main[class="movies"]')
    .find('li')
    .should('have.length.greaterThan', numberOfMovies - 1)
})

Then('the list of movies contains exactly {int} movies', (numberOfMovies: number) => {
  cy.get('main[class="movies"]')
    .find('li')
    .should('have.length', numberOfMovies)
})

Then('each movie has an image', () => {
  cy.get('main[class="movies"]')
    .find('img')
    .each(($img) => {
      /** @ts-expect-error: possible improvement: pass on img type */
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
})

Then('I see the movie image', () => {
  cy.get('[class="movies"]')
    .find('img').then(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
})

Then('I see a filled {string} field', (text: string) => {
  cy.get('dt')
    .contains(text)
    .next()
    .should('not.have.text', '')
})

Then('each movie has a title and a description', () => {
  cy.get('[class="movies"]')
    .find('[class="movie__details"]')
    .each(($movie) => {
      expect($movie.find('h3')).to.have.length(1)
      expect($movie.find('p')).to.have.length(1)
    })
})

Then('I click the button with the text {string} on movie {int}', (text: string, movieNumber: number) => {
  cy.get('main[class="movies"]')
    .find('li')
    .eq(movieNumber)
    .find('button')
    .contains(text)
    .should('be.visible')
    .click()
})

When('I search for {string}', (text: string) => {
  cy.intercept({
    method: 'GET',
    url: `*/proxy/movies/searches?query=${text}`.replace(' ', '+')
  }).as('Search')

  cy.get('input')
    .type(text)

  cy.wait('@Search')
})
