// Login TOkens in browser Local Storage and Test Navigation Using Cypress
// It will skip log in screen if pre defined username and password along with token is provied as Custom Commands Example -- command.js
/// <reference types="Cypress" />
describe('OrangeCRM TC_01', function () {
    it('Login Page - Authenticate Successfully', function () {
      cy.loginorange();
      cy.wait(2000)
      cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
      cy.wait(2000)
      // Verify the My Info page is fully loaded.
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');
      cy.wait(2000)
      // Verify “Date of Birth” field is filled in.
      cy.get('.oxd-input[data-v-1f99f73c]').should('not.have.value', 'yyyy-mm-dd');
      // Update the Date of Birth to any date.
      cy.get('.oxd-input--active').eq(0).type('1998-04-19');
      cy.get('.oxd-input[data-v-1f99f73c]').should('have.value', '1998-04-19');
      // Click on the Save Button 
      cy.get('button[type="submit"]').first().click();
      // Verify save button got clicked 
      cy.get('.oxd-toast').then(function(element){
        const actualText=element.text()
        expect(actualText.includes("Successfully Updated")).to.be.true

    }
    )

 

    });
  });
  
  
  