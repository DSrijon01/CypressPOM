// Navigating Child Windows with Cypress By Passing Same Origin Policy

 
describe('My sixth Test Suite', function() 
{
 
it('Child Window Navigation',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


// This works by target arrtibute removing
// Opening a New Tab with a url
cy.get('#opentab').then(function(e1){

  const url= e1.prop('href')
  cy.visit(url)
  cy.url().should('include','qaclickacademy')

})


})
 
 
})