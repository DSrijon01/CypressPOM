// Frame Support With Cypress - Start with (npm install -D cypress-iframe) on Terminal
/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe'

describe('My Seventh Test Suite', function() 
{
 
it('Navigating Frames',function() {
 
//Navigate to the test site
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

// Iframe navigation clicking a button inside the iframe
cy.frameLoaded('#courses-iframe')
cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.wait(2000)
cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)

})
 
 
})