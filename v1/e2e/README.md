# End-to-end testing
The IMTDB end-to-end testing suite.

## Installation
1. Install dependencies: `npm i`
2. Rename `cypress.example.env.json` to `cypress.env.json` and fill it with valid credentials.
3. Run `npm run cypress`!

## Possible improvements
* Use cy.origin() in login command to reuse existing sessions
* Implement in CI to perform checks on Pull Request creation
* Implement visual regression/screenshot testing
