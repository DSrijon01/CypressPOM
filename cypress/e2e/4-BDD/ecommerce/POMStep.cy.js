/// <reference types="Cypress" />
// Cumcumber preprocessor import has issues with sub folder use the one below like structure. -- needs to get out of sub folder to match the path in this case its 2.
import HomePage from '../../POM_PageobjectModel/HomePage.cy.js'
import ProductPage from '../../POM_PageobjectModel/ProductPage.cy.js'
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// Home Page Product Page Variable Initiation
const homePage = new HomePage()
const productPage = new ProductPage()
// Decalaring Sum Variable for Scenario 2 Assertion
var sum = 0 
// Scenario Filling the form On the initial page
// Given Visiting the Site 
Given('I open ECommerce Page', function()
{
   cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

// When I fill the forms
When('I fill the form details', function()
{
    homePage.getEditBox().type(this.data.name)
    homePage.getGenderSelector().select(this.data.gender)

})

// Then Validate the form behaviour
Then('Validate the form behaviour', function()
{
    
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getRadioButtonStates();

    // Default timeout change for whole testsuite 
    Cypress.config('defaultCommandTimeout', 8000)

})
// Then Validate the form behaviour
Then('Select the shop page tab', function()
{
    homePage.getShopTab().click()
    

})


// Visiting the Site 
Given('I open Ecommerce Page', function()
{
   cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

// Scenaio 2
// Then Validate the form behaviour
Then('Open the shop Page tab', function()
{
    homePage.getShopTab().click()
    

})
// Adding Items to Cart
When('I Add items to Cart', function()
{

    this.data.productName.forEach(function(element) {
    
        cy.selectProduct(element)
    });
    productPage.checkOutButton().click()

})

// Validaitng Price
Then ('Validate the total prices', ()=>
{
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
    
})

// Verify Alert Button
Then('Select the country and verify alert text', ()=>
{
    
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.wait(6000)
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(function(element)
    {
       const actualText=element.text()
      expect(actualText.includes("Success")).to.be.true
    })

})



