// Login TOkens in browser Local Storage and Test Navigation Using Cypress
// It will skip log in screen if pre defined username and password along with token is provied as Custom Commands Example -- command.js
/// <reference types="Cypress" />
describe('OrangeCRM TC_01', function () {
    it('Login Page - Authenticate Successfully', function () {
      cy.loginorange();
      cy.wait(2000)
      cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');
      cy.wait(2000)

    });
  });
  
  
  