// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('validateLocators', (locators) => {
  Object.keys(locators).forEach((element) => {
    if (locators[element].includes('?')) {
      // do nothing, these elements will be asserted later
    } else {
      cy.get(locators[element]).should('be.visible');
    }
  });
});

Cypress.Commands.add('validateNeighbourLocators', (locator, times) => {
  for (let i = 1; i <= times; i += 1) {
    cy.get(locator.replace('?', i), { timeout: 5000 }).scrollIntoView({ easing: 'linear' }).should('be.visible');
  }
});
