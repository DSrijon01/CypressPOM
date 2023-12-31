// Data driven testing with fixture custom commands support.
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

        // Autofill name from fixture data
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        // Assertion for name Autofill 
        cy.get(':nth-child(1) > .form-control').should('have.value', this.data.name)
        // Autofill gender from fixture data
        cy.get('select').select(this.data.gender)
        //Assertion for two way data binding
        cy.get( ':nth-child(4) > .ng-untouched').should('have.value', this.data.name) 
        // Assertion for name value. Minimum 2 characters.
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
        // Inline Radio Button Disbled or enabled Assertion
        cy.get('#inlineRadio1').should('be.enabled')
        cy.get('#inlineRadio2').should('be.enabled')
        cy.get('#inlineRadio3').should('be.disabled')
        // cy.pause()
        //navigate to the shop menu button 
        cy.get(':nth-child(2) > .nav-link').click()
        
        // Selecting a product form the shop page - Hard Coded 
        cy.get('h4.card-title').each(($el, index, $list) => {
            if($el.text().includes('Blackberry')){

                cy.get('button.btn.btn-info').eq(index).click()
        }
            
        })
        // Selecting a product form the shop page from Support --> Custom Commands (Commands.js)
        cy.selectProduct('Nokia Edge')
        // Selecting a product form the shop page from Fixture--> Support --> Custom Commands
        this.data.productName.forEach(function(element) {

            cy.selectProduct(element)

        });

        // Assertion that all 3 products got slected
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        const expectedProducts = ['Blackberry', 'Nokia Edge', 'iphone X'];
        // Iterate through the expected product names and assert them - With a Loop
        expectedProducts.forEach((product) => {
        cy.get(':nth-child(1) > .col-sm-8, :nth-child(2) > .col-sm-8, :nth-child(3) > .col-sm-8 ').should('contain.text', product);
        });

        // Assert that all three products are selected - Hard Coded
        cy.get(':nth-child(1) > .col-sm-8').should('contain.text', 'Blackberry');
        cy.get(':nth-child(2) > .col-sm-8').should('contain.text', 'Nokia Edge');
        cy.get(':nth-child(3) > .col-sm-8').should('contain.text', 'iphone X');

        // cy.pause()
        
        // Declaring Variable that will store the added up values/price
        var sum = 0 
        // Validating the total Sum/Value/Price of Products 
        cy.get('tr td:nth-child(4) > strong').each(($el, index, $list) => {
            
            // Logging the values/price from the selector that got captured 
            cy.log($el.text())
            // Captured Value/Text splitting for white space issue mitigation
            const LoggedText=$el.text()
            var result = LoggedText.split(" ")
            // Trimming the white space
            result = result[1].trim()
            // Sum of all 3 selected items without the whitespace
            sum = Number(sum) + Number(result)

        }).then(function(){
            // Logging the sum value for assertion
            cy.log(sum)
        })
        // Asserting through equalizing
        cy.get('h3 strong').then(function(element){
            // White Space trimming for the captured total value
            const Total = element.text()
            var TotalResult = Total.split(" ")
            TotalResult = TotalResult[1].trim()
            // Equaling for assertion 
            expect(Number(TotalResult)).to.equal(sum)
        })
        
        // Clicking on Checkout Button using Text Contains
        cy.contains('Checkout').click()
        // Typing into the country Selector on next checkout page
        cy.get('#country').type('India')
        cy.wait(6000)
        // Clicking on the Suggested Country
        cy.get('.suggestions > ul > li > a').click()
        // Select the Agreement Check Box
        cy.get('.checkbox > label').click()
        // Click on Purchase button 
        cy.get('.ng-untouched > .btn').click()
        // CSS Selector 
        cy.get('input[type="submit"]').click()
        // Alert Validation with extra text 
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).') -- Wont Work for Extra Text
        // Alert Validation with expect to be true
        cy.get('.alert').then(function(element){
            const actualText=element.text()
            expect(actualText.includes("Success! Thank you! Your order will be delivered in next few weeks :-).")).to.be.true

        }
        )




    })

})