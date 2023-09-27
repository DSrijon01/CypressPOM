// Login TOkens in browser Local Storage and Test Navigation Using Cypress
// It will skip log in screen if pre defined username and password along with token is provied as Custom Commands Example -- command.js
/// <reference types="Cypress" />

let productName
describe('Session test', function () {
  it('Using Custom Command to login ', function () {
    cy.loginFromFile();
    // Verify Log in through URL validation 
    cy.url().should('eq', 'https://rahulshettyacademy.com/client/dashboard/dash');
    // Mapping Prodcut value to Verify with CSV
    cy.get(".card-body b").eq(1).should('exist').then(function (ele) {
      productName = ele.text(); // Assign value to productName
    })
    // Add shopping items to the cart 
    cy.get(".card-body button:last-of-type").eq(1).click()
    // Move to the next page through cart 
    cy.get("[routerlink='/dashboard/cart']").click()
    // Click on checkout button 
    cy.contains("Checkout").click()
    // Type in the country 
    cy.get("[placeholder='Select Country']").type("ind")
    // select the desired element == Country
    cy.get('.ta-results button').each(($e1, index, $list) => {
      if($e1.text()===" India")
      {
        cy.wrap($e1).click()
      }
    })
    // Submit the place order button
    cy.get(".action__submit").click();
    // Wait for the page to load 
    cy.wait(2000)
    // Click on the button to download excel file
    cy.contains('Click To Download Order Details in Excel').click();

    // Excel Generated Data and Selected Product Validation
    // File Path for Exel file
    const filepath = cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_sbs23.xlsx")
    
    // Calling in the task for Excel File read and write
   // Calling in the task for Excel File read and write
    cy.task('excelToJsonConverter', filepath).then(function (result) {
        
        cy.log(result)
    
    })
  

    













  });
});
