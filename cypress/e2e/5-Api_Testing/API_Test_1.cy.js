// Api Test Navigation with
 
describe('My 10th Test Suite', function() 
{
 
it('Api Response Assertion',function() {

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
    cy.wait(2000)
    
 // Mocking API response
cy.intercept({

    method : 'Get',
    url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'


},
{
    statusCode : 200,
    body : [
        {
            "book_name": "RestAssured with Java",
            "isbn": "BSG",
            "aisle": "2302"
        }
    ]
    


}).as('bookretrievals')
cy.get('.btn-primary').click()
cy.wait('@bookretrievals') 
cy.get('p').should('have.text', "Oops only 1 Book available")







})
 
 
})