import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the homepage", () => {
    cy.visit('/');
});

Then("I see the text {string}", () => {
  cy.get("main")
    .contains('Coming soon')
    .should('be.visible');
});