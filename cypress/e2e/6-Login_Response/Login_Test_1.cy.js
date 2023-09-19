// Login TOkens in browser Local Storage and Test Navigation Using Cypress
// It will skip log in screen if pre defined username and password along with token is provied as Example -- command.js
/// <reference types="Cypress" />

describe('Session test', function () {
    it('Using Custom Command and Env to login and Share Session Tokens', function () {
      cy.LoginApi(); // Call the custom command
  
      cy.visit("https://rahulshettyacademy.com/client", {
        onBeforeLoad: function (window) {
          // Calling in the environment token from command.js
          window.localStorage.setItem('token', Cypress.env('token'))
        }
      })
    })
  })
  