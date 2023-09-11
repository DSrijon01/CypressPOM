// Initial Navigation Web Application

describe('First Tets Suite', function()
{


it('Initalization and Product Navigation', function() 
{
// Url Navigation
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
// Get element
cy.get('.search-keyword').type('Ca')
// Wait timer
cy.wait(2000)
// Assertion (Visiblity Check)
cy.get('.product:visible').should('have.length', 4)
// Parent Child Chaining (Using Find Mehtod with get)
cy.get('.products').find('.product').should('have.length', 4)
// Clicking on cart 2nd on the listing
cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

// Get all the products and only if it contains a selected product check for assertion or proceed with further testing
cy.get('.products').find('.product').each(($el, index, $lis) => {
   
  const textVeg = $el.find('h4.product-name').text()
  if(textVeg.includes('Cashews'))
  {

    cy.wrap($el).contains('ADD TO CART').click()

  }
})
// Asynchronus Nature of Cypress JS 
console.log('Asynchronus')
//Manually Resolving this Example


// Optimizing JS - Aliasing (Act as a variable - Product Locator)
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length', 4)

// Cypress Logging (Logging the Brand name)
  
  //Printing in logs
cy.get('.brand').then(function (logoelement) {
  
  cy.log(logoelement.text())

})

  //Assertion for the log 
  cy.get('.brand').should('have.text', 'GREENKART')

const logo = cy.get('.brand')

// Moving on the Application - Proceed to Checkout and Place Order
cy.get('.cart-icon > img').click()
cy.get('.cart-preview > .action-block > button').click()
cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()







} )


} )

