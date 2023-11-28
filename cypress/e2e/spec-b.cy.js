// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('fails', () => {
  cy.visit('/')
  cy.get('does-not-exist')
})
