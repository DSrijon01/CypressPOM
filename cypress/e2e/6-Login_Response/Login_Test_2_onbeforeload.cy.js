/// <reference types="Cypress" />

describe('Session test', function () {
    it('Using Custom Command and Env to login and Share Session Tokens', function () {
      // Move the cy.request() call inside this test block
      cy.request("POST", "https://rahulshettyacademy.com/client", {
        userEmail: "sbs23@gmail.com",
        userPassword: "SBS121212b"
      }).then(function (response) {
        expect(response.status).to.eq(200);
        // Get the token for Session Holding through using environment variable
        Cypress.env('token', response.body.token);
  
        // Visit the dashboard page directly with the token set in local storage
        cy.visit("https://rahulshettyacademy.com/client/dashboard/dash", {
          onBeforeLoad: function (window) {
            // Set the token in local storage
            window.localStorage.setItem('token', Cypress.env('token'));
          }
        });
  
        // Add your assertions or further test steps here
      });
    });
  });
  