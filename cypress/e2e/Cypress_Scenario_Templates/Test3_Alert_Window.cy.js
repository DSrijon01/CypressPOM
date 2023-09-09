// Alert Window Navigation      
 
describe('My Third Test Suite', function() 
{
 
it('Browser Alert Window',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Click on the Alert Button - Opens a Popup window
cy.get('#alertbtn').click()

//click confirm Opens a popup windows with ok, cancel button
cy.get('[value="Confirm"]').click()

//window:alert get the string from the window to assert. 
cy.on('window:alert',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
 
cy.on('window:confirm',(str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
 
// This wont work due to same origin policy. -------- Similar Example with same origin got executed in Test5 
// // Opening a New Tab with same url
// cy.get('#opentab').invoke('removeAttr','target').click()
// cy.wait(2000)
// // Asseriting the url is the same or not  
// cy.url().should('include','qaclickacademy')
// // go back
// // cy.go('back')
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}  )
 
 
 
}  )