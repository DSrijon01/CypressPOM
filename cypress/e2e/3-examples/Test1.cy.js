describe('First Tets Suite', function()
{


it('First Test Case', function() 
{
// Url Navigation
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
// Get element
cy.get('.search-keyword').type('Ca')
// Wait timer
cy.wait(4000)
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

} )


} )

