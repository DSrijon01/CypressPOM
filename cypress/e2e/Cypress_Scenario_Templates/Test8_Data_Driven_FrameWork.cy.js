// Data driven testing with fixture. 
/// <reference types="Cypress" />

describe('My eighth Test Suite', function() {

    before(function() {

        // Importing Data to Navigate the test case
        cy.fixture('profile').then(function(data) {
            this.data = data; // Fixed the assignment here
        })
    })

    it('Navigating User Login', function() {

        // Navigate to the test site
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        // Navigate and Assert Login
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('select').select(this.data.gender)
        //Assertion for name
        cy.get(':nth-child(1) > .form-control').should('have.value', this.data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
        // Inline Radio Button Disbled or enabled
        cy.get('#inlineRadio1').should('be.enabled')
        cy.get('#inlineRadio2').should('be.enabled')
        cy.get('#inlineRadio3').should('be.disabled')

        //navigate to the shop menu button 
        cy.get(':nth-child(2) > .nav-link').click()

        // cy.pause()

        this.data.productName.forEach(function(element) {

            cy.selectProduct(element)

        });


    })

})