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
// commands.js
Cypress.Commands.add("selectProduct", (productName) => { 
  cy.get('h4.card-title').each(($el, index, $list) => {
      if($el.text().includes(productName))
      {
          cy.get('button.btn.btn-info').eq(index).click()
      }
  });
});

// Define the LoginApi command outside of the selectProduct command
Cypress.Commands.add("loginFromFile", () => {
  // Read the credentials from the file
  cy.readFile("credentials.txt").then((content) => {
    const [username, password] = content.split("\n");
    
    // Visit the login page
    cy.visit("https://rahulshettyacademy.com/client");
    cy.wait(1000)
    // Fill in the username and password fields
    cy.get("#userEmail").type(username);
    cy.get("#userPassword").type(password);
    cy.wait(1000)
    // Click on the login button
    // cy.get("#login").click();
  });
});

// Define the LoginApi command outside of the selectProduct command
Cypress.Commands.add("loginorange", () => {
  // Read the credentials from the file
  cy.readFile("orangecrm.txt").then((content) => {
    const [username, password] = content.split("\n");
    
    // Visit the login page
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    // Fill in the username and password fields
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);

    // Click on the login button
    cy.get('.oxd-button').click();
  });
});

