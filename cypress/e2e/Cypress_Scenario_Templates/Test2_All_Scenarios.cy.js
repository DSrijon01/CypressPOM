// Automating WebApplication - All Scenarios

describe('First Tets Suite', function()
{


it('Testing Scenarios Button Boxes Search', function() 
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

// Dynamic Dropdown - Suggestion Boxes
cy.get('#autocomplete').type('ind')

cy.get('.ui-menu-item div').each(($e1, index, $list) =>{

if($e1.text()==="India")
{
    $e1.click()
}

})

cy.get('#autocomplete').should('have.value', 'India')


// Handling Visible and Invisible Objects 

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')


// Radio Button Checking with custom CSS
cy.get('[value="radio2"]').check().should('be.checked')

// Switching Tabs --- Check Test4 






} )


} )