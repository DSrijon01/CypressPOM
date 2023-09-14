const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// / <reference types="Cypress" />
import {HomePage} from 'cypress\e2e\POM_PageobjectModel\HomePage.cy.js'
import {ProductPage} from 'cypress\e2e\POM_PageobjectModel\ProductPage.cy.js';
const homePage = new HomePage()
const productPage = new ProductPage()

// Visiting the Site 
Given('I open Ecommerce Page', function()
{
   cy.visit("https://rahulshettyacademy.com/angularpractice/")
})

// Scenaio 1
// Adding Items to Cart
When('I Add items to Cart', ()=>
{
    homePage.getRadioButtonStates();
    // Default timeout change for whole testsuite 
    Cypress.config('defaultCommandTimeout', 8000)
    // Continuing from Test8 click on shop tab using page object model
    homePage.getShopTab().click()

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
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element)
    {
       const actualText=element.text()
      expect(actualText.includes("Success")).to.be.true
    })

})


// Scenario 2 
// When I fill the form details adding Function
// When('I fill the form details', function()
// {
//     homePage.getEditBox().type(this.data.name)
//     homePage.getGenderSelector().select(this.data.gender)

// })
// // Then Validate the form behaviour
// Then('Validate the form behaviour', function()
// {
    
//     homePage.getTwoWayDataBinding().should('have.value',this.data.name)
//     homePage.getEditBox().should('have.attr','minlength','2')
//     homePage.getRadioButtonStates();

//     // Default timeout change for whole testsuite 
//     Cypress.config('defaultCommandTimeout', 8000)

// })
// // Then Validate the form behaviour
// Then('Select the shop page', ()=>
// {
//     homePage.getShopTab().click()

// })