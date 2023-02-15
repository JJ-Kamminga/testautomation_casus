/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    login: (username?: string, password?: string) => void
  }
}
