// Api Test Navigation with
 
describe('My 11th Test Suite', function() 
{
 
it('Api Request Assertion',function() {

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

// API request MOCk 
cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req)=>

{
    req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=name"

    req.continue((res)=>
    {
        expect(res.statusCode).to.equal(403)

    })

}

).as("dummyUrl")
cy.get('.btn-primary').click()
cy.wait('@dummyUrl')




})

 
})