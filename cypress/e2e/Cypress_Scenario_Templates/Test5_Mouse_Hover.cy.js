//Mousehover Navigation with Cypress (No invisible element navigation in cypress)
 
describe('My Fifth Test Suite', function() 
{
 
it('Mouse Hover',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


cy.get('#mousehover').invoke('show')
// cy.contains('Top').click() wont work without ({ force: true })
cy.contains('Top').click({ force: true })
cy.url().should('include', 'top')



})
 
 
})