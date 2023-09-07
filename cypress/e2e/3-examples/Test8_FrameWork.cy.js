// Json File data import to drive test 
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

    })

})