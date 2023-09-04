// Automating WebApplication - All Scenarios

describe('First Tets Suite', function()
{


it('Testing Scenarios', function() 
{
// Url Navigation
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

//Clicking on Checkboxes - Checking it 
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
// Unchecking it 
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//Multiple Check boxes - tagname,input,value
cy.get('input[type="checkbox"]').check(['option1','option2','option3'])


// Selecting from dropdown Static and Dynamic dropdown

//Static Dropdown
cy.get('select').select('option2').should('have.value', 'option2')














} )


} )