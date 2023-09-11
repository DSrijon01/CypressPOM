// Test with Cypress Page Object Model
/// <reference types="Cypress" />
// Import Page Objects
import HomePage from '../POM_PageobjectModel/HomePage.cy'
import ProductPage from '../POM_PageobjectModel/ProductPage.cy'


describe('My Ninth Test Suite', function() 
{
// Fetcching Relevant Data From Fixture
    before(function() {
        // runs once before all tests in the block
        cy.fixture('profile').then(function(data)
        {
this.data=data
        })
      })



it('My Ninth Test case',function() {
 
const homePage = new HomePage()
const productPage = new ProductPage()
    cy.visit("https://rahulshettyacademy.com/angularpractice/")

// cContinuing from Test8 without locators using Page Object Model
homePage.getEditBox().type(this.data.name)
homePage.getGenderSelector().select(this.data.gender)
homePage.getTwoWayDataBinding().should('have.value',this.data.name)
homePage.getEditBox().should('have.attr','minlength','2')
homePage.getRadioButtonStates();

// Default timeout change for whole testsuite 
Cypress.config('defaultCommandTimeout', 8000)
// Continuing from Test8 click on shop tab using page object model
homePage.getShopTab().click()

this.data.productName.forEach(function(element) {
 
    cy.selectProduct(element)
  });
  productPage.checkOutButton().click()
  var sum=0

  cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


 const amount=$el.text()
 var res= amount.split(" ")
res= res[1].trim()
sum= Number(sum)+Number(res)

}).then(function()
{
    cy.log(sum)
})
cy.get('h3 strong').then(function(element)
{
    const amount=element.text()
    var res= amount.split(" ")
   var total= res[1].trim()
   expect(Number(total)).to.equal(sum)

})


  cy.contains('Checkout').click()
  cy.get('#country').type('India')
  cy.wait(6000)
  cy.get('.suggestions > ul > li > a').click()
  cy.get('#checkbox2').click({force: true})
  cy.get('input[type="submit"]').click()
  //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
  cy.get('.alert').then(function(element)
  {
     const actualText=element.text()
    expect(actualText.includes("Success")).to.be.true
  })


  






    









})
})































